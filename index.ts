let currencies = {
  USD: 1, // BASE CURRENCY
  PKR: 278.58, // PAKISTANI RUPEE
  INR: 83.37, // INDIAN RUPEE
  JPY: 154.62, // JAPANESE YEN
  CAD: 1.38, // CANADIAN DOLLAR
  AUD: 1.56, // AUSTRALIAN DOLLAR
  CNY: 7.24, // CHINESE YUAN
  EUR: 0.94, // EURO
  GBP: 0.81, // POUND
  AED: 3.67, // DIRHAM
  QAR: 3.64, // QAYARI RIYAL
  KWD: 0.31, // KUWAITI RIYAL
  NZD: 1.7, // NEW ZEALAND DOLLAR
  SAR: 3.75, // SAUDI ARABIA RIYAL
  SGD: 1.36, // SINGAPORIAN DOLLAR
  HKD: 7.83, // HONG KONG DOLLAR
  BDT: 109.51, // BANGLADESI TAKA
  OMR: 0.38, // OMANI RIYAL
  CHF: 0.91, // SWITZERLAND SWISS
  LKR: 301.36, // SRI LANKAN RUPPEE
  BHD: 0.38, // BAHRAINI DINAR
  JOD: 0.71, // JORDIAN DINAR
};

const form = document.getElementById("container-form") as HTMLFormElement;
const result = document.getElementById("result") as HTMLHeadingElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = parseFloat(
    (document.getElementById("amount") as HTMLInputElement).value
  );
  const fromCurrency = (document.getElementById("from") as HTMLSelectElement)
    .value;
  const toCurrency = (document.getElementById("to") as HTMLSelectElement).value;

  // FORMULA
  let FromAmount = currencies[fromCurrency];
  let ToAmount = currencies[toCurrency];

  let baseAmount = amount / FromAmount;
  let currency_exchanged = baseAmount * ToAmount;

  result.textContent = `${amount} ${fromCurrency} = ${currency_exchanged.toFixed(
    2
  )} ${toCurrency}`;
});
