window.addEventListener('DOMContentLoaded', function (event) {
    let regex = /^\s*\d+\s*$/;
    let b = document.getElementById("mybutt");
    b.addEventListener("click", function (event) {
        //let regex = /[./n]*/
        let income = document.getElementById("income");
        let duty = document.getElementById("duty");
        let solvency = document.getElementById("solvency");
        if (regex.test(income.value) && regex.test(duty.value))
            solvency.innerHTML = income.value * 0.8 - duty.value - 14000;
        else
            alert("Invalid input!");
        });
    });
