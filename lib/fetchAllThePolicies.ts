import { db } from '@/utils/config/firebase';
import FetchedPolicyType from '@/utils/types/FetchedPolicyType';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React from 'react'

const fetchAllThePolicies = async () => {
    const isDev = true
    let policies: FetchedPolicyType[] = []
    try {
        const q = query(
            collection(db, `${isDev ? "orders" : "properties"}`),
            orderBy('timestamp', 'desc')
            // where("address.streetAddress", "==", "2505 Prospect St"),
            // where("pageViewCount", "==", 140)
          );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // @ts-ignore
            policies.push({id: doc.id, ...doc.data()})
            
            });

    }catch (e) {
        console.log(e)
    }
  
    return policies


  
}

export default fetchAllThePolicies