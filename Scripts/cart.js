let qs = (selector) => document.querySelector(selector);
let qsa = (selector) => document.querySelectorAll(selector);
// Shortcuts made to simplify querySelecting in JS file

// Hamburger for mobile navigation
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("mainNavigation");

// console.log(hamburger);
// console.log(navUL);

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
// Hamburger ends

// Array of cart item objects
let cartList = [
    {
        src : "./Image/bhring.png",
        alt : "Bhring Raj Sava Image",
        name : "Bhring Raj Sava",
        price : 5.00,
        id : 'brs',
        quantity : 1,
        sub : 5.00,
    },{
        src : "./Image/abhayrishta.png",
        alt : "Abhay Rishta Image",
        name : "Abhay Rishta",
        price : 7.50,
        id : 'ar',
        quantity : 1,
        sub : 7.50,
    },{
        src : "./Image/cepa.jpg",
        alt : "Alpum Cepa Image",
        name : "Alpum Cepa",
        price : 9.15,
        id : "ac",
        quantity : 1,
        sub : 9.15,
    },{
        src : "./Image/hyper.jpg",
        alt : "Hypericum Perforatum Image",
        name : "Hypericum Perforatum",
        price : 11.50,
        id : "hp",
        quantity : 2,
        sub : 23,
    }
];

// All code which should run when DOM content is loaded
document.addEventListener("DOMContentLoaded", (event) => {
    // Header about and doctors dropdown click event handlers
    qs('#aboutNav').addEventListener('click',()=>{
        if(qs('#aboutNav .dropdown-content').style.display == ''){
            qs('#doctorsNav .dropdown-content').removeAttribute('style');
            qs('#aboutNav .dropdown-content').style.display = 'block';
        }
        else{
            qs('#aboutNav .dropdown-content').removeAttribute('style');
        }
    })
    qs('#doctorsNav').addEventListener('click',()=>{
        if(qs('#doctorsNav .dropdown-content').style.display == ''){
            qs('#aboutNav .dropdown-content').removeAttribute('style');
            qs('#doctorsNav .dropdown-content').style.display = 'block';
        }
        else{
            qs('#doctorsNav .dropdown-content').removeAttribute('style');
        }
    })
    // Header event handlers end

    displayCartElements();


    // // Update Button
    // qs('#cartTotal > button:first-child').addEventListener('click',()=>{
    //     console.log('Click');
    //     for(cartItem of cartList){
    //         cartItem.quantity = qs(`#${cartItem.id}`).value;
    //         cartItem.sub = cartItem.quantity * cartItem.price;
    //         qs(`span.${cartItem.id}`).innerHTML = '$' + cartItem.sub;
    //     }
    //     calculateTotal();
    // })
    // Removed the 'Update Cart' button
});

// Calculates the total and updates Cart Totals at the bottom
let calculateTotal = () => {
    let subtotal = 0;
    for (cartItem of cartList){
        subtotal += cartItem.sub;
    }
    qs('#subtotal + span').innerHTML = roundToTwoDigits( subtotal );

    let tax = subtotal * 0.13;
    qs('#tax + span').innerHTML = roundToTwoDigits( tax );

    let total = subtotal + tax;
    qs('#total + span').innerHTML = roundToTwoDigits( total );
}

let displayCartElements = () => {
    let display = `
    <div id="gridContainer">

    <div></div>
    <div id="hideOnMobile"></div>
    <span>Product</span>
    <span>Price</span>
    <span>Quantity</span>
    <span>Subtotal</span>

    `;

    for(let cartItem of cartList){
        display += `
        <a href="#" id="${cartItem.id}cross"> <i class="bi bi-x"></i> </a>
        <img src=${cartItem.src} alt=${cartItem.alt}>
        <span>${cartItem.name}</span>
        <span>$${cartItem.price}</span>
        <span>
            <button class="btup" id="${cartItem.id}plus">+</button>
            <input type="text" id="${cartItem.id}" value="${cartItem.quantity}">
            <button class="btdown" id="${cartItem.id}minus">-</button>
        </span>
        <span class=${cartItem.id}>$${cartItem.sub}</span>`;
    }
    
    display += '</div>';
    qs('#dynamicCart').innerHTML = display;

    calculateTotal();

    // Adding event handlers to all the buttons
    for( let i in cartList){
        // Cross button
        qs(`#${cartList[i].id}cross`).addEventListener('click',event=>{
            event.preventDefault();
            cartList = cartList.filter( (element, index) => index != i );

            displayCartElements();
            // To display elements again and add event handlers again
        });

        // Add button
        qs(`#${cartList[i].id}plus`).addEventListener('click',()=>{
            cartList[i].quantity++;
            qs(`input#${cartList[i].id}`).value = cartList[i].quantity;

            cartList[i].sub = roundToTwoDigits( cartList[i].quantity * cartList[i].price );
            qs(`span.${cartList[i].id}`).innerHTML = '$' + cartList[i].sub;

            calculateTotal();
        });

        // Subtract button
        qs(`#${cartList[i].id}minus`).addEventListener('click',()=>{
            cartList[i].quantity--;
            qs(`input#${cartList[i].id}`).value = roundToTwoDigits( cartList[i].quantity );

            cartList[i].sub = roundToTwoDigits( cartList[i].quantity * cartList[i].price );
            qs(`span.${cartList[i].id}`).innerHTML = '$' + cartList[i].sub;

            calculateTotal();
        });
    }

}

let roundToTwoDigits = value => Math.round( value * 100 ) / 100;