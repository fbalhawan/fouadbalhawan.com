// scripts.js
let subtitles = [];
let videoID = '';
let player;

function loadVideo() {
    videoURL = document.getElementById('videoURL').value;
    videoID = videoURL.split('v=')[1];

    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `<div id="player"></div>`;
    
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: videoID,
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function addSubtitle() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const subtitleText = document.getElementById('subtitleText').value;

    const newSubtitle = { startTime, endTime, subtitleText };

    // Find the right position to insert the new subtitle
    const position = subtitles.findIndex(sub => sub.startTime > newSubtitle.startTime);

    if (position === -1) {
        // If the new subtitle's start time is after all existing subtitles, push it to the end.
        subtitles.push(newSubtitle);
    } else {
        // Otherwise, splice the array to insert the new subtitle at the right position.
        subtitles.splice(position, 0, newSubtitle);
    }

    renderSubtitles();
}

function renderSubtitles() {
    const subtitlesList = document.getElementById('subtitlesList');
    subtitlesList.innerHTML = ''; // Clear the current list
    
    subtitles.forEach((subtitle, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('subtitleItem');

        const content = document.createElement('span');
        content.innerText = `${subtitle.startTime} --> ${subtitle.endTime}: ${subtitle.subtitleText}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteSubtitle(index);
        });

        listItem.appendChild(content);
        listItem.appendChild(deleteButton);
        
        subtitlesList.appendChild(listItem);
    });
}

function deleteSubtitle(index) {
    subtitles.splice(index, 1);
    renderSubtitles();
}


function exportSRT() {
    let srtContent = "";
    for(let i = 0; i < subtitles.length; i++) {
        const subtitle = subtitles[i];
        srtContent += `${i+1}\n${subtitle.startTime} --> ${subtitle.endTime}\n${subtitle.subtitleText}\n\n`;
    }
    
    const blob = new Blob([srtContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'captions.srt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById('setStartTime').addEventListener('click', function() {
    const currentTime = player.getCurrentTime();
    document.getElementById('startTime').value = formatTime(currentTime);
});

document.getElementById('setEndTime').addEventListener('click', function() {
    const currentTime = player.getCurrentTime();
    document.getElementById('endTime').value = formatTime(currentTime);
});

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = ((time % 1) * 1000).toFixed(0);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')},${milliseconds.padStart(3, '0')}`;
}