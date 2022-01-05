const amount = document.getElementById("amount");
const increment = document.getElementsByClassName("increment")[0];
const decrement = document.getElementsByClassName("decrement")[0];
const unit = document.getElementsByClassName("unit")[0];
const box = document.getElementsByClassName("box")[0];
const animationBubble = document.getElementsByClassName("animation-bubble")[0];
let toggleChoice = "unit";

const setCookies = () => {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toGMTString();
    document.cookie = `box=${0}` + "=" + value + expires + "; path=/";
    document.cookie = `unit=${0}` + "=" + value + expires + "; path=/";
}

window.onload = () => {
    const checkToggleBtn = getResultFromCookies(toggleChoice);
    if (!checkToggleBtn) {
        amount.innerText = 0;

    } else {
        amount.innerText = checkToggleBtn;

    }
}

unit.addEventListener("click", () => {
    toggleChoice = "unit";
    amount.innerText = getResultFromCookies(toggleChoice);
})
box.addEventListener("click", () => {
    toggleChoice = "box";
    amount.innerText = getResultFromCookies(toggleChoice);
})

const countUpOrDown = (action, number) => {
    number = parseInt(number);
    if (action === "increment") {
        return ++number;
    }
    return --number;
}

const getResultFromCookies = (toggleChoice) => {
    const cookieValue = document.cookie
        .split('; ')
        ?.find(row => row.startsWith(`${toggleChoice}=`))
        ?.split('=')[1] || 0;
    console.log(cookieValue);
    return cookieValue;
}

increment.addEventListener("click", () => {
    console.log(toggleChoice);
    const userResult = getResultFromCookies(toggleChoice);
    const amountResult = countUpOrDown("increment", userResult);
    document.cookie = `${toggleChoice}=${amountResult}`;
    amount.innerText = amountResult;
})

decrement.addEventListener("click", () => {
    console.log(toggleChoice);
    const userResult = getResultFromCookies(toggleChoice);
    const amountResult = countUpOrDown("decrement", userResult);
    document.cookie = `${toggleChoice}=${amountResult}`;
    amount.innerText = amountResult;
})

// Animation 
unit.addEventListener("click", () => {
    animationBubble.style.left = "0%";

})
box.addEventListener("click", () => {
    animationBubble.style.left = "60%";
})


