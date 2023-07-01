// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Creating variables for current date and current hour (military time)
var currentDate = dayjs().format('dddd, MMMM DD');
var currentHour = parseInt(dayjs().format('HH'));
var rowEl = $('.row');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Creating a function to set color based on time, could not figure out issue with loop
  function setColor() {
    $(rowEl).each(function () {
      calendarHour = parseInt($(this).attr('data-number'));
      if (currentHour < calendarHour) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
      }
      else if (currentHour > calendarHour) {
        $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past');
      }
      else {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
      }
      console.log(currentHour);
      console.log(calendarHour);
    });
  }
  setColor();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Tried to create a local storage but could not figure out why all the values show as undefined.

  localStorage.setItem('9', JSON.stringify($('#hour-9 .description').val));
  localStorage.setItem('10', JSON.stringify($('#hour-10 .description').val));
  localStorage.setItem('11', JSON.stringify($('#hour-11 .description').val));
  localStorage.setItem('12', JSON.stringify($('#hour-12 .description').val));
  localStorage.setItem('13', JSON.stringify($('#hour-13 .description').val));
  localStorage.setItem('14', JSON.stringify($('#hour-14 .description').val));
  localStorage.setItem('15', JSON.stringify($('#hour-15 .description').val));
  localStorage.setItem('16', JSON.stringify($('#hour-16 .description').val));
  localStorage.setItem('17', JSON.stringify($('#hour-17 .description').val));


  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(currentDate);
});