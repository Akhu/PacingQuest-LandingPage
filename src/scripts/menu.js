document.querySelector('.hamburger').addEventListener('click', () => {
  //document.querySelector('.nav-links').classList.toggle('expanded');

  let navLink = document.querySelector('.nav-links')
  console.log(navLink)
  navLink.classList.remove("w-0", "h-0", "opacity-0", "hidden");
  navLink.classList.add("w-screen", "h-screen", "opacity-100", "block");
});

document.querySelector('.close-menu').addEventListener('click', () => {
  
  let navLink = document.querySelector('.nav-links')
 // navLink.classList.toggle('expanded')
  navLink.classList.remove("w-screen", "h-screen", "opacity-100", "block");
  navLink.classList.add("w-0", "h-0", "opacity-0", "hidden");


});
//w-0 h-0 opacity-0
//w-screen h-screen opacity-100 