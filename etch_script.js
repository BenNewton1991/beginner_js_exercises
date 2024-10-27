let color_picker_container = document.getElementById('pick_color');


let colors = [];
let squares = [];
let color = 'red';


for (let i = 0; i < 20; i++)
{
    colors[i] = create_color_pick_div();
}

function create_color_pick_div()
{
    let div = document.createElement('div');

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = 'rgb('+red+','+green+','+blue+')';

    div.style.backgroundColor = color;
    div.style.width = '10%'
    div.style.height = '50%';

    div.addEventListener('click', function(){
        set_color(color);
    })

    div.addEventListener('contextmenu', function(e){
        e.preventDefault();
        console.log('worked')
        remove_color(div);

    })

    return div;
}

function remove_color(div)
{
    div.style.backgroundColor = 'transparent';
}

function set_color(chosen_color)
{
    color = chosen_color;
}

for (let i = 0; i < 20; i++)
{
    color_picker_container.appendChild(colors[i]);
}

let etch_box = document.getElementById('etch_container');

for (let i = 0; i < 100; i++)
{
    squares[i] = create_grid(i);
    squares[i].addEventListener('click', function(){
        set_background_color(squares[i], color);
    })
    etch_box.appendChild(squares[i]);
    
    
}

function set_background_color(square, color)
{
    square.style.backgroundColor = color; 
    
}

function create_grid(id)
{
    let div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.height = '10%';
    div.style.width = '10%';
    div.setAttribute('id', id);

    return div;
}