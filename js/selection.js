//i then assign a value to the cookies.get(`Selection`)
let Chosen_Sport = Cookies.get(`Selection`);
//i write an if loop that will check if its defined or not, and then add an html tag that will tell you if it worked
if (Chosen_Sport === undefined){
    document.body.insertAdjacentHTML(`afterbegin , <h2> Please Choose  A Sport </h2>`)
} else {
    document.body.insertAdjacentHTML(`afterbegin` , `<h2>you have chosen ${Chosen_Sport} as your sport</h2>`)
}
//i know this doesnt work and ive been trying to figure out why, i think its soemthing to do with the getAttribute function and me not understanding that
//my choices cookie works fine but my Selection returns null, i tried looking for what the getAttribute(``) should have in it iand ive tried different things and nothing seems to work so i probably missed a step with defining that 
