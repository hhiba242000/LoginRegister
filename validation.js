	
	function register(){
		var x =document.getElementById("login");
	var y=document.getElementById("register");
	var z=document.getElementById("btn");
		x.style.left="-400px";
		y.style.left="50px";
		z.style.left="110px";
	}
	function login(){
		var x =document.getElementById("login");
	var y=document.getElementById("register");
	var z=document.getElementById("btn");
		x.style.left="50";
		y.style.left="450px";
		z.style.left="0px";
}

function checkRegisterInputs(){
	var flag=true;
const form = document.getElementById('register');
const usernameValue = document.getElementById('username').value.trim();
const emailValue = document.getElementById('email').value.trim();
const passwordValue = document.getElementById('password').value.trim();
const password2Value = document.getElementById('password2').value.trim();

	if(usernameValue === '') {
		setErrorFor("usernameErr", 'Username cannot be blank');
		flag=false;
	} else {
		setSuccessFor("usernameErr",username);
	}
	
	if(emailValue === '') {
		setErrorFor("emailErr", 'Email cannot be blank');
		flag=false;
	} else if (!isEmail(emailValue)) {
		setErrorFor("emailErr", 'Not a valid email');
		flag=false;
	} else {
		setSuccessFor("emailErr",email);
	}
	
	if(passwordValue === '') {
		setErrorFor("psswrdErr", 'Password cannot be blank');
		flag=false;
	} else {
		setSuccessFor("psswrdErr",password);
	}
	
	if(password2Value === '') {
		setErrorFor("psswrd2Err", 'Password Confiramtion cannot be blank');
		flag=false;
	} else if(passwordValue !== password2Value) {
		setErrorFor("psswrd2Err", 'Passwords does not match');
		flag=false;
	} else{
		setSuccessFor("psswrd2Err",password2);
	}
return flag;
}

function checkLoginInputs(){
	var flag=true;
const form = document.getElementById('login');
const emailValue = document.getElementById('emailL').value.trim();
const passwordValue = document.getElementById('passwordL').value.trim();
    if(emailValue === '') {
            setErrorFor("emailLErr", 'Email cannot be blank');
            flag=false;
        }
    else if (!isEmail(emailValue)) {
            setErrorFor("emailLErr", 'Not a valid email');
            flag=false;
        }
    else {
            setSuccessFor("emailLErr",email);
        //flag=true;
        }
    
        if(passwordValue === '') {
            setErrorFor("psswrdLErr",'Password cannot be blank');
            flag=false;
        }
        else {
            setSuccessFor("psswrdLErr",password);
           // flag=true;
        }
    return flag;
}


function setErrorFor(id,message) {
	const small = document.getElementById(id);
	small.style.color="#e74c3c";
	small.innerText = message;
	small.style.visibility="visible";
}

function setSuccessFor(id) {
const small=document.getElementById(id);
small.innerText="";
small.style.visibility="hidden";

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
