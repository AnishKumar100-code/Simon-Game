//vandnm
alert("Ram");

//working-functions:

//containers:
var level = 0;
var isActive = false;
var colorName = ["green", "red", "yellow", "blue"];
var userPattern = [];
var gamePattern = [];

//keyboard-event:
$("#start-btn").on("click", function () {
  if (!isActive) {
    $("#level-title").text("Level " + level);
    effect();
    isActive = true;
    $("#start-btn").fadeOut(100).fadeIn(100);
  }
});

//effect-function:
function effect() {
  userPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var color = colorName[randomNumber];
  gamePattern.push(color);
  $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100); // animation
  playSound(color);

}
//user-Click:
$(".btn").on("click", function () {
  var userClick = $(this).attr("id");
  userPattern.push(userClick);
  animation(userClick);
  playSound(userClick);
  checkAnswer(userPattern.length - 1);

});
` `
//checkAnswer:
function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(function () {
        effect();
      }, 1000);
    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press on Anish to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    resetGame();

  }
}

//Seprate functions taken on consideration:

//Sound-function:
function playSound(value) {
  var audio = new Audio("sounds/" + value + ".mp3");
  audio.play();
}

//Animation-function:
function animation(key) {
  $("#" + key).addClass("pressed");
  setTimeout(function () {
    $("#" + key).removeClass("pressed");
  }, 100)
}

//Reset-Game:
function resetGame() {
  level = 0;
  gamePattern = [];
  isActive = false;
}

// //vandanm:
// alert("Ram");

// //value saved in Container:
// var level=0;
// var active=false;
// var buttonColor=["red","green","blue","yellow"];
// var gamePattern=[];
// var userPattern=[];

// //Working-functions:

// //keyboard-event:

// $("body").on("keydown",function(){
//   if(!active){
//     $("#level-title").text("Level "+level);
// gameEffect();
// active=true;
//   }
// });

// //effect-function:
// function gameEffect(){
//  userPattern=[];
//  level++;
//  $("#level-title").text("Level "+level);
// var randomNumber=Math.floor(Math.random()*4);
// var color=buttonColor[randomNumber];
// gamePattern.push(color);
// $("#"+color).fadeIn(100).fadeOut(100).fadeIn(100);
// playSound(color);
// }

// //user-Click:
// $(".btn").on("click",function(){
//   var userColor=$(this).attr("id");
//   userPattern.push(userColor);
//   animation(userColor);
// playSound(userColor);
// checkAnswer(userPattern.length-1);
// })

// //check-Answer:
// function checkAnswer(currentLevel){
// if(userPattern[currentLevel]===gamePattern[currentLevel]){
//   if(userPattern.length===gamePattern.length){
//     setTimeout(function(){
//       gameEffect();
//     },1000);
//   }
// }
// else{
//   playSound("wrong");
//   $("body").addClass("game-over");
//   $("#level-title").text("Game-over,please press any key to restart!");
//   setTimeout(function(){
//     $("body").removeClass("game-over");
//   },200)

// resetGame();
// }
// }
// //Seprate-functions calls on consideration:

// //Sound-function:
//  function playSound(value){
// var audio=new Audio("sounds/"+value+".mp3");
// audio.play();
//  };

//  //animation-function:
//  function animation(key){
//   $("#"+key).addClass("pressed");
//   setTimeout(function(){
//     $("#"+key).removeClass("pressed");
//   },100)

//  };

//  //reset-function:

//  function resetGame(){
//   level=0;
//   gamePattern=[]; 
//   active=false;
//  }