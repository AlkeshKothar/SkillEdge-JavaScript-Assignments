// grabbing all id's we need
let amount = document.getElementById("amount")
let interest = document.getElementById("interest")
let years = document.getElementById("years")
let answer = document.getElementById("answer")
let calculate = document.getElementById("calculate")

//adding event listener
calculate.addEventListener('click', function() {
    let a = Number(amount.value);
    let b = Number(interest.value);
    let c = Number(years.value);

    // marking all req feilds
    if (a == "" || b == "" || c == "" && answer.value == "") {
        answer.value = "";
        alert("Please Enter all of Below \nPrincipal Amount \nRate of Interest\nYears")
    } else {
        answerfinal = (a * b * c) / 100;
        //if null is calculated, ans is null else ans
        answer.value = answerfinal;
        //resetting feild to emply after calcultae
        amount.value = '';
        interest.value = '';
        years.value = '';
    }
})