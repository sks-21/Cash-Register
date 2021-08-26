let form = document.querySelector("form");
let outputDiv = document.querySelector("#output-div");

let currency = [2000, 500, 100, 20, 10, 5, 1];

//logic
function calcAmt(billAmt, cashGiven) {
  let a, b;
  let msg = "";
  billAmt = parseInt(billAmt);
  cashGiven = parseInt(cashGiven);
  if (billAmt > cashGiven) {
    console.log(1);
    msg = "Please provide more cash";
  } else if (billAmt === cashGiven) {
    msg = "Exact amount given. Nothing to return !";
  } else {
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
  }

  return msg;
}

form.elements.calculate.addEventListener("click", (e) => {
  e.preventDefault();

  let billEl = form.elements.inputBill;
  let cashEl = form.elements.inputCash;

  let bill = billEl.value;
  let cash = cashEl.value;

  //program logic
  let ans = calcAmt(bill, cash);

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
