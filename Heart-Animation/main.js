const bodyItem = document.querySelector("body")
bodyItem.addEventListener("mousemove", (e)=>{
 const xPosition= e.offsetX   
 const yPosition= e.offsetY   
 const spanItem = document.createElement("span")
 spanItem.style.left=xPosition + "px"
 spanItem.style.top=yPosition + "px"
 const size = Math.random()*100;
 spanItem.style.width= size + "px"
 spanItem.style.height= size + "px"
 bodyItem.appendChild(spanItem)
 setTimeout(()=> {
    spanItem.remove()
 },3000)
})