document.addEventListener('DOMContentLoaded', function () {
    // selecting the input field, button and audio
    const textToSpeechInput = document.getElementById('text-to-speech-input');
    const textToSpeechButton = document.getElementById('text-to-speech-button');
    const textToSpeechAudio = document.getElementById('text-to-speech-audio');

    // Text-to-Speech Feature
    textToSpeechButton.addEventListener('click', function() {
        // getting text from input
        const text = textToSpeechInput.value;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    });

     // Selecting all elements with class 'sample
     const samples = document.querySelectorAll('.sample');
     const samplesPerPage = 9;
     const totalSamples = samples.length;
     let currentPage = 1;

    updateNavigation();
    
    function updateNavigation() { //func for the navigation to update based on page
        samples.forEach((sample, index) => {
            const page = Math.ceil((index + 1) / samplesPerPage);
            if (page === currentPage) {
                sample.style.display = 'block';
            } else {
                sample.style.display = 'none';
            }
        });

        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === Math.ceil(totalSamples / samplesPerPage);
    }

    // navigation Arrows
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');

    // click event listeners to nav btns
    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateNavigation();
        }
    });

    nextPageButton.addEventListener('click', function() {
        if (currentPage < Math.ceil(totalSamples / samplesPerPage)) {
            currentPage++;
            updateNavigation();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            if (currentPage > 1) {
                currentPage--;
                updateNavigation();
            }
        } else if (event.key === 'ArrowRight') {
            if (currentPage < Math.ceil(totalSamples / samplesPerPage)) {
                currentPage++;
                updateNavigation();
            }
        }
    });
  // for stoping all audios
    function stopAllAudio() {
        samples.forEach(sample => {
            const audio = sample.querySelector('audio');
            audio.pause();
            audio.currentTime = 0;
        });
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
});