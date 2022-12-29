const {dynamodb} =  require('../config/dbconfig');

/*##############################################################################################
                                     Date Related methods
###############################################################################################*/

/*
@author:shankha
@created on:08-06-2022
@input: d/m/Y
@output Y-m-d
*/
function dateYMD(input_date) {
    if(input_date=='' || input_date==null || input_date==undefined){return null;}
    else{return input_date.split("/").reverse().join("-");}
  }



  function curentDate(){
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  let currentdate = yyyy +"-"+mm+"-"+dd;
  return currentdate;
  }


  function javascriptDateToFormattedDate(date,seperator){
    //let today = new Date();
    let today = date;
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
   // let currentdate = yyyy +"-"+mm+"-"+dd;
    let currentdate = dd + seperator + mm + seperator + yyyy;
    return currentdate;
    }


  function time24Format(date_time){
    var date = new Date(date_time);
    return date.toLocaleTimeString('en-GB');
  }

  function time12Format(date_time){
    var date = new Date(date_time);
    return date.toLocaleTimeString('en-US');
  }


  function curentDateTime(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let hour = String(today.getHours()).padStart(2, '0');
    let minutes = String(today.getMinutes()).padStart(2, '0');
    let seconds = String(today.getSeconds()).padStart(2, '0');
    let currentdate = yyyy +"-"+mm+"-"+dd+" "+hour+":"+minutes+":"+seconds;
    return currentdate;
    }


    function formDateToTime(date){
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      let strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;

      }
  


    function getRandomFileName() {
      var timestamp = new Date().toISOString().replace(/[-:.]/g,"");  
      var random = ("" + Math.random()).substring(2, 8); 
      var random_number = timestamp+random;  
      return random_number;
      }

    function getAllDaysInMonth(year, month) {
         const date = new Date(year, month, 1);
         let dates = [];
         
      while (date.getMonth() === month) {
       
          // date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
                    
       let pushdate = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");     
       dates.push(pushdate);
          // console.log(pushdate);
           date.setDate(date.getDate() + 1);
       }
       

        
         return dates;
       }
       
    //   const now = new Date('2022-08-01');
       // 👇️ all days of the current month
   //    console.log(getAllDaysInMonth(now.getFullYear(), now.getMonth()));




  /*----------------------------------------------------------------------------------------------------
    
  -------------------------------------------------------------------------------------------------------*/


//let dateSet =['2022-07-10','2022-07-11','2022-07-12','2022-07-17'];
//const finaldates=getDatesOfSingleWeekDay(dateSet,'Sun');
//console.log(finaldates);

function getDatesOfSingleWeekDay(dateArray,weekDay){

  let weekday= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let index = weekday.indexOf(weekDay);
 // console.log(dateArray);
 let returnDates=[];let i=0;
  dateArray.forEach(element => {
    //console.log(element);
    let newdate = new Date(element);
    if(newdate.getDay()==index){ 
      returnDates[i++]=element;
    }
  })

  return returnDates;

}


// let weekDayArray=['Sun', 'Mon'];
// let finddates2=getDatesOfMultipleWeekDays(dateSet,weekDayArray);
// console.log(finddates2)

function getDatesOfMultipleWeekDays(dateArray,weekDayArray){

  let weekday= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let dayIndexList=[];
      weekDayArray.forEach(day => { 
        dayIndexList.push(weekday.indexOf(day));
      })
      let returnDates=[];let i=0;
      dateArray.forEach(element => {
        let newdate = new Date(element);
      //  console.log(element+" => "+newdate.getDay()+" | "+dayIndexList.indexOf(newdate.getDay()))
        if(dayIndexList.indexOf(newdate.getDay()) !== -1){ 
          returnDates[i++]=element;
        }
      })
  return returnDates;

}

//const dates = dateRange('2022-07-01', '2022-07-31');
function dateRange(startDate, endDate, steps = 1) {
  const dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {

    let pushdate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1).toString().padStart(2, "0") + "-" + currentDate.getDate().toString().padStart(2, "0"); 
   // dateArray.push(new Date(currentDate));
    dateArray.push(pushdate);
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return dateArray;
}




/*   const current_month_date = new Date('2022-07-01');
     let weekDay='Sun';
     console.log(getCountweekDayInMonth(current_month_date,weekDay));
*/
/**
 * 
 * @param {'2022-07-01'} current_month_date 
 * @param {'Mon'} weekDay 
 * @returns 
 */
 function getCountweekDayInMonth(current_month_date,weekDay) {

  let year=current_month_date.getFullYear();
  let month=current_month_date.getMonth();
  const date = new Date(year, month, 1);
  let dates = [];
  
 while (date.getMonth() === month) {

let pushdate = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");     
    dates.push(pushdate);
   // console.log(pushdate);
    date.setDate(date.getDate() + 1);
}

 // chech particular week days
  let weekday= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let index = weekday.indexOf(weekDay);
  let returnDates=[];let i=0;
 dates.forEach(element => {
 // console.log(element);
      let newdate = new Date(element);
      if(newdate.getDay()==index){ 
      returnDates[i++]=element;
      }
  })

 
    return returnDates;
}

/**
 * 
 * @param {'Y-m-d'} current_date 
 * @returns 
 */

function getFirstDateOfMonth(current_date){

  const date = new Date(current_date.getFullYear(), current_date.getMonth(), 1);
  let firstDay = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");
//   console.log(firstDay);
 return  firstDay;
}

/**
 * 
 * @param {'Y-m-d'} current_date 
 * @returns 
 */
function getLastDateOfMonth(current_date){
  const date = new Date(current_date.getFullYear(), current_date.getMonth() + 1, 0);
  let lastDay = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");
 return  lastDay;
}


const sanitizeValue =  (value) => {
  if(value!=null && value!=undefined && value!="" && value > 0) return value
  return 0
};


/* --------------------- AWS Methods ----------------- */

async function scanDynamoRecords(scanParams, itemArray) {
    try {
      const dynamoData = await dynamodb.scan(scanParams).promise();
      itemArray = itemArray.concat(dynamoData.Items);
      if (dynamoData.LastEvaluatedKey) {
        scanParams.ExclusiveStartkey = dynamoData.LastEvaluatedKey;
        return await scanDynamoRecords(scanParams, itemArray);
      }
      return itemArray;
    } catch(error) {
      console.error('Do your custom error handling here. I am just gonna log it: ', error);
    }
  }

  function buildResponse(statusCode, body) {
    if (body=== undefined) {
      body=[];
    }
    
    return {
      statusCode: statusCode,
      headers: {
        'Content-Type': 'application/json'
      },
      body: ({statusCode: statusCode,result:body})
    }
  }


  function validateInput(value) {
    if(value == undefined || value == null || value == '' || value.length <=0 ) {
      return false;
    }
    return true;  
  }



module.exports = {
     dateYMD:dateYMD,
     javascriptDateToFormattedDate:javascriptDateToFormattedDate,
     curentDate:curentDate,
     curentDateTime:curentDateTime,
     formDateToTime:formDateToTime,
     time24Format:time24Format,
     time12Format:time12Format,
     dateRange:dateRange,
     getDatesOfSingleWeekDay:getDatesOfSingleWeekDay,
     getDatesOfMultipleWeekDays:getDatesOfMultipleWeekDays,
     getCountweekDayInMonth:getCountweekDayInMonth,
     sanitizeValue:sanitizeValue,
     scanDynamoRecords:scanDynamoRecords,
     buildResponse:buildResponse,
     validateInput:validateInput
};