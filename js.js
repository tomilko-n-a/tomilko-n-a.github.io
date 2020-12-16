var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

var size = [50,50];

var grid_size_x = 2;
var grid_size_y = 2;
var border = 50;

function create_line(a0, b0, a1, b1, color){
    ctx.moveTo(a0 + border,b0 + border);
    ctx.lineTo(a1 + border,b1 + border);
    ctx.lineCap = 'round';
    ctx.lineWidth = '3';
    ctx.strokeStyle = color;
    ctx.stroke();
};

function create_line_random(color){
    ax = size[0] * Math.round(Math.random()* (grid_size_x - 0) + 0);
    ay = size[1] * Math.round(Math.random()* (grid_size_y - 0) + 0);
    bx = size[0] * Math.round(Math.random()* (grid_size_x - 0) + 0);
    by = size[1] * Math.round(Math.random()* (grid_size_y - 0) + 0);
    create_line(ax, ay, bx, by, color);
};

max_glyph_lines = 7;

var i = 1;
f=function(){ while ( i < max_glyph_lines){i++ ; create_line_random('black');}};

f()
