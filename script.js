var addBtn = document.getElementById("add");
var monthBtn = document.getElementById("month-title");
var dateBtn = document.getElementById("date-title");
var calendar = document.getElementById("calendar");
var currentDayBtn;

const d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","September"];
var timeData = {
    whichDay: days[d.getDay()],
    whichMonth: months[d.getMonth()],
    whichYear: d.getFullYear(),
    whichDate: d.getDate(),
    whichTime: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}
var totalTimeFormat = `${timeData.whichTime} ${timeData.whichDay}, ${timeData.whichMonth} ${timeData.whichDate}, ${timeData.whichYear}`;

// load month title
monthBtn.innerHTML = `${timeData.whichMonth}`;
dateBtn.innerHTML = `${timeData.whichDay}, ${timeData.whichMonth} ${timeData.whichDate}, ${timeData.whichYear}`;


function addDays(num) {
    var mLength;
    if (timeData.whichMonth === "January") {
        mLength = 31;
    } else if (timeData.whichMonth === "February" && ((+timeData.whichYear - 2012)/4).indexOf(".") < 0) {
        mLength = 29;
    } else if (timeData.whichMonth === "February" && ((+timeData.whichYear - 2012)/4).indexOf(".") != -1) {
        mLength = 28;
    } else if (timeData.whichMonth === "March") {
        mLength = 31;
    } else if (timeData.whichMonth === "April") {
        mLength = 30;
    } else if (timeData.whichMonth === "May") {
        mLength = 31;
    } else if (timeData.whichMonth === "June") {
        mLength = 30;
    } else if (timeData.whichMonth === "July") {
        mLength = 31;
    } else if (timeData.whichMonth === "August") {
        mLength = 31;
    } else if (timeData.whichMonth === "September") {
        mLength = 30;
    } else if (timeData.whichMonth === "October") {
        mLength = 31;
    } else if (timeData.whichMonth === "November") {
        mLength = 30;
    } else {
        mLength = 31;
    }

    if (num === 1) {
        num = timeData.whichMonth + " 1";
    } else if (num === mLength + 1) {
        num = months[d.getMonth() + 1] + " 1";
    } else if (num > mLength + 1) {
        num = num - mLength;
    }

    var x = document.createElement("div");
    x.classList.add("day");
    x.innerHTML = `<p style="font-size:20px">${num}</p>`;
    calendar.appendChild(x);
}
for (let i = 1; i < 36; i++) {
    addDays(i);
}

currentDayBtn = document.getElementsByClassName("day")[timeData.whichDate - 1].style.background = "rgb(250, 235, 215, 0.4)";