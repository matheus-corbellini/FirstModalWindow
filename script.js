'use strict';

const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
let currentModal = null;

//function to close modals
const closeModal = function () {
  if (currentModal) {
    currentModal.classList.add('hidden');
    overlay.classList.add('hidden');
    currentModal = null;
  }
};

// function to open modals
const openModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    currentModal = modal;
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};

// opening the different modals when clicking in it
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal');
    openModal(modalId);
  });
}

// closing modal when clicks 'X' buttom
for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', closeModal);
}

// closing modal when clicking in the overlay/outside the modal
overlay.addEventListener('click', closeModal);

// closing modal when clicking 'esc' in the keyboard
document.addEventListener('keydown', function (event) {
  if (
    event.key === 'Escape' &&
    currentModal &&
    !currentModal.classList.contains('hidden')
  ) {
    closeModal();
  }
});
