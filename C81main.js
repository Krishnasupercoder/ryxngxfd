canvas=document.getElementById("myCanvas")
abc=canvas.getContext("2d")
var colour="Cyan"
abc.beginPath()
abc.strokeStyle=colour
abc.lineWidth=2
abc.arc(200,200,40,0,2*Math.PI)
abc.stroke()
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
mouse_x= e.clientX-canvas.offsetLeft;
mouse_y= e.clientY=canvas.offsetTop;
console.log("x="+mouse_x)
console.log("y="+mouse_y)
circle(mouse_x,mouse_y)
}
function circle(mouse_x,mouse_y){
    abc.beginPath()
    abc.strokeStyle=colour
    abc.lineWidth=2
    abc.arc(mouse_x,mouse_y,40,0,2*Math.PI)
    abc.stroke()

}