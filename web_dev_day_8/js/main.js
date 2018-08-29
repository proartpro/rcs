function changeName() {
    var element = document.querySelector('#bar');

    if (element.innerText == 'foo') {
           element.innerText = 'bar';
    } else {
        element.innerText = 'foo' ; 
    }
}


function button2() {
    var element = document.querySelector('#button2');

    if (element.innerText == 'bar') {
            element.innerText = 'foo';
    } else if (
        element.innerText == 'foo') {
            element.innerText = 'baz';
    } else {
        element.innerText = 'bar' ; 
    }
    
}


