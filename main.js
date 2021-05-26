var mouse_event = "empty";
var last_x_position,last_y_position;

var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color = "black" ;
var linewidth = 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    linewidth=document.getElementById("width_line").value;
    mouse_event="mouseDown";
} 
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=linewidth;

        console.log("Last X and Y Position =");
        console.log("X ="+last_x_position + "Y =" + last_y_position);
        ctx.moveTo(last_x_position ,last_y_position);

        console.log("Current X and Y Position =");
        console.log("X ="+current_x_position + "Y =" + current_y_position);
        ctx.lineTo(current_x_position ,current_y_position);

        ctx.stroke();

    }

    last_x_position = current_x_position;
    last_y_position = current_y_position;
}
ctx.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseLeave";
}

ctx.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUp";
}
function CLEARAREA(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}