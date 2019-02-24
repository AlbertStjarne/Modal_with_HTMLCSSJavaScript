// Get modal element
let modal = document.getElementById('simpleModal');
// Get open modal button
let modalBtn = document.getElementById('modalBtn');
// Get close button
let closeBtn = document.getElementById('closeBtn');

// Listen for click
modalBtn.addEventListener('click', openModal);

// Funtion to open modal
function openModal() {
  modal.style.display = 'block';
}