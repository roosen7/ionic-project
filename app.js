
const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector("ion-alert-controller");
const price = [];
const reason = [];
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: reason,
        datasets: [{
            data: price,
            borderColor: 'rgb(56, 128, 255)',
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
               }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
});

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = "";
    amountInput.value = "";
}

confirmBtn.addEventListener("click", () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <=0) {
        return;
    } else {
        price.push(enteredAmount);
        reason.push(enteredReason);
        chart.update();
    }
    const newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + ": " + enteredAmount + "€";

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener("click", clear);