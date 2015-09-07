function dealTime(){
	var timeText = $(".time").value;
	timeText = timeText.split("-");
	var year = parseInt(timeText[0]);
	var month = parseInt(timeText[1]);
	var date = parseInt(timeText[2]);
	if(timeText.length != 3){
		$(".showTime").innerHTML = "请按规定格式输入！"
	}
	else if(year < 1970 || month > 12 || month < 1 || date < 1){
		$(".showTime").innerHTML = "请输入正确日期！";
	}
	else{
		var oneMinute = 1000 * 60;
		var oneHour = oneMinute * 60;
		var oneDate = oneHour * 24;
		var oneYear = oneDate * 365;

		t = setTimeout("dealTime()",1000);
		var myDate = new Date();
		var dif = Date.parse(year+" "+month,date) - myDate.getTime();
		if (dif <= 0) {
			$(".showTime").innerHTML = "请输入未来时间！";
		}
		else{
			var dateDif = parseInt(dif / oneDate);
			var hourDif = parseInt((dif / oneHour) % 24);
			var minuteDif = parseInt(dif / oneMinute % 60);
			var secondDif = parseInt((dif /1000) % 60);
			$(".showTime").innerHTML = "距离" + year + "年" + month + 
			"月" + date + "日还有" + dateDif + "天" + hourDif + "小时"
			 + minuteDif + "分" + secondDif + "秒";
			 $(".showTime").style.color = "#000";
		}
	}	
}