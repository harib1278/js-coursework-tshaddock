var customerNumbers = 12;
var winningNumbers = [12, 17, 24, 37, 38, 43];
var alertMessageWeek = "This weeks winning numbers are\n";
var alertCustomerNumber = "\nThe customers number is\n";
var match = 0;

//loop through array and set the flag to positive if theres a match
if(winningNumbers[0] === customerNumbers){
  match = 1;
} else if(winningNumbers[1] === customerNumbers){
  match = 1;
} else if(winningNumbers[2] === customerNumbers){
  match = 1;
} else if(winningNumbers[3] === customerNumbers){
  match = 1;
} else if(winningNumbers[4] === customerNumbers){
  match = 1;
} else if(winningNumbers[5] === customerNumbers){
  match = 1;
}

//set the message based on the flag
if(match == 1){
  message = "\nWe have a match and a winner!"
} else if(match == 0) {
  message = "\nSorry you are not a winner today ..."
}

//convert to a datatype that can be printed in alert dialogue
var customerNumbers = JSON.stringify(customerNumbers);
var winningNumbers  = JSON.stringify(winningNumbers);

//remove the square brackets with replace()
winningNumbers = winningNumbers.replace("[", "");
winningNumbers = winningNumbers.replace("]", "");

//insertion of a space after each comma to make the alert dialogue look more like the TMA spec
//using a small regex /,/g replaces all occurances of ',' with ', '
winningNumbers = winningNumbers.replace(/,/g, ', ');

alert(alertMessageWeek + winningNumbers + "\n" + alertCustomerNumber + customerNumbers + "\n" + message + "\n");
