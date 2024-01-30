/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Button, Link } from "@nextui-org/react"
import { useState, useMemo } from "react"
// import { signInWithOAuth, signInWithEmail } from "../plugins/supabase";
import { UserAuth } from "../context/AuthContext";
import { UserAppMetadata } from "@supabase/supabase-js";

export default function Login() {

    const { user }:UserAppMetadata = UserAuth();
    const { signInWithOAuth }:any = UserAuth();
    const { signOut }:any = UserAuth();

    return (
        <div>
            <h1 className="text-3xl">LOGIN</h1>
            <form className="mt-5 flex flex-col center items-center">
                <div className="flex items-center gap-3 mt-3">
                    <span>Iniciar sesión con tu cuenta de google</span>
                    <Button size="sm" onClick={signInWithOAuth} color="secondary">
                        GOOGLE
                    </Button>
                </div>
                {
                    user !== undefined ? (
                        <Button  onClick={signOut} className="mt-3 w-72" size="lg" color="primary">
                            CERRAR SESIÓN
                        </Button>
                    ) : (
                        null
                    )
                }
            </form>
        </div>
    )
}

