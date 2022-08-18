(function(){
    var leftBtn=document.getElementById('leftBtn1');
    var rightBtn =document.getElementById('rightBtn1');
    var ul=document.querySelector('.goods .goods-pic ul')
    var Lis=ul.children;
    var cloneLis=[];
    for(var i=0;i<5;i++){
        cloneLis[i]=Lis[i].cloneNode(true);
        ul.appendChild(cloneLis[i]);
    }
    var idx=0;
    var lock=true;
    rightBtn.onclick=function(){
        if(!lock) return;
        lock=false;
        ul.style.transition='transform .4s ease 0s';
        idx++;
        if(idx==10){
            setTimeout(function(){
                ul.style.transform='none';
                ul.style.transition='none';
                idx=0;
            },400)
        }
        ul.style.transform='translateX('+(-221)*idx+'px)';
        setTimeout(function(){
            lock=true;
        },400)
    }

    leftBtn.onclick=function(){
        if(!lock) return;
        lock=false;
        if(idx==0){
            ul.style.transform='translateX('+(-221)*10+'px)';
            ul.style.transition='none';
            idx=9;
            setTimeout(function(){
                ul.style.transition='transform .4s ease 0s';
                ul.style.transform='translateX('+(-221)*9+'px)';
            },0)
        }else{
            idx--;
            ul.style.transition='transform .4s ease 0s';
            ul.style.transform='translateX('+(-221)*idx+'px)';
        }
        setTimeout(function(){
            lock=true;
        },400)
    }
})()