// UTF-8

/* preload
------------------------------------------------------------------- */



/*----------------------------------------------
*
* 	VEGAS BACKGROUND SLIDESHOW
*
----------------------------------------------*/
$(function() {
  //alert();
  $('.mainVImgL').vegas({
    slides: [
     { src: '/files/img/top/img_mainV01_01@2x.jpg' },
     { src: '/files/img/top/img_mainV01_02@2x.jpg' },
     { src: '/files/img/top/img_mainV01_03@2x.jpg' }
    ],
     delay: 7000,
     timer: false,
     transitionDuration: 3000,
     transition: [ 'flash' ],
     animation: 'kenburnsLeft'
  });
    $('.mainVImgR').vegas({
    slides: [
     { src: '/files/img/top/img_mainV02_01@2x.jpg' },
     { src: '/files/img/top/img_mainV02_02@2x.jpg' },
     { src: '/files/img/top/img_mainV02_03@2x.jpg' }
    ],
     delay: 7000,
     timer: false,
     transitionDuration: 3000,
     transition: [ 'flash' ],
     animation: 'kenburnsRight'
  });
});
