function btn(){
    var elements = document.querySelectorAll('.paragraph');
    for (i = 1; i<=elements.length; i++) {
        var e = elements[i-1];
        if(e.innerText =='bar' + i){
            e.innerText = 'foo' + i;
        } else {
            e.innerText = 'bar' + i;
        }

        
    }
}