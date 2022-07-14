// Only in this file we setup Zustand
// This whole code can be found at zustand website as is

import create from "zustand";
import {persist} from 'zustand/middleware';
import axios from "axios";

// 1. authStore will have an instand return so we wrap the thing ({})
const authStore = (set:any) => ({
    userProfile:null,
// 2.Create method addUser set to a function
    addUser:(user:any) => set({userProfile:user})
});

const useAuthStore = create(
    persist(authStore,{
        name:'auth'
    })
)

export default useAuthStore;