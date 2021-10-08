let count = 0;

const counterContainer = document.getElementById("counter-container");
counterContainer.append(createCounterDiv());

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);

function increase() {
  count++;
  updateCount();
}

function decrease() {
  if (count >= 1) count--;
  updateCount();
}

function reset() {
  count = 0;
  updateCount();
}

function updateCount() {
  const countP = document.getElementById("count");
  countP.textContent = count;
}

function createCounterDiv() {
  const divCounter = document.createElement("div");
  divCounter.classList.add("counter");
  const countP = document.createElement("p");
  countP.classList.add("count");
  countP.id = "count";
  countP.textContent = count;

  const divControls = document.createElement("div");
  divControls.classList.add("controls");
  const btnInc = document.createElement("button");
  btnInc.id = "increase";
  btnInc.textContent = "increase";
  const btnDec = document.createElement("button");
  btnDec.id = "decrease";
  btnDec.textContent = "decrease";
  const btnRes = document.createElement("button");
  btnRes.id = "reset";
  btnRes.textContent = "reset";

  divControls.append(btnInc, btnDec, btnRes);
  divCounter.append(countP, divControls);

  return divCounter;
}
