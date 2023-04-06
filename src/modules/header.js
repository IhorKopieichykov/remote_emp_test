const header = document.querySelector('.header'); 
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (scrollTop >= headerHeight) {
    header.style.backgroundColor = 'rgba(39, 39, 41, 0.7)'; 
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
