<script src="https://player.vimeo.com/api/player.js"></script>   
<script>
const videoPlayers = Array.from(document.getElementsByClassName('video-player'));
const playButtons = Array.from(document.getElementsByClassName('play-button'));
const videoControlContainers = Array.from(document.getElementsByClassName('video-control-container'));
const muteButtons = Array.from(document.getElementsByClassName('mute-button'));
const mainBlockContainers = Array.from(document.getElementsByClassName('block-main-container'));
const underlays = Array.from(document.getElementsByClassName('underlay'));
const overlayImages = Array.from(document.getElementsByClassName('overlay-image'));
const overlays = Array.from(document.getElementsByClassName('overlay'));
const allQuotes = Array.from(document.getElementsByClassName('quote-box'));
const colorList = ['#8b91cc', '#eae796', '#b6cbaf', '#d29786', '#ac4f30', '#7b8d59', '#38768d', '#ecb651'];

const timeout = (index) => { setTimeout(() => {
            overlayImages[index].style.display = 'none';;
        }, 2000); 
        };

mainBlockContainers.forEach(async (container, index) => {
   const hashID = Math.floor(Math.random() * 500) + Math.floor(Math.random() * 500) + Math.floor(Math.random() * 500);
   const currentPlayer = videoPlayers[index];
   const currentQuote = allQuotes[index];
   const currentPlayBtn = playButtons[index];
   const currentMuteBtn = muteButtons[index];
   const currentOverlayImage = overlayImages[index];
   const currentOverlay = overlays[index];
   await container.setAttribute('key', hashID);
   await currentOverlayImage.setAttribute('key', hashID);
   await currentOverlay.setAttribute('key', hashID);
   await currentPlayBtn.setAttribute('key', hashID);
   await currentMuteBtn.setAttribute('key', hashID);
   await currentPlayer.setAttribute('key', hashID);
   await currentQuote.setAttribute('key', hashID);

   videoControlContainers[index].style.background = colorList[Math.floor(Math.random() * 8)];
});




overlays.forEach((container, index) => {
container.addEventListener('mouseover', (e)=> {
 if (e.target && e.target.attributes && e.target.attributes.key) {
  const selectedPlayer = videoPlayers.filter((p) => e.target.attributes.key.value == p.attributes.key.value)[0];
 if (selectedPlayer && selectedPlayer.paused) {
     selectedPlayer.load();
     selectedPlayer.play();
     overlayImages[index].style.animation = 'fadeOut 3s';
     timeout(index);
     
     const currentQuote = allQuotes.filter((q) => e.target.attributes.key.value == q.attributes.key.value)[0];

     currentQuote.style.display = 'flex';

  }
}
 });
});


underlays.forEach((container, index) => {
  container.addEventListener('mouseleave', (e) => {
if (e.target && e.target.attributes && e.target.attributes.key) {
     const currentQuote = allQuotes.filter((q) => e.target.attributes.key.value == q.attributes.key.value)[0];
    currentQuote.style.display = 'none';
    clearTimeout(timeout);
   overlayImages[index].style.display = 'block';
   overlayImages[index].style.animation = 'fadeInImage 3s';
    const selectedPlayer = videoPlayers.filter((p) => e.target.attributes.key.value == p.attributes.key.value)[0];
  if (selectedPlayer && !selectedPlayer.paused) {
     selectedPlayer.pause();
   selectedPlayer.muted = true;
   }
 }
});
});


const options = {
            width: 1,
            height: 1
        };


playButtons.forEach((btn, index) => {
 btn.addEventListener('click', (e) => {
if (e.target && e.target.attributes.key) {

     const selectedPlayer = videoPlayers[index];
       if (selectedPlayer && !selectedPlayer.paused) {
     selectedPlayer.pause();
   selectedPlayer.muted = true;
   }
      
      const id = e.target.attributes.id.value;
       const player = new Vimeo.Player(id, options);
                player.on('play', function () {
                    player.requestFullscreen().then(function () {
                    })
                });

                player.on('fullscreenchange', function () {
                    player.getFullscreen().then(function (fullscreen) {
                        if (!fullscreen) {
                            player.pause();
                        }
                    });
                });

                player.play();



}
 });
});

muteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
if (e.target && e.target.attributes && e.target.attributes.key) {
 const selectedPlayer = videoPlayers.filter((p) => e.target.attributes.key.value == p.attributes.key.value)[0];
  selectedPlayer.muted = !selectedPlayer.muted;
}
  });
});
</script>


<style>
.has-global-padding > .alignfull:where(:not(.has-global-padding)) > :where([class*="wp-block-"]:not(.alignfull):not([class*="__"]), p, h1, h2, h3, h4, h5, h6, ul, ol) {
padding-left: 0!important;
padding-right: 0!important;
}

video {
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.fade-out {
  animation: fadeOut 3s;
  -webkit-animation: fadeOut 3s;
  -moz-animation: fadeOut 3s;
  -o-animation: fadeOut 3s;
  -ms-animation: fadeOut 3s;
}

@keyframes fadeOut {
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
  }
}

@keyframes fadeOut {
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
  }
}

@-moz-keyframes fadeOut {
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
  }
}

@-o-keyframes fadeOut {
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
  }
}

@-ms-keyframes fadeOut {
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
  }
}




.fade-in {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% { 
   opacity: .75;
   transform: scale(.75);
 }
  100% { 
opacity: 1;
transform: scale(1);
display: block;
 }
}

@-moz-keyframes fadeIn {
  0% { 
   opacity: .75;
   transform: scale(.75);
 }
  100% { 
opacity: 1;
transform: scale(1);
 }
}

@-webkit-keyframes fadeIn {
  0% { 
   opacity: .75;
   transform: scale(.75);
 }
  100% { 
opacity: 1;
transform: scale(1);
 }
}

@-o-keyframes fadeIn {
  0% { 
   opacity: .75;
   transform: scale(.75);
 }
  100% { 
opacity: 1;
transform: scale(1);
 }
}

@-ms-keyframes fadeIn {
  0% { 
   opacity: .75;
   transform: scale(.75);
 }
  100% { 
opacity: 1;
transform: scale(1);
 }
}



.fade-in-image {
  animation: fadeInImage 5s;
  animation: fadeInImage 5s;
  -webkit-animation: fadeInImage 5s;
  -moz-animation: fadeInImage 5s;
  -o-animation: fadeInImage 5s;
  -ms-animation: fadeInImage 5s;
}

@keyframes fadeInImage {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@keyframes fadeInImage {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeInImage {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeInImage {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeInImage {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeInImage {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@media only screen and (max-width: 760px) {
.block-main-container {
   width: 90vw!important;
   height: 70vh!important;
 }
.underlay {
   width: calc(90vw + 1px) !important;
   height: calc(70vh + 1px) !important;
 }

.media-container {
   width: 90vw!important;
   height: 70vh!important;
 }
}
</style>