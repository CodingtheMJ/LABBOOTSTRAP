const modal1 = document.getElementById('modal1');
const modalInput = document.getElementById('modalInput');

modal1.addEventListener('shown.bs.modal', () => {
  modalInput.focus();
});
