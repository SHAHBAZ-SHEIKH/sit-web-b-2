// function chaiBanan(){
//     console.log("Chai Ban rahi hai")
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const isChai = true

//             if(isChai){
//                 resolve("Chai Ban gayi")
//             }

//             else{
//                 reject("Chai nahi bani")
//             }
            
//             console.log("Chai pi lo")
            
//         },2000)

//     })
// }

// async function chaiPocess(){
//     try {
//         const result = await chaiBanan()
//         console.log('I am done too',result)
//     } catch (error) {
//         console.log('I am done too',error)
        
//     }

// }

// chaiPocess()


// myPromise.then((result)=>{
//     console.log('I am done too',result)
// })

// myPromise.catch((result)=>{
//     console.log('I am done too',result)
// })

// console.log("mai chal raha ho")
// console.log("mai agian Chal raha ho")


// console.log("I am Start")


// setTimeout(()=>{
//     console.log("I am in settimeout")
// },0)

// console.log("End hogyaa khel")


const getProduct = async()=>{
    const container = document.querySelector(".container")
    try {
        const response = await fetch("https://fakestoreapi.com/products/")

    const result = await response.json()

    console.log("Result",result)

    result.forEach((item)=>{
        container.innerHTML +=   `<div>
            <img width="200px" src="${item.image}" alt="">
        </div>
        <div>
            <h4>${item.title}</h4>
            <h5>${item.price}</h5>
        </div>`
    })

    

    } catch (error) {
        console.log("Error",error)
        
    }
}


getProduct()