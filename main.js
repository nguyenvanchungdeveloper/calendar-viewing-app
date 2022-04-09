let monthEle = document.getElementById('monthEle')
let yearEle = document.getElementById('yearEle')
let dateEle = document.getElementById('dateEle')
let btnNext = document.getElementById('btnNext')
let btnPrev = document.getElementById('btnPrev')

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth(); // 1

// Transfer from month to string month (0-11) ==> (Jan, Mar...)
function displayNameOfMonth() {
     // DisplayMonth
     let currentMonthName = new Date(currentYear, currentMonth).toLocaleString('en-us', {
          month: 'long'
     })
     monthEle.innerText = currentMonthName

     // Display Year
     yearEle.innerText = currentYear;

     // Display date
     renderDate()
}


// Get all days in month - Lấy tất cả các ngày của tháng
function getDayInMonth() {
     return new Date(currentYear, currentMonth + 1, 0).getDate();
}

// Get start day of Month (Day() => 0(Su), 1,... 6(T7)) - Lấy ngày bắt đầu của tháng
function getDayStartOfMonth() {
     return new Date(currentYear, currentMonth, 1).getDay()
}

// Active day today - Làm nổi bật ngày hiện tại
function activeTodayDay(day) {
     let day1 = new Date().toDateString();
     let day2 = new Date(currentYear, currentMonth, day).toDateString();
     return day1 == day2 ? 'active' : '';
}

// Hiển thị ngày trong tháng lên giao diện người dùng
function renderDate() {
     let daysInMonth = getDayInMonth()
     let dayStart = getDayStartOfMonth()
     dateEle.innerHTML = '';

     for (let i = 0; i < dayStart; i++) {
          dateEle.innerHTML += `
               <div class='day'></div>
          `
     }

     for (let i = 0; i < daysInMonth; i++) {
          dateEle.innerHTML += `
          <div class="day ${activeTodayDay(i+1)}">${i+1}</div>
     `;
     }
}

// When click Next Month
btnNext.onclick = function () {
     if (currentMonth == 11) {
          currentMonth = 0;
          currentYear++
     } else {
          currentMonth++
     }
     displayNameOfMonth()
}

// When click Prev Month
btnPrev.onclick = () => {
     if (currentMonth == 0) {
          currentMonth = 11
          currentYear--
     } else {
          currentMonth--
     }
     displayNameOfMonth()
}
window.onload = displayNameOfMonth(); 