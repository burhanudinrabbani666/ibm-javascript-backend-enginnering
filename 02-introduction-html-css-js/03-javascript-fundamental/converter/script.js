function converCelsiusToFahrenheit(event) {
    const celciusFormElement = document.getElementById("celsius");
    const fahrenheitFormElement =
        document.getElementById("fahrenheit");

    if (celciusFormElement.value === "") {
        alert("Required calsius values");
        return;
    }

    fahrenheitFormElement.value =
        (parseInt(celciusFormElement.value) * 9) / 5 + 32;
}

function convertKiloToPound() {
    const kiloFromElement = document.getElementById("kilo");
    const poundFromElement = document.getElementById("pound");

    if (kiloFromElement.value === "") {
        alert("Required kilo values");
        return;
    }

    poundFromElement.value = parseInt(kiloFromElement.value) * 2.2;
}

function convertKmToMiles() {
    const kmFromElement = document.getElementById("km");
    const milesFromElement = document.getElementById("miles");

    if (kmFromElement.value === "") {
        alert("Required kilo values");
        return;
    }

    milesFromElement.value = parseInt(kmFromElement.value) * 0.63217;
}
