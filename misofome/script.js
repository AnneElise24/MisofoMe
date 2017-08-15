/*
var li = document.querySelectorAll("li")
for(var i=0; i<li.length ; i++){
	li[i].classList.remove("active")
	li[i].addEventListener("click", function(e){
		console.log(this);
	}) 
}

console.log(a);
*/


/*
function changeState() {
    var circle = document.getElementById('nav2');
    if (circle.class.match("unactive")) {
        circle.class = "active";
    } else {
        circle.class = "active";
    }
}
*/


$('ul li').click(function () {
    $(this).siblings().attr('class', 'inactive').end().toggleClass('inactive active');
});




/* Checkboxes hide and show */



/* text */
$("input[type='checkbox']#text").change(function() {
    if(this.checked) {
        $('div.cbtext').addClass("show");
        console.log("Voegt class toe");
    } else {
	    console.log("Verwijdert class");
	    $('div.cbtext').removeClass("show");
    }
    
});



/* video */
$("input[type='checkbox']#video").change(function() {
    if(this.checked) {
        $('div.cbvideo').addClass("show");
        console.log("Voegt class toe");
    } else {
	    console.log("Verwijdert class");
	    $('div.cbvideo').removeClass("show");
    }
    
});


/* audio */
$("input[type='checkbox']#audio").change(function() {
    if(this.checked) {
        $('div.cbaudio').addClass("show");
        console.log("Voegt class toe");
    } else {
	    console.log("Verwijdert class");
	    $('div.cbaudio').removeClass("show");
    }
    
});



/* foto's */
$("input[type='checkbox']#image").change(function() {
    if(this.checked) {
        $('div.cbimage').addClass("show");
        console.log("Voegt class toe");
    } else {
	    console.log("Verwijdert class");
	    $('div.cbimage').removeClass("show");
    }
    
});



/* Trigger */
$(document).ready(function() {
    $('input[type=radio][name=trigger]').change(function() {
        if (this.value == 'ja') {
	        $('div.triggertext').addClass("show");
            console.log("Voeg class toe aan radio");
        }
        else if (this.value == 'nee') {
	    	$('div.triggertext').removeClass("show");  
            console.log("Verwijder class");
        }
    });
});



/* Final  */
$(document).ready(function() {
    $(".delete1").click(function () {
        $(".figure1").addClass("hide");  
        console.log('werkt dit');
    });
});


/* Final  */
$(document).ready(function() {
    $(".delete2").click(function () {
        $(".figure2").addClass("hide");  
        console.log('werkt dit');
    });
});


/* Final  */
$(document).ready(function() {
    $(".delete3").click(function () {
        $(".figure3").addClass("hide");  
        console.log('werkt dit');
    });
});

