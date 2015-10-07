/* Exercise 2: Color picker */
function setPreviewColor(color) {
	console.log(color);
	$('.preview').css('background-color', color);
	var rgb = $('.preview').css("background-color");
	$('.color-code').text( rgb );
	return;
}



// setPreviewColor("purple");

$('#color').on({ 
	'keyup' : function() { setPreviewColor( $(this).val() ) }
});

function addBox(color) {
	// add a box to the beginning of colors
	var html = "<div class='item' style='background-color: " + color + ";'></div>";
	$('#colors').prepend(html);
}

$('#add-to-favorite').click(function(){
	var color = $('.preview').css('background-color');
	addBox(color);
});

var colors = [ "1abc9c", "2ecc71", "3498db", "9b59b6", "27ae60", "2980b9", 
"2c3e50", "f1c40f", "e67e22", "e74c3c", "d35400", "c0392b" ]
$.each(colors, function(index, element) {
  addBox(element);
});

random_position = Math.floor( Math.random() * colors.length );
setPreviewColor(colors[random_position]);