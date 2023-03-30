
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
    //i then made a function to set a cookie named `selection` to record the funtion, i am a little confused on the getAttribute part and i think its the reason this wont work 
function Sport_sel(details){
    Cookies.set(`Selection` , details[`target`].getAttribute(`id`));
}
//i let a value be equal to a class of all the buttons
let Sport_buttons = document.querySelectorAll(`.options`)
//i then loop through all 3 buttons and add an event listener listening for a click to assign it a cookie
for(let i=0 ; i <Sport_buttons.length ; i++){
    Sport_buttons[i].addEventListener(`click` , Sport_sel)
}
//i let json.stringify the for loop and save it as `choices_json`
let choices_json = JSON.stringify(choices);
Cookies.set(`choices`, choices_json);
