/*
    Digital & Analogue Clock 
    
*/
$(document).ready(function () {
    //set clock time
    setInterval(function () { digitalClock() }, 1000);
    $(".format24").hide();

    //change digit clock format to 24H
    $("#btn_24").click(function () {
        $(".format12").hide();
        $(".format24").show();

    });
    //change digit clock format to 12H
    $("#btn_12").click(function () {
        $(".format24").hide();
        $(".format12").show();
        //setInterval(function () { digitalClock(true) }, 1000);
    });


    function digitalClock() {
        var currentTime = new Date();

        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();

        //Set Analogue Clock 
        $(".second_hand").css("transform", "rotate(" + (currentSeconds) * 6 + "deg)");
        $(".minute_hand").css("transform", "rotate(" + (currentMinutes) * 6 + "deg)");
        $(".hour_hand").css("transform", "rotate(" + (currentHours % 12) * 30 + "deg)");

        //set Digital clock
        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;


        // Choose either "AM" or "PM" as appropriate
        var timeOfDay = (currentHours < 12) ? "AM" : "PM";

        // Convert the hours component to 12-hour format if needed
        var currentHours_12 = (currentHours > 12) ? currentHours - 12 : currentHours;

        // Compose the string for display
        var currentTimeString_12 = currentHours_12 + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


        // Convert an hours component of "0" to "12"
        var currentHours_24 = (currentHours == 0) ? 12 : currentHours;
        // Compose the string for display
        var currentTimeString_24 = currentHours_24 + ":" + currentMinutes + ":" + currentSeconds;

        // Update the time display
        $(".format12").html(currentTimeString_12);
        $(".format24").html(currentTimeString_24);

    }
});