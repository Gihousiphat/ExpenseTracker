let expense = 0;
function getData() {
    let name = document.getElementById('name_textbox').value;
    let date = document.getElementById('date_box').value;
    let amount = document.getElementById('amount_box').value;
    let tableSection = document.getElementById('table');
    expense++;
    let newName = document.createElement('div');
    let newDate = document.createElement('div');
    let newAmount = document.createElement('div');
    let newButton = document.createElement('input');
    newButton.value = 'X';
    newButton.type = 'button';
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
}