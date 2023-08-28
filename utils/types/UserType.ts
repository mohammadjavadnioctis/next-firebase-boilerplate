import { User } from "firebase/auth";

interface UserType extends User {
    isAdmin?: boolean
}

export default UserType