// initialize client with app credentials
SC.initialize({
    client_id: '4c080ec8937fa1175751566017de15fc',
});

function processFormData() {
var track_object = document.getElementById('track');

var trackID = track_object.value;
}

$(document).ready(function(trackID) {
    // Select track for streaming
    SC.stream("/tracks/" + trackID, function(sound){

        // Play Button
        $('#startSound').click(function(e){
            e.preventDefault();
            sound.play();
        });

        //Stop button
        $('#stopSound').click(function(e){
            e.preventDefault();
            sound.stop();
        });
    });
});
