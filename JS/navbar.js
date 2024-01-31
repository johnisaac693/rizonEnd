function openSideBar() {
    var navbar = document.querySelector('sidebar');
    var sidebarLogo = document.getElementById('sidebarlogo');

    if (navbar.style.display === 'none') {
      navbar.style.display = 'flex';
      sidebarLogo.innerHTML = '☰'; // Change this to the original text/content of the button
    } else {
      navbar.style.display = 'none';
      sidebarLogo.innerHTML = '✖'; 
    }
}