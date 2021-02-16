const regularExpression = /\w+@\w+\.+[a-z]/

const sendForm = document.getElementById('small-form').addEventListener('submit', function (e) {
    const nameInput = document.getElementById('inputName').value
    const emailInput = document.getElementById('emailInput').value

    if (nameInput === '' || emailInput === '') {
        alert('Los campos son obligatorios')
        return false
    }
    else if (!regularExpression.test(emailInput)) {
        alert('Escriba un email valido')
        return false
    }
    else if (regularExpression.test(emailInput)) {
        alert('Suscrito satisfactoriamente')
        return false
    }
    e.preventDefault()
})