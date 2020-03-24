var navv = false
var off = 0
console.log(window.innerHeight + document.querySelector('.navcom').offsetTop + 200)

function navopen(offse) {
      var main = document.querySelector('.top');
      var nav = document.querySelector('.nav');
      var navcom = document.querySelector('.navcom');
      navcom.style.opacity = 0
      navcom.style.visibility = 'hidden';
      main.style.opacity = 0
      main.style.visibility = 'hidden';
      nav.style.visibility = 'visible';
      nav.style.opacity = 1
      window.scrollTo(0, 0);
      this.navv = true
      this.off = offse
}

function navclose() {
      var main = document.querySelector('.top');
      var navcom = document.querySelector('.navcom');
      var nav = document.querySelector('.nav');
      navcom.style.opacity = 1
      navcom.style.visibility = 'visible';
      nav.style.opacity = 0
      nav.style.visibility = 'hidden';
      main.style.visibility = 'visible';
      main.style.opacity = 1
      this.navv = false
      window.scrollTo(0, this.off);
}

window.onscroll = function() {
      if(this.navv === true) {
            window.scrollTo(0, 0);
      }
      if(window.scrollY >= 700) {
            var el = document.querySelector('.open')
            el.style.color = 'black'
      }
      if(window.scrollY >= document.querySelector('#about').offsetTop + 200) {
            document.querySelector('#about').style.opacity = 1
            console.log('work')
      }
      if(window.scrollY >= document.querySelector('#gallery').offsetTop + 200) {
            document.querySelector('#gallery').style.opacity = 1
            console.log('work')
      }
      else {

            var el = document.querySelector('.open')
            el.style.color = 'white'
      }
}
function timer() {
      var eventDay = new Date("Mar 25, 2020 8:00:00").getTime();
      var seconds;
      x = setInterval(function() {
          var now = new Date().getTime();
          var diff = eventDay - now;
          var days = Math.floor(diff / (1000 * 60 * 60 * 24));
          var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          seconds = Math.floor((diff % (1000 * 60)) / 1000);

          document.querySelector(".timer").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S "

          
      }, 1000);
      var now = new Date().getTime();
      if(eventDay <= now) {
          clearInterval(x);
          document.querySelector('.timer').innerHTML = 'started'
      }
  }

  timer()