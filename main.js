var account = document.getElementById('account');
var addAccount = document.getElementById('addAccount');
var editDelete = document.getElementById('editDelete');
var editAccount = document.getElementById('editAccount');
var showAccounts = document.getElementById('showAccounts');
var showEdit = document.getElementById('showEdit');
var accountBtn = document.getElementById('accountBtn');
var addAccountBtn = document.getElementById('addAccountBtn');
var editDeleteBtn = document.getElementById('editDeleteBtn');
var formId = document.getElementById('formId');
var formName = document.getElementById('formName');
var formDeposid = document.getElementById('formDeposid');
var formCard = document.getElementById('formCard');
var formBtn = document.getElementById('formBtn');
var editBtn = document.getElementsByClassName('editBtn');
var deleteBtn = document.getElementsByClassName('deleteBtn');
var editId = document.getElementById('editId');
var editName = document.getElementById('editName');
var editDeposid = document.getElementById('editDeposid');
var editCard = document.getElementById('editCard');
var formEditBtn = document.getElementById('formEditBtn');
var ime=[1,2,3];
ime.splice(2,1)
console.log(ime);
db = [
{
	id:1,
	name:"StevaN",
	deposid:200,
	card:"VISA"
},
{
	id:2,
	name:"Danilo",
	deposid:55000,
	card:"VISA"
},
{
	id:3,
	name:"Nesa",
	deposid:255000,
	card:"VISA"
},
{
	id:4,
	name:"Srdjan",
	deposid:155000,
	card:"VISA"
},
{
	id:5,
	name:"Marko",
	deposid:355000,
	card:"VISA"
}];
accountBtn.addEventListener('click',allAccounts);
addAccountBtn.addEventListener('click',showAddAccount); 
editDeleteBtn.addEventListener('click',showEditDeleteBtn); 
allAccounts();  
function allAccounts() { 
	editDelete.style.display = 'none'; 
	addAccount.style.display = 'none';
	editAccount.style.display = 'none';
	account.style.display = 'block'; 
	var text="";
	for (var i = 0; i < db.length; i++) {
		text += '<tr><td>'+db[i].id+'</td><td>'+db[i].name+'</td><td>'+db[i].deposid+' din.</td><td>'+db[i].card+'</td></tr>'
	}
	showAccounts.innerHTML = text;
}
function showAddAccount() {
	editDelete.style.display = 'none'; 
	editAccount.style.display = 'none'; 
	account.style.display = 'none';
	addAccount.style.display = 'block';
	formBtn.addEventListener('click',pushAddAccount)
}
function pushAddAccount() { 
	var idValue=formId.value;
	var nameValue = formName.value;
	var deposidValue = formDeposid.value;
	var cardValue = formCard.value;
	var obj = {
		id : idValue,
		name : nameValue,
		deposid : deposidValue,
		card : deposidValue
	}
	db.push(obj);
	allAccounts();
}
function showEditDeleteBtn() {
	editDelete.style.display = 'block'; 
	editAccount.style.display = 'none'; 
	addAccount.style.display = 'none';
	account.style.display = 'none'; 
	var text="";
	for (var i = 0; i < db.length; i++) {
		text += '<tr><td>'+db[i].id+'</td><td>'+db[i].name+'</td><td>'+db[i].deposid+' din.</td><td>'+db[i].card+'</td><td><button id="'+i+'" class="btn btn-warning form-control editBtn">EDIT</button></td><td><button id="'+i+'" class="btn btn-danger form-control deleteBtn">DELETE</button></td></tr>'
	}
	showEdit.innerHTML = text;
	for (var i = 0; i < db.length; i++) {
	deleteBtn[i].addEventListener('click',deleteAccount)	
	editBtn[i].addEventListener('click',funEditAccount)	
	}
}
function deleteAccount() {
	db.splice(this.id,1);
	allAccounts()
}
function funEditAccount() {
	editAccount.style.display = 'block';
	editDelete.style.display = 'none';
	console.log(db[this.id].id);
	editId.value = db[this.id].id;
	editName.value = db[this.id].name;
	editDeposid.value = db[this.id].deposid;
	editCard.value = db[this.id].card;
	formEditBtn.addEventListener('click',editFrom)
}
function editFrom() {
	
	console.log(editId.value);
	var editFromId=editId.value;
	var editFromName=editName.value;
	var editFromDeposid=editDeposid.value;
	var editFromCard=editCard.value;
	var obj={
		id:editFromId,
		name:editFromName,
		deposid:editFromDeposid,
		card:editFromCard
	}
	db.push(obj);
	allAccounts(); 
}