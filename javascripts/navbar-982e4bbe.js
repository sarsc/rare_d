const updateNavbar = () => {
const navbar = document.querySelector('.navbar-rd');
  window.addEventListener('scroll', () => {
    if ( window.scrollY >= window.innerHeight) {
      navbar.classList.add('navbar-white')
    } else {
      navbar.classList.remove('navbar-white')
      }
  }
  )
};

export { updateNavbar };
