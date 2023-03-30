let Chosen_Sport = Cookies.get(`Selection`);
if (Chosen_Sport === undefined){
    document.body.insertAdjacentHTML(`afterbegin , <h2> Please Chose  A Sport </h2>`)
} else {
    document.body.insertAdjacentHTML(`afterbegin` , `you have chosen ${Chosen_Sport} as your sport`)
}
