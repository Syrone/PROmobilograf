const lazyVideos = [].slice.call(document.querySelectorAll(".lazy-video"));

if ("IntersectionObserver" in window) {
	let lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(video) {
			if (video.isIntersecting) {
				for (let source in video.target.children) {
					let videoSource = video.target.children[source];
					if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
						videoSource.src = videoSource.dataset.src;
					}
				}

				video.target.load();
				video.target.classList.remove("lazy-video");
				lazyVideoObserver.unobserve(video.target);
			}
		});
	});

	lazyVideos.forEach(function(lazyVideo) {
		lazyVideoObserver.observe(lazyVideo);

		lazyVideo.addEventListener("click", function() {
      if (lazyVideo.paused) {
        lazyVideo.play();
        lazyVideo.setAttribute("controls", "controls");
        lazyVideo.classList.add("is-play");
      } else {
        lazyVideo.pause();
        lazyVideo.removeAttribute("controls");
        lazyVideo.classList.remove("is-play");
      }
    });
	});
}