$(function() {

	var windowWidth = $(window).width();
	console.log(windowWidth);

	//display fade animation
	$('body').fadeMover();
	//初期状態では英語は表示しない
	$('span.en').hide();

	//仏語英語切り替え
	$('#en_text_on').click(function(){
		$('span.fr').hide();
		$('span.en').show();
	})
	$('#fr_text_on').click(function(){
		$('span.en').hide();
		$('span.fr').show();
	})

	//余韻をつけたイージングスクロール
	scrLength = 600;
    scrSpeed = 600;
    scrEasing = 'easeOutCirc';

    var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(mousewheelevent,function(e){
        e.preventDefault();
        var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
        if (delta < 0){
            scrSet =  $(document).scrollTop()+scrLength;
        } else {
            scrSet =  $(document).scrollTop()-scrLength;
        }
        $('html,body').stop().animate({scrollTop:scrSet},scrSpeed,scrEasing);
        return false;
    });

	//スムーズスクロール
	  $('a[href^="#"]').click(function(){
		    var speed = 500;
		    var href= $(this).attr("href");
		    var target = $(href == "#" || href == "" ? 'html' : href);
		    var position = target.offset().top;
		    $("html, body").animate({scrollTop:position}, speed, "swing");
		    return false;
	});

	//Topボタン
    var topBtn = $('#page-top');
    topBtn.hide();
    //scroll botton from 250
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //to top
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

	$('#lead').textillate({
	  //繰り返し
	  loop: true,
	  // アニメーションの間隔時間
	  minDisplayTime: 3000,
	  // アニメーション開始までの遅延時間
	  initialDelay: 1000,
	  // アニメーションの自動スタート
	      autoStart: true,

	      // 開始時のアニメーション設定
	  in: {
	    // エフェクトの指定
	    effect: 'fadeIn',
	    // 遅延時間の指数
	    delayScale: 1.5,
	    // 文字ごとの遅延時間
	    delay: 50,
	    // true:アニメーションをすべての文字に同時適用
	    sync: false,
	    // true:文字表示がランダムな順に表示される
	        shuffle: false
	      },

	      // 終了時のアニメーション設定
	  out: {
	    effect: 'fadeOut',
	    delayScale: 1.5,
	    delay: 50,
	    sync: false,
	    shuffle: false
	  }
	});
});




/* 各ブロックの高さを可変とする */
$(window).on('load resize', function(){
	var bW = $(window).width(); // 	ウインドウの横サイズ取得

	var about_area_width;		//概要
	var artists_area_width;		//プロフィール
	var artWork_area_width;
	var dateplace_area_width;
	var news_area_width;
	var contact_area_width;

	if(bW > 1024){
		about_area_width = bW - 450;
	}else{
		about_area_width = 700;
	}

	if(bW < 1250){
		artWork_area_width = bW + 850;
	}else{
		artWork_area_width = 2120;
	}

	$('.illustrator_name_in_artwork').css('width', bW-55 + 'px');
	//$('#about').css('height', about_area_width + 'px');
	$('#artworks').css('height', artWork_area_width + 'px');
});