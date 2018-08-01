window.onload = timeout;
function timeout() {
    window.setTimeout("redirect()", 6200)
}

function redirect() {
    window.location.href = "index.html"
    return;
}
