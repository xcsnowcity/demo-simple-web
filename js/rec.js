(function () {
    var leftBtn = document.getElementById('leftBtn2');
    var rightBtn = document.getElementById('rightBtn2');
    var ul = document.querySelector('.nav5 .goods-pic ul');
    console.log(ul);
    var Lis = ul.children;
    var cloneLis = [];
    for (var i = 0; i < 3; i++) {
        cloneLis[i] = Lis[i].cloneNode(true);
        ul.appendChild(cloneLis[i]);
    }
    var idx=0;
    var lock=true;

    rightBtn.onclick=function(){
        if(!lock) return;
        lock=false;
        ul.style.transition='transform .6s ease 0s';
        idx++;
        if(idx==9){
            setTimeout(function(){
                ul.style.transform='none';
                ul.style.transition='none';
                idx=0;
            },600)
        }
        ul.style.transform='translateX('+(-368)*idx+'px)';
        setTimeout(function(){
            lock=true;
        },600)
    }

    leftBtn.onclick=function(){
        if(!lock) return;
        lock=false;
        if(idx==0){
            ul.style.transform='translateX('+(-368)*9+'px)';
            ul.style.transition='none';
            idx=8;
            setTimeout(function(){
                ul.style.transition='transform .6s ease 0s';
                ul.style.transform='translateX('+(-368)*8+'px)';
            },0)
        }else{
            idx--;
            ul.style.transition='transform .6s ease 0s';
            ul.style.transform='translateX('+(-368)*idx+'px)';
        }
        setTimeout(function(){
            lock=true;
        },600)
    }


})()
