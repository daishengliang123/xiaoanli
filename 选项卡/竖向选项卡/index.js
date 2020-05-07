let btn = document.getElementsByClassName('button')
let btnlist = document.querySelectorAll('.button div')
console.log(btnlist)
let box = document.getElementsByClassName('box')
let boxlist = document.querySelectorAll('.box div')
console.log(boxlist)

for(let i=0; i<btnlist.length;i++){
    btnlist[i].onclick = function(){
        for(let j=0;j<btnlist.length;j++){
            boxlist[j].style.display = 'none';
            btnlist[j].className = '';
            boxlist[j].className = ''
            
        }
        boxlist[i].style.display = 'block';
        btnlist[i].className = 'active'
        boxlist[i].className = 'active2'
        
    }
   
}
