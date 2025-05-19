

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

    console.log(name, email, password, confirmPassword);

    var users = JSON.parse(localStorage.getItem("users")) || [];

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

    var user = {
        name: name,
        email: email,
        password: password
    }

    users.push(user);

    localStorage.setItem("users",JSON.stringify(users));
    alert('User signed up successfully!');
    


})
