var numberOfDays = 0;
var year = "";
month = "";
days = "";
var leapY = 0
var daysOfM = "";
var isLeapY="";

function inputY() {
	year = prompt("请输入您的出生年份");
	for(var i = 0; true; i++) {
		if(!isNaN(year) && year.length == 4 && Math.floor(year) == Math.ceil(year)) {
			//输入的年份为4位纯数字且为整数
			break;
		} else {
			year = prompt("请输入4位整数出生年份");
		}
	}
	year = parseInt(year);
	//判断是否闰年
	//0表示平年  1表示闰年
	if(year % 4 == 0 && year % 100 != 0) { //能被4整除但不能被100整除，为闰年
		leapY = 1
	} else {
		if(year % 400 == 0) { //或者可以被400整除，为闰年
			leapY = 1
		}
	}
	if (leapY==1) {
		isLeapY="是"
	} else{
		isLeapY="不是"
	}
	document.write("您输入的年份是："+year+"&nbsp&nbsp"+"这一年"+isLeapY+"闰年<hr />")
	return leapY; //返回是否闰年的判断标识
}

function inputM() {
	month = prompt("请输入您的出生月份");
	for(var i = 0; true; i++) {
		if(!isNaN(month) && parseInt(month) <= 12 && parseInt(month) >= 1 && Math.floor(month) == Math.ceil(month)) {
			//输入的月份为小于等于12的纯数字，且为整数
			break;
		} else {
			month = prompt("请正确输入出生月份（月份应为小于12的正整数!)")
		}
	}
	month = parseInt(month);
	if(month == (1 || 3 || 5 || 7 || 8 || 10 || 12)) {
		daysOfM = 31
	} else {
		if(month ==2) {
			daysOfM = 28 + leapY;
		} else {
			daysOfM = 30
		}

	}
	var noOfDaysM = 0;

	switch(month) {
		case 2:
			noOfDaysM = 31;
			break;
		case 3:
			noOfDaysM = 31 + 28;
			break;
		case 4:
			noOfDaysM = 31 + 28 + 31;
			break;
		case 5:
			noOfDaysM = 31 + 28 + 31 + 30;
			break;
		case 6:
			noOfDaysM = 31 + 28 + 31 + 30 + 31;
			break;
		case 7:
			noOfDaysM = 31 + 28 + 31 + 30 + 31 + 30;
			break;
		case 8:
			noOfDaysM = 31 + 28 + 31 + 30 + 31 + 30 + 31;
			break;
		case 9:
			noOfDaysM = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
			break;
		case 10:
			noOfDaysM = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
			break;
		case 11:
			noOfDaysM = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
			break;
		case 12:
			noOfDaysM = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
			break;
		default:
			noOfDaysM = 0
			break;
	}
	if(month > 2) {
		noOfDaysM = noOfDaysM + leapY; //如果是闰年，3月开始的月份累计天数+1
	}
    document.write("您输入的月份是:" + month+"&nbsp&nbsp本月一共有"+daysOfM+"天<hr />");
	return noOfDaysM;

}

function inputD() {
	inputY();
	var noOfDays = inputM(); //把函数的返回值赋给变量

	days = prompt("请输入您的出生日期");
	for(var i = 0; true; i++) {
		if(!isNaN(days) && parseInt(days) >= 1 && parseInt(days) <= daysOfM && Math.floor(days) == Math.ceil(days)) {
			//输入的日期为纯数字、大于等于1，小于等于当月的天数，且为整数
			break;
		} else {
			days = prompt("请正确输入您的出生日期")
		}
	}
	days = parseInt(days);
	noOfDays += days;
	numberOfDays = noOfDays;
	document.write("您输入的日期是："+days+"<hr />")
	return numberOfDays;
}
inputD();
document.write("您的生日在" + year + "年是第" + numberOfDays + "天。")