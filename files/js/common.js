// UTF-8

/* preload
------------------------------------------------------------------- */
$(function() {
  $(window).on('load', function() {
    $("body").removeClass("preload");
    setTimeout(function() {
      $("#loading .loadingInner svg").fadeIn();
    }, 1000);
    setTimeout(function() {
      $("#loading").addClass('completion');
    }, 2000);
    setTimeout(function() {
      $(".mainVCircle").addClass('active');
    }, 3000);
    setTimeout(function() {
      $(".mainVTextR").addClass('active');
      $(".secMainInner h2").addClass('active');
    }, 3500);
    setTimeout(function() {
      $(".mainVTextL").addClass('active');
      $(".secMainInnerTxt").addClass('active');
      $(".first-show").addClass('first-showOn');
      $(".ttl01 .anim").addClass('active');
      $(".ttl01 .anim_02").addClass('active_02');
    }, 3500);
    setTimeout(function() {
      $(".mainVCircleSub").addClass('active');
    }, 4000);
  });
});



/*----------------------------------------------
*
* 	スクロールでclass付与
*
----------------------------------------------*/
$(function() {
  $(window).scroll(function() {
    $(".anim").each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 6 ) {
        $(this).addClass("active");
      }
    });
    $(".anim_02").each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 6 ) {
        $(this).addClass("active_02");
      }
    });
    $(".show").each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 6 ) {
        $(this).addClass("showOn");
      }
    });
  });
});




/*----------------------------------------------
*
* 	pageTop
*
----------------------------------------------*/

$(function(){
    $(".pageTop").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $(".pageTop").fadeIn("fast");
        } else {
            $(".pageTop").fadeOut("fast");
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight();
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $(".pageTop").css({
                "position":"absolute",
                "bottom": footHeight + 1
            });
        } else {
            $(".pageTop").css({
                "position":"fixed",
                "bottom": "50px"
            });
        }
    });
    $('.pageTop').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});

/*----------------------------------------------
*
* 	scroll
*
----------------------------------------------*/

$(function(){
  $('.scroll a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


/*----------------------------------------------
*
* 	navBtn
*
----------------------------------------------*/


$('.headerNavBtn').on('click', function() {
  if ($(this).hasClass('active')) {
    $('.headerNavBtn').toggleClass('active');
    $('.gNav').addClass('off').removeClass('on');
  } else {
    $(this).addClass('active');
    $('.gNav').addClass('on').removeClass('off');
  }
});
$('.gNavInner a').on('click', function() {
  $('.gNav').removeClass('on');
  $('.headerNavBtn').removeClass('active');
});



/*----------------------------------------------
*
* 	bgPosition
*
----------------------------------------------*/

$(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 9;

  if(window.matchMedia && window.matchMedia('(max-device-width: 1024px)').matches){
    $('.secInnerBgImg').css('background-position', 'center center');
  } else if(bgPosition){
    $('.secInnerBgImg').css('background-position', 'center top -'+ bgPosition + 'px');
  }
});


/*----------------------------------------------
*
* 	instagram
*
----------------------------------------------*/

$(function(){
  $.ajax({
    type: 'GET',
    url: 'https://graph.facebook.com/v3.0/17841405514568029?fields=name%2Cmedia.limit(9)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cusername%7D&access_token=EAAEd5ZBYvABoBALuEBmXB9ZBuZAJZC6l2Bzvi0AOZCb6IA7Pn8UtHmCh3Fx58PBY6ncnJKbxNEdFNa44H7bjCqZC6Aea8C4HYYCvLonIg9CoNZCJ6sdWorIZBZCEkFr9gh3cCM3yZBhiuWhEEamHiAI6iS8K1x8xAwIwzXaQbv1ZAEhG94kz8HWd6ZBr',
    dataType: 'json',
    success: function(json) {
        var html = '';
        var insta = json.media.data;
        for (var i = 0; i < insta.length; i++) {
          html += '<div ><a href="' + insta[i].permalink + '" target="_blank"><img src="' + insta[i].media_url + '"></a></div>';
        }
          $("#instafeed").append(html);
    },
    error: function() {
    //エラー時の処理
    }
  });
});
