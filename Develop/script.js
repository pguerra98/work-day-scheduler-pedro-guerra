// The code below will display the current day

$(document).ready(function () {
  
  var m = moment();

  $("#CD").text(m.format("dddd, MMMM Do YYYY")); 
  
  $(".saveBtn").on("click", function () {
     
      console.log(this);

      var input = $(this).siblings(".description").val();

      var t = $(this).parent().attr("id"); 
      
      localStorage.setItem(t, input);

  })
  
  // The code below will save the information for each hour of the day on the local storage

  $("#hour8 .description").val(localStorage.getItem("hour8"));

  $("#hour9 .description").val(localStorage.getItem("hour9"));

  $("#hour10 .description").val(localStorage.getItem("hour10"));

  $("#hour11 .description").val(localStorage.getItem("hour11"));

  $("#hour12 .description").val(localStorage.getItem("hour12"));

  $("#hour13 .description").val(localStorage.getItem("hour13"));

  $("#hour14 .description").val(localStorage.getItem("hour14"));

  $("#hour15 .description").val(localStorage.getItem("hour15"));

  $("#hour16 .description").val(localStorage.getItem("hour16"));

  $("#hour17 .description").val(localStorage.getItem("hour17"));

   // The code below will determine the current hour and which hours to highlight as past and present
   
  function timetrack() {
      
      var hc = m.hour(); 
      
      $(".time-b").each(function () {

          var hb = parseInt($(this).attr("id").split("hour")[1]);

          console.log(hb, hc)

          if (hb < hc) {

              $(this).addClass("past");

              $(this).removeClass("future");

              $(this).removeClass("present");

          }

          else if (hb === hc) {

              $(this).removeClass("past");

              $(this).addClass("present");

              $(this).removeClass("future");

          }

          else {

              $(this).removeClass("present");

              $(this).removeClass("past");

              $(this).addClass("future");

          }

      })

  }

  timetrack(); 

})