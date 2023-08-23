// Edit below lines

// Select the elements using querySelector with appropriate selectors
const status1 = document.querySelector('#book1 .status');
const reserve1 = document.querySelector('#book1 .reserve');
const checkout1 = document.querySelector('#book1 .checkout');
const checkin1 = document.querySelector('#book1 .checkin');

const status2 = document.querySelector('#book2 .status');
const reserve2 = document.querySelector('#book2 .reserve');
const checkout2 = document.querySelector('#book2 .checkout');
const checkin2 = document.querySelector('#book2 .checkin');

const status3 = document.querySelector('#book3 .status');
const reserve3 = document.querySelector('#book3 .reserve');
const checkout3 = document.querySelector('#book3 .checkout');
const checkin3 = document.querySelector('#book3 .checkin');

// Update the button properties and status color based on STATUS_MAP
function updateBookStatus(statusElement, reserveButton, checkoutButton, checkinButton, statusKey) {
    const statusInfo = STATUS_MAP[statusKey];
    statusElement.style.color = statusInfo.color;

    reserveButton.disabled = !statusInfo.canReserve;
    checkoutButton.disabled = !statusInfo.canCheckout;
    checkinButton.disabled = !statusInfo.canCheckIn;
}

updateBookStatus(status1, reserve1, checkout1, checkin1, 'overdue');
updateBookStatus(status2, reserve2, checkout2, checkin2, 'reserved');
updateBookStatus(status3, reserve3, checkout3, checkin3, 'shelf');
