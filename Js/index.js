// Toogle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () =>{
  navbarNav.classList.toggle('active');
};

// Toogle untuk class active di search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toogle class active untuk shop-cart
const shopCart = document.querySelector('.shop-cart');
// Ketika shop di click
document.querySelector('#shop-button').onclick = (e) => {
  shopCart.classList.toggle('active');
  e.preventDefault();
};



// Klik di luar elemment
const hamburger = document.querySelector('#hamburger-menu');
const searchBar = document.querySelector('#search-button');
const shopButton = document.querySelector('#shop-button');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }

  if(!searchBar.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active')
  }

  if(!shopButton.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove('active')
  }

  if((!buttonDetailProduct1.contains(e.target) && !containerModal.contains(e.target)) && itemDetailModal.contains(e.target))  {
    itemDetailModal.style.display = 'none';
  }

  if(!buttonDetailProduct2.contains(e.target) && !containerModal_2.contains(e.target) && itemDetailModal_2.contains(e.target)) {
    itemDetailModal_2.style.display = 'none';
  }

  if(!buttonDetailProduct3.contains(e.target) && !containerModal_3.contains(e.target) && itemDetailModal_3.contains(e.target)) {
    itemDetailModal_3.style.display = 'none';
  }

  if(!buttonDetailProduct4.contains(e.target) && !containerModal_4.contains(e.target) && itemDetailModal4.contains(e.target)) {
    itemDetailModal4.style.display = 'none';
  }
});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const buttonDetailProduct1 = document.querySelector('.detail-product1-button');
const itemDetailModal_2 = document.querySelector('#item-detail-modal-2');
const buttonDetailProduct2 = document.querySelector('.detail-product-button-2');
const itemDetailModal_3 = document.querySelector('#item-detail-modal-3');
const buttonDetailProduct3 = document.querySelector('.detail-product-button-3');
const itemDetailModal4 = document.querySelector('#item-detail-modal-4');
const buttonDetailProduct4 = document.querySelector('.detail-product-button-4');
const containerModal = document.querySelector('.modal-container')
const containerModal_2 = document.querySelector('.modal-container-2')
const containerModal_3 = document.querySelector('.modal-container-3')
const containerModal_4 = document.querySelector('.modal-container-4');


buttonDetailProduct1.onclick = (e) => {
  itemDetailModal.style.display = 'flex';
  e.preventDefault();
}

buttonDetailProduct2.onclick = (e) => {
  itemDetailModal_2.style.display = 'flex';
  e.preventDefault();
}
buttonDetailProduct3.onclick = (e) => {
  itemDetailModal_3.style.display = 'flex';
  e.preventDefault();
}
buttonDetailProduct4.onclick = (e) => {
  itemDetailModal4.style.display = 'flex';
  e.preventDefault();
}

// Klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

document.querySelector('.modal-2 .close-icon').onclick = (e) => {
  itemDetailModal_2.style.display = 'none';
  e.preventDefault();
}

document.querySelector('.modal-3 .close-icon').onclick = (e) => {
  itemDetailModal_3.style.display = 'none';
  e.preventDefault();
}
document.querySelector('.modal-4 .close-icon').onclick = (e) => {
  itemDetailModal4.style.display = 'none';
  e.preventDefault();
}

// klik di luar
// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = 'none';
//   }
// }

// window.onclick = (e) => {
//   if (e.target === itemDetailModal_2) {
//     itemDetailModal_2.style.display = 'none';
//   }
// }

// window.onclick = (e) => {
//   if (e.target === itemDetailModal_3) {
//     itemDetailModal_3.style.display = 'none';
//   }
// }
