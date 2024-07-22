const date = document.getElementById("date");
const day= document.getElementById("day");
const year= document.getElementById("year");
const month = document.getElementById("month");

  const today = new Date();

  const weekdays = ["sunday" , "Monday" ,  "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
  const allmonths = ["January" , "February" , "march" , "April" , "May" , "june" , "july" , "August" , "September" , "October" ,  "November" , "December"]

  date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
  day.innerHTML = weekdays[today.getDay()];
  year.innerHTML = today.getFullYear();
  month.innerHTML = allmonths[today.getMonth()];
