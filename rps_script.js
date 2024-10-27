let images = [];
let play_images = [];

images[0] = document.createElement('img');
images[0].setAttribute('src', './Images/rock.png');
images[0].style.objectFit = 'contain';
images[0].style.width = '100%';
images[0].style.height = '100%';
images[1] = document.createElement('img');
images[1].setAttribute('src', './Images/paper.png');
images[1].style.objectFit = 'contain';
images[1].style.width = '100%';
images[1].style.height = '100%';
images[2] = document.createElement('img');
images[2].setAttribute('src', './Images/scissors.png');
images[2].style.objectFit = 'contain';
images[2].style.width = '100%';
images[2].style.height = '100%';


let rock = document.getElementById('rock').appendChild(images[0]);
document.getElementById('paper').appendChild(images[1]);
document.getElementById('scissors').appendChild(images[2]);


let choice = 0;

function play_rock()
{
    set_display(0);
}

rock.addEventListener('click', function(){
    let player_option = 0; 
    set_display(player_option, 'image_container');
    let computer_option = computer_play();
    calculate_winner(player_option, computer_option);
});

paper.addEventListener('click', function(){
    let player_option = 1; 
    set_display(player_option, 'image_container');
    let computer_option = computer_play();
    calculate_winner(player_option, computer_option);
});

scissors.addEventListener('click', function(){
    let player_option = 2; 
    set_display(player_option, 'image_container');
    let computer_option = computer_play();
    calculate_winner(player_option, computer_option);
});

let player_score = 0;
let computer_score = 0; 

function set_winner_display(winner_output)
{
    let victor_container =  document.getElementById('victor_container');
    let winner = document.createElement('h2');
    let winner_string = "Winner: " + winner_output;
    let node = document.createTextNode(winner_string);
    winner.appendChild(node);

    let lastChild = victor_container.lastElementChild;

    if (lastChild)
    {
        victor_container.replaceChild(winner, lastChild);
    }
    else 
    {
        victor_container.appendChild(winner);
    }

    let player_score_div = document.getElementById('player_score');
    let player_score_text = document.createElement('h2');
    let player_score_string = "Player: " + player_score;
    let text_node = document.createTextNode(player_score_string);
    player_score_text.appendChild(text_node);

    let player_lastChild = player_score_div.lastElementChild;

    if (player_lastChild)
    {
        player_score_div.replaceChild(player_score_text, player_lastChild);
    }
    else 
    {
        player_score_div.appendChild(player_score_text);
    }


    let computer_score_div = document.getElementById('computer_score');
    let computer_score_text = document.createElement('h2');
    let computer_score_string = "Computer: " + computer_score;
    let computer_text_node = document.createTextNode(computer_score_string);
    computer_score_text.appendChild(computer_text_node);

    let computer_lastChild = computer_score_div.lastElementChild;

    if (computer_lastChild)
    {
        computer_score_div.replaceChild(computer_score_text, computer_lastChild);
    }
    else 
    {
        computer_score_div.appendChild(computer_score_text);
    }

    

}


function calculate_winner(player_option, computer_option)
{
    let winner_output;

    if (player_option == 0 && computer_option == 0)
    {
        winner_output = "Draw";
    }
    else if (player_option == 0 && computer_option == 1)
    {
        winner_output = 'Computer'
        computer_score ++;
    }
    else if (player_option == 0 && computer_option == 2)
        {
            winner_output = 'Player'
            player_score ++;
        }
    if (player_option == 1 && computer_option == 0)
    {
        winner_output = "Player";
        player_score ++;
    }
    else if (player_option == 1 && computer_option == 1)
    {
        winner_output = 'Draw'
    }
    else if (player_option == 1 && computer_option == 2)
    {
        winner_output = 'Computer'
        computer_score ++;
    }
    else if (player_option == 2 && computer_option == 0)
    {
        winner_output = "Computer";
        computer_score ++;
    }
    else if (player_option == 2 && computer_option == 1)
    {
        winner_output = 'Player';
        player_score ++;
    }
    else if (player_option == 2 && computer_option == 2)
    {
        winner_output = 'Draw';
    }

    set_winner_display(winner_output);
}

function computer_play()
{
    let computer_choice = Math.floor(Math.random() * 3);
    set_display(computer_choice, 'computer_image_container');
    return computer_choice;
}

function set_display(option, image_container)
{
    console.log('worked');
    const container = document.getElementById(image_container);
    const lastChild = container.lastElementChild;

    if (lastChild)
    {
        container.removeChild(lastChild);
    }

    if (option == 0 || option == 1 || option == 2)
    {
        const clone = images[option].cloneNode(true);
        container.appendChild(clone);    
    }
    
}
