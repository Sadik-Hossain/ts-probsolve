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
console.log(score(70, 0));
