function openVideo(videoId, title, artist) {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("youtubeFrame");
    const modalTitle = document.getElementById("modalTitle");
    const modalArtist = document.getElementById("modalArtist");

    modalTitle.textContent = title;
    modalArtist.textContent = artist;

    frame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

    modal.classList.add("show");
}

function closeVideo() {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("youtubeFrame");

    frame.src = "";
    modal.classList.remove("show");
}


/* ESC */
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeVideo();
    }
});


/* 모달 바깥쪽을 클릭하면 닫기 */
document.addEventListener("click", function(event) {
    const modal = document.getElementById("videoModal");

    if (event.target === modal) {
        closeVideo();
    }
});