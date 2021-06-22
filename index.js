let box = document.querySelector(".box");
let menu = document.querySelector(".menu");
box.addEventListener("contextmenu", handleContextmenu);
document.body.addEventListener("click", handleClick);

function handleClick(e) {
  menu.style.display = "none";
}
function handleContextmenu(e) {
  e.preventDefault();
  menu.style.display = "flex";
  menuStyle = getComputedStyle(menu);
  console.log(menuStyle.height, menuStyle.width);
  menu.style.top = `${e.clientY}px`;
  menu.style.left = `${e.clientX}px`;
}
