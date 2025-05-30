

var loginUser = JSON.parse(localStorage.getItem("loginInUser")) 
console.log("loginUser=====>",loginUser)

if(!loginUser){

    setTimeout(() => {
        window.location.href = "login.html"
    }, 1000);

}

var allPost = JSON.parse(localStorage.getItem("allPost")) || []

console.log(allPost)

var userImage = document.getElementById("userImage")
var username = document.getElementById("username")


function displayPost(){
    var postCreate = document.getElementById('postCreate')
    postCreate.innerHTML = ''

    allPost.forEach((item)=>{
        console.log(item)
         postCreate.innerHTML +=`
          <div class="post">
            <p>${item.postValue}</p>
            <img id="userPostIamge" src=${item.postImage} alt="">
        </div>
        
        // `
    })
}



document.getElementById("postCreate").addEventListener("click",function(){
    console.log("test")
    var postValue = document.getElementById("postValue").value
    var postImage = document.getElementById("postImage").value

    if(!postValue.trim() || !postImage.trim()){
        alert("all Field Are Required")
        return
    }

    var post = {
        postValue:postValue,
        postImage:postImage,
        author:loginUser.username,
        date : new Date().toLocaleString()
    }

    allPost.unshift(post)

    localStorage.setItem("allPost",JSON.stringify(allPost))

    setTimeout(()=>{
        alert("post Craeted Successfully")
    },1000)

    displayPost()



    
})

userImage.src = loginUser.profilePicture
username.innerText = loginUser.username
displayPost()


