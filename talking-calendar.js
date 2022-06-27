const talkingCalendar = function(date) {
  let y = date.slice(0, 4);
  let m = date.slice(5, 7);
  let d =date.slice(8, 10);
  let daySuffix = '';
  
  switch(m){
    case '01' : m = 'January' ; break;
    case '02' : m = 'Feburary' ; break;
    case '03' : m = 'March' ;  break;
    case '04' : m = 'April' ; break;
    case '05' : m =   'May' ; break;
    case '06' : m = 'June' ; break;
    case '07' : m = 'July'; break;
    case '08' : m = 'August'; break;
    case '09' : m = 'September'; break;
    case '10' : m = 'October'; break;
    case '11' : m = 'Novemeber'; break;
    case '12' : m = 'December'; break;
    };

  switch(d){
    case '01' : daySuffix = 'st' ; break;
    case '02' : daySuffix = 'nd' ; break;
    case '03' : daySuffix = 'rd' ; break;
    case '04' : daySuffix = 'th' ; break;
    case '05' : daySuffix = 'th' ; break;
    case '06' : daySuffix = 'th' ; break;
    case '07' : daySuffix = 'th' ; break;
    case '08' : daySuffix = 'th' ; break;
    case '09' : daySuffix = 'th' ; break;
    case '10' : daySuffix = 'th' ; break;
    case '11' : daySuffix = 'th' ; break;
    case '12' : daySuffix = 'th' ; break;
    case '13' : daySuffix = 'th' ; break;
    case '14' : daySuffix = 'th' ; break;
    case '15' : daySuffix = 'th' ; break;
    case '16' : daySuffix = 'th' ; break;
    case '17' : daySuffix = 'th' ; break;
    case '18' : daySuffix = 'th' ; break;
    case '19' : daySuffix = 'th' ; break;
    case '20' : daySuffix = 'th' ; break;
    case '21' : daySuffix = 'st' ; break;
    case '22' : daySuffix = 'nd' ; break;
    case '23' : daySuffix = 'rd' ; break;
    case '24' : daySuffix = 'th' ; break;
    case '25' : daySuffix = 'th' ; break;
    case '26' : daySuffix = 'th' ; break;
    case '27' : daySuffix = 'th' ; break;
    case '28' : daySuffix = 'th' ; break;
    case '29' : daySuffix = 'th' ; break;
    case '30' : daySuffix = 'th' ; break;
    case '31' : daySuffix = 'st' ; break;
  }
    return (`${m} ${Number(d)}${daySuffix}, ${y}` )
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
