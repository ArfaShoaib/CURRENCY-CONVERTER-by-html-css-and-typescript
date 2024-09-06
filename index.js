var currencies = {
    USD: 1, // BASE CURRENCY
    PKR: 277.69, // PAKISTANI RUPEE
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
var form = document.getElementById("container-form");
var result = document.getElementById("result");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("from")
        .value;
    var toCurrency = document.getElementById("to").value;
    // FORMULA
    var FromAmount = currencies[fromCurrency];
    var ToAmount = currencies[toCurrency];
    var baseAmount = amount / FromAmount;
    var currency_exchanged = baseAmount * ToAmount;
    result.textContent = "".concat(amount, " ").concat(fromCurrency, " = ").concat(currency_exchanged.toFixed(2), " ").concat(toCurrency);
});
