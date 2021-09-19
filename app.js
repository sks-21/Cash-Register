let form = document.querySelector("form");
let outputDiv = document.querySelector("#output-div");

let currency = [2000, 500, 100, 20, 10, 5, 1];

//logic
function calcAmt(billAmt, cashGiven) {
  let a, b;
  let msg = "";
  billAmt = parseInt(billAmt);
  cashGiven = parseInt(cashGiven);

  let amt = cashGiven - billAmt;
  let i = 0;

  while (amt > 0) {
    a = amt / currency[i]; //no of notes of that currency
    b = amt % currency[i]; //left amount

    a = Math.trunc(a);
    if (a > 0) {
      msg += `&#8377;${currency[i]} * ${a} notes <br>`;
    }
    amt = b;
    i++;
  }

  return msg;
}

//Validator function
function inputValidator(bill, cash) {
  let arr;
  billVal = parseInt(bill);
  cashVal = parseInt(cash);

  if (bill === "" || cash === "") {
    arr = [0, "Invalid values"];
  } else if (billVal < 0 || cashVal < 0) {
    arr = [0, "Values can not be -ve"];
  } else if (billVal > cashVal) {
    arr = [0, "Please provide more cash"];
  } else if (billVal === cashVal) {
    arr = [0, "Exact amount given. Nothing to return !"];
  } else {
    arr = [1, " "];
  }

  return arr;
}

form.elements.calculate.addEventListener("click", (e) => {
  e.preventDefault();

  let ans;
  let billEl = form.elements.inputBill;
  let cashEl = form.elements.inputCash;

  let bill = billEl.value;
  let cash = cashEl.value;

  //Input validator
  let checkArr = inputValidator(bill, cash);
  ans = checkArr[1];

  //program logic
  if (checkArr[0]) {
    ans = calcAmt(bill, cash);
  }

  billEl.value = "";
  cashEl.value = "";
  outputDiv.innerHTML = ans;
});

form.elements.clear.addEventListener("click", (e) => {
  e.preventDefault();
  let billEl = form.elements.inputBill;
  let cashEl = form.elements.inputCash;
  billEl.value = "";
  cashEl.value = "";
  outputDiv.innerText = "";
});
