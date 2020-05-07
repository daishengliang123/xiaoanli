let tab = document.getElementsByClassName('tab');
let tablist = document.querySelectorAll('.tab div');
let box = document.getElementsByClassName('box');
let boxlist = document.querySelectorAll('.box div');
console.log(tablist)
console.log(boxlist)

for(let i=0;i<tablist.length;i++){
    tablist[i].onclick = function(){
        for (let j = 0; j < tablist.length; j++) {
           boxlist[j].style.display = 'none'
           boxlist[j].className = '';
           tablist[j].className = ''
        }
        boxlist[i].style.display = 'block';
        tablist[i].className = 'active';
        boxlist[i].className = 'active';
    }
}