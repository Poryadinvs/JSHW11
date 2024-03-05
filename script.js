const btnTry = document.querySelector('.try')
let secretNumber = Math.floor(Math.random() * 20) + 1
let userNumber = parseInt(document.getElementById("guessInput").value)
let difference = Math.abs(secretNumber - userNumber)

btnTry.onclick = () => {
    let userNumber = parseInt(document.getElementById("guessInput").value)
    let difference = Math.abs(secretNumber - userNumber)
    let mess
    if (difference <= 3) mess = "Горячо"
    else if (difference <= 7) mess = "Тепло"
    else if (difference <= 10) mess = "Холодно"
    else mess = "Очень холодно"
    alert(mess)
    console.log(`Пользователь :${userNumber}`);
    console.log(`Загадано :${secretNumber}`);
    if (userNumber === secretNumber)
        window.location.href = "end.html"
}


