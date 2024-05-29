const expenseform = document.getElementById("expense-form");
const expenselist = document.getElementById("expense-list");

expenseform.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const category = document.getElementById("select-item").value;
  const amount = document.getElementById("number").value;

  if (description && category && !isNaN(amount) && amount) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>`;
    expenselist.appendChild(newRow);

    document.getElementById("description").value = "";
    document.getElementById("select-item").value = "";
    document.getElementById("number").value = "";
  } else {
    alert("Please fill out all fields with valid data");
  }
});
