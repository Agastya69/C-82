canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var last_position_of_x, last_position_of_y;
color="cyan";
width_of_the_line=1;

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e)
{
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStlye=color;
        ctx.lineWidth=width_of_the_line;

        console.log("last position of x and y coordinates=");
        console.log("x="+last_position_of_x + "y="+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates=")
        console.log("x="+current_position_of_mouse_x+ "y="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}