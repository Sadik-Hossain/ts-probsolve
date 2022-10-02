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
console.log(score(70,0))