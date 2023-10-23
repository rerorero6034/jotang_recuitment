
//轮播图动画
const imgs =['/public/轮播图1.jpg','/public/轮播图2.jpg','/public/轮播图3.jpg','/public/轮播图4.jpg','/public/轮播图5.jpg','/public/轮播图6.jpg','/public/轮播图7.jpg','/public/轮播图8.jpg']
let count = 0;

let dots = document.getElementById('dots')
for(let i = 0;i<imgs.length;i++){
    let newDot = document.createElement('span')
    newDot.className = 'dot'
    dots.appendChild(newDot)
}
dot = document.getElementsByClassName('dot')
let carousel = document.getElementById('carousel')
dot[0].className='dot dotChosen'
for(let i =0 ;i<imgs.length;i++){
    dot[i].onclick=function(){
        carousel.src=imgs[i]
        count = i;
        for(let j=0;j<imgs.length;j++){
            dot[j].className='dot'
        }
        this.className='dot dotChosen'
    }
}
for(let i=0;i<imgs.length;i++){
    dot[i].addEventListener('mouseover',function(){
        if(dot[i].className!='dot dotChosen')
        dot[i].className='dot dotHover'
    })
    dot[i].addEventListener('mouseleave',function(){
        if(dot[i].className!='dot dotChosen')
        dot[i].className='dot'
    })}


let previous = document.getElementById('previous')
let next = document.getElementById('next')
previous.onclick = function(){
    if(count==0){
        carousel.src=imgs[imgs.length-1]
    }
    else{
        carousel.src=imgs[count-1]
        count-=1
    }
    for(let j=0;j<imgs.length;j++){
        dot[j].className='dot'
    }
    dot[count].className='dot dotChosen'
}
next.onclick = function(){
    if(count==imgs.length-1){
        carousel.src = imgs[0]
        count=0
    }
    else{
        carousel.src=imgs[count+1]
        count+=1
    }
    for(let j=0;j<imgs.length;j++){
        dot[j].className='dot'
    }
    dot[count].className='dot dotChosen'
}

let t = setInterval(function(){
    if(count==imgs.length-1){
        carousel.src = imgs[0]
        count=0
        for(let j=0;j<imgs.length;j++){
            dot[j].className='dot'
        }
        dot[count].className='dot dotChosen'
    }
    else{
        count+=1
        carousel.src=imgs[count]
        for(let j=0;j<imgs.length;j++){
            dot[j].className='dot'
        }
        dot[count].className='dot dotChosen'
       
    }
},3000)





//视频卡鼠标悬停事件
let videoCover = document.getElementsByClassName('videoCover')[0]
let video = document.getElementById('theVideo')
let videoCard = document.getElementsByClassName('videoCard')[0]

videoCard.addEventListener('mouseover',function(){
    video.play()
    videoCover.className='videoCover videoCoverChange'//videoCoverChange的z-index值较小，会被video覆盖
})
videoCard.addEventListener('mouseleave',function(){
    video.pause()
    videoCover.className='videoCover'
})


