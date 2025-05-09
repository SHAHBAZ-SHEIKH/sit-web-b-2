// console.log(window.document.body)

// var boxes = document.getElementsByClassName("box")
// console.log(boxes)

// for(var i=0; i<boxes.length; i++){
//     boxes[i].style.backgroundColor = "red"
//     boxes[i].style.width = "400px"
// }



// var boxes = document.querySelector("#heading")
// console.log(boxes)

// boxes.addEventListener("click",function(){
//     boxes.setAttribute("class","box1")
// })
// var link = document.querySelector("#link")

// link.addEventListener("click",function(){
//     var href = link.getAttribute("href")
//     console.log(href)
    
// })

// function changeColor(){
//     console.log("Button clicked")
//     var boxes = document.getElementsByTagName("h1")
//     console.log(boxes)
//     // for(var i=0; i<boxes.length; i++){
//     //     boxes[i].style.display = "inline-block"
//     //     boxes[i].style.justifyContent = "center"
//     //     boxes[i].style.alignItems = "center"
//     //     boxes[i].style.backgroundColor = "red"
//     //     boxes[i].style.width = "200px"
//     //     boxes[i].style.height = "200px"
//     // }

// }


// var myBTn = document.getElementById("myBtn")

// myBTn.addEventListener("click", changeColor)

function createElement(){
    var parent = document.getElementById("parent")
    var child = document.createElement("div")
    child.innerHTML = "This is a new div"
    parent.appendChild(child)


}

document.getElementById("getParent").addEventListener("click",createElement)

