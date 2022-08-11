$('#printInvoice').click(function(){
    Popup($('.jumbotron')[0].innerHTML);
    function Popup(data)
    {
        var ButtonControl = document.getElementById("printInvoice");
        window.print();
        return true;
    }

});