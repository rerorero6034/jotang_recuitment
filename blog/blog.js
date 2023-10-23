//百叶窗效果
let img = document.getElementsByClassName('img');
let intro = document.getElementsByClassName('intro')
for(let i =0;i<img.length;i++){
    img[i].onclick = function(){
     
    if(img[i].className=='img'){
        for(var j =0;j<img.length;j++){
            img[j].className='img';
            intro[j].style.display='none'
        }
        
        img[i].className='img change';
    }
    else{
        img[i].className='img';
    }
    intro[i].style.display='block'
}
}



//文章搜索
let search = document.getElementById('search');
let searchbutton = document.getElementById('searchButton')
let link = document.getElementsByClassName('link')
let searchResult = document.getElementById('searchResult')
let flag=0
searchbutton.onclick = function(){
    
    flag=0
    for(let i=0;i<link.length;i++){
        if(search.value===link[i].innerText){
            searchResult.innerText=(link[i].innerText);
            searchResult.href=link[i].href;
            flag=1;
        }
    }
    if(flag==0){
        alert('未找到相关结果')
    }
}

let done = document.getElementsByClassName('done')
let processCard = document.getElementsByClassName('processCard')
for(let i=0 ;i<done.length;i++){
    processCard[i].addEventListener('mouseover',function(){
        done[i].className='done doneChange'
    })
    processCard[i].addEventListener('mouseleave',function(){
        done[i].className='done'
    })
}

let left = document.getElementsByClassName('left')[0]
let buttonIntro = document.getElementsByClassName('buttonIntro')[0]
left.addEventListener('mouseover',function(){
    left.className='left leftChange'
    buttonIntro.style.display='block'

})
left.addEventListener('mouseleave',function(){
    left.className='left'
    buttonIntro.style.display='none'
})




let but1 = document.getElementById('posChange1')
let but2 = document.getElementById('posChange2')
let but3 = document.getElementById('posChange3')

but1.addEventListener('click',function(){
    window.scrollTo(0,0)
})
but2.addEventListener('click',function(){

    window.scrollTo(0,300)
})
but3.addEventListener('click',function(){

    window.scrollTo(0,1100)
})


but1.addEventListener('mouseover',function(){
    but1.className='buttonHover'
})
but1.addEventListener('mouseleave',function(){
    but1.className=''
})
but2.addEventListener('mouseover',function(){
    but2.className='buttonHover'
})
but2.addEventListener('mouseleave',function(){
    but2.className=''
})
but3.addEventListener('mouseover',function(){
    but3.className='buttonHover'
})
but3.addEventListener('mouseleave',function(){
    but3.className=''
})

