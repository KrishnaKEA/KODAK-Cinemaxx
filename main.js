/*console.log("I am a disco dancer.");
const username = "Krishna";
//alert(username);
const age = 33;
console.log(username + age );
console.log(typeof username);
console.log(typeof age);
const schoolName=0;
console.log(typeof schoolName);
const isOne = 1 == 1
console.log(typeof isOne);
const isOneWrong = "1" == 1;
const names =["krishna","Kumar"]
names.push("Rohit");
names.push(1);
names.push(true);
alert(names);

// variables
// ex-1
let result = "";
const greetings = "Hi";
console.log(greetings);
console.log(greetings);
console.log(greetings);
//ex-2
console.log("'I'm awesome'!");
// Types
//ex-1
const firstName = "Krishna";
const lastName = "Khanal";
const fullName = firstName +" "+ lastName;
//alert(fullName);
 // ex- 2 
 const studentNumber = 20;
 const numberOfTeacher = 20;
 const totalNumber = studentNumber + numberOfTeacher;
 console.log(totalNumber);
//alert(typeof studentNumber);
const mynumbers = ["krishna","Khanal","Kea","Dat1"]
for(let i = 0; i< mynumbers.length;i++) {
result += " "+mynumbers[i];    
}
const laptop = {
    brand : "mac",
    screenSize :30
}
const spiser ={
   root : "at spise",
   nutid:"spiser",
   datid:"spiste",
   fortid :"har spist"
}
class  LærOrd {
    constructor(root,nutid,datid,fortid){
        this.root = root;
        this.nutid  = nutid;
        this.datid = datid;
        this.fortid = fortid

    }
 }
let ordArray = [];
for(let i = 0;i<100;i++){
    let ord = new LærOrd();
    ord.root = "root"+i
    ord.nutid = "nutid"+i
    ord.datid = "datid" +i
    ord.fortid  = "fortid" +i
    ordArray.push(ord)
}


for(let i = 0;i<ordArray.length;i++){
result += ordArray[i].nutid;
}
console.log(ordArray)
document.getElementById("para").innerHTML = result;


function formatPenceToPounds(myNum){
    return "$"+myNum/100
}
console.log(formatPenceToPounds(129));

function increaseByHalf(numberToIncrease){
    return numberToIncrease + numberToIncrease/2
}
console.log(increaseByHalf(20));



//call back


function add(n1,n2){
    return (n1+n2);

}
const f1 = function sub (n1, n2){
    return (n1-n2);
}

const failme  = function(n1,n2,callback){
   console.log(""+n1+""+n2+ callback(n1,n2)) ;
}
console.log(3,2,add(4,3));

// Sentiment analyser
const positiveWords =
*/
