"use strict";
// ### problem no:1 https://www.codechef.com/submit/BURGERS
function burger(patties, bun) {
    //1 burger needs 1bun , 1pattie
    const burger = Math.min(patties, bun);
    return burger;
}
// ### problem no:2 https://www.codechef.com/submit/DETSCORE
function score(totalPoints = 10, Correct) {
    const pointsPerQuestions = totalPoints / 10;
    const earnedPoints = Correct * pointsPerQuestions;
    return earnedPoints;
}
// console.log(score(70,0))
// ### problem no:3 https://www.codechef.com/submit/MY1STCONTEST
function contest(users, unsubmittedUser, unsolvedUser) {
    const submittedUser = users - unsubmittedUser;
    const solvedUser = submittedUser - unsolvedUser;
    return [submittedUser, solvedUser];
}
//    console.log(contest(10,3,2))
//    console.log(contest(20,1,2))
//    console.log(contest(1000,300,700))
// ### problem no:4 https://www.codechef.com/submit/PRIZEPOOL
function prizeMoney(topTenPrize, afterTopTenPrize) {
    const totalPrizeMoney = 10 * topTenPrize + 90 * afterTopTenPrize;
    return totalPrizeMoney;
}
// console.log(prizeMoney(1000,100));
// console.log(prizeMoney(1000,1000));
// console.log(prizeMoney(80,1));
// console.log(prizeMoney(400,30));
// ### problem no:5 https://www.codechef.com/submit/PRACTICEPERF
// function practicePerf (arguments) {
//     // body
// }
// ### problem no:6 https://www.codechef.com/submit/NUM239
function prettyNum(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i.toString().charAt(i.toString().length - 1));
    }
    return (arr.filter(e => e == "2" || e == "3" || e == "9").length);
}
// console.log(prettyNum(1,10)) 
// console.log(prettyNum(11,33)) 
// ### problem no:7 https://www.codechef.com/submit/DOLL
function doll(heightOfAliAndG, ...args) {
    const deathRequired = [...args].filter(e => e > heightOfAliAndG);
    return deathRequired.length;
}
// * 1st argument must be the height of ali and gi, and the rest's are participants height, output will be how many people need to get shot, so ali and gi can see eachother
// console.log(doll(10,2 ,13 ,4 ,16))
// console.log(doll(8,9 ,3, 8, 8, 4))
// ### problem no:8 https://www.codechef.com/submit/MANIPULATE
function manipulate(guardsAbleToManipulate, totalGuards) {
    if (guardsAbleToManipulate >= totalGuards) {
        return "YES";
    }
    else {
        return "NO";
    }
}
// console.log(manipulate(5,7))
// console.log(manipulate(6,6))
// console.log(manipulate(9,1))
// ### problem no:9 https://www.codechef.com/submit/BATTERYLOW
function batteryLow(battery) {
    if (battery <= 15) {
        return "YES";
    }
    else {
        return "NO";
    }
}
// console.log(batteryLow(3))
// console.log(batteryLow(15))
// console.log(batteryLow(65))
// ### problem no:10 https://www.codechef.com/submit/TRUESCORE
function trueScore(...args) {
    console.log([...args]);
    const currentTeamAScore = [...args][0];
    const currentTeamBScore = [...args][1];
    const predictTeamAScore = [...args][2];
    const predictTeamBScore = [...args][3];
    if (currentTeamAScore <= predictTeamAScore && currentTeamBScore <= predictTeamBScore) {
        return "POSSIBLE";
    }
    else {
        return "IMPOSSIBLE";
    }
}
//* The first 2 args contains two integers- the intial number of goals team A and team B have scored respectively.The second 2 args contains two integers the final number of goals team A and team B must be able to score respectively.
// console.log(trueScore(1,5,3,5))
// console.log(trueScore(3,4,2,6))
// console.log(trueScore(2,2,2,2))
