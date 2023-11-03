let expense = 0;
function getData() {
    let name = document.getElementById('name_textbox').value;
    let date = document.getElementById('date_box').value;
    let amount = document.getElementById('amount_box').value;
    if(name == '') {
        return window.alert("Please Fill Out All Fields");
    } else if(date == '') {
        return window.alert("Please Fill Out All Fields");
    } else if(amount == '') {
        return window.alert("Please Fill Out All Fields");
    }
    let tableSection = document.getElementById('table');
    expense++;
    let newName = document.createElement('div');
    let newDate = document.createElement('div');
    let newAmount = document.createElement('div');
    let newButton = document.createElement('input');
    newButton.value = 'X';
    newButton.type = 'button';
    newButton.addEventListener('click', removeData);
    newName.classList.add('table_input');
    newDate.classList.add('table_input');
    newAmount.classList.add('table_input');
    newName.id = `name${expense}`;
    newDate.id = `date${expense}`;
    newAmount.id = `amount${expense}`;
    newButton.id = `button${expense}`;
    newName.innerHTML = name;
    newDate.innerHTML = date;
    newAmount.innerHTML = amount;
    tableSection.appendChild(newName);
    tableSection.appendChild(newDate);
    tableSection.appendChild(newAmount);
    tableSection.appendChild(newButton);
    return;
}

function removeData(test) {
    expense--;
    const value = test.target.id;
    const numRegex = /\d+/;
    const num = value.match(numRegex);
    const number = num[0];
    const startTable = document.getElementById('table');
    const childName = document.getElementById(`name${number}`);
    const childDate = document.getElementById(`date${number}`);
    const childAmount = document.getElementById(`amount${number}`);
    const childButton = document.getElementById(`button${number}`);
    startTable.removeChild(childButton);
    startTable.removeChild(childName);
    startTable.removeChild(childDate);
    startTable.removeChild(childAmount);
    return;
}