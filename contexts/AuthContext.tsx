'use client'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    User,
    signOut,
    updateProfile,
    getAuth,
    sendEmailVerification,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import {
    getDocs,
    query,
    where,
    collection,
    doc,
    updateDoc,
    setDoc,
  } from "firebase/firestore";
  import { useRouter } from "next/navigation";
  import nookies from "nookies";
  import { createContext, useEffect, useState, useContext } from "react";
  import { auth, db } from "@/utils/config/firebase";
  import isObjectEmpty from "@/utils/helpers/isObjectEmpty";
  import { UserType } from "@/utils/types";
  
  interface AuthContextType {
    user: User | null;
    userFromFirebase: UserType | null;
    signIn: (email: string, password: string, callback: string) => void;
    signUp: (
      email: string,
      password: string,
      NameSurname: string,
      phoneNo: string
    ) => void;
    logout: () => void;
    sendResetPasswordMail: (email: string) => void;
    loading: boolean;
    errors: { errorCode?: string; errorMessage?: string };
  
  }
  
  const AuthContext = createContext<AuthContextType>({
    user: null,
    signIn: () => null,
    signUp: () => null,
    logout: () => null,
    loading: true,
    userFromFirebase: null,
    errors: {},
    sendResetPasswordMail: () => null
  });
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };
  
  export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);
    const [userFromFirebase, setUserFromFirebase] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [isPassowrdResetEmailSent, setIsPasswordResetEmailSent] = useState<undefined | boolean>()
    const router = useRouter();
  
    const signUp = async (
      email: string,
      password: string,
      NameSurname: string,
      phoneNo: string
    ) => {
      try {
        const userCreatesReponse = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // updating the user's name on the authentication module of the firebase
        await updateProfile(userCreatesReponse.user, {
          displayName: NameSurname,
        });
        // adding the user to the firestore
        const userRef = doc(db, `users/${userCreatesReponse.user.uid}`);
        const response = await setDoc(userRef, {
          email: email,
          emailVarified: userCreatesReponse.user?.emailVerified ?? null,
          isAnonymous: false,
          photoURL: null,
          providerData: userCreatesReponse.user?.providerData ?? null,
          providerId: userCreatesReponse.user?.providerId ?? null,
          uid: userCreatesReponse.user?.uid ?? null,
          displayName: NameSurname,
          phoneNo,
          isPhoneNoVarified: false,
        });
        await sendVarificationEmail();
      } catch (err) {
        console.error("error from registering", err);
      }
    };
  
    const signIn = (email: string, password: string, callbackURL: string) => {
      console.log('sign in called: ')
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          router.push(callbackURL);
          setErrors({});
          setLoading(false)
        })
        .catch((error) => {
          console.log("failed to sign in : error: ", error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors({ errorCode, errorMessage });
          setLoading(false)
        });
        setLoading(false)
    };
  
    const sendVarificationEmail = () => {
      const auth = getAuth();
      sendEmailVerification(auth.currentUser as User)
        .then((args) => {
          console.log("the varification email sent: args: ", args);
        })
        .catch((err) => {
          console.log("the varification email failed, error: ", err);
        });
    };
  
    const sendResetPasswordEmail = (email: string) => {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    };
  
    const fetchUserFromFirestore = async () => {
      const q = query(
        collection(db, "users"),
  
        where("email", "==", user?.email)
        // where("pageViewCount", "==", 140)
      );
  
      const querySnapshot = await getDocs(q);
  
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // @ts-ignore
      setUserFromFirebase(data[0] as User);
    };
  
    // update the firestore document if the user's email is varified
  
    const updateEmailIsVarifiedField = async (user: User) => {
      try {
        if (user.emailVerified) {
          const userRef = doc(db, `users/${user.uid}`);
          const response = await updateDoc(userRef, {
            emailVarified: true,
          });
        }
      } catch (err) {
        console.error("unsuccessfull emailVarification erorr: ", err);
      }
    };
  
  
    const sendResetPasswordMail = (email: string) => {
      setLoading(true)
      sendPasswordResetEmail(auth, email)
      .then(() => {
      // Password reset email sent!
      // ..
      console.log('Password reset email sent! ')
      setLoading(false)
      setIsPasswordResetEmailSent(true)
      return 
    })
    .catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false)
      // ..
    });
    }
  
    useEffect(() => {
      console.log("AuthContext Errors: ", errors);
    }, [errors]);
  
    useEffect(() => {
      // console.log("user is : ", user);
      if (user && !isObjectEmpty(user)) {
        fetchUserFromFirestore();
      }
    }, [user]);
  
    // useEffect(() => {
    //   console.log("userFromFirebase", userFromFirebase);
    // }, [userFromFirebase]);
    // TODO: remove nookie token on logout
  
    const logout = async () => {
      setLoading(true);
      setUser(null);
      setLoading(false);
      await signOut(auth);
    };
  
    // listen for token changes
    // call setUser and write new token as a cookie
    useEffect(() => {
      return auth.onIdTokenChanged(async (user) => {
        if (!user) {
          setUser(null);
          setLoading(false);
          nookies.set(undefined, "token", "", { path: "/" });
        } else {
          const token = await user.getIdToken();
          setUser(user);
          nookies.set(undefined, "token", token, { path: "/" });
          updateEmailIsVarifiedField(user);
        }
        setLoading(false);
      });
    }, []);
    useEffect(() => {}, [user]);
  
    // force refresh the token every 10 minutes
    useEffect(() => {
      const handle = setInterval(async () => {
        const user = auth.currentUser;
        if (user) await user.getIdToken(true);
      }, 10 * 60 * 1000);
  
      // clean up setInterval
      return () => clearInterval(handle);
    }, []);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          signIn,
          signUp,
          logout,
          loading,
          userFromFirebase,
          errors,
          sendResetPasswordMail
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  