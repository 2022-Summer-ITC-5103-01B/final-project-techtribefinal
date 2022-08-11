'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    for( let element of qsa(".flexed") ){
        element.style.display = "none";
    }

    for( let element of qsa(".dropdownHerbs") ){
        console.log(element);
        element.addEventListener("click",()=>{
            console.log(element.nextElementSibling);
            if(element.nextElementSibling.style.display == "none")
                element.nextElementSibling.style.display = "flex";
            else
                element.nextElementSibling.style.display = "none";
        })
    }
});