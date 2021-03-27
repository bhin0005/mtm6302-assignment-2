const imageAddresses = [
    "https://static.toiimg.com/thumb/msid-31346158,width-748,height-499,resizemode=4,imgsize-114461/.jpg",
    "https://cdn.britannica.com/36/162636-131-E4AA93A0/Colosseum-Rome-Italy.jpg",
    "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-chichen-itza.jpg.rend.hgtvcom.616.462.suffix/1491581548887.jpeg",
    "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-christ-the-redeemer.jpg.rend.hgtvcom.616.462.suffix/1491581548898.jpeg", 
    "https://deadline.com/wp-content/uploads/2020/10/money-heist-part-4-preview-netflix.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/qc_12.jpeg?.Pyl3OuYjfGDzyEqSOXmK38YKttjbT3s&size=770:433",
    "https://www.arabianbusiness.com/public/images/2019/05/29/Ferrari_SF90_Stradale_5.jpg",
    "https://cdn.motor1.com/images/mgl/MoVM6/s3/lamborghini-sc18-alston.webp",
    "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/g8x-individual/bmw-m3-m4-bmw-individual-special-paint-finishes-magazine-teaser.jpg",
    "https://static.toiimg.com/photo/72975551.cms",
    "https://www.imagescanada.ca/wp-content/uploads/2019/03/Spectacular-Photos-of-Niagara-Falls-Casinos.jpg",
    "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432"
     ]
    
    const imageDiscription = ["imgae1","imgae2","imgae3","imgae4","imgae5","imgae6","imgae7","imgae8","imgae9","imgae10","imgae11","imgae12"
    ]      
    const current = document.querySelector('#current');
    const imgs = document.querySelector('.thumbnail-imgs');
    const img = document.querySelectorAll('.thumbnail-imgs img');
    const head = document.querySelector('.head');
    
    
    const opacity = 0.6;
    
    img[0].style.opacity = opacity;
    
    current.src = imageAddresses[0];
    
    imgs.addEventListener('click', imgClick);
    
    function imgClick(e) {
      
      img.forEach(img => (img.style.opacity = 1));
      current.src = e.target.src;
      e.target.style.opacity = opacity;
    }
      
    document.querySelector(".dark").addEventListener("click", darkener);
    
    function darkener(){
        var dar1 = document.querySelector(".overlay").textContent;
    if(dar1==="LightMode"){
    current.classList.add('fade-in');
    dar1= document.querySelector(".overlay").textContent="Darkmode";
    document.querySelector(".dark").textContent="Lightmode";
    }
    else{
        current.classList.remove('fade-in');
        
    dar1= document.querySelector(".overlay").textContent="LightMode";
    document.querySelector(".dark").textContent="Darkmode";
    }
    }
        for (var i=0; i<4; i++) {
    img[i].src = imageAddresses[i];
        }
    var count = 0;
        document.querySelector("#Next").addEventListener("click", nextImages);
        
        function nextImages() {
          
          if (count >= 8) {
            count = 0;
            for (var i=0; i<4; i++) {
            
            img[i].src = imageAddresses[i+count];
            
          }
          } else {
            count +=4;
            for (var i=0; i<4; i++) {
            
            img[i].src = imageAddresses[i+count];
            
          }
          }
          
          
        }
        
        document.querySelector("#Prev").addEventListener("click", prevImages);
       
        function prevImages() {
               if (count == 0) {
                 count +=8;
            for (var i=0; i<4; i++) {
            
            img[i].src = imageAddresses[i+count];
            
          }
               } else {
                 count -=4;
                 for (var i=0; i<4; i++) {
            
            img[i].src = imageAddresses[i+count];
            
                    }
              }
        }