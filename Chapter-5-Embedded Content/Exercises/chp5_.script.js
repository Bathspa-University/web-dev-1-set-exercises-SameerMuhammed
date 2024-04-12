document.addEventListener('DOMContentLoaded', function () {
    // selecting all elements with the class ',sample
    const buttons = document.querySelectorAll('.sample');
    // variable for tracking the current running audio
    let currentAudio = null;

    buttons.forEach(button => {

        button.addEventListener('click', function() {

            const audioSrc = this.getAttribute('data-src');
            // create a new audio object with url source
            const audio = new Audio(audioSrc);
            
            // if there is an audio running and it is not the same one as the new audio then it will be paused and time reset
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            // to reset the playback of new audio and then run it
            audio.currentTime = 0;
            audio.play();
            currentAudio = audio;
        });
    });
});