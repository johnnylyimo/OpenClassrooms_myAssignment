/*
Activity: Contact manager
*/

// TODO: Complete the program

// Declare variable and an array contact
var stop = "";
var contact = [];

// Create an Object Person
var Person = {
    init:function(firstNm, lastNm){
        this.firstNm = firstNm;
        this.lastNm = lastNm;
    },

    display:function(){
        return "Last Name: " + this.lastNm + ",  First Name: " + this.firstNm;
    }
};

// instantiate initial Contacts
var cont1 = Object.create(Person);
cont1.init("John","Smith");
var cont2 = Object.create(Person);
cont2.init("Jane","Doe");


// add initial contact to an array
contact.push(cont1);
contact.push(cont2);


while(stop !== "0"){
    let choice = prompt("WELCOME TO CONTACT MANAGER!\n(please choose an operation number below)\n\n1: List Contacts\n2: Add a Contact\n3. Delete a Contact\n0: Quit\n\n");

    switch(choice){
        case "1": {
            var names ="";
            var counter = 1;
            if (contact.length === 0){
                alert("No Available contacts to display");
                break;
            }
            else {
                contact.forEach(function(name) {
                    names += counter + ". " + name.display() + "\n";
                    counter++;
                });
                alert("Here's the list of all your contacts\n\n"+names + "\n");
                break;
            }
        }

        case "2":{
            var firstName = prompt("Enter First Name");
            var lastName = prompt("Enter Last Name");
            var i = 3;
            var cont = "cont" + i; // new unique variable name
            cont = Object.create(Person); // instantiate
            cont.init(firstName, lastName); // initialize
            contact.push(cont) // add new object to array
            i++; // increment
            break;
        }

        case "3":{
            var names ="";
            var counter = 1;
            if (contact.length === 0){
                alert("No Available contacts to delete");
                break;
            }
            else {
                contact.forEach(function(name) {
                    names += counter + ". " + name.display() + "\n";
                    counter++;
                });
            }
            var num = Number(prompt("Select Contact Number you want to Delete\n\n"+names + "Which contact Number?\n"));
            var i = counter -= 1; // a variable prevent contact number > available contacts
            if ((num !== 0) && (!isNaN(num)) && num <= i) {// when user press cancel avoid num to be == 0 and isNaN
                num -= 1; // minus 1, to adhere index format start index 0
                var index = contact.indexOf(contact[num])
                contact.splice(index,1); // delete at index number
            }
            else {
                if (!isNaN(num) && num !== 0) {
                    alert( num  + " <== Invalid input\nSelect contact number shown beside LastName not other numbers");
                }
                else if(num === 0){
                    alert("You have clicked Cancel or OK, u didn't select number");
                }
                else {
                    alert(num  + " <== Invalid input\nDont use Letters or Alphanumeric\nUse Numbers only");
                }
            }
            break;
        }

        case "0": {
            document.getElementById('msg1').innerHTML= "Program Quit  (Reload Page to run program)";

            document.getElementById('msg2').innerHTML= "If Reload is little bit hard or not your interest, ooh! never mind just Click the Button below to Run Program";

            stop = "0"; // reset to "0" to quit Program
            break;
        }

        default: {
            if (choice === null) {
                alert("Missing operation number\nPlease Choose Operation number  between 0 - 3 only\nTry again");

            }
            else if(choice === ""){
                alert("You have clicked OK but You didn't choose any Operation number\nPlease Choose Operation number  between 0 - 3 only\nTry again");

            }
            else {

                alert(choice + " <== INVALID INPUT\n Please choose an Operation number between 0 - 3 only\nTry again");
            }
            break;
        }
    }
};






// Create function to trigger button click event
function runProgram(){
    // reset msg1, and msg2
    document.getElementById('msg1').innerHTML= "Program running now...";
    document.getElementById('msg2').innerHTML= "";

    // Declare variable and an array contact
var stop = "";
var contact = [];

// Create an Object Person
var Person = {
    init:function(firstNm, lastNm){
        this.firstNm = firstNm;
        this.lastNm = lastNm;
    },

    display:function(){
        return "Last Name: " + this.lastNm + ",  First Name: " + this.firstNm;
    }

};

// instantiate initial Contacts
var cont1 = Object.create(Person);
cont1.init("John","Smith");
var cont2 = Object.create(Person);
cont2.init("Jane","Doe");



// add initial contact to an array
contact.push(cont1);
contact.push(cont2);


while(stop !== "0"){
    let choice = prompt("WELCOME TO CONTACT MANAGER!\n(please choose an operation number below)\n\n1: List Contacts\n2: Add a Contact\n3. Delete a Contact\n0: Quit\n\n");

    switch(choice){
        case "1": {
            var names ="";
            var counter = 1;
            if (contact.length === 0){
                alert("No Available contacts to display");
                break;
            }
            else {
                contact.forEach(function(name) {
                    names += counter + ". " + name.display() + "\n";
                    counter++;
                });
                alert("Here's the list of all your contacts\n\n"+names + "\n");
                break;
            }
        }

        case "2":{
            var firstName = prompt("Enter First Name");
            var lastName = prompt("Enter Last Name");
            var i = 3;
            var cont = "cont" + i; // new variable name
            cont = Object.create(Person); // instantiate
            cont.init(firstName, lastName); // initialize
            contact.push(cont) // add new object to array
            i++; // increment
            break;
        }

        case "3":{
            var names ="";
            var counter = 1;
            if (contact.length === 0){
                alert("No Available contacts to delete");
                break;
            }
            else {
                contact.forEach(function(name) {
                    names += counter + ". " + name.display() + "\n";
                    counter++;
                });
            }
            var num = Number(prompt("Select Contact Number you want to Delete\n\n"+names + "Which contact Number?\n"));
            var i = counter -= 1; // a variable prevent contact number > available contacts
            if ((num !== 0) && (!isNaN(num)) && num <= i) {// when user press cancel avoid num to be == 0 and isNaN
                num -= 1; // minus 1, to adhere index format start index 0
                var index = contact.indexOf(contact[num])
                contact.splice(index,1); // delete at index number
            }
            else {
                if (!isNaN(num) && num !== 0) {
                    alert( num  + " <== Invalid input\nSelect contact number shown beside LastName not other numbers");
                }
                else if(num === 0){
                    alert("You have clicked Cancel or OK, u didn't select number");
                }
                else {
                    alert(num  + " <== Invalid input\nDont use Letters or Alphanumeric\nUse Numbers only");
                }
            }
            break;
        }

        case "0": {
            document.getElementById('msg1').innerHTML= "Program Quit  (Reload Page to run program)";

            document.getElementById('msg2').innerHTML= "If Reload is little bit hard or not your interest, ooh! never mind just Click the Button below to Run Program";
            stop = "0"; // reset to "0" to quit Program
            break;
        }

        default: {
            if (choice === null) {
                alert("Missing operation number\nPlease Choose Operation number  between 0 - 3 only\nTry again");

            }
            else if(choice === ""){
                alert("You have clicked OK but You didn't choose any Operation number\nPlease Choose Operation number  between 0 - 3 only\nTry again");

            }
            else {
                alert(choice + " <== INVALID INPUT\n Please choose an Operation number between 0 - 3 only\nTry again");
            }
            break;
        }
    }
};

}
