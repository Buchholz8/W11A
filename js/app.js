//here i made a object containing a name, description, and img_url
let choices = [
    {
        name: `Hockey`,
        description: `a fast contact sport played on an ice rink between two teams of six skaters, who attempt to drive a small rubber disk (the puck) into the opposing goal with hooked or angled sticks. `,
        img_url:`/images/images.jpg` ,
    },
    {
        name: `Soccer`,
        description: `a game played by two teams of eleven players with a round ball that may not be touched with the hands or arms during play except by the goalkeepers. The object of the game is to score goals by kicking or heading the ball into the opponents' goal.`,
        img_url: `/images/download.png`,
    },
    {
        name: `Football`,
        description: `a form of team game played with an oval ball on a field marked out as a gridiron. Points are scored mainly through touchdowns and field goals. Each side has eleven players on the field at any time.`,
        img_url: `/images/diagram-of-hockey-positions_2_.webp`,
    }
]
function Sport_sel(details){
    Cookies.set(`Selection` , details[`target`].getAttribute(`choices`));
}
let Sport_buttons = document.querySelectorAll(`.options`)
for(let i=0 ; i <Sport_buttons.length ; i++){
    Sport_buttons[i].addEventListener(`click` , Sport_sel)
}

let choices_json = JSON.stringify(choices);
Cookies.set(`choices`, choices_json);
