let choices = [
    {
        name: `Hockey`,
        description: `a fast contact sport played on an ice rink between two teams of six skaters, who attempt to drive a small rubber disk (the puck) into the opposing goal with hooked or angled sticks. `,
        imag_url:`/images/images.jpg` ,
    },
    {
        name: `Soccer`,
        description: `a game played by two teams of eleven players with a round ball that may not be touched with the hands or arms during play except by the goalkeepers. The object of the game is to score goals by kicking or heading the ball into the opponents' goal.`,
        imag_url: `/images/download.png`,
    },
    {
        name: `Football`,
        description: `a form of team game played with an oval ball on a field marked out as a gridiron. Points are scored mainly through touchdowns and field goals. Each side has eleven players on the field at any time.`,
        imag_url: `/images/diagram-of-hockey-positions_2_.webp`,
    }
]

function selection(details){  
let sport_opt = document.querySelectorAll(`.options`) 
selection[`innerHTML`] = `${details[`target`].getAttribute(`menu_value`)} Selected !`;
}
let Hock_but =document.getElementById(`Hockey_but`)
Hock_but.addEventListener(`click` , selection)
let Socc_but =document.getElementById(`Soccer_but`)
Socc_but.addEventListener(`click` , selection)
let Foot_but =document.getElementById(`Soccer_but`)
Foot_but.addEventListener(`click` , selection)
function sport_sel(details){
    Cookies.set(`Chosen_Sport` , details[`target`].getAttribute(`menu_value`));
}
let Sport_buttons = document.querySelectorAll(`.opstions`)
for(let i=0 ; i <Sport_buttons.length ; i++){
    Sport_buttons[i].addEventListener(`click` , Sport_buttons)
}

