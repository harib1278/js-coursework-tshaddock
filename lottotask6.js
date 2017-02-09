//this main function is invoked at the bottom of the script
function init(){
	checkNumbers(getCustomerNumbers(), getWinningNumbers());	
}

function displayResult(match, noOfMatches){
	//set the message based on the flag
	if(match == 1){
	  message = "\nWe have a match and a winner!\n"
	} else if(match == 0) {
	  message = "\nSorry you are not a winner today ...\n"
	}

	var matches = "\nNumbers Matched:\n" + noOfMatches;

	return message + matches;
}

function getCustomerNumbers(){
	var customerNumbers = [12, 17, 24, 37, 38, 43];

	return customerNumbers;
};

function getWinningNumbers(){
	var winningNumbers = [12, 17, 24, 37, 39, 43];

	return winningNumbers;
};

function checkNumbers(customerNumbers, winningNumbers){
	
	var alertMessageWeek = "This weeks winning numbers are\n";
	var alertCustomerNumber = "\nThe customers number is\n";

	//reverse the intialisation of this match flag
	var match = 1;

	// this variable will hold the counter to indicate how many numbers were matched when
	// comparing the two arrays

	var noOfMatches = 6;


	arrLen = winningNumbers.length;

	//loop through array and set the flag to positive if theres a match
	for(i = 0; i <= arrLen; i++){
	  if(winningNumbers[i] != customerNumbers[i]){
	    match = 0;
	    noOfMatches--;
	  }
	}

	
	var message = displayResult(match, noOfMatches);

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

};

//initialisation of the above code.
init();