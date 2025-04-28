var userPassword = prompt("Enter Your Password");

if(userPassword.length<6){
    alert("Password Lenght should be atlaest 7 character long")
}

else if(userPassword[0]>="0" && userPassword[0]<="9"){
    alert("password cannot start with number")
}

else{

    var hasLetter = false
    var hasNumber = false

    for(var i=0; i<userPassword.length; i++){
        if((userPassword[i] >="a" && userPassword[i]<="z") || (userPassword[i]>="A"  && userPassword[i] <="Z")){
            hasLetter=true
        }
        if(userPassword[i] >="0" && userPassword[i]<="9"){
            hasNumber= true

        }

        
    }

    if(!hasLetter || !hasNumber){
        alert("Password should be Include number and Character")

    }
    else{
        alert("Valid Password")
    }

}

