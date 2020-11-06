let canvas = document.getElementById('draw');
var context = canvas.getContext("2d");

/*let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();*/
var points = new Array();
let paint = false;
let mouseX;
let mouseY;
var color = "rgb(0, 0, 0)";
var width = 5;

let offsetLeft = canvas.parentElement.parentElement.offsetLeft;
let offsetTop  = canvas.parentElement.parentElement.offsetTop;

function changeColor()
{
    color = this.value;
}

function changeWidth()
{
    width = this.value;
}

document.getElementById('color').onchange = changeColor;
document.getElementById('width').onchange = changeWidth;

document.getElementById('clear').addEventListener('click', function()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    clickX = [];
    clickY = [];
    clickDrag = [];
    context.beginPath();
}, false);

function start(e) {
    mouseX = e.pageX - canvas.offsetLeft - offsetLeft;
    mouseY = e.pageY - canvas.offsetTop - offsetTop;
    paint = true;
    context.beginPath();
    context.moveTo(mouseX, mouseY);
    points[points.length] = [mouseX, mouseY];
  };

function draw(e) {

    if (paint) {
      var mouseX = e.pageX - this.offsetLeft - offsetLeft;
      var mouseY = e.pageY - this.offsetTop - offsetTop;
      context.lineTo(mouseX, mouseY);
      context.stroke();
      context.strokeStyle = color;
      context.lineJoin = context.lineCap = 'round';
      context.lineWidth = width;
  
      points[points.length] = [mouseX, mouseY];
    }
  
}

function stop(e) {
    paint = false;
    var s = JSON.stringify(points);
    localStorage['lines'] = s;
  }

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);
  

/*canvas.addEventListener('mousedown',function (e){
    mouseX = e.pageX - this.offsetLeft - offsetLeft;
    mouseY = e.pageY - this.offsetTop - offsetTop;
    paint = true;
    addClick(mouseX, mouseY);
    redraw();
});

canvas.addEventListener('mousemove',function (e){
    if(paint){
        addClick(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop, true);
        redraw();
    }
});

canvas.addEventListener('mouseup',function (e){
    paint = false;
});

canvas.addEventListener('mouseleave',function (e){
    paint = false;
});
 
function addClick(x, y, dragging)
{
   clickX.push(x);
   clickY.push(y);
   clickDrag.push(dragging);
}

function redraw(){
   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
   context.strokeStyle = color;
   context.lineJoin = "round";
   context.lineWidth = width;

   for(var i=0; i < clickX.length; i++) {
       context.beginPath();
       if(clickDrag[i] && i)
       {
           context.moveTo(clickX[i-1], clickY[i-1]);
       }else
       {
           context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
   }
}*/