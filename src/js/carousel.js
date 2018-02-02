// console.log(1);
class Carousel{
    constructor(imgs){
        this.wrap = document.querySelector('#wrap');
        this.images=imgs
        this.flag=0;
        this.init();
    }
     init(){
        this.loadJson();
        this.bindEvent();

    }
loadJson(){
           this.loadImage();
    }
loadImage(){
    let ul = document.createElement('ul');
    this.images.map((item,index)=>{
    this.createImage(item.url).then(oImg=>{
     let li = document.createElement('li');
        li.append(oImg);
        ul.append(li);
        console.log(li);
        });
    this.wrap.append(ul);
    })
}
 createImage(url){
    return new Promise((resolve,reject)=>{
        let oImg = new Image();
        oImg.onload=function(){
            resolve(oImg)
        }
        oImg.onerror=function(){
            reject('error') 
        }
         oImg.src=url;
    })
}
leftEvent(){
    this.leftBtn =this.createBtn('left');
    let _this = this;
      this.leftBtn.addEventListener('click',function(){
          let lis = document.querySelectorAll('ul li');
          _this.flag--;
          if(_this.flag<1){
              _this.flag=0;
          };
          [...lis].map(function(item,index){
             if(index==_this.flag){
                 item.style.display='block'
             }
                else{
                    item.style.display='none'
                }
          })

      });

}
rightEvent(){
    this.rightBtn = this.createBtn('right');
    let _this=this;
     this.rightBtn.addEventListener('click',function(){
          let lis = document.querySelectorAll('ul li');
          _this.flag++;
          console.log(_this.flag);
          if(_this.flag>lis.length-1){
              _this.flag=lis.length-1;
          }
          [...lis].map(function(item,index){
             if(index==_this.flag){
                 item.style.display='block'
             }
                else{
                    item.style.display='none'
                }
          })

      });
}
 createBtn(type){
    let span=document.createElement('span');
    let  i = document.createElement('i');
    if(type == 'left'){
        i.innerHTML='<';
       span.className = 'left';
    }
    else{
        i.innerHTML='>';
        span.className='right';
    }
    span.append(i);
    return span;
}
bindEvent(){
    this.leftEvent();
    this.rightEvent();
    this.wrap.appendChild(this.leftBtn);
    this.wrap.appendChild(this.rightBtn);
}
}
export default Carousel;
