var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
// Iteration 1.1
function updateSubtot(product) {
  let itemPrice = product.querySelector(".pu span").innerText;
  let quantity = product.querySelector(".qty input").value;
  let subTotal = itemPrice * quantity;
  product.querySelector(".subtot span").innerHTML = subTotal.toFixed(2); //subTotal toFixed is a string
  return subTotal; //subTotal is a number
}
// Iteration 1.2
function calcAll() {
  let total = 0;
  // document.querySelectorAll(".product").forEach(function(product) {
  //   totalPrice += updateSubtot(product);
  // });
  document.querySelectorAll(".product").forEach(function(productNode) {
    total += updateSubtot(productNode);
  });

  document.querySelector("h2 span").innerText = total;
}
$calc.onclick = calcAll;

//select all delete buttons

document.querySelectorAll(".btn-delete").forEach(function(button) {
  button.onclick = deleteProduct;
});

function deleteProduct(event) {
  const tr = event.currentTarget.parentNode.parentNode;
  const tbody = document.getElementsByTagName("tbody")[0];
  tbody.removeChild(tr);
}

function createProductNode(name, price) {
  const markup = `
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="pu">$<span>${price.toFixed(2)}</span></td>
  <td class="qty">
    <label>
      <input type="number" value="0" min="0" />
    </label>
  </td>
  <td class="subtot">$<span>0</span></td>
  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>`;
  const productNode = document.createElement("tr");
  productNode.innerHTML = markup;
  productNode.classList.add("product");
  productNode.querySelector("button").onclick = deleteProduct;
  document.querySelector("tbody").appendChild(productNode);
}

document.getElementById("create").onclick = function() {
  //function that creates a product
  const inputs = document.querySelectorAll(".new input");
  const productName = inputs[0].value;
  const productPrice = Number(inputs[1].value);
  console.log(productName, productPrice);

  inputs[0].value = "";
  inputs[1].value = 0;
};
