// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  //step 1
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('input')
  //Step 2
  let priceValue = price.innerHTML;
  let quantityValue = quantity.value
  //Step 3
  let subtotalValue = (priceValue * quantityValue).toFixed(2);
  //Step 4
  const subtotalDisplay = product.querySelector('.subtotal span')
  //Step 5
  let subtotal = subtotalDisplay.innerHTML = `${subtotalValue}`

  return subtotalValue;
}

function calculateAll() {
  let totalPrice = 0;
  const allProductsFuncCall = [...document.getElementsByClassName('product')];
  allProductsFuncCall.forEach((el) => {
    updateSubtotal(el);
  });
  allProductsFuncCall.forEach((el) => {
    totalPrice += updateSubtotal(el);
  });
  console.log(totalPrice)
  const totalInHtml = document.querySelector('#total-value span');
  totalInHtml.innerHTML = `${totalPrice.toFixed(2)}`;





}

// 

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
