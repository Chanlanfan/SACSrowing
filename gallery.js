var imageThumbs = document.getElementById("image-thumbs");
for (var i = 1; i <= 10; i++) {
    var thumb = document.createElement("img");
}
thumb.src = "/images/regattas/buffaloselborne23" + i + ".jpg";
thumb.alt = "Image " + i;
thumb.classList.add("thumb");
imageThumbs.appendChild(thumb);