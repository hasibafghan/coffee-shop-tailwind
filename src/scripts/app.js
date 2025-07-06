function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
let remain

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