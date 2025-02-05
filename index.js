const lessonsAndTime = [[['Разг. о важном', 'Лит-ра', 'Биология', 'Англ. яз.', 'Физика', 'Русск. яз.', 'Физ-ра', 'Математика'],     
                    ['8:30-9:15', '9:25-10:05', '10:15-10:55', '11:10-11:50', '12:05-12:45', '13:00-13:40', '13:50-14:30', '14:40-15:20']],
                 [['Общество', 'Химия', 'Математика', 'Математика', 'История', 'Информатика', 'Физика', ''],                                  
                    ['8:30-9:15', '9:25-10:10', '10:20-11:05', '11:20-12:05', '12:20-13:05', '13:20-14:05', '14:15-15:0', '']],
                 [['Англ. яз.', 'Математика', 'Физ-ра', 'Русск. яз.', 'География', 'Лит-ра', 'Лит-ра', ''],                 
                    ['8:30-9:15', '9:25-10:10', '10:20-11:05', '11:20-12:05', '12:20-13:05', '13:20-14:05', '14:15-15:00', '']],
                 [['Рос.- мои гор.', 'Алгоритмика', 'Общество', 'История', 'Физика', 'Проект', 'Математика', 'Математика'],                
                    ['8:30-9:15', '9:25-10:05', '10:15-10:55', '11:10-11:50', '12:05-12:45', '13:00-13:40', '13:50-14:30', '14:40-15:20']],
                 [['Физика', 'Физика', 'Математика', 'Математика', 'Англ. яз.', 'ОБЗР', '', ''],            
                    ['8:30-9:15', '9:25-10:10', '10:20-11:05', '11:20-12:05', '12:20-13:05', '13:20-14:05', '', '']]];

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
const numLesson = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
const timeLesson = ['onetime', 'twotime', 'threetime', 'fourtime', 'fivetime', 'sixtime', 'seventime', 'eighttime'];

var now = new Date();
str = now.toLocaleString().split(' ');
time = str[1].split(':')[0];
ampm = str[2];
var _day_ = now.getDay();
if (ampm) {_day_ = ampm == "PM" & time >= 5 ? _day_ + 1 : _day_;}
else {_day_ = time >= 17 ? _day_ + 1 : _day_;}
_day_ = _day_ == 0 || _day_ > 5 ? 0 : _day_ - 1;
var day_ = document.getElementById('Day');
day_.innerHTML = days[_day_];
day_.style.cssText = "margin: 30px; font-size: 70px; text-align: center;";

for (let i = 0; i < 9; i++){
    var les = document.getElementById(numLesson[i]);
    les.innerHTML = lessonsAndTime[_day_][0][i];
    les.style.cssText = "font-size: 55px; text-align: center;";

    var time = document.getElementById(timeLesson[i]);
    time.innerHTML = lessonsAndTime[_day_][1][i];
    time.style.cssText = "font-size: 55px; text-align: center;";
}

function button(a){
    var day = document.getElementById('Day');
    day.innerHTML = days[a];
    day.style.cssText = "margin: 30px; font-size: 70px; text-align: center;";

    for (let i = 0; i < 9; i++){
        var les = document.getElementById(numLesson[i]);
        les.innerHTML = lessonsAndTime[a][0][i];
        les.style.cssText = "font-size: 55px; text-align: center;";
    
        var time = document.getElementById(timeLesson[i]);
        time.innerHTML = lessonsAndTime[a][1][i];
        time.style.cssText = "font-size: 55px; text-align: center;";
}
}
