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





