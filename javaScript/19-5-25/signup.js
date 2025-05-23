

// function setNumber(num){
//     var input = document.getElementById("input");
//     // console.log(num);
//     var lastValue = input.value.slice(input.value.length - 1);
//     console.log(lastValue);





    
//     var operator = ['+', '-', '*', '/'];
//     if(operator.indexOf(lastValue) !== -1 && operator.indexOf(num) !== -1){
//         input.value = input.value.slice(0,-1) + num

//     }
//     else{
//         input.value += num;
//     }
    
// }


// function getResultHandler(){
//     var input = document.getElementById("input");
//     var result = eval(input.value)
//     console.log(result);
//     input.value = result;
    
// }


// function deleteHandler(){
//     var input = document.getElementById("input");
//     input.value = input.value.slice(0,-1);
//     console.log(input.value);
// }


// var name  = "calculator";
// console.log(name.slice(0,-1))

document.getElementById("signup").addEventListener("submit",function(e){
    e.preventDefault();
    console.log("Form submitted");
    var name = document.getElementById("userName").value
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    var confirmPassword = document.getElementById("userConfirm").value
    const profilePicture = document.getElementById("profilePicture").files[0]
     console.log("profilePicture==>",profilePicture)

    console.log(name, email, password, confirmPassword);

    var users = JSON.parse(localStorage.getItem("uservalue")) || [];

    var emailExsts = users.find(function(user){
        return user.email === email;
    })

    console.log(emailExsts);
    if(emailExsts){
        alert("Email already exists");
        return;
    }



    if(!name || !email || !password || !confirmPassword){
        alert("Please fill all the fields");
        return;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters long");
        return;
    }

    if(password !==confirmPassword){
        alert("Password and confirm password do not match");
        return;
    }

    // var user = {
    //     name: name,
    //     email: email,
    //     password: password
    // }

    const reader = new FileReader();
  reader.onload = function(e) {
      const imageUrl = e.target.result;

      users.push({
          username: name,
          password: password,
          email: email,
          profilePicture: imageUrl,
          
      });

      localStorage.setItem("uservalue", JSON.stringify(users));
      alert("Sgnup Successfuly")

      setTimeout(() => {
          window.location.href = "login.html";
      }, 2000);
  }

  reader.readAsDataURL(profilePicture);
    


})
