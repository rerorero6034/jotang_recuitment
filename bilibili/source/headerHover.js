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


let video = document.getElementsByClassName('videoCover')
for(let i=0;i<video.length;i++){
    video[i].onclick='http://baidu.com'
}
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