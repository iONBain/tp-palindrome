










function reverseStr(str){
    // var listOfChar = str.split('');
    // var reverseList = listOfChar.reverse();
    
    // var reversedStr = reverseList.join('');
    // return reversedStr

    return str.split('').reverse().join('')
}

function isPalindrome(str){
    var reversedStr = reverseStr(str);
    // if(str === reversedStr){
    //     return true
    // }
    // return false
    return str === reversedStr
}

function convertDateToStr(date){
   var dateStr = {day:'', month:'',year:''}
   if(date.day < 10){
    dateStr.day = "0" + date.day
   }
   else{
    dateStr.day = date.day.toString();
   } 
   if(date.month < 10){
    dateStr.month = "0" + date.month
   }
   else{
    dateStr.month = date.month.toString();
   } 
   dateStr.year = date.year.toString();

   return dateStr
}

function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
    var yymmdd = dateStr.year.slice(-2)+ dateStr.day + dateStr.month
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)

    return [ddmmyyyy,yyyymmdd,mmddyyyy,ddmmyy,mmddyy,yymmdd]
}

function checkPalindrome(date){
    var arrayOfDateStr = getAllDateFormats(date);
    var isPalindromeFlag = false;

    for(var i=0; i<arrayOfDateStr.length; i++){
        if(isPalindrome(arrayOfDateStr[i])){
           isPalindromeFlag = true;
           break; 
        }
    }

    return isPalindromeFlag
}

function isLeapYear(year){
    if(year % 400 === 0){
        return true
    }
    if(year % 100 === 0){
        return false
    }
    if(year % 4 === 0){
        return true
    }
    return false
}

function getNextDate(date){
    var day = date.day+1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month===2){
        //leap year
        if(isLeapYear(year)){
            if(day>29){
                day=1;
                month++;
            }}
            else{
                if(day>28){
                    day=1;
                    month++;
                }
            }
    }
    else{
        if(day>daysInMonth[month-1]){
            day=1
            month++;
        }
    }
    if(month>12){
        month=1;
        year++;
    }
    return {
        day: day,
        month: month,
        year: year
    }
}

function getNextPalindrome(date){
    var cnt = 0;
    var nextDate = getNextDate(date);

    while(1){
        cnt++;
        var isPalindromeFlag = checkPalindrome(nextDate);
        if(isPalindromeFlag){
            break;
        }
        nextDate = getNextDate(nextDate);

    }
    return [cnt, nextDate];
}








var date = {
    day: 31,
    month: 12,
    year: 2020
}

// console.log(reverseStr("hello"))
// console.log(isPalindrome("hello"))
// console.log(isPalindrome("racecar"))
console.log(convertDateToStr(date))
console.log(getAllDateFormats(date))
console.log(checkPalindrome(date))
// console.log(getNextDate(date))
// console.log(isLeapYear(2020))
console.log(getNextPalindrome(date))