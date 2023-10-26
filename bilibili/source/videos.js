//评论区实现
let commentArea = document.getElementById('commentArea')
let sentButton = document.getElementById('sentButton')
let comment = document.getElementById('typeComment')
let video = document.getElementsByClassName('video')
let theVideo = document.getElementById('theVideo')
dt = new Date()
let day = dt.getDate()
let mouth = dt.getMonth()+1
let year = dt.getFullYear()

let rateButton=document.getElementById('playRateButton')
let rate = document.getElementsByName('rate')
rateButton.addEventListener('click',function(){
    for(let i =0;i<rate.length;i++){
        if(rate[i].checked){
            theVideo.playbackRate=rate[i].value
        }
    }
    
})


addEventListener('scroll',function(){
    if (window.scrollY > 730) {
         video[0].className='video videoChange'
    }
    else{
        video[0].className='video'
    }
   
})

for(let i=1;i<sessionStorage.length;i=i+2)
{
    let commentContent = document.createElement('li')
    commentArea.appendChild(commentContent)
    commentContent.className='commentCard'
    let commentHead = document.createElement('div')
    commentHead.className='commenterHead'
    commentContent.appendChild(commentHead)

    let commenterName = document.createElement('div')
    commenterName.innerText='匿名用户'
    commenterName.className='commenterName'
    commentContent.appendChild(commenterName)
  
   
    let theComment = document.createElement('div')
    theComment.className='theComment'
    theComment.innerText=sessionStorage.getItem(i)
    commentContent.appendChild(theComment)

    let time = document.createElement('div')
    time.className='time'
    time.innerText=sessionStorage.getItem(i+1)
    theComment.appendChild(time)
}


sentButton.onclick=function a(){

    let commentContent = document.createElement('li')
    commentArea.appendChild(commentContent)
    commentContent.className='commentCard'
    let commentHead = document.createElement('div')
    commentHead.className='commenterHead'
    commentContent.appendChild(commentHead)

    let commenterName = document.createElement('div')
    commenterName.innerText='匿名用户'
    commenterName.className='commenterName'
    commentContent.appendChild(commenterName)
  
   
    let theComment = document.createElement('div')
    theComment.className='theComment'
    theComment.innerText=comment.value
    commentContent.appendChild(theComment)

    let time = document.createElement('div')
    time.className='time'
    time.innerText=year+'.'+mouth+'.'+day
    theComment.appendChild(time)
    sessionStorage.setItem((sessionStorage.length),comment.value)
    sessionStorage.setItem((sessionStorage.length),time.innerText)

    comment.value=''
    alert('发送成功')
}


//弹幕功能
let dan = document.getElementById('danSend')
let danButton = document.getElementById('danButton')
danButton.addEventListener('click',function(){
    let timer
    let span = document.createElement('span')
    span.innerText=dan.value
    video[0].appendChild(span)
    span.className='theDan'
    span.style.top=(Math.random()*50)+'vh'
    let num =0
    timer = setInterval(function () {
        num++;                   
        if (num > 90) {
            video[0].removeChild(span); 
            clearInterval(timer);
        }
        span.style.right = num + 'vh';
    }, 50)
    dan.value=''
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