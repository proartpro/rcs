
function changeName(){
    var elem = document.querySelector('#barBaz');

    if (elem.innerText == 'bar') {
        elem.innerText = 'foo';
    }
    else {
        elem.innerText = 'bar';
    }
        

}