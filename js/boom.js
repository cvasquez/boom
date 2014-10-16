// initialize client with app credentials
SC.initialize({
    client_id: '4c080ec8937fa1175751566017de15fc',
});

// Global variable for storing trackID number
var trackID

/* Supposedly a function that takes the data from the
  form element and stores it in a variable to use in
  the document.ready function */

function processFormData() {
var track_object = document.getElementById('track');

trackID = track_object.value;
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
