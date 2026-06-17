function compute() {
    const principalVal = parseFloat(
        document.getElementById("principal").value,
    );
    const rateVal = parseInt(document.getElementById("rate").value);
    const yearsElement = parseInt(
        document.getElementById("years").value,
    );
    const year = new Date().getFullYear() + yearsElement;

    if (!principalVal || !rateVal || !year) {
        alert("All input required");
        yearsVal;
    }

    if (year <= 0) {
        alert("Year should be postive");
        yearsElement.focus();
    } else {
        const interest =
            (principalVal * yearsElement * rateVal) / 100;
        const amount = principalVal + parseFloat(interest);
        document.getElementById("result").innerHTML =
            `If you deposit $<mark>${principalVal}</mark>,<br> at an interest rate of <mark>${rateVal}%</mark><br> You will receive an amount of $<mark>${amount}</mark>,<br> in the year <mark>${year}</mark><br>`;
    }
}

function updateRate() {
    const rateval = document.getElementById("rate").value;
    document.getElementById("rateVal").innerHTML = rateval;
}
