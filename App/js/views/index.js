import jqueryFullpage from '../lib/jquery.fullPage';

$(function() {
	var mindex = '';

        $('.fullPage').fullpage({
            scrollingSpeed: 500,
            //index.html#second 直接就是那个页面
            anchors: ['first', 'second', 'third', 'forth', 'fifth', 'sixth'],
            //showActiveTooltips: true,
            scrollBar: true,
            fitToSection: false,
            menu: '#menu',
            css3: true,
            autoScrolling: true,
            afterRender:function () {
                $("iframe").attr("src",applicationPath+"/Content/plugs/krpano/index.html");
            },
            // fixedElements:$(".index_panoramaBox"),
            // continuousVertical:true,
            afterLoad: function(index) {
                mindex = index;
                if(index === "first") {
                    $(".index_panorama_icons").css({
                        bottom: "0"
                    });
                }
                if(index === "second") {
                    $(".index_panorama_icons").css({
                        bottom: "-3.04rem"
                    });
                }
            },
        });
	$('.index_arrow').on('click', function() {
		$.fn.fullpage.moveSectionDown();
	})
	$(".iconBtn").on("click", function() {
		if(mindex === 'first') {
			$.fn.fullpage.moveSectionDown();
			$(".index_panorama_icons").css({
				bottom: "-3.04rem"
			});
		} else {
			console.log($($(this).attr('data-content')));
			var xxx = $(this).attr('data-content');

			$('.' + xxx).css({
				display: "block"
			}).siblings().css({
				display: "none"
			});
			console.log($('.' + xxx));
		}
     })
	
     $("#index_nav_logReg").click(function(){
			$("#register_hidden").css("display", "block");
		})

		$("#close_button").click(function() {
			$("#register_hidden").css("display", "none");
//			console.log($(this));
//			$(this).attr("data");
//			console.log(typeof($(this).attr("data")));
		})

})