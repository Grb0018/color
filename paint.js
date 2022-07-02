var allSvg = document.getElementById('draw').querySelectorAll('ellipse');
var Drawcolor = 0;
var no = 0;
var colors = document.getElementById('colors').querySelectorAll('span');
for(ellipse of allSvg){
    ellipse.addEventListener('click',(e)=>{
        if(no == 1){e.target.setAttribute('fill',Drawcolor)}
    })
}
for(span of colors){
    span.addEventListener('click',(e)=>{
        no = 1;
        var bgcolor = window.getComputedStyle(e.target).getPropertyValue('background-color');
        Drawcolor = bgcolor;  
        document.getElementById('text').style.color = bgcolor ;
        document.getElementById('draw').style.border = ` 0.7vw solid `+ bgcolor;
    })
}
