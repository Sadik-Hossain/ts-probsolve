// ### problem no:1 https://www.codechef.com/submit/BURGERS
function burger(patties:number,bun:number){


    //1 burger needs 1bun , 1pattie
  const burger = Math.min(patties,bun)
        return burger;
    }

    // ### problem no:2 https://www.codechef.com/submit/DETSCORE
    function score(totalPoints:number=10 ,Correct:number){
const pointsPerQuestions:number=totalPoints/10
const earnedPoints:number = Correct*pointsPerQuestions
return earnedPoints
}
// console.log(score(70,0))

   // ### problem no:3 https://www.codechef.com/submit/MY1STCONTEST
   function contest (users:number,unsubmittedUser:number,unsolvedUser:number) {
    const submittedUser = users-unsubmittedUser;
    const solvedUser  = submittedUser-unsolvedUser;  
return [submittedUser,solvedUser]
   }
//    console.log(contest(10,3,2))
//    console.log(contest(20,1,2))
//    console.log(contest(1000,300,700))

// ### problem no:4 https://www.codechef.com/submit/PRIZEPOOL
function prizeMoney (topTenPrize:number,afterTopTenPrize:number ) {
const totalPrizeMoney = 10*topTenPrize + 90*afterTopTenPrize
return totalPrizeMoney
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
function prettyNum (start:number,end:number) {
    let arr:string[]=[]
for(let i=start;i<=end;i++){
  arr.push(i.toString().charAt(i.toString().length-1))
}
return(arr.filter(e=>e=="2"||e=="3"||e=="9").length)

}
// console.log(prettyNum(1,10)) 
// console.log(prettyNum(11,33)) 