class SessionProvider{
    SetEmail(value) {
        sessionStorage.setItem("email",value)
     }
     GetEmail() {
        return  sessionStorage.getItem("email")
     }
 
     SetOTP(value) {
         sessionStorage.setItem("otp",value)
     }
     GetOTP() {
         return  sessionStorage.getItem("otp")
     }

}