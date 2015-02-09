/*
var appleList = [];
var apple1 = { color: 'red' };
var apple2 = { color: 'yellow' };
appleList.push(apple1);
appleList.push(apple2);
var appleListString = JSON.stringify(appleList);
appleListString;
*/


function AppointmentStorage() {
  var self = {};

  self.clear



  //parse json apptList string back into array when we start the app
  //call the array later
  self.load = function() {
    var loadList = window.localStorage.apptList;
    if (loadList) {
      return JSON.parse(loadList);
    } else {
      return [];
    }
  }


  self.save = function(array) {
    //take array
    //stringify array
    // put in local storage in apptList area as 'listString'
    var listString = JSON.stringify(array);
    window.localStorage.apptList = listString;
  }
  return self;
}