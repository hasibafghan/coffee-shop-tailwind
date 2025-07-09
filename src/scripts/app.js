function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}




// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // right menu section IDs
  const dropdown_of_shop = document.querySelector('#dropdown');
  const toggle_for_dropdown = document.querySelector('#toggle')
  const menu_button_right_bars_3 = document.querySelector("#menu-button-right-bars-3");
  const offcanvas_of_right_menu = document.querySelector("#offcanvas-of-right-menu");
  const close_btn_of_right_menu_inside = document.querySelector("#close-btn-of-right-menu-inside");
  const blurOverlay = document.querySelector("#blur");
  // left menu section IDs 
  const menu_button_left_shopping_cart = document.querySelector("#menu-button-left-shopping-cart");
  const offcanvas_of_left_menu = document.querySelector("#offcanvas-of-left-menu");
  const close_btn_of_left_menu_inside = document.querySelector("#close-btn-of-left-menu-inside");
  
  // -----------------------------------------------

  // left side menu code 
  menu_button_left_shopping_cart.addEventListener('click' , function(){
    offcanvas_of_left_menu.style.visibility = 'visible';
    blurOverlay.classList.toggle('hidden')
  });


  close_btn_of_left_menu_inside.addEventListener('click' , function(){
    offcanvas_of_left_menu.style.visibility = 'hidden';
    blurOverlay.classList.toggle('hidden')
  });

  
  blurOverlay.addEventListener('click', function () {
    offcanvas_of_left_menu.style.visibility = 'hidden';
    blurOverlay.classList.remove('hidden')
  });


  // right side menu code 
  toggle_for_dropdown.addEventListener('click', function () {
    dropdown_of_shop.classList.toggle('hidden')
  });


  menu_button_right_bars_3.addEventListener('click', function () {
    offcanvas_of_right_menu.style.visibility = 'visible';
  });

  close_btn_of_right_menu_inside.addEventListener('click', function () {
    offcanvas_of_right_menu.style.visibility = 'hidden';
    blurOverlay.classList.toggle('hidden')
  });

  blurOverlay.addEventListener('click', function () {
    offcanvas_of_right_menu.style.visibility = 'hidden';
    blurOverlay.classList.remove('hidden')
  });

  menu_button_right_bars_3.addEventListener("click", function () {
    blurOverlay.classList.toggle("hidden"); // Show/Hide the overlay
  });

  // Optional: Click outside the menu to remove the blur
  blurOverlay.addEventListener("click", function () {
    blurOverlay.classList.toggle("hidden");
    outside_click_close_offcanvas.classList.toggle('hidden')
  });

});