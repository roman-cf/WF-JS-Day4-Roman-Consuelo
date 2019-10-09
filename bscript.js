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

var JSONob = {
	"employees": [{
		"id": 1,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "email@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3000.00,
		},
		{
		"id": 2,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "email2@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3780.00,
		},
		{
		"id": 3,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "email3@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3000.00,
		},		{
		"id": 4,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "email4@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3600.00,
		},		{
		"id": 5,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "emailfuenf@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3000.00,
		},		{
		"id": 6,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "emailsechs@internet.com",
		"jobtitle" : "Developer",
		"salary" : 1500.00,
		},		{
		"id":  7,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "emailsieben@internet.com",
		"jobtitle" : "Developer",
		"salary" : 2850.00,
		},		{
		"id": 8,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "emailacht@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3500.00,
		},		{
		"id": 9,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "emailneun@internet.com",
		"jobtitle" : "Developer",
		"salary" : 2000.00,
		},		{
		"id": 10,
		"firstname" : "Anton",
		"lastname" : "Müller",
		"emailadress" : "emailX@internet.com",
		"jobtitle" : "Developer",
		"salary" : 3000.00,
		},

	]
};					

document.getElementById("output2").innerHTML = JSONob.employees[1].id;	// Testline
