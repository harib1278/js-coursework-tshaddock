var customerNumbers = 12;
var winningNumbers = [12, 17, 24, 37, 38, 43];
var arrLen = winningNumbers.length;

var alertMessageWeek = "This weeks winning numbers are\n";
var alertCustomerNumber = "\nThe customers number is\n";

//convert to a datatype that can be printed in alert dialogue
var customerNumbers = JSON.stringify(customerNumbers);
var winningNumbers  = JSON.stringify(winningNumbers);

//remove the square brackets with replace()
winningNumbers = winningNumbers.replace("[", "");
winningNumbers = winningNumbers.replace("]", "");

//insertion of a space after each comma to make the alert dialogue look more like the TMA spec
//using a small regex /,/g replaces all occurances of ',' with ', '
winningNumbers = winningNumbers.replace(/,/g, ', ');

alert(alertMessageWeek + winningNumbers + "\n" + alertCustomerNumber + customerNumbers);
