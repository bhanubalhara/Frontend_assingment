// Get all options and the total price span
const options = document.querySelectorAll('.option');
const totalPrice = document.getElementById('totalPrice');

options.forEach(option => {
  option.addEventListener('click', () => {
    // Remove 'active' class from all options and uncheck radios
    options.forEach(opt => {
      opt.classList.remove('active');
      opt.querySelector('input[type="radio"]').checked = false;
    });

    // Add 'active' to selected
    option.classList.add('active');
    option.querySelector('input[type="radio"]').checked = true;

    // Update total price based on selected option's data-price
    const price = option.getAttribute('data-price');
    totalPrice.textContent = `DKK ${price}.00`;
  });
});
