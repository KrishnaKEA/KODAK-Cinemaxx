/**
 A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
Fx the sentence I am mega super awesome happy Should have a high score The sentence I hate doing boring stuff should have a low score.
Create a function that takes a string as a parameter. calling the function will return an object with score, positiveWords and negativeWords. You decide how the score should be implemented and what words you characterise as negative and positive.
Here is an example of using the function:
const SentimentcoreObject = getSentimentcore('I am mega super awesome happy');console.log(SentimentcoreObject); /*{  score: 3,  positiveWords: ['happy', 'awesome', 'super'],  negativeWords: [],}
To solve this exercise you must know
How to use functionsHow to use string in jsHow to use an arrayHow to use an object
 */

const Sentiment = {
positiveWords:["happy","awesome","super","perfect","good","like"],
negativeWords:["sad","bad","hate","cry"],
}
function getSentimentmood(){
    let pscore = 0;
    let nscore = 0;
    let poArr = [];
    let neArr = [];
    let sentence = document.getElementById("text1").value;
    let result = ""
    let arrayOfwords = sentence.split(/\s|\b/)
    for(let i = 0;i<arrayOfwords.length-1;i++){
        for(let j= 0;j<Sentiment.positiveWords.length-1;j++){
            if(arrayOfwords[i]=== Sentiment.positiveWords[j]){
                pscore= pscore +1;
                poArr.push(arrayOfwords[i]);
            }
        }
        for(let k = 0;k<Sentiment.negativeWords.length-1;k++){
            if(arrayOfwords[i]=== Sentiment.negativeWords[k]){
                nscore = nscore +1
                neArr.push(arrayOfwords[i]);
            }
        }
    }
   if (pscore>nscore){
       result = "You are in Happy mood.positive words:-  {"+ poArr +"} and negative words:- {"+ neArr +"} ..Your goodmood score is " + pscore;
   }else{
       result = "You are in bad mood. positive words:- {"+ poArr +"} and negative words:- { "+ neArr +"} . Your badmood score is  "+ nscore;
   }
   document.getElementById("para").innerHTML= result;
} 
// Finbonacci squence

function solveMe(n){
    var fab = [];
    fab[0]= 0;
    fab[1]= 1;
    for(let i = 2; i<= n;i++){
        fab[i] = fab[i-2] + fab[i-1];
    }
    console.log(fab)

    return fab[n-1]
}
function getFibonacciNumber(){
mynumber = document.getElementById("ftext1").value;
let num = Number(mynumber)
 let res = solveMe(num)

  document.getElementById("result").innerHTML = res;

}

function fizzBuzz(num1,num2){
    let fbArray = [];
    fbArray[0] = 0;
    for(let i=1;i<=100;i++){
        
        if(i%num1 === 0 && i%num2 ===0){
            fbArray[i] = "fizzBuzz";
        }else if(i%num1 === 0 && i%num2 != 0){
            fbArray[i] = "fiz1"
        }else if(i%num1 != 0 && i%num2 === 0){
            fbArray[i] = "fiz2"
        } else{
            fbArray[i] = i
        }
    }
    return fbArray;
}

function getFizzBuzz(){
    n1 = document.getElementById("in1").value;
    n2 = document.getElementById("in2").value;
    let numb1 = Number(n1);
    let numb2 = Number(n2);
     let res = fizzBuzz(numb1,numb2)
    
      document.getElementById("fbresult").innerHTML = res;
    
    }


    function formatMe(){
        let userInput = document.getElementById("inp1").value;
        let myValue =  formatAction(userInput)
        document.getElementById("resultformat").innerHTML = myValue;

    }
    function formatAction(number){
        let numberArray = number.split("");
        let newArray = []
        let sequence = "";
        for (let i = 0; i<numberArray.length;i++){
            if (i%3===0){
                sequence =sequence+" "+numberArray[i];
            } 
            sequence = sequence+numberArray[i]
        }
        return sequence;

    }
