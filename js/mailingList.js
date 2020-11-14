var $form = $('form#email-form'),
    url = 'https://script.google.com/macros/s/AKfycbxJzu5rwm5OyVgi3cO1axLVVZn1y_36lzNQq6STldal9b0Byvs/exec'

$("input[type$='button']").on('click', function(e) {
    var x = document.forms["email-form"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
		e.preventDefault();
		modalError();
    }
	else {
		modal();
		  e.preventDefault();
		  var jqxhr = $.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: $form.serializeObject()
		  }).success(
			// do something
		  );
		}
})



// madhvan's web app url
// https://script.google.com/macros/s/AKfycbxJzu5rwm5OyVgi3cO1axLVVZn1y_36lzNQq6STldal9b0Byvs/exec