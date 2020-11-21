var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML= "100%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=.9;
	console.log("New speed is "+ video.playbackRate );
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.9;
	console.log("New speed is "+video.playbackRate );
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration-5){
		video.currentTime+=5;
	}
	else{
		video.currentTime = 0;
		console.log("Going back to beginning")
	}
	console.log(video.duration)
	console.log("Current location "+ video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		this.innerHTML = "Mute";
	}else{
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});


document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value/100;
	volume.innerHTML = this.value + "%"
	console.log(video.volume);

});

document.querySelector("#old").addEventListener("click", function(){
	video.classList.add("oldTime")
});

document.querySelector("#original").addEventListener("click", function(){
	video.classList.remove("oldTime")
});
