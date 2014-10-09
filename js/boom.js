// initialize client with app credentials
SC.initialize({
    client_id: '4c080ec8937fa1175751566017de15fc',
});

$(document).ready(function() {
    // Select track for streaming
    SC.stream("/tracks/293", function(sound){

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
