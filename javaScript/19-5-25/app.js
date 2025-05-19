

var loginUser = JSON.parse(localStorage.getItem("loginInUser")) || [];

if(!loginUser){

    setTimeout(() => {
        window.location.href = "login.html"
    }, 1000);

}
