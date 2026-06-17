function checkData(event) {
    event.preventDefault();

    const username = document.getElementById("name");
    const emailAddress = document.getElementById("email");

    if (username === "" || emailAddress === "") {
        return false;
    }
}
