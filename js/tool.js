// 日付・時刻表示
function showDate() {
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = ("0" + date.getMinutes()).slice(-2);
  var seconds = date.getSeconds();
  document.write(month, "月", day, "日  ", hours, ":", minutes);
}

// カウントダウンを表示
function countDown() {
  var count = 3;
  var get = document.getElementById("time");
  get.innerHTML = count + "秒後にログインページに戻ります";
  var iv = setInterval(function () {
    get.innerHTML = --count + "秒後にログインページに戻ります";
    if (count === 1) clearInterval(iv);
  }, 1000);
}

// カレンダー作成・表示
function cal() {
  var myDate = new Date();
  var myWeekTbl = ["日", "月", "火", "水", "木", "金", "土"];
  var myMonthTbl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var myYear = myDate.getFullYear();
  if ((myYear % 4 === 0 && myYear % 100 !== 0) || myYear % 400 === 0) {
    myMonthTbl[1] = 29;
  }
  var myMonth = myDate.getMonth();
  var myToday = myDate.getDate();
  myDate.setDate(1);
  var myWeek = myDate.getDay();
  var myTblLine = Math.ceil((myWeek + myMonthTbl[myMonth]) / 7);
  var myTable = new Array(7 * myTblLine);
  for (var i = 0; i < 7 * myTblLine; i++) myTable[i] = " ";
  for (var i = 0; i < myMonthTbl[myMonth]; i++) myTable[i + myWeek] = i + 1;

  document.write('<table class="sample" border="1" >');
  document.write('<tr><th colspan="7" class="title">');
  document.write("<h2>", myYear, "年", myMonth + 1, "月カレンダー</h2>");
  document.write("</th></tr>");
  document.write("<tr>");
  for (var i = 0; i < 7; i++) {
    document.write("<th ");
    if (i == 0) document.write('class="weekend">');
    else document.write('class="weekday">');

    document.write("<h2>", myWeekTbl[i], "</h2>");
    document.write("</th>");
  }
  document.write("</tr>");
  for (var i = 0; i < myTblLine; i++) {
    document.write("<tr>");
    for (var j = 0; j < 7; j++) {
      document.write("<td ");
      var myDat = myTable[j + i * 7];
      if (myDat === myToday) document.write('class="today">');
      else if (j === 0) document.write('class="weekend">');
      else document.write('class="weekday">');
      document.write('<h2><a href="detail.html">', myDat, "</a></h2>");
      document.write("</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

//パスワードフィールド表示・非表示
$(function () {
  $("#show_pass").change(function () {
    if ($(this).prop("checked")) {
      $("#pass").attr("type", "text");
    } else {
      $("#pass").attr("type", "password");
    }
  });
});
