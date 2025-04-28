// function calculateBMI(){
//     console.log("Mai Chal raha ho")
//     var height = document.getElementById("height").value
//     var weight = document.getElementById("weight").value

//     var bmiValue = document.getElementById("bmi")

//     console.log("height==>",height)
//     console.log("weight====>",weight)

//     var bmi = weight/(height*height)

//     if(height === "" || weight ===""){
//         bmiValue.innerHTML = "Please Enter Height and Weight"
//         return 


//     }

//     console.log("bmi==>",bmi)
//     if(bmi<18.5){
//         bmiValue.innerHTML = "Under Weight"
//         console.log("Under Weight")
//     }

//     else if(bmi >18.5 && bmi<25){
//         bmiValue.innerHTML = "Normal"
//         console.log("you are normal")

//     }

//     else if(bmi>25 && bmi<39.9){
//         bmiValue.innerHTML = "Over Weight"
//         console.log("over Weight")
//     }
//     else{
//         bmiValue.innerHTML = "Obese"
//         console.log("obese")
//     }

//     document.getElementById("height").value = ""
//     document.getElementById("weight").value = ""

// }


//Array

//var userName = ["Shahbaz","Virat","Babar","Rizwan",1233,true,null]


// userName.push("Sarfaraz","Rizwan")
// userName.pop()
// userName.pop()

// userName.shift()
// userName.unshift("Faiq")

// userName.splice(1,0,"Naseem")

// console.log(userName.indexOf("Rizwan"))




// var userName2 = userName.slice(2,6)

// console.log(userName2)

// console.log(userName)



// var num = Number(prompt("Enter a table Numer"))
// for(var i=1; i<=15; i++){
//     document.write(num + "*" + i + "=" + num*i + "<br>")
// }


//var cityName = ["karachi","Lahore","Multan","Peshawar","Islamabad","Quetta"]
// var userCityName = prompt("Enter Your City Name")
// var isTure = false

// for(var i=0; i<cityName.length; i++){
    
//     if(cityName[i]==userCityName){
//         isTure=true
//         console.log("City Found",i)
//         break
//     }
    
// }

// if(isTure==false){
//     console.log("City Not Found")
// }


var myName = "Shahbaz"
var myReverseName = ""

for(var i=myName.length -1; i>=0; i--){
    myReverseName =myReverseName + myName[i]


    
    console.log(myName[i])
}

console.log(myReverseName)



