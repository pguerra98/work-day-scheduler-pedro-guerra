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
  
