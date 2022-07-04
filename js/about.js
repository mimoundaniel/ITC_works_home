function success() {
    if (document.getElementById("textsend").value === "" || document.getElementById("textsend2").value === "" || document.getElementById("textsend3").value === "") {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}