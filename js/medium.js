function ExpandOrCollapse(){
  var panel = document.getElementById("panel");
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

 menu.classList.toggle("active");
 if (panel.style.maxHeight) 
  {
    panel.style.maxHeight = null;
  } 
else 
  {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
}