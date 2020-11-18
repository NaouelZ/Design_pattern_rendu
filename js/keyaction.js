document.addEventListener('keydown', function (e){
    if(imageManager.hasOwnProperty(e.code)){
        imageManager.execute(e.code)
    }
})

let imageManager = {
    image: document.querySelector('.twitter-picture'),
    ArrowUp: function () {
        var bounding = this.image.getBoundingClientRect();
        if (bounding.top <= 10) { 
            this.image.style.top = this.image.offsetTop + 20 + 'px'
        } else {
            this.image.style.top = this.image.offsetTop - 10 + 'px'
        }
    },
    ArrowLeft: function () {
        var bounding = this.image.getBoundingClientRect();
        if (bounding.left <= 10) {
            this.image.style.left = this.image.offsetLeft + 10 + 'px'
        } else {
        this.image.style.left = this.image.offsetLeft - 10 + 'px'
        }
    },
    ArrowRight: function () {
        var bounding = this.image.getBoundingClientRect();
        if ((bounding.right - 10) > (window.innerWidth || document.documentElement.clientWidth)) {
            this.image.style.left = this.image.offsetLeft - 10 + 'px'
        } else {
            this.image.style.left = this.image.offsetLeft + 10 + 'px'
        }
    },
    ArrowDown: function (){
        var bounding = this.image.getBoundingClientRect();
        if ((bounding.bottom - 10) > (window.innerHeight || document.documentElement.clientHeight)) {
            this.image.style.top = this.image.offsetTop - 10 + 'px'
        } else {
            this.image.style.top = this.image.offsetTop + 10 + 'px'
        }
    }
}

imageManager.execute = function (key) {
    let methodeName = imageManager[key]
    return methodeName.apply(imageManager)
}

var timing = 250;

function loop() {
  var image = document.querySelector('.twitter-picture');
  var value = Math.floor(Math.random()*4);
  var bounding = image.getBoundingClientRect();
  switch(value){
       case 0:
           if (bounding.top <= 10) { 
               image.style.top = image.offsetTop + 20 + 'px'
           } else {
               image.style.top = image.offsetTop - 10 + 'px'
           }
           break
       case 1:
           if (bounding.left <= 10) {
               image.style.left = image.offsetLeft + 10 + 'px'
           } else {
               image.style.left = image.offsetLeft - 10 + 'px'
           }
           break
       case 2:
           if ((bounding.right - 10) > (window.innerWidth || document.documentElement.clientWidth)) {
               image.style.left = image.offsetLeft - 10 + 'px'
           } else {
               image.style.left = image.offsetLeft + 10 + 'px'
           }
           break
       case 3:
           if ((bounding.bottom - 10) > (window.innerHeight || document.documentElement.clientHeight)) {
               image.style.top = image.offsetTop - 10 + 'px'
           } else {
               image.style.top = image.offsetTop + 10 + 'px'
           }
           break 
   }
  window.setTimeout(loop, timing);
}

document.querySelector('input[type="range"]').addEventListener('change', function (e) {
    timing = parseInt(this.value);
});

loop();
