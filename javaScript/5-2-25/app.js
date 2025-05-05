

// function generateColor(){
//     var color = document.getElementById("color")
//     var hexCode = ""
//     var colorArray = ['0',"1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
//     for(var i=0; i<6 ; i++){
//         var randomNumber = Math.floor(Math.random() *colorArray.length);
//         console.log(randomNumber)
//         hexCode = hexCode + colorArray[randomNumber]
//     }
//     console.log(hexCode)
    
//     document.body.style.backgroundColor = "#" + hexCode
//     color.innerHTML = "Background Color:" + "#" + hexCode
// }


// function generateRandomNumber(){
//     var randomNumber = Math.ceil(Math.random() * 10)
//     return randomNumber
// }

// var randomNumber = generateRandomNumber()
// console.log(randomNumber)


// function generateNumber(){
//     var userNumber = document.getElementById("number").value

//     console.log("userNumber",userNumber)


// }


function checkuser(userNO){
    var userRolNO = [22,344,21,98]
    if(userRolNO.indexOf(userNO) !== -1){
        return "Aya tha";
    }
    else{
        return "Nahi aya tha";
    }
}


// var name = "shahabz"

// console.log(name.indexOf("h"))


console.log(checkuser(35))
console.log(checkuser(22))