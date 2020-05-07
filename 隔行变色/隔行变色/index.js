// 实参任意数求和
// function sum() {
//     let total = null
//     for (let i = 0; i < arguments.length; i++) {
//         let item = Number(arguments[i]);
//         if (isNaN(item)) {
//             continue
//         }
//         total += item;
//     }
//     return total
// }
// let total = sum(10, 20, 30)
// console.log(total)














let ul = document.getElementsByClassName('ul');
let liList = document.querySelectorAll('.ul li')

// for (let i = 0; i < liList.length; i++) {
//     // 变色
//     let originColor = i % 2 == 0 ? 'white' : 'red'
//     liList[i].style.background = originColor;

// // 滑动变色
//     liList[i].onmouseover = function () {
//         liList[i].style.background = 'blue'
//     }
//     liList[i].onmouseout = function () {
//         liList[i].style.background = originColor
//     }
// }


let ary = ['cred','cblue']
for(let i=0;i<liList.length;i++){
    let n = i%2
    liList[i].className = ary[n]
}