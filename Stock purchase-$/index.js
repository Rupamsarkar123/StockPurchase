
//let me just select the operators

var initialPrice = document.querySelector('#initial-price');
var noStocks = document.querySelector('#no-stocks');
var currentPrice = document.querySelector('#current-price');
var  submitButton = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitButton.addEventListener('click',submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);

    var qty = Number(noStocks.value);
    var curr = Number(currentPrice.value);
    

    calculateProfitAndLoss(ip,qty,curr);

}


function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        //loss logic here
        var loss  = (initial - current) * quantity;
        var lossPercentage = (loss / initial )* 100;
        showOutput(`Loss is ${loss} dollar and the loss percent is ${lossPercentage}👎❗.`);
        
        
    }
    else if(current > initial){
        
        //profit logic here
        var profit = (current- initial) * quantity;
        var profitPercentage = (profit / initial )* 100;

        showOutput(`Profit is ${profit} dollar and the profit percent is ${profitPercentage}✅👍😀.`);

        
    }
    else{
        showOutput(`No pain no gain!`);
    }

}


function showOutput(message){
    outputBox.innerHTML = message;

    // Reset classes
    
}








// calculateProfitAndLoss(10,500,80);

// calculateProfitAndLoss(80,80,80);
