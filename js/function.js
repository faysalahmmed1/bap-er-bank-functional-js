// 1st function 

function getInputValue(filedId){
    
    const InputFiled = document.getElementById(filedId);
    const valueInText = InputFiled.value;
    const value = parseFloat ( valueInText);

    InputFiled.value = '';
    return value;
}
// 2nd function
function updateTotal (idFiled , amound){ 
    const totalTag = document.getElementById(idFiled);
    const previouesTotalInText = totalTag.innerText;
    const previouesTotal = parseFloat(previouesTotalInText);
    const newTotal = previouesTotal + amound;
    totalTag.innerText = newTotal;
}
//3rd function 
 function updateTotalBalance(amound ,isadding){
    const balanceTag = document.getElementById('blance-total');
    console.log(balanceTag);
    const blanceIntext = balanceTag.innerText;
    const previouesBalance = parseFloat(blanceIntext);
    let newBalance;
    if(isadding == true){
        newBalance = previouesBalance + amound;
    }
    else{
         newBalance = previouesBalance - amound;
    }
    
    balanceTag.innerText = newBalance;
 }
 // 4th function 
 function getInnerTextValue (filedId){
    const filedTag = document.getElementById(filedId);
    const filedValueInText = filedTag.innerText;
    const value = parseFloat(filedValueInText);
    return value;

 }

document.getElementById('diposit-button').addEventListener('click' , function(){

    const amound =  getInputValue('diposit-input');
    if(amound > 0 ){
        updateTotal('diposit-total' , amound);
    updateTotalBalance(amound, true);
    }
});

// handel withdrw 

document.getElementById('withdraw-button').addEventListener('click' , function(){

  const amound = getInputValue('withdraw-input');
  const blance = getInnerTextValue('blance-total');
  if(amound > 0 && amound <= blance){
    updateTotal('withdraw-total', amound);
  updateTotalBalance(amound , false);
  }

  
})