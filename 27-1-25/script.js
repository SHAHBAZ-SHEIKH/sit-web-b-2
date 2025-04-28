// console.log(window)

// //window.alert("Hello")
// console.log(window.document)

// var name = document.getElementById("name")
// console.log(name)

// const mynName = document.getElementById("name")
// mynName.innerText= "Azhar"

//const myName = document.getElementsByClassName("name")
//Return HTMLCollection in the form of an array
//console.log(myName)

//var arr = ["Shahbaz", "Ahmed", "Ali"]



// for(var i=0; i<myName.length; i++){
//     console.log(myName[i])
// }

// const myName = document.getElementsByTagName("p")
// console.log(myName[3].style.color="blue")


// const idName = document.querySelector("#results")

// console.log(idName)


// const allChildren = idName.childNodes

// console.log(allChildren)
// const firstChild = idName.children
// console.log(firstChild)

// console.log(idName.firstChild)
// console.log(idName.lastChild)
// console.log(idName.firstElementChild)
//console.log(name)
const mydiv = document.createElement("div")
console.log(mydiv)

console.log(mydiv.appendChild(document.createElement("li")))

// const name = document.querySelector("#result")
// name.appendChild(document.createElement("li"))
// console.log(name)


var count = document.getElementById("count")
console.log(count)

function increamentHandler(){
    count.innerText++;
}

function submithandler(){
    var inputValue = document.getElementById("inputValue")
    console.log(inputValue.value)
    inputValue.value =""
}

