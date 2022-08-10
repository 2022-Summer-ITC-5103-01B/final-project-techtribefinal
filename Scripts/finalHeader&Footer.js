let qs = (selector) => document.querySelector(selector);
let qsa = (selector) => document.querySelectorAll(selector);

document.addEventListener('DOMContentLoaded', event => {
    qs('#aboutNav').addEventListener('click',()=>{
        // console.log('Clicked');
        // console.log(qs('#aboutNav .dropdown-content').style.display);
        if(qs('#aboutNav .dropdown-content').style.display == ''){
            // console.log('If ran');
            qs('#doctorsNav .dropdown-content').removeAttribute('style');
            qs('#aboutNav .dropdown-content').style.display = 'block';
        }
        else{
            // console.log("else ran");
            qs('#aboutNav .dropdown-content').removeAttribute('style');
        }
    })
    qs('#doctorsNav').addEventListener('click',()=>{
        // console.log('Clicked');
        // console.log(qs('#aboutNav .dropdown-content').style.display);
        if(qs('#doctorsNav .dropdown-content').style.display == ''){
            // console.log('If ran');
            qs('#aboutNav .dropdown-content').removeAttribute('style');
            qs('#doctorsNav .dropdown-content').style.display = 'block';
        }
        else{
            // console.log("else ran");
            qs('#doctorsNav .dropdown-content').removeAttribute('style');
        }
    })
})