// 补零操作
let addZero = val => {
    val = Number(val);
    return val < 10 ? "0" + val : val
}


// 字符串处理解决方法
// function formatTime(time) {
//     let ary = time.split(/(?: |-|:)/g);
//     //['2019','5','30','12','0','0']
//     console.log(ary);
//     //1.先获取年月日信息
//     //拼接成我们想用的格式
//     let result = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日'
//     result += '' + addZero(ary[3]) + ':' + addZero(ary[4]) + ':' + addZero(ary[5]);

//     return result
// }
// let time = '2019-5-30 12:0:0';
// // "2019年05月30日 12:00:00"；

// time = formatTime(time)
// console.log(time)



//日期对象形式 
function formatTime(time) {
    //把时间字符串变成标准日期对象
    time = time.replace(/-/g, '/');
    time = new Date(time);
    //基于方法获取年月日信息
    let year = time.getFullYear();
    let month = addZero(time.getMonth() + 1)
    let day = addZero(time.getDate());
    let hours = addZero( time.getHours());
    let minutes = addZero(time.getMinutes());
    let seconds = addZero(time.getSeconds());

    3 //返回想要的结果
    return year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds

}
let time = '2019-5-30 12:0:0';
time = formatTime(time);
console.log(time)
// =>2019年5月30日 12:00:00;











//万能方法

// String.prototype.formatTime = function formatTime(template) {
//     //初始化模板
//     typeof template ==='undefined' ? template = "{0}年{1}月{2}日 {3}:{4}:{5}" : null;
//     //this 我们要处理的字符串
//     //获取日期字符串中的数字信息
//     let matchAry = this.match(/\d+/g);
//     //模板和数据的渲染
//     template = template.replace(/{(\d+)}/g,(x,y)=>{
//         let val = matchAry[y] || '00';
//         val.length <2 ?val = '0' + val:null;
//         return val 
//     })
//     return template
// }

// let time = '2019-5-30 12:0:0';
// console.log(time.formatTime())
// =>"2019年05月30日 12:00:00"