import { createContext, useContext, useState, useEffect } from "react";
import { supabaseClient } from "../plugins/supabase";
import { useNavigate, useLocation } from "react-router-dom";
import { UserAppMetadata } from "@supabase/supabase-js";

const AuthContext = createContext({});
export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    
     const [user, setUser] = useState<UserAppMetadata | undefined>(undefined);
     const navigate = useNavigate();
     const location = useLocation()

    async function signInWithOAuth() {
        try {
            const { data, error } = await supabaseClient.auth.signInWithOAuth({
                provider: 'google'
            })
            if (error) throw new Error("Something failed when signing in")
            console.log(data);
            return data
        } catch (error) {
            console.log(error);
        }
    }

    async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw new Error("Something failed when signing out")
    else setUser(undefined)
    }

    useEffect(() => {
        const { data:authListener } = supabaseClient.auth.onAuthStateChange(async (_event, session) => {
            if (session == null) {
                location.pathname !== '/' ? navigate("/login",{replace: true}) : null
            } else {
                setUser(session?.user.user_metadata)
            }
        });

        return () => {
            authListener.subscription
        }
    },[])
    return (
        <AuthContext.Provider value={{signInWithOAuth, signOut, user}}>
            { children }
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}