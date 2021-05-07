var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
 

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var color="black";
var width_line = 1;

canvas.addEventlistener("mousedown" , mymousedown);
function mymousedown()
{
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
mouseEvent="mousedown";
}


canvas.addEventlistener("mousemove" , mymousemove);
function mymousemove()
{
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
   current_position_of_mouse_y = e.clientY - canvas.offsetTop;

   if (mouseEvent == "mouseDown") { 
       ctx.beginPath();
       ctx.strokeStyle = color; 
       ctx.lineWidth = width_of_line;

       console.log("last position of x and y coordinates = ");
       console.log("x = " + last_position_of_x + "y = " + last_position_of_y );
       ctx.moveTo(last_position_of_x,last_position_of_y);

       console.log("current position of x and y coordinates = ");
       console.log("x = " + current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
       ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
       ctx.stroke();
}


last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;


}
canvas.addeventlistener("mouseup" , mymouseup);
function mymouseup()
{
mouseEvent="mouseup";
}

canvas.addeventlistener("mouseleave" , mymouseleave);
function mymouseleave()
{
mouseEvent="mouseleave";
}

