const $ = selector => document.querySelector(selector); 

const setBorder = (elem, error) => {
    if (error) {
        elem.style.border = "2px solid red";
    } else {
        elem.style.border = "";
    }
}

const verify = () => {
    let isValid = true;

    const fname = $('#firstname')
    const fields = [
        $('#firstname'),
        $('#lastname'),
        $('#email'),
        $('#country'),
        $('#institution'),
        $('#educountry')
    ];

    fields.forEach(element => {
        if (element.value == '') {
            setBorder(element, true);
            isValid = false;
        } else {
            setBorder(element, false);
        }
    });

    if (isValid == true) {
        alert('Your application submitted successfully');
        $('form').reset();
        $('#validationMsg').textContent = '';
    } else {
        $('#validationMsg').textContent = 'Please fill all required fields';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    $('#submit').addEventListener('click', verify);
});