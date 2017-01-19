var customerNumbers = 13;
var winningNumbers = [12, 17, 24, 37, 38, 43];
var alertMessageWeek = "This weeks winning numbers are\n";
var alertCustomerNumber = "\nThe customers number is\n";
var match = 0;

arrLen = winningNumbers.length;

for(i = 0; i <= arrLen; i++){
  if(winningNumbers[i] == customerNumbers){
    match = 1;
  }
}

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

alert(alertMessageWeek + winningNumbers + "\n" + alertCustomerNumber + customerNumbers + "\n" + message);
