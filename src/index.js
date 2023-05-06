function handleClick(){
    const menu = document.getElementById("menu");

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        // menu.style.justifyContent = "flex-end";
        menu.classList.add('myStyle');
        // menu.style.alignItems = "end";
    }else{
        menu.classList.remove('myStyle');
        menu.classList.add('hidden');
    }
}

// const clicked = document.getElementById("press");
// const menu = document.getElementById("menu");

// clicked.addEventListener('click', () => {
//     menu.style.display = "none" ? "flex" : "none"; 

// })