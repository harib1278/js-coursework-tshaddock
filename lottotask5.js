//this main function is invoked at the bottom of the script
function init(){
	checkNumbers(getCustomerNumber(), getWinningNumbers());	
}

function displayResult(match){
	//set the message based on the flag
	if(match == 1){
	  message = "\nWe have a match and a winner!"
	} else if(match == 0) {
	  message = "\nSorry you are not a winner today ..."
	}
}

function getCustomerNumber(){
	var customerNumbers = 12;

	return customerNumbers;
};

function getWinningNumbers(){
	var winningNumbers = [12, 17, 24, 37, 38, 43];

	return winningNumbers;
};

function checkNumbers(customerNumbers, winningNumbers){
	
	var alertMessageWeek = "This weeks winning numbers are\n";
	var alertCustomerNumber = "\nThe customers number is\n";
	var match = 0;

	arrLen = winningNumbers.length;

	//loop through array and set the flag to positive if theres a match
	for(i = 0; i <= arrLen; i++){
	  if(winningNumbers[i] == customerNumbers){
	    match = 1;
	  }
	}

	
	displayResult(match);

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