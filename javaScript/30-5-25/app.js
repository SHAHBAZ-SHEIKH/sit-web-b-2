

// console.log("hello")
// alert("Shahbaz")

// for(var i=0; i<5; i++){
//     console.log(i)
// }


// console.log("End")


// console.log("1: Put clothes in washing machine");

// setTimeout(() => {
//   console.log("2: Clothes washed");
// }, 5000);

// console.log("3: Start cooking");
// console.log("4: Serve food");


// const foodOrder = new Promise((resolve,reject)=>{
//     var food = "Biryani"

//     if(food=="Chicken"){
//         resolve("Haa Biryani Mil gaye")
//     }
//     else{
//         reject("Biryani nahi mily")
//     }
    
// })


// foodOrder
// .then((data)=>{
//     console.log("haa data aa gya",data)
// })
// .catch((err)=>{
//     console.log("errro====>",err)
// })




async function fetchProfile(){

    var userName = document.getElementById("userName").value
    var profile = document.getElementById("profile")

    try {
        var data = await fetch(`https://api.github.com/users/${userName}`)
    
         var result = await data.json()

         profile.innerHTML = `
         <div class="card" style="width: 18rem;">
  <img src=${result.avatar_url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.name}</h5>
    <p class="card-text">${result.bio}</p>
    <a target="_blank" href=${result.html_url} class="btn btn-primary">Go profile</a>
  </div>
</div>
         
         `


         console.log("result====>",result)
        
    } catch (error) {
        console.log("error",error)
        
    }

    
    


}

