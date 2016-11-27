import { Template } from 'meteor/templating';

import sentiment from 'sentiment'

import './body.html';
var randomnumber1 = -1;
var array = ["Fidel Castro is dead!","Happy Thanksgiving to everyone. We will, together, MAKE AMERICA GREAT AGAIN!",
"If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!",
"Obama is, without question, the WORST EVER president. I predict he will now do something really bad and totally stupid to show manhood!",
"This election is a total sham and a travesty. We are not a democracy!",
"I have never seen a thin person drinking Diet Coke.",
"Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again--just watch. He can do much better!",
"Robert I'm getting a lot of heat for saying you should dump Kristen- but I'm right. If you saw the Miss Universe girls you would reconsider.",
"So many tweets & stories on Stewart/Pattinson Look, it doesn't matter-- the relationship will never be the same. It is permanently broken.",
"Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
"After Friday’s Twilight release, I hope Robert Pattinson will not be seen in public with Kristen--she will cheat on him again!",
"@katyperry Katy, what the hell were you thinking when you married loser Russell Brand. There is a guy who has got nothing going, a waste!",
"@katyperry must have been drunk when she married Russell Brand @rustyrockets – but he did send me a really nice letter of apology!",
"@katyperry is no bargain but I don't like John Mayer--he dates and tells--be careful Katy (just watch!).",
"@ariannahuff is unattractive both inside and out. I fully understand why her former husband left her for a man- he made a good decision.",
"Pervert alert. @RepWeiner is back on twitter. All girls under the age of 18, block him immediately."
];
Template.body.events({
'click .mainButton'(event){
  console.log("kappa");
  var maximum = 15;
  var minimum = 0;
  var imageMaximum = 0;
  var imageMinimum = 4;
  var randomnumber2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  var imageRandom = Math.floor(Math.random() * (imageMaximum - imageMinimum + 1)) + imageMinimum;
  var randommsg = array[randomnumber2];
  //code for sentiment analysis
  var r1 = sentiment(randommsg);
  console.log(r1);
  if (r1.score>0)
  {
    //positive image
   console.log("Trump is happy");
  }
  else if (r1.score ==0 )
  {
    //neutral image
    console.log("Trump is neutral");
  }
  else{
    //negative
    console.log("Trump is angry");
  }
  $(".msg").text(randommsg);
}

});
