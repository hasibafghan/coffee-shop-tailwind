function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

function DropDownMode() {
  document.querySelector('#toggle').addEventListener('click', () => {
    let toggle_mode = document.querySelector('#dropdown');
    if (toggle_mode.style.display == 'none') {
      toggle_mode.style.display = 'block';
    } else {
      toggle_mode.style.display = 'none';
    }
  })
}


  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-toggle"); // ID for your bars-3 icon
    const blurOverlay = document.getElementById("blur");
    const close_offcanvas = document.getElementById("x-mark")
    
    if (!menuButton || !blurOverlay) return;

    menuButton.addEventListener("click", function () {
      blurOverlay.classList.toggle("hidden"); // Show/Hide the overlay
    });

    // Optional: Click outside the menu to remove the blur
    blurOverlay.addEventListener("click", function () {
      blurOverlay.classList.add("hidden");
    });

    // close_offcanvas.addEventListener('click',function(){
    //     blurOverlay.classList.add("hidden");
    //     blurOverlay.classList.toggle("hidden");
    // })
  });