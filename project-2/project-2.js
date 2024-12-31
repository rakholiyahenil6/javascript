// enter electricity unit and calculate amount to Pay
// for first 50 units,rs: 1/unit
// for next 100 units,rs: 2/unit
// for next 100 units,rs: 3/unit
// for units above 250,rs: 4/unit
// for all bill above 150 units an additional surcharge of 20% of total bill amount is added write in javascript with out function

let unit = prompt("Enter electricity unit");
let amount;
if (unit <= 50) {

    amount = unit * 1;
} else if (unit <= 150) {

    amount = (50 * 1) + ((unit - 50) * 2);
} else if (unit <= 250) {

    amount = (50 * 1) + (100 * 2) + ((unit - 150) * 3);
} else {
    amount = (50 * 1) + (100 * 2) + (100 * 3) + ((unit - 250) * 4);


   2 // write a javascript to print season accroding user input using swtich case(e.g.1 to for "winter" ,5 to 8 for "summer ",9 to 12 "monsoon"then add any number print "invalid season" Etc)
    
    let month = prompt("Enter month number");
    switch (month) {
        
        case "1":
        case "2":
        case "3":
            console.log("Winter");
            break;
        case "4":
        case "5":
        case "6":
            console.log("Summer");
            break;
        case "7":
        case "8":
        case "9":
            console.log("Monsoon");
            break;
        default:
            console.log("Invalid season");
    }

    // 4.write a javascript program to check voting eligibility

    let age = prompt("Enter your age");
    if (age >= 18) {
        console.log("You are eligible for voting");
        
    }
    else {
        console.log("You are not eligible for voting");

    }


    // 5.write a javascript program to classify age groups.
    let age = prompt("Enter your age");
    if (age < 18) {
        console.log("You are a minor");

    }
    else if (age >= 18 && age < 60) {
        console.log("You are an adult");

    }
    else {
        console.log("You are a senior citizen");
    }







}