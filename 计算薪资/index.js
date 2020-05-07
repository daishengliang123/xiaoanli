let year = document.getElementById('year');
let money = document.getElementById('money');
let submit = document.getElementById('submit');
let num = document.getElementById('num');


submit.onclick = function () {
    let yearvalue = Number(year.value);
    let moneyvalue = Number(money.value);
    let result = null;
    if (isNaN(yearvalue) || isNaN(moneyvalue)) {
        alert('输入的是非有效数字');
        return
    }

    if (yearvalue < 1) {
        result = moneyvalue >= 8000 ? moneyvalue * 1.2 : moneyvalue
    } else if (yearvalue >= 1 && yearvalue < 2) {
        result = moneyvalue >= 10000 ? moneyvalue * 1.7 : moneyvalue * 1.5
    } else {
        result = moneyvalue >= 12000 ? moneyvalue * 3.5 : moneyvalue * 3
    }

    num.innerHTML = result;

}