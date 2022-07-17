// Only in this file we setup Zustand
// This whole code can be found at zustand website as is

import create from "zustand";
import {persist} from 'zustand/middleware';
import axios from "axios";

// 3.Fetching user
import { BASE_URL } from "../utils";

// 1. authStore will have an instand return so we wrap the thing ({})
const authStore = (set:any) => ({
    userProfile:null,

    // 5.
    allUsers:{},

// 2.Create method addUser set to a function
    addUser:(user:any) => set({userProfile:user}),
    removeUser: () => set({userProfile:null}),

    // 4. Creating a new end point to fetch all users from sanity
    fetchAllUsers : async() => {
        const response = await axios.get(`${BASE_URL}/api/users`);
    
    // 5.We use the response from users.ts
    set({allUsers: response.data})
        
    }



});

const useAuthStore = create(
    persist(authStore,{
        name:'auth'
    })
)

export default useAuthStore;