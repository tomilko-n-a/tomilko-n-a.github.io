var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');


//ctx.fillRect(x, y, width, height);
//ctx.clearRect(0, 0, 400, 200); //стирает canvas
//ctx.fillStyle = 'white';
//ctx.fill();
//ctx.lineWidth = '5';
//ctx.strokeStyle = 'red';
//ctx.stroke();
//ctx.rect(50, 10, 100, 50);


var size = [50,50];
var step = [0,0]

var grid_size_x = 2;
var grid_size_y = 2;
var arr = [];
var border = 50;

function create_line(a0, b0, a1, b1, color){
    ctx.moveTo(a0 + border,b0 + border);
    ctx.lineTo(a1 + border,b1 + border);
    ctx.lineCap = 'round';
    ctx.lineWidth = '5';
    ctx.strokeStyle = color;
    ctx.stroke();
};

i = 1;
a = [step[0]*i + size[0]*i ,step[1]*i + size[1]*i];
b = [size[0]*(i+1),size[1]*(i+1)];
//create_line(a[0], a[1], b[0], b[1]);

//create_line(50,50,150,100)

function create_line_random(color){
    ax = size[0] * Math.round(Math.random()* (grid_size_x - 0) + 0);
    ay = size[1] * Math.round(Math.random()* (grid_size_x - 0) + 0);
    bx = size[0] * Math.round(Math.random()* (grid_size_x - 0) + 0);
    by = size[1] * Math.round(Math.random()* (grid_size_x - 0) + 0);
    create_line(ax, ay, bx, by, color);
};

max_glyph_lines = 7;

f1=function(){
    while ( i < 5){
        i++ ; 
        create_line_random('black');
    }
}


f=function(){ while ( i < max_glyph_lines){i++ ; create_line_random('black');}};
//f=function(){ f1(); i=i+1; if (i<7) setTimeout(f, "10"); };

f()







//while ( i < 5){i++ ; create_line_random('black');};
