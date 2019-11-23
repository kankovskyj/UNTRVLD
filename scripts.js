// USER SETTINGS SHOW AND HREF TO TEMPLATE
$(".profileAvatar").click(function(){
    $(".profileAvatar").removeClass("profileAvatar").addClass("profileSettings").click(function(){
        $(this).attr("href", "https://www.facebook.com/honza.kankovsky")
    })
});
// RANDOM ADVENTURE LOCATION
$(".random").click(function(){
    divz = $('.divs');
  $(divz[Math.floor(Math.random()*divz.length)]).click()
  });
// BACK TO THE TOP BUTTON (firstPage.html)
$(".back-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $("head").offset().top
    }, 1000);
});
