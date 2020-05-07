let inp = document.getElementsByClassName('inp');
let psword = document.getElementsByClassName('psword');
let submit = document.getElementsByClassName('submit')

console.log(inp)
console.log(psword)
console.log(submit)
function changecode(){
    let str = 'ABCDabcd1234';
    let result = '';
    for(let i=0;i<4;i++){
        // 每一次循环都获取到一个随机的索引
        let ran = Math.round(Math.random()*11);
        // 再根据获取的索引从范围字符串里获取到对应的字符串；
        //再把对应的字符串拼接到结果中
       result += str.charAt(ran)
    }
    //再把结果放在验证码盒子里
    psword.innerHTML = result ;
    console.log(psword)
}
changecode()

submit.onclick = changecode

inp.onblur = function(){
    let val = inp.value;
    let word = psword.innerHTML;
    if(val.toLowerCase() === word.toLowerCase()){
        alert('验证正确')
    }else{
        alert('密码错误')
        changecode()
        inp.value = ''
    }
}
