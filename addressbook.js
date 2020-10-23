// Starting Contacts
contacts = [{name: "Ben", phone: "123-456-7890", email: "ben@gmail.com"},
			{name: "Jack", phone: "098-765-4321", email: "email@domain.com"},
			{name: "Brian", phone: "222-333-4444", email: "love@hotmail.com"} 
]

// Navigation Constants
const allConts = document.getElementById("view-all-contacts")
const searchConts = document.getElementById("search-contacts")
const addCont = document.getElementById("add-a-contact")
const allContsDiv = document.getElementById("view-all-contacts-div")
const searchContsDiv = document.getElementById("search-contacts-div")
const addContDiv = document.getElementById("add-a-contact-div")

// Contact Card Constants
const allContsUl = document.getElementById("view-all-contacts-ul")

// Search Contact Cards Constants
const searchContsUl = document.getElementById("search-contacts-ul")
const searchSubBut = document.getElementById("search-submit")

// Add a Contact Card Constants
const addName = document.getElementById("name")
const addPhone = document.getElementById("phone")
const addEmail = document.getElementById("email")
const submitButton = document.getElementById("submit")

// Code Making the Navigation Bar Function
allConts.addEventListener("click", function(){
	if(allConts.className != "active"){
		allConts.className = "active"
		searchConts.className = ""
		addCont.className = ""
		allContsDiv.style.display = "inline-block"
		searchContsDiv.style.display = "none"
		addContDiv.style.display = "none"
	}
} )
searchConts.addEventListener("click", function(){
	if(searchConts.className != "active"){
		allConts.className = ""
		searchConts.className = "active"
		addCont.className = ""
		allContsDiv.style.display = "none"
		searchContsDiv.style.display = "inline-block"
		addContDiv.style.display = "none"
	}
} )
addCont.addEventListener("click", function(){
	if(addCont.className != "active"){
		allConts.className = ""
		searchConts.className = ""
		addCont.className = "active"
		allContsDiv.style.display = "none"
		searchContsDiv.style.display = "none"
		addContDiv.style.display = "inline-block"
	}
} )

// Display Contact Cards
function displayContacts() {
	allContsUl.innerHTML = ""
	for(let i=0; i<contacts.length; i++){
		allContsUl.innerHTML += "<br><li><label>Name: </label><span>" + contacts[i].name + "</span></li>"
		allContsUl.innerHTML += "<li><label>Phone Number: </label><span>" + contacts[i].phone + "</span></li>"
		allContsUl.innerHTML += "<li><label>Email: </label><span>" + contacts[i].email + "</span></li><br>"
	}
}

displayContacts()

// Search Contacts
searchSubBut.addEventListener("click", function() {

	let people = []
	for(let i=0; i<contacts.length; i++){
		if (document.getElementById("name-search").value.toLowerCase() === contacts[i].name.toLowerCase()){
			people.push(contacts[i])
		}
	}

	document.getElementById("name-search").value = ""

	searchContsUl.innerHTML = ""
	for(let i=0; i<people.length; i++){
		searchContsUl.innerHTML += "<br><li><label>Name: </label><span>" + people[i].name + "</span></li>"
		searchContsUl.innerHTML += "<li><label>Phone Number: </label><span>" + people[i].phone + "</span></li>"
		searchContsUl.innerHTML += "<li><label>Email: </label><span>" + people[i].email + "</span></li><br>"
	}
})

// Add a Contact Card


submitButton.addEventListener("click", function(){

	let map = {name: addName.value, phone: addPhone.value, email: addEmail.value}
	contacts.push(map)

	document.getElementById("name").value = ""
	document.getElementById("phone").value = ""
	document.getElementById("email").value = ""

	displayContacts()
})

