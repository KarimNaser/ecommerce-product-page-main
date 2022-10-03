// 	function to open nav
document.querySelector(".icon-menu").onclick = function() {
	document.querySelector("nav").style.width = "80%";
};
// Function to close nav
document.querySelector(".icon-close").onclick = function() {
	document.querySelector("nav").style.width = "0";
}
// make slideshow
let slideIndex = 1;
// using (Array.from) for converting nodelist to array and use what slideindex -> (i+1)what will you use
let slidesThumbs =document.querySelectorAll(".slides-thumbnail img");
for(let i = 0; i < Array.from(slidesThumbs).length; i++){
	slidesThumbs[i].addEventListener("click", function(){
		currentSlide(i+1);
	});
}
// declare currentslide to bind index 0f slidesThumbs to index of slides
function currentSlide(n){
	showSlides(slideIndex = n);
}
// slideIndex = 1 & you must invoke function here after declare slidesthumbs 
showSlides(slideIndex);

//move forward or back depend on click next btn or prev btn
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = function() {
	nextSlide(1);
}
prevBtn.onclick = function() {
	prevSlide(-1);
}
function nextSlide(n) {
	showSlides(slideIndex += n);
}
function prevSlide(n) {
	showSlides(slideIndex += n);
}
// the main function handling show slides
function showSlides(n) {
	let i;
	let slides = document.querySelectorAll(".slides img:not(.check-cart img)");
	if(n > slides.length){
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i = 0; i < slidesThumbs.length; i++){
		slidesThumbs[i].className = "";
	}
	slides[slideIndex- 1].style.display = "block";
	slidesThumbs[slideIndex - 1].className = "active";
}

let cartIcon = document.getElementById("icon-cart");
let checkCart = document.querySelector(".check-cart");
cartIcon.onclick = function() {
	if (checkCart.style.display =="block") {
		checkCart.style.display = "none";
	}else {
		checkCart.style.display = "block";
	}
}

// add to cart
let checkCartFinal = document.querySelector(".check-cart-final");
let checkBtn = document.querySelector(".check");
let input = document.querySelector(".addtocart input");


document.querySelector(".add").addEventListener("click", function () {
	if (input.value > 0) {
		makeCart(input.value);
	}
	if (input.value <= 0) {
		let txt = "Your cart is empty.";
		deleteCart(txt);
	}
})
function makeCart(n) {
	let totalPrice = n * 125;
	document.querySelector(".cart-count").style.display = "block";
	document.querySelector(".cart-count").innerHTML = n;
	document.querySelector(".empty-p").style.display = "none";
	document.querySelector(".check-cart-final").style.display = "flex";
	document.querySelector(".check-cart-final p").innerHTML = 
	`Fall Limted Edition Sneakers<br>$125.00 x <span style = "font-size:13px">${n}</span> <span style = "color : black;font-weight:700">$${totalPrice}.00</span>`
	checkBtn.style.display = "block";	
};

function deleteCart(txt) {
	document.querySelector(".empty-p").style.display = "block";
	document.querySelector(".check-cart-final").style.display = "none";
	checkBtn.style.display = "none";
	document.querySelector(".cart-count").style.display = "none";
}
document.getElementById("plus").addEventListener("click", function () {
	input.value++;
})
document.getElementById("minus").addEventListener("click", function () {
	input.value--;
})