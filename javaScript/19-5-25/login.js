
var users = JSON.parse(localStorage.getItem("uservalue")) 

document.getElementById("loginHandler").addEventListener("submit",function(e){
    e.preventDefault()

    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value

    
    var userget = users.find((item)=>{
        return item.email == email && item.password == password
    })
    if(userget){
        alert("Login Success")
       setTimeout(() => {

        localStorage.setItem("loginInUser", JSON.stringify(userget))
            window.location.href = "index.html"
        }, 2000);
    }
    else{
        alert("Invalid Credentials")
    }



})