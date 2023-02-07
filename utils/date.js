export function getDay(){
    console.log(new Date().toDateString())
    return `${convertDateFormat(new Date().toDateString())}`
}

export function getWeek(){
    const date = new Date; 
    const lastday = date.getDate() - (date.getDay() - 1) + 6;
    const formattedLastDay = new Date(date.setDate(lastday)).toUTCString().split(' ').slice(0, 4).join(' ')
    console.log(formattedLastDay)

    return `${convertDateFormat(new Date().toDateString())} - ${convertDateFormat(formattedLastDay)}`;
};

export function getMonth(){
    const date = new Date();
    const month = date.getMonth() + 1; // Adding 1 because JavaScript's getMonth() method returns 0-based index
    const year = date.getFullYear();
    return `${month}/${year.toString().slice(-2)}`;
}

export function compareDates(date1, date2) {

    let date1Time = new Date(date1).getTime();
    let date2Time = new Date(date2).getTime();
  
    if (date1Time === date2Time) return true;
    return false;
}

export function convertDateFormat(dateString) {
    // check if the input is a string
    if (typeof dateString !== 'string') {
      return 'Invalid input. Input must be a string.';
    }
  
    // define an array of all possible date formats
    const dateFormats = [
      "dd-mm-yy",
      "yy-mm-dd",
      "dd/mm/yy",
      "Mon Feb 06 2023",
      "Mon, Feb 06 2023",
      "Mon February 06 2023",
      "Monday February 06 2023",
      "Monday February 06, 2023"
    ];
  
    // initialize variables for the result and the found format
    let result, foundFormat;
  
    // loop through all possible date formats
    for (const format of dateFormats) {
      // try to parse the date string using each format
      const parsedDate = Date.parse(dateString, format);
  
      // if the parsing is successful, store the result and break the loop
      if (!isNaN(parsedDate)) {
        result = parsedDate;
        foundFormat = format;
        break;
      }
    }
  
    // if no date format is found, return an error message
    if (!result) {
      return 'Invalid date format. Could not parse date string.';
    }
  
    // convert the parsed date to a date object
    const date = new Date(result);
  
    // format the date as "mm/dd/yy"
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
  
    // return the formatted date
    return formattedDate;
  }
  