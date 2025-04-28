//var eiddate = new Date("june 6,2025");
//var nowDate = new Date()

//var diffMilli = eiddate.getTime() - nowDate.getTime();
//console.log(diffMilli)
//console.log(Math.floor(diffMilli / (1000 * 60 * 60 * 24 *30)))

//console.log(diffMilli /(1000 * 60 * 60 * 24 * 30))
// var month = Math.floor(diffMilli / (1000 * 60 * 60 * 24 * 30))
// var day = Math.floor((diffMilli % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
// var hour = Math.floor((diffMilli % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
// var min = Math.floor((diffMilli % (1000 * 60 * 60)) / (1000 * 60))
// var sec = Math.floor((diffMilli % (1000 * 60)) / 1000)

// console.log("Months",month)
// console.log("day",day)
// console.log("Hour",hour)
// console.log("Min",min)
// console.log("Sec",sec)

// document.getElementById("month").innerText="Month" + ":"+ month
// document.getElementById("day").innerText ="Days" + ":" + day
// document.getElementById("hour").innerText="Hours" + ":" + hour
// document.getElementById("min").innerText="Min" + ":" + min
// document.getElementById("sec").innerText="Sec" + ":" + sec


function eidDate(){

    var eiddate = new Date("june 6,2025");
var nowDate = new Date()

var diffMilli = eiddate.getTime() - nowDate.getTime();
//console.log(diffMilli)
//console.log(Math.floor(diffMilli / (1000 * 60 * 60 * 24 *30)))

//console.log(diffMilli /(1000 * 60 * 60 * 24 * 30))

if(diffMilli <0){
    document.getElementById("main").innerText="Eid has passed"
    clearInterval(eidDate)
    return
}
var month = Math.floor(diffMilli / (1000 * 60 * 60 * 24 * 30))
var day = Math.floor((diffMilli % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
var hour = Math.floor((diffMilli % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
var min = Math.floor((diffMilli % (1000 * 60 * 60)) / (1000 * 60))
var sec = Math.floor((diffMilli % (1000 * 60)) / 1000)

// console.log("Months",month)
// console.log("day",day)
// console.log("Hour",hour)
// console.log("Min",min)
// console.log("Sec",sec)

document.getElementById("month").innerText="Month" + ":"+ month
document.getElementById("day").innerText ="Days" + ":" + day
document.getElementById("hour").innerText="Hours" + ":" + hour
document.getElementById("min").innerText="Min" + ":" + min
document.getElementById("sec").innerText="Sec" + ":" + sec

}

// setTimeout(function(){
//     console.log("After 2 sec")

// },2000)


setInterval(eidDate,1000)