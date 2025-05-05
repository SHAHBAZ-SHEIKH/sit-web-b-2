

// function toss(){
//     console.log("we are here in Melbrourne and Today match is between pakistan and Australia");

//     var toss = Math.round(Math.random())

//     console.log("Tossing a coin..." + toss);

//     if(toss ==0){
//         console.log("Pakistan won the toss and chose to bat first");
//        var pakScore =  innings("Pakistan")
//        var ausScore = innings("Australia", pakScore)
//     }
//     else{
//         console.log("Australia won the toss and chose to bat first");
//         var ausScore = innings("Australia")
//         var pakScore = innings("Pakistan", ausScore)
//     }

// }

// toss()


// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }
  
  
// function innings(team,target){
//     console.log("Innings Started For  "+ team)
//     var score = 0
//     var wickets = 0
//     var overs = 3
//     overLoop:for(var i=0; i<overs; i++){
//         console.log("Over " + (i+1) + " started")
//         for(var j=1; j<=6; j++){
//             console.log("Balls #" + i + "." + j + " Bowled")
//             var run = Math.round(Math.random()*6)
//             if(run === 0){
//                 console.log("What a ball! It's a Wicket!")

//                 wickets++;

//                 if(wickets ===2){
//                     if(target !== undefined && target > score){
//                         console.log(team + " Has not Chase the target Successfully")
//                         console.log(team + " has lost the match by " + (target - score) + " runs")
                        
//                     }
//                     else if(score === target){
//                         console.log("Match Tie! " + team + " scored " + score + "/ " +  wickets)
//                     }
//                     else{
//                         console.log(team + "  has Provided the target " + score)
//                     }
//                     console.log("All Out!" + team + " scored " + score + "/ " +  wickets)
//                     break overLoop;
//                 }
//             }
//             else{
//                 score +=run
//                 console.log("Runs Scored: " + run)
//                 if(target !== undefined && score > target){
//                     console.log(team + "  won the macth by  " + (2 -wickets) + " wickets")
//                     break overLoop;

//                 }
//             }
//             sleep(2000)
//         }
//         console.log(team + " scored " + score + "/ " +  wickets)
//         sleep(4000)

//     }

//     // over Complted or all not out

//     if(target !==undefined){
//         if(score < target && wickets < 2){
//             console.log(team + "  has lost the match by " + (target - score) + " runs")
//         }
//         else if(score === target){
//             console.log("Match Tie! " + team + " scored " + score + "/ " +  wickets)
//         }
//     }
//     else{
//         console.log(team + "  has Provided the target " + score)
//     }
//     return score
//     // console.log(team + " scored " + score + "/ " +  wickets)

// }



// function digitalClock(){
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     var ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     var time = document.getElementById("time")
//     var clock = hours + ":" + minutes + ":" + seconds + " " + ampm;
//     time.innerHTML = clock
// }

// setInterval(digitalClock, 1000)

//var date = new Date();
// var daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var daysNumber = date.getDay()
// console.log(daysName[daysNumber])
// var monthsNumber = date.getMonth()
// console.log(monthsName[monthsNumber])


// var score = [120,30,50,80,60]

// console.log(score.sort((a,b)=>(a-b)))
// console.log(score.sort((a,b)=>(b-a)))



function toss(){
    console.log("we are here in Melbrourne and Today match is between pakistan and Australia");

    var toss = Math.round(Math.random())


    if(toss ==0){
        console.log("Pakistan won the Toss and choose to bat first")
        var pakScore = innings("Pakistan")
        var ausScore = innings("Australia", pakScore)
    }

    else{
        console.log("Australia won the Toss and choose to bat first")
        var ausScore = innings("Australia")
        var pakScore = innings("Pakistan", ausScore)
    }
}

toss()


function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
      
      



function innings(team,target){
    console.log(team + " Innings Started")

    var score=0;
    var wickets=0;
    var overs = 3

    overLoop:for(var i=0; i<overs; i++){
        console.log("Over " + (i+1) + " started")

        for(var j=1; j<=6; j++){
            console.log("Balls #" + i + "." + j + " Bowled")
            var run = Math.round(Math.random()*6)
            if(run === 0){
                console.log("What a ball! It's a Wicket!")
                wickets++;

                if(wickets ===3){
                    if(target !==undefined && target >score){
                        console.log(team + " Has not Chase the target Successfully")
                        console.log(team + " has lost the match by " + (target - score) + " runs")
                    }

                    else if(target === score){
                        console.log("Match Tie! " + team + " scored " + score + "/ " +  wickets)
                    }
                    else{
                        console.log(team + "  has Provided the target " + score)
                    }
                    console.log("All Out!" + team + " scored " + score + "/ " +  wickets)
                    break overLoop;
                }
                
            }
            else{

                console.log("Runs Scored: " + run)
                score +=run

                if(target !==undefined && score > target){
                    console.log(team + "  won the macth by  " + (2 -wickets) + " wickets")
                    break overLoop;
                }
            }

            sleep(2000)
        }

        sleep(4000)

        console.log(team + " scored " + score + "/ " +  wickets)
        console.log("=============================>")
    }

    if(target !==undefined){
        if(score < target && wickets <= 3){
            console.log(team + "  has lost the match by " + (target - score) + " runs")
        }
        else if(score === target){
            console.log("Match Tie! " + team + " scored " + score + "/ " +  wickets)
        }
    }
    else{
        console.log(team + "  has Provided the target " + score)
    }

    return score
}

