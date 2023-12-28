const mousemove = document.getElementById('mousemove');
window.addEventListener("mousemove",(e)=>{
    mousemove.style.left = e.pageX +"px";
    mousemove.style.top = e.pageY +"px";
})