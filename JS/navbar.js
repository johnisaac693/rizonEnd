
        function openSideBar() {
    var navbar = document.querySelector('.sidebar');
    var sidebarLogo = document.getElementById('sidebarlogo');

    if (navbar.style.display === 'none') {
      navbar.style.display = 'flex';
      sidebarLogo.innerHTML = '✖';
    } else {
      navbar.style.display = 'none';
      sidebarLogo.innerHTML = '☰'; 
    }
}
