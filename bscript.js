var sandwiches = { "sandwich": "hamburger", "calories": "260" };
var fries = { "fries_size": "Large French Fries", "calories": "570" };

var testobejt = "My favorite burger is a " 
		+ sandwiches.sandwich
		+ " which has approximately "
		+ sandwiches.calories
		+ " calories, along with it I enjoy eating "
		+ fries.fries_size 
		+ " which have about "
		+ fries.calories
		+ " calories.";

document.getElementById("output1").innerHTML = testobejt;

// ---------------------------------------------------------------------------------------------

var jsonOb = [
		{
		"id": "ID",
		"firstname" : "Firstname",
		"lastname" : "Lastname",
		"emailadress" : "emailadress",
		"jobtitle" : "Job Title",
		"salary" : "Salary"
		},
		{
		"id": 1,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "email@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3000.00
		},
		{
		"id": 2,
		"firstname" : "Bernhard",
		"lastname" : "Mayer",
		"emailadress" : "email2@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3780.00
		},
		{
		"id": 3,
		"firstname" : "Chritian",
		"lastname" : "Kunert",
		"emailadress" : "email3@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3000.00,
		},		{
		"id": 4,
		"firstname" : "David",
		"lastname" : "Frank",
		"emailadress" : "email4@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3600.00,
		},		{
		"id": 5,
		"firstname" : "Edi",
		"lastname" : "Langer",
		"emailadress" : "emailfuenf@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3000.00,
		},		{
		"id": 6,
		"firstname" : "Fritz",
		"lastname" : "Jäger",
		"emailadress" : "emailsechs@internet.com",
		"jobtitle" : "Developer",
		"salary" : 1500.00,
		},		{
		"id":  7,
		"firstname" : "Georg",
		"lastname" : "Kaufmann",
		"emailadress" : "emailsieben@internet.com",
		"jobtitle" : "Developer",
		"salary" : 2850.00,
		},		{
		"id": 8,
		"firstname" : "Herbert",
		"lastname" : "Weber",
		"emailadress" : "emailacht@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3500.00,
		},		{
		"id": 9,
		"firstname" : "Irmgard",
		"lastname" : "Landauer",
		"emailadress" : "emailneun@internet.com",
		"jobtitle" : "Developer",
		"salary" : 2000.00,
		},		{
		"id": 10,
		"firstname" : "Jessica",
		"lastname" : "Karrer",
		"emailadress" : "emailX@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3000.00,
		},

	];
					

// Test

document.getElementById("output2").innerHTML = jsonOb[1];

for (var i=0; i < jsonOb.length; i++){
var objekt = jsonOb[i];
var table = document.getElementById("ausgabe");
var row = table.insertRow(i);
var zelle1 = row.insertCell(0);
var zelle2 = row.insertCell(1);
var zelle3 = row.insertCell(2);
var zelle4 = row.insertCell(3);
var zelle5 = row.insertCell(4);
var zelle6 = row.insertCell(5);

zelle1.innerHTML = objekt.id;
zelle2.innerHTML = objekt.firstname;
zelle3.innerHTML = objekt.lastname;
zelle4.innerHTML = objekt.emailadress;
zelle5.innerHTML = objekt.jobtitle;
zelle6.innerHTML = objekt.salary;

}


