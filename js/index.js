let floatBtn = document.getElementsByClassName('floatBtn')[0];

window.onscroll = function(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)
        floatBtn.style.display = 'block';
    else
        floatBtn.style.display = 'none';
}

function toTop(){
    document.documentElement.scrollTop = 0;
}