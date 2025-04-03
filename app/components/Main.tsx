"use client"
import { signIn, useSession , signOut } from "next-auth/react";
export function Main(){
    const session = useSession();
    return <div>
        <div className="flex justify-between">
            <div>
                Muzik
            </div>
            <div>
                {session.data?.user &&  <button className="m-2 p-2 cursor-pointer bg-blue-600" onClick={() => signOut()}>logout</button>}
                {!session.data?.user &&  <button className="m-2 p-2 cursor-pointer bg-blue-600" onClick={() => signIn()}>Signin</button>}
            </div>
        </div>
    </div>  
}