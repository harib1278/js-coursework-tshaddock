var customerNumbers = 12;
var winningNumbers = [12, 17, 24, 37, 38, 43];
var alertMessageWeek = "This weeks winning numbers are\n";
var alertCustomerNumber = "\nThe customers number is\n";
arrLen = winningNumbers.length;

for(i = 0; i <= arrLen; i++){
  if(winningNumbers[i] == customerNumbers){
    match = 1;
  } else { // this must be initialised else the check will error later if the user is not a winner
    match = 0;
  }
}

if(match > 0){
  alert("Congratulations!!!!!! You are todays winner.");
}
