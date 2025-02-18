function mostrarErrorToast(mensaje) {
    const toast = document.createElement("div")
    toast.textContent = mensaje
    toast.classList.add('error-toast')
    toast.classList.add('show');

    const body = document.querySelector("body");
    body.appendChild(toast);

    setTimeout(function() {
        toast.classList.remove('show');
    }, 5000);
}

function mostrarOkToast(mensaje) {
    const toast = document.createElement("div")
    toast.textContent = mensaje
    toast.classList.add('ok-toast')
    toast.classList.add('show');

    const body = document.querySelector("body");
    body.appendChild(toast);

    setTimeout(function() {
        toast.classList.remove('show');
    }, 5000);
}