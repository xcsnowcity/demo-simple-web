(function(){
    var bgImage = document.querySelector('.bgimage ul');
    var idx=0;
    var cloneLi = bgImage.firstElementChild.cloneNode(true);
    bgImage.appendChild(cloneLi);
    var timer;
    var dots=document.querySelectorAll('.banner .dot ul li')

    function dot(){
        for(var i = 0;i<3;i++){
            if(i==idx%3){
                dots[i].className='current';
            }else{
                dots[i].className='';
            }
        }
    }

    timer=setInterval(function(){
        bgImage.style.transition='transform 0.5s ease 0s';
        idx++;
        dot();
        if(idx==3){
            setTimeout(function(){
                idx=0;
                bgImage.style.transform='none';
                bgImage.style.transition='none';
            },500)
        }
        bgImage.style.transform='translateX('+(-idx)*1355+'px)';
    },1500)

    bgImage.onmouseover=function(){
        clearInterval(timer);
    }

    bgImage.onmouseout=function(){
        timer=setInterval(function(){
            bgImage.style.transition='transform 0.5s ease 0s';
            idx++;
            dot();
            if(idx==3){
                setTimeout(function(){
                    idx=0;
                    bgImage.style.transform='none';
                    bgImage.style.transition='none';
                },500)
            }
            bgImage.style.transform='translateX('+(-idx)*1355+'px)';
        },1500)
    }

})()