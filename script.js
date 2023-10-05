let preVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
// store whether or not decimal was clicked
// only allow one decimal per value
let decimalClicked = false
// hold values we want stored in memory
let valMemStored = ''

function numButPress(num) {
    //Check if a number has already been clicked
    if(resultVal){
        //start a new number
        newVal = num
        //reset to create a new result
        resultVal = ''
    } else {
        //used to block multi decimals
        if (num === '.'){
            if(decimalClicked != true){
                //Take the current value of newVal and add the character pressed
                newVal += num 
                //Sets decimal check var to true, wont allow more
                decimalClicked = true 
            }
        } else {
            newVal += num
        }
    }
    //update the display
    document.getElementById('entry').value = newVal

}

function mathButPress(operator) {
    //Check if there was a previous calculation
    //by seeing if resultVal has a value 
    //If result doesn't have a value then store
    // the current val as previous for the next calculation
    if(!resultVal){
        preVal = newVal
    }
    else{
        //If there is a current result store that as the previous value entered
        preVal = resultVal
    }
//restart creation of new number
    newVal = ''
    decimalClicked = false
    //Store operator clicked
    mathOperator = operator 
    //Prepare entry for receiving new numbers
    resultVal = ''
    document.getElementById('entry').value = ''
}

function equalButPress() {
    //reset decimalClicked
    decimalClicked = false
    //convert string numbers to float
    preVal = parseFloat(preVal)
    newVal = parseFloat(newVal)

    //Perform calculations based on stored operator
    switch (mathOperator) {
        case '+':
        resultVal = preVal + newVal
        break 
        
        case '-':
        resultVal = preVal - newVal
        break 
        
        case '*':
        resultVal = preVal * newVal
        break 
            
        case '/':
        resultVal = preVal / newVal
        break 
    //If equals is hit w/o an operator
    //Leave everything as it
    default: 
    resultVal = newVal
    }
    //Store the current value as the previous so that I can except to next value in the calculation
    preVal = newVal
    //Put the calculation result in the entry window
    document.getElementById('entry').value = resultVal


}

//clears everything EXCEPT memory
function clearButPress() {
preVal = ''
newVal = ''
resultVal = ''
mathOperator = ''
decimalClicked = false
document.getElementById('entry').value = '0'
}

//to store the current value in entry in val mem stored
function copyButPress() {
valMemStored = document.getElementById('entry').value
}

//if a value has been stored, paste it in entry window and assign it as new val. 
function pasteButPress() {
if (valMemStored) {
    document.getElementById('entry').valMemStored
    newVal = valMemStored
}
}
