export const NewDate = () => {
const date = new Date();

const m = date.getMonth();
const d = date.getDate();
const y= date.toISOString().substring(2,4);


let monthInString;
switch (m) {
  case 0:
    monthInString = "Jan";
    break;
  case 1:
    monthInString = "Feb";
    break;
  case 2:
    monthInString = "Mar";
    break;
  case 3:
    monthInString = "Apr";
    break;
  case 4:
    monthInString = "May";
    break;
  case 5:
    monthInString = "Jun";
    break;
  case 6:
    monthInString = "Jul";
    break;
  case 7:
    monthInString = "Aug";
    break;
  case 8:
    monthInString = "Sep";
    break;
  case 9:
    monthInString = "Oct";
    break;
  case 10:
    monthInString = "Nov";
    break;
  case 11:
    monthInString = "Dec";
    break;
}

 return `${d} ${monthInString},${y}`;

};

export const UpdateDate=(updatedDate) => {

  
  const m = updatedDate.substr(5,2).toString();
  const d = updatedDate.substr(8,2)
  const y= updatedDate.substr(2,2)
  
  
  let monthInString;

  switch (m) {
    case "01":
      monthInString = "Jan";
      break;
    case "02":
      monthInString = "Feb";
      break;
    case "03":
      monthInString = "Mar";
      break;
    case "04":
      monthInString = "Apr";
      break;
    case "05":
      monthInString = "May";
      break;
    case "06":
      monthInString = "Jun";
      break;
    case "07":
      monthInString = "Jul";
      break;
    case "08":
      monthInString = "Aug";
      break;
    case "09":
      monthInString = "Sep";
      break;
    case "10":
      monthInString = "Oct";
      break;
    case "11":
      monthInString = "Nov";
      break;
    case "12":
      monthInString = "Dec";
      break;
  }
  
  const date= `${d} ${monthInString},${y}`;
  return date;
  
  };
  



