// 1st function 

function getInputValue(filedId){
    
    const InputFiled = document.getElementById(filedId);
    const valueInText = InputFiled.value;
    const value = parseFloat ( valueInText);

  // clear Input value 
    InputFiled.value = '';

    return value;
}
 // #### function aiii funtion ta tuiri kora huise jate protita function ar InnerText use na korte huy

 function getInnerTextValue (filedId){
    const filedTag = document.getElementById(filedId);
    const filedValueInText = filedTag.innerText;
    const value = parseFloat(filedValueInText);
    return value;

 }

// 2nd function
function updateTotal (idFiled , amound){ 
    
    previouesTotal = getInnerTextValue(idFiled);
    const newTotal = previouesTotal + amound;
    document.getElementById(idFiled).innerText = newTotal;
}
//3rd function 
 function updateBalance(amound ,isadding){
    
    previouesBalance = getInnerTextValue('blance-total');
    let newBalance;
    if(isadding == true){
        newBalance = previouesBalance + amound;
    }
    else{
         newBalance = previouesBalance - amound;
    }
    
    document.getElementById('blance-total').innerText = newBalance;
 }



document.getElementById('diposit-button').addEventListener('click' , function(){

    const amound =  getInputValue('diposit-input');
    if(amound > 0 ){
        updateTotal('diposit-total' , amound);
    updateBalance(amound, true);
    }
});

// handel withdrw 

document.getElementById('withdraw-button').addEventListener('click' , function(){

  const amound = getInputValue('withdraw-input');
  const blance = getInnerTextValue('blance-total');
  if(amound > 0 && amound <= blance){
    updateTotal('withdraw-total', amound);
  updateBalance(amound , false);
  }

  
})