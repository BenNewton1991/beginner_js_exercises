let images = [];


function adder(a, b)
{
    return a + b;
}

console.log(adder(4, 2));
console.log(adder(3, 4));


images[0] = document.createElement('img');
images[0].setAttribute('src', './Images/burger.png');
images[0].setAttribute('width', '190');
images[0].setAttribute('height', '190');

images[1] = document.createElement('img');
images[1].setAttribute('src', './Images/duck.png');
images[1].setAttribute('width', '190');
images[1].setAttribute('height', '190');

images[2] = document.createElement('img');
images[2].setAttribute('src', './Images/smile.png');
images[2].setAttribute('width', '190');
images[2].setAttribute('height', '190');


document.getElementById("image_container").appendChild(images[0]);

let counter = 1;

document.getElementById("image_scroller").addEventListener("click", function()
{
    if (counter >= 3)
    {
        counter = 0;
    }

    document.getElementById('image_container').removeChild(document.getElementById('image_container').lastElementChild);

    document.getElementById('image_container').appendChild(images[counter]);
    counter ++;
})