//Fatnav
(function() {
    
    $.fatNav();
    
}());

// prevent page scrolling when mobile menu is visible
$('.navbar-toggle').on('click', function() {
  $('body').toggleClass('no-scroll');
});

//Smooth Scroll


//Instafeed
    var imgs = [];
    var feed = new Instafeed({
        get: 'user',
        userId: '28298266',
        clientId: 'a0c2e607e3504a8a9cdf6efe8fbda0af',
        accessToken: '28298266.1677ed0.b0903fefe5904606b7e0608a1bebea55',
        resolution: 'standard_resolution',
        limit: 9,
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}"/></a>',
        success: function (data) {
            // read the feed data and create owr own data struture.
            var images = data.data;
            var result;
            for (i = 0; i < images.length; i++) {
                var image = images[i];
                result = this._makeTemplate(this.options.template, {
                    model: image,
                    id: image.id,
                    link: image.link,
                    image: image.images[this.options.resolution].url,
                });
                imgs.push(result);
            }
            //split the feed into divs
            $("#instafeed2").html(imgs.slice(0, 1));
            $("#instafeed3").html(imgs.slice(1, 2));
            $("#instafeed4").html(imgs.slice(2, 3));
            $("#instafeed5").html(imgs.slice(3, 4));
            $("#instafeed6").html(imgs.slice(4, 5));
            $("#instafeed7").html(imgs.slice(5, 6));
            $("#instafeed8").html(imgs.slice(6, 7));
            $("#instafeed9").html(imgs.slice(7, 8));
            $("#instafeed10").html(imgs.slice(8, 9));
        }
    });
    feed.run();

