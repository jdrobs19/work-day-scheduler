function currentDay(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
};

let currentHour = moment().hours();

function renderDay(){
    $(".description").each(function(){
        let workHour = $(this).attr("id");
        $(this).val(localStorage.getItem(workHour));
    });
};

function scheduleColor(){
    $("textarea").each(function(){
        let thisHour = $(this).attr("id");
        let hourRow = parseInt(thisHour);
        if (hourRow === currentHour){
            $(this).addClass("present");
        }
        else if(hourRow < currentHour){
            $(this).addClass("past");
        }
        else{
            $(this).addClass("future");
        }
    });
};

$(".saveBtn").on("click", function(){
    let task = $(this).siblings(".description")
    .val();

    let hour = $(this).siblings(".description")
    .attr("id");

    localStorage.setItem(hour, task);
});

setInterval(currentDay, 1000);
scheduleColor();
setInterval(scheduleColor, (1000 * 60) * 15);
renderDay();