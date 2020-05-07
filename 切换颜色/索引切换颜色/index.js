let changecolor = document.getElementById('changecolor');
let body = document.body;
let arycolor = ['white','blue','red','orange','yellow']
let i = 0;
changecolor.onclick = function(){
    i++;
    console.log(i);
    if(i>arycolor.length-1){
        i = 0;
    }
    body.style.background = arycolor[i]
}