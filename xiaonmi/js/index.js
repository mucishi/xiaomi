//同时引两个js,会有两个window.onload,一个会覆盖掉另一个，所以一般只引一个
window.onload = function () {
    let dot = document.querySelectorAll('.dot');
    let qwe = document.querySelectorAll('.qwe');
    let bigBox = document.querySelector('.bigBox');
    let leftBtn = document.querySelector('.leftBtn');
    let rightBtn = document.querySelector('.rightBtn');

//    提示   移入显示  移出 隐藏
    let listBox =document.getElementsByClassName('listBox')
    let lists=document.getElementsByClassName('lists');
        //记录当前显示的是哪个
    let index=0;
    let index1 = 0;
    //左边
    for (let i=0;i<listBox.length;i++){
            listBox[i].onmouseenter=function () {
                lists[index].style.display='none'
                lists[i].style.display='block';
                index=i;
            }
            listBox[i].onmouseleave=function () {
                lists[index].style.display='none'
            }
        }
//banner
    /*时间函数  setInterval
    下标  indexPic   记录当前窗口中显示的图片的下标
     */
    //轮播
    let t = setInterval(move,5000)
    function move() {
        index1++;
        if (index1 === qwe.length){
            index1 = 0;
        }
        qwe.forEach(function (element) {
            element.style.zIndex = 20;
        });
        dot.forEach(element => element.className = 'dot ');
        // dot.forEach(element => element.classlist.remove = 'hot');
        qwe[index1].style.zIndex = 899;
        // dot[index1].classList.add = 'hot';
        dot[index1].className= 'dot hot';
    }
    for (let i=0;i<dot.length;i++){
        dot[i].onclick = function () {
            for (let j=0;j<dot.length;j++){
                dot[j].className = 'dot';
                qwe[j].style.zIndex =20;
            };
            this.className = 'dot hot';
            qwe[i].style.zIndex = 999;
            index1 = i;
        }
    }
    bigBox.onmouseenter = function () {
        clearInterval(t);
    };
    bigBox.onmouseleave = function () {
         t = setInterval(move,2000)
    };
    leftBtn.onclick = function () {
        move1();
    }
    function move1() {
        index1--;
        if (index1 < 0 ){
            index1 = qwe.length-1;
        }
        qwe.forEach(function (element) {
            element.style.zIndex = 20;
        });
        // dot.forEach(element => element.classlist.remove = 'hot');
        dot.forEach(element => element.className = 'dot');
        qwe[index1].style.zIndex = 899;
        dot[index1].className = 'dot hot'
        // dot[index1].classList.add = 'hot'
    }
    rightBtn.onclick = function () {
        move()
    }

}

