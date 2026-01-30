/* script.js */
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    // Adds sticky class when scrolling down
    if (window.pageYOffset > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

function changeImage(src, element) {
    document.getElementById('mainProductImg').src = src;
    // Remove active class from all thumbnails
    document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
    // Add active class to clicked thumbnail
    element.classList.add('active');
}