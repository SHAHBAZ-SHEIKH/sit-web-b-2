

// function imageSwap(event){
    
//     console.log(event)
//     if(event.type == "mouseover"){
//         event.target.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
//         count=1

//     }

//     else{
//         event.target.src = "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
//         count=0
//     }
    
// }


// var p = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// console.log(p.slice(0,50) + "....")


// var text = document.getElementById("text")

// text.innerHTML = p.slice(0,50) + "..."

// function expand(){
//     text.innerHTML = p
//     text.style.backgroundColor = "red"
// }


// function fillCity(){
//     var number = document.getElementById("number").value
//     var city = document.getElementById("city")
    
//     switch(number){

//         case "1":
//             city.value = "karachi"
//             break
        
//         case "2":
//             city.value="Lahore"
//             break

//         case "3":
//             city.value="Islamabad"
//             break
//         default:
//             city.value="No City"
//             break

//     }
// }


function validateNumber(event){
    //console.log(event)
    var list = document.getElementById("list")
    var elem = ''
    if(event.keyCode == 13){
        elem = event.target.value
        list.innerHTML += `<li>${elem}</li>`
    }

    if(["hi" ,"hello","kiya haal hai"].indexOf(elem) != -1){
        setTimeout(() => {
            list.innerHTML += `<li>Mai aap ki kiya help kr sakta ho</li>`
        },2000)
    }

    else if(["Chatgpt use krty ho","Ai use krty ho","Kiya grov use kiya hai "].indexOf(elem) != -1){
        setTimeout(() => {
            list.innerHTML += `<li>Woow Bro ! Yes as a Developer wo mery zindagi hai</li>`
        },2000)
    }
}
