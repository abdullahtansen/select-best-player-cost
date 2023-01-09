function getTextElementValueById(elementId){
  const textElement = document.getElementById(elementId);
  const textElementStr = textElement.innerText;
  const textElementNumber = parseInt(textElementStr);
  return textElementNumber;
}
function setTextElementById(elementId,value){
  const textElement = document.getElementById(elementId);
  textElement.innerText = value;
}
function getInputValueById(inputElementId){
  const inputElement = document.getElementById(inputElementId);
  const inputElementStr = inputElement.value;
  const inputElementValue = parseInt(inputElementStr);
  return inputElementValue;
}

  const playerArray = [];
  let count = 0;
function addCard(cart){
  const playerName = cart.parentNode.children[0].innerText;
  const totalNumber = document.getElementById('total-count');
  const playerCount = playerArray.length;
  count += 1;
  const playerQuantity = playerCount + 1;

  if(playerQuantity <= 5){
    playerArray.push(playerName);
    const playerList = document.getElementById('player-li');
    const li = document.createElement('li');
    li.innerHTML = `
    ${playerName}
    `;
    playerList.appendChild(li);
    totalNumber.innerText = count;
  }
}

document.getElementById('calculate-player-btn').addEventListener('click',function(){
  const playerCount = getTextElementValueById('total-count');
  const playerCost= getInputValueById('player-cost');
  const totalCost = playerCount * playerCost;
  setTextElementById('total-expenses',totalCost);
})
document.getElementById('total-calculate').addEventListener('click',function(){
  const totalExpenses = getTextElementValueById('total-expenses');
  const managerCost = getInputValueById('manager-input');
  const coachCost = getInputValueById('coach-input');
  const totalCost = totalExpenses + managerCost + coachCost;
  setTextElementById('total-cost', totalCost);
})