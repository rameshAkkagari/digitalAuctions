import { redirect } from "react-router-dom";

export function getAuthToken () {
    const token = localStorage.getItem("token")
    return token;
}

export function tokenLoader(){
    return getAuthToken()
}

export function checkAuthLoader(){
    const token = getAuthToken()

    if(!token){
        return redirect('/signup')
    }
}


export function trueToken(){
    const token = getAuthToken()

    if(token){
        return redirect("/dashboard")
    } else{
        return redirect("/sign")
    }
}