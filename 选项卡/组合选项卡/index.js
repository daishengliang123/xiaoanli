function aaa() {
    let tab = document.getElementsByClassName('tab');
    console.log(tab)
    let tablist = document.querySelectorAll('.tab div')
    let box = document.getElementsByClassName('box');
    console.log(box)
    let boxlist = document.querySelectorAll('.box >div');


    for (let i = 0; i < tablist.length; i++) {
        tablist[i].onclick = function () {
            for (let j = 0; j < tablist.length; j++) {
                boxlist[j].style.display = 'none'
                tablist[j].className = ''

            }
            boxlist[i].style.display = 'block'

            tablist[i].className = 'active'
        }
    }

}
aaa()








function bbb() {
    let tab2 = document.getElementsByClassName('tab2');
    console.log(tab2);
    let tablist2 = document.querySelectorAll('.tab2 div')
    let box2 = document.getElementsByClassName('box2');
    console.log(box2);
    let boxlist2 = document.querySelectorAll('.box2 div');


    for (let i = 0; i < tablist2.length; i++) {
        tablist2[i].onclick = function () {
            for (let j = 0; j < tablist2.length; j++) {
                boxlist2[j].style.display = 'none'
                tablist2[j].className = ''

            }
            boxlist2[i].style.display = 'block'
            tablist2[i].className = 'active2'
        }
    }
}
bbb()