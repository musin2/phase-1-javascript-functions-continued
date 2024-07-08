function saturdayFun(act1 = "roller-skate"){
    return "This Saturday, I want to "+ act1 + "!";
}

saturdayFun();

const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`;
};

function wrapAdjective(flair = "*"){
   return function (adjective = "special"){
    return `You are ${flair}${adjective}${flair}!`;
   } ;
}
const callChain = wrapAdjective("!!!");
console.log(callChain("a good developer"));
console.log(wrapAdjective("||")("something"));