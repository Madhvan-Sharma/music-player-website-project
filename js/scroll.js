$(document).on('click', '#scroll li', function(event) { 
	$("#icon a").click();
});


var lastId,
 topMenu = $("#scroll"),
 topMenuHeight = topMenu.outerHeight()+1,
 menuItems = topMenu.find("a"),
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });


$(window).scroll(function bind(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
      
       menuItems
         .parent().removeClass("selected")
         .end().filter("[href=#"+id+"]").parent().addClass("selected");
   }                   
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function smooth(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
		$("#icon a").click();
		$("#icon a").click();
		}
	  event.preventDefault();
    }
  });
});