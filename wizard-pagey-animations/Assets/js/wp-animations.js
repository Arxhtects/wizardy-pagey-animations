jQuery(window).load(function () {
    //viewport function
	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();
		  
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		  
		return elementBottom > viewportTop && elementTop < viewportBottom;
    };

	$("section").each(function() {
	    if($(this).hasClass("animated-selector")) {
			$(this).find("div").addClass("animated-section");
        }
        //animate text
        if($(this).hasClass("animate-text")) {
            $(this).find("p").each(function() {
                $(this).contents().filter(function() {
                    return this.nodeType !== 1;  
                }).wrap('<div class="as-overflow-wrap inline-block"><div class="as-text-wrap animate-text">','</div></div>');
            });
            $(this).find("h1").each(function() {
                $(this).contents().filter(function() {
                    return this.nodeType !== 1;  
                }).wrap('<div class="as-overflow-wrap heading-fix"><div class="as-text-wrap animate-text">','</div></div>');
            });
            $(this).find("h2").each(function() {
                $(this).contents().filter(function() {
                    return this.nodeType !== 1;  
                }).wrap('<div class="as-overflow-wrap heading-fix"><div class="as-text-wrap animate-text">','</div></div>');
            });
            $(this).find("h3").each(function() {
                $(this).contents().filter(function() {
                    return this.nodeType !== 1;  
                }).wrap('<div class="as-overflow-wrap heading-fix"><div class="as-text-wrap animate-text">','</div></div>');
            });
            $(this).find("h4").each(function() {
                $(this).contents().filter(function() {
                    return this.nodeType !== 1;  
                }).wrap('<div class="as-overflow-wrap heading-fix"><div class="as-text-wrap animate-text">','</div></div>');
            });
            $(this).find("h5").each(function() {
                $(this).contents().filter(function() {
                    return this.nodeType !== 1;  
                }).wrap('<div class="as-overflow-wrap"><div class="as-text-wrap animate-text">','</div></div>');
            });
            $(this).find("h6").each(function() {
                $(this).contents().filter(function() {
                    return this.nodeType !== 1;  
                }).wrap('<div class="as-overflow-wrap"><div class="as-text-wrap animate-text">','</div></div>');
            });
            $(this).find(".btn").each(function() {
                $(this).wrap('<div class="as-overflow-wrap inline-block"><div class="as-text-wrap animate-text">','</div></div>');
            });
            $(this).find("br").remove();
            if($(this).find("ul")) {
                $(this).find("li").each(function(el) {
                    $(this).wrap('<div class="as-overflow-wrap inline-block"><div class="as-text-wrap animate-text">','</div></div>');
                });
            }
        }

        if($(this).hasClass("animate-boxes")) {
            $(this).find(".col").addClass("animate-box as-content-wrap");
			$(this).find(".col").each(function(el) {
				$(this).addClass("delay-" + (el + 1));
			});
        }

        if($(this).hasClass("image-animate-selector")) {
            $(this).find("img").parent().addClass("image-wrap animate-image");
        }

		if($(this).hasClass("delay-selector")) {
			$(this).find("div").each(function(el) {
				$(this).addClass("delay-" + (el + 1));
			});
        }

        if($(this).hasClass("delay-text-selector")) {
            $(this).find(".as-text-wrap").each(function(el) {
				$(this).addClass("delay-" + (el + 1));
            });
        }
    });

	var y = $(window).scrollTop();

	$(window).on("resize scroll", function() {
        $(".slider-counter").each(function() {
			if ($(this).isInViewport()) {
			    $(this).addClass("active");
			}   
        });
        $(".background-animate").each(function() {
			if ($(this).isInViewport()) {
			    $(this).addClass("animate-bg");
			} 
        });
		$(".animated-section").each(function() {
			if ($(this).isInViewport()) {
			    $(this).addClass("showactive");
			}
        });
        $(".scale-zoom").each(function() {
			if ($(this).isInViewport()) {
			    $(this).addClass("showactive");
			}
        });
        $(".as-text-wrap").each(function() {
			if ($(this).isInViewport()) {
			    $(this).removeClass("animate-text");
			}   
        });
        $(".as-content-wrap").each(function() {
            if($(this).isInViewport()) {
                $(this).removeClass("animate-box")
            }
        });
        $(".image-wrap").each(function() {
		    if ($(this).isInViewport()) {
		 	    $(this).removeClass("animate-image");
 	        }   
        });
    });
    
	$(window).scrollTop(y+1);
});