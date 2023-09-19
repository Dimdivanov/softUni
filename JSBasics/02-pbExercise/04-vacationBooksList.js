function vacationBooks(input){
    let numPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursPerBook = numPages / pagesPerHour;
    let timePerDay = hoursPerBook / days;

    console.log(timePerDay);
}
vacationBooks(["432 ",
"15 ",
"4 "]
);