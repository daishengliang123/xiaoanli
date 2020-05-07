let ul = document.getElementsByClassName('ul');
let liList = document.querySelectorAll('.ul li');


// for(let i=0;i<liList.length;i++){
//     let n = i%3;
//     if(n===0){
//         liList[i].style.backgroundColor = 'red'
//     }else if(n===1){
//         liList[i].style.backgroundColor = 'blue'
//     }else if(n===2){
//         liList[i].style.backgroundColor = 'yellow'
//     }
// }


// for(let i=0;i<liList.length;i++){
//     let n = i%3;
//     switch (n) {
//         case 0:
//             liList[i].style.backgroundColor = 'white'
//             break;
//         case 1:
//             liList[i].style.backgroundColor = 'blue'
//             break;
//         case 2:
//             liList[i].style.backgroundColor = 'red'
//             break;
//         default:
//             break;
//     }
// }



let ary = ['cred','cyellow','cwhite'];
for(let i=0;i<liList.length;i++){
    let n = i%3;
    liList[i].className = ary[n]
}