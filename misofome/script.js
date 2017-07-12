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