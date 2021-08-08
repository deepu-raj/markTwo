var readlineSync = require("readline-sync");
var score = 0;
var levelScore = 3;
/**
 * welcome the user
 * questions and answer objects level one
 * question and answers objects level two
 * level array
 * q and a object array
 * call functions for player input
 * compare answers
 * update current score
 * update overall score 
 * print the overall score
 * simlify using function calls wherever
 * 
 * 
 */
 function welcome (){
   var userName = readlineSync.question('Hi, what is your name? ')
 console.log('WelCOME ' +userName+ '! to the game called - Guess the animal.')
 console.log('Guess the animal by the clues given in the question , type ypur answer and hit enter.')
 console.log('               ')
   }
//welcome () - test
// level 1 questions
 var q1={
   question: 'I live in the ocean, the color of the ocean is in my name and Iam huge : ',
   answer: 'Blue Whale'
 }
 var q2={
   question: 'I am a five lettered animal and my colors are painted across parts of roads : ',
   answer: 'zebra'
 }
 var q3={
   question: 'I live in the sea and I have the number eight in my name though not in English : ',
   answer: 'octopus'
 }
 // level 2 questions
 var q4={
   question: 'Iam not an octopus but I have legs and even Iam a super hero too : ',
   answer: 'spider'
 }
 var q5={
   question: 'Iam a bird. Alas I cannot fly but can swim and I prefer to live on the edge : ',
   answer: 'penguin'
 }
 var q6={
   question: 'I love the darkness and yeah Iam very much essential in an English game : ',
   answer: 'bat'
 }
  var levelOne= [q1,q2,q3];
  var levelTwo=[q4,q5,q6];
  var levelArray=[levelOne,levelTwo];

//   var rank1 = {
//     name:'Deepu ',
//     points:6
// }
// var rank2 = {
//   name : 'XYZ',
//   points: 5
// }

//var rankholders = [rank1,rank2];
function play(question,answer){
  var userAns = readlineSync.question(question)
  if (userAns.toUpperCase() === answer.toUpperCase()){
    console.log('You are correct! ')
    score++ } else{
      console.log('Wrong! ')
      score--
    }
    console.log('Your current score is  '+score)
    console.log('-----------------------')
    
}

  
  function game (array1) {
     for (i=0;i<array1.length;i++){
         currentQuestn = array1[i];
         play(currentQuestn.question,currentQuestn.answer);
       }    
  }

welcome();
game (levelOne);
if (score===levelScore){
  console.log('Great! Lets play the next level')
  console.log('**************************************')
  game(levelTwo);
  } else {
    console.log('You are not through to next level.Play again')
  }
  console.log('Your total score is '+ score);

    
  

// function toppers (array){
//   console.log('Top scorers now are: ');
//     for(i=0;i<array.length;i++){
//             console.log(array[i].name+' - ' + array[i].points);
//       }
// }
// function updateToppers (name,score,rank){
//     var newtopper = name;
//     var newscore = score;
//       rank.name===newtopper;
//       rank.points===newscore;
//     }


//   playgame (questionaire);
//   toppers (rankholders);
//   console.log ('If you have beaten the above , send in the screen shot of your score for updating the recent top scorers')
  