var inputBill = document.querySelector('#bill');
var inputPeople = document.querySelector('#people');
var inputCustom = document.querySelector('#custom');
var allBtns = document.querySelectorAll('.btn');
var btn10 = document.querySelector('#btn10');
var amount = document.querySelector('#amount');
var total = document.querySelector('#total');

allBtns.forEach(button => {
    button.addEventListener("click", () => {
        const bill = parseFloat(inputBill.value) || 0;
        const people = parseFloat(inputPeople.value) || 1;
        if(button.value === "0.05"){
            var tipAmount05 = bill * 0.05;
            var totalAmount05 = (tipAmount05 + bill) / people;
           amount.innerHTML = '$' + tipAmount05.toFixed(2);
           total.innerHTML = '$' + totalAmount05.toFixed(2);
        }
        if(button.value ==="0.10"){
            var tipAmount10 = bill * 0.10;
            var totalAmount10 = (tipAmount10 + bill )/ people; 
            amount.innerHTML = '$' + tipAmount10.toFixed(2);
            total.innerHTML = '$' + totalAmount10.toFixed(2);
        }
        if(button.value === "0.15") {
            var tipAmount15 = bill * 0.15;
            var totalAmount15 = (tipAmount15 + bill) / people; 
            amount.innerHTML = '$' + tipAmount15.toFixed(2);
            total.innerHTML = '$' + totalAmount15.toFixed(2);
        }
        if(button.value === "0.25") {
            var tipAmount25 = bill * 0.25;
            var totalAmount25 = (tipAmount25 + bill) / people; 
            amount.innerHTML = '$' + tipAmount25.toFixed(2);
            total.innerHTML = '$' + totalAmount25.toFixed(2);
        }
        if(button.value === "0.50") {
            var tipAmount50 = bill * 0.25;
            var totalAmount50 = (tipAmount50 + bill) / people; 
            amount.innerHTML = '$' + tipAmount50.toFixed(2);
            total.innerHTML = '$' + totalAmount50.toFixed(2);
        } // the reset btn
        if (button.value === "reset"){  
            amount.innerHTML = '$' + "0.00";
            total.innerHTML = '$' + "0.00";
            inputBill.value = "0";
            inputPeople.value = "0";
        }
    })
});
function enter(element,e) {
    const people = parseFloat(inputPeople.value) || 1;
    const bill = parseFloat(inputBill.value) || 0;
    var cust = parseFloat(inputBill.value) || 0;
    var percCost = cust / 100;
    var tipAmountCus = bill * percCost;
    var totalAmountCus = (tipAmountCus + bill) / people;
    var charCode; 
    if(e && e.which){
        charCode = e.which;
    } else if (window.event){
        e = window.event;
        charCode = e.keyCode;
    } if(charCode === 13){
        amount.innerHTML = '$' + tipAmountCus.toFixed(2);
        total.innerHTML = '$' + totalAmountCus.toFixed(2);
    }
}
