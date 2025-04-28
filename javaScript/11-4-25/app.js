// function sum(){
//     var a= 5;
//     var b=10;
//     var c= a+b;
//     console.log(c);
// }
// sum()
// sum()

// function userName(name="Rahul",eduction="BCA"){
//     console.log("Hello "+ name + " your education is "+ eduction);

// }

// userName("Shahbaz","CS")



// var globalName = "Shahbaz"

// function userName(){
//     var localName = "Rehman"
//     console.log("Hello"+ globalName)
//     console.log("Hello"+ localName)
//     return "Rehman"


// }

//console.log(userName())//Rehman

//console.log(localName)

// function longWord(str){
//     var words = str.split(" ");
//     var longestWord = words[0];
//     for(var i=0; i<words.length; i++){
//         if(words[i].length > longestWord.length){
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// console.log(longWord("Developer web "))//Developer


// var userName = "Shahbaz Ahmed"
// console.log(userName.split(" "))



function toss() {
    var team1 = "Pakistan"
    var team2 = "India"

    console.log("Today we are here in Sri Lanka for the Final Match of World Cup 2023! Let's Start the Toss...\n")
    var toss = Math.round(Math.random())
    sleep(2000)

    if (toss == 0) {
        console.log("Pakistan won the toss and elected to bat first.\n")
        var pakScore = innings(team1)
        console.log("***********************\n")
        sleep(2000)
        console.log("Now it's time for India to chase the target of " + (pakScore + 1) + " runs.\n")
        innings(team2, pakScore)
    } else {
        console.log("India won the toss and elected to bat first.\n")
        var indScore = innings(team2)
        console.log("***********************\n")
        sleep(2000)
        console.log("Now it's time for Pakistan to chase the target of " + (indScore + 1) + " runs.\n")
        innings(team1, indScore)
    }
}

function innings(team, target) {
    console.log(team + " is going to bat now.\n")

    var score = 0
    var wickets = 0
    var overs = 3

    overLoop: for (var i = 0; i < overs; i++) {
        console.log("Over " + (i + 1) + " is starting\n")

        for (var j = 1; j <= 6; j++) {
            console.log("Ball " + i + "." + j + " is bowled.")
            var run = Math.floor(Math.random() * 7)

            if (run == 0) {
                console.log("Middle Stump! What a Wicket!")
                wickets++

                if (wickets === 3) {
                    console.log("**************")
                    console.log("All Out!")
                    console.log("**************\n")

                    if (target !== undefined) {
                        if (score < target) {
                            console.log(team + " got all out on " + score + ".")
                            console.log(team + " lost the match by " + (target - score) + " runs.\n")
                        } else if (score === target) {
                            console.log("Match has been Tied!\n")
                        }
                    } else {
                        console.log(team + " has provided a target of " + (score + 1) + " runs.\n")
                    }
                    break overLoop
                }
            } else {
                console.log("Runs Scored: " + run)
                score += run

                if (target !== undefined && score > target) {
                    console.log(team + " chased the target successfully!")
                    console.log(team + " won the match by " + (3 - wickets) + " wickets.\n")
                    break overLoop
                }
            }

            sleep(2000)
        }

        console.log(team + " Score: " + score + " / " + wickets)
        console.log("=======================\n")
        sleep(3000)
    }

    // If all overs done or not all out
    if (target !== undefined) {
        if (score < target && wickets < 3) {
            console.log(team + " couldn't chase the target.")
            console.log(team + " lost the match by " + (target - score) + " runs.\n")
        } else if (score === target) {
            console.log("Match has been Tied!\n")
        }
    } else {
        console.log(team + " has provided a target of " + (score + 1) + " runs.\n")
    }

    return score
}

function sleep(milliseconds) {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < milliseconds)
}

// Run the Game
toss()
