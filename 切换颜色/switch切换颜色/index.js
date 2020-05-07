let changecolor = document.getElementById('changecolor');
let body = document.body;

changecolor.onclick = function(){
    let color = body.style.background;
    console.log(color);
    switch (color) {
        case "white":
            body.style.background = 'blue'
            break;
    
        case "blue":
            body.style.background = 'red'
            break;
    
        case "red":
            body.style.background = 'orange'
            break;
    
        default:
            body.style.background = 'white'
            break;
    }
}