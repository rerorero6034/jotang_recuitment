
//轮播图动画
const imgs =['../public/轮播图1.jpg','../public/轮播图2.jpg','../public/轮播图3.jpg','../public/轮播图4.jpg','../public/轮播图5.jpg','../public/轮播图6.jpg','../public/轮播图7.jpg','../public/轮播图8.jpg']
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
    videoCover.className='videoCover videoCoverChange'//videoCoverChange的z-index值较小，会被video覆盖
    video.play()
})
videoCard.addEventListener('mouseleave',function(){
    video.pause()
    videoCover.className='videoCover'
})


//导航栏鼠标悬浮显示
let home = document.getElementById('home')
let fanju = document.getElementById('fanju')
let live = document.getElementById('live')
let gameCenter = document.getElementById('gameCenter')
let shop = document.getElementById('shop')
let comic =document.getElementById('comic')
let games = document.getElementById('games')
let download = document.getElementById('download')
let home1 = document.getElementById('home1')
let fanju1 = document.getElementById('fanju1')
let live1 = document.getElementById('live1')
let gameCenter1 = document.getElementById('gameCenter1')
let shop1 = document.getElementById('shop1')
let comic1 =document.getElementById('comic1')
let games1 = document.getElementById('games1')
let download1 = document.getElementById('download1')
home.addEventListener('mouseenter',function(){home1.style.display='block'})
home.addEventListener('mouseleave',function(){home1.style.display='none'})

fanju.addEventListener('mouseenter',function(){fanju1.style.display='block'})
fanju.addEventListener('mouseleave',function(){fanju1.style.display='none'})

live.addEventListener('mouseenter',function(){live1.style.display='block'})
live.addEventListener('mouseleave',function(){live1.style.display='none'})

gameCenter.addEventListener('mouseenter',function(){gameCenter1.style.display='block'})
gameCenter.addEventListener('mouseleave',function(){gameCenter1.style.display='none'})

shop.addEventListener('mouseenter',function(){shop1.style.display='block'})
shop.addEventListener('mouseleave',function(){shop1.style.display='none'})

comic.addEventListener('mouseenter',function(){comic1.style.display='block'})
comic.addEventListener('mouseleave',function(){comic1.style.display='none'})

games.addEventListener('mouseenter',function(){games1.style.display='block'})
games.addEventListener('mouseleave',function(){games1.style.display='none'})

download.addEventListener('mouseenter',function(){download1.style.display='block'})
download.addEventListener('mouseleave',function(){download1.style.display='none'})



//悬停保持
let hover = document.getElementsByClassName('hover')
for(let i=0;i<hover.length;i++){
    hover[i].addEventListener('mouseover',function(){
        hover[i].style.display='block'
    })
    hover[i].addEventListener('mouseleave',function(){
        hover[i].style.display='none'
    })
}