const products = document.querySelectorAll('.product');
const total = document.getElementById('total');

let totalPrice = 0;

products.forEach(product => {
  const price = parseFloat(product.querySelector('p').textContent.substring(8));
  const quantityInput = product.querySelector('input');
  const deleteButton = product.querySelector('.delete');
  const likeButton = product.querySelector('.like');

  quantityInput.addEventListener('change', () => {
    const quantity = parseInt(quantityInput.value);
    totalPrice += (quantity * price) - (quantityInput.dataset.previousQuantity * price);
    quantityInput.dataset.previousQuantity = quantity;
    total.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  });

  deleteButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    totalPrice -= quantity * price;
    total.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    product.remove();
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('clicked');
  });

  quantityInput.dataset.previousQuantity = quantityInput.value;
  totalPrice += price;
});

total.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
const form = document.querySelector('footer form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.querySelector('input[type="email"]').value;
  alert(`Thanks for subscribing with email: ${email}`);
});
