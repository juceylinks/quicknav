const navSlider = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navigation-links');

  burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-action');
      burger.classList.toggle('toggle');    
  });

}
navSlider();

