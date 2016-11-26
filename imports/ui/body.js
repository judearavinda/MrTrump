import { Template } from 'meteor/templating';

import './body.html';

Template.body.events({
'click .mainButton'(event){
  console.log("kappa");
  var randommsg = "Suck deez nuts";
  $(".msg").text(randommsg);
}

});
