function ExpandOrCollapse(){
  console.log("clicked")
 var menu = document.getElementById("menu");
 var status = menu.getAttribute("aria-expanded");
 if(status == "false")
 {
   menu.setAttribute("aria-expanded", "true");

 }
 else
 {
   menu.setAttribute("aria-expanded", "false");
 }
 var panel = document.getElementById("panel");
 menu.classList.toggle("active");
 if (panel.style.maxHeight) {
  panel.style.maxHeight = null;
} else {
  panel.style.maxHeight = panel.scrollHeight + "px";
} 
}