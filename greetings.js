
const get =(target)=>document.querySelector(target);
const loginForm = get('.login-form');
const loginInput =  get('.login-form input');
const greeting = get('.greeting')

const STYLE_HIDDEN = "hidden"
const USERNAME_KEY = "username"

const handleSubmit = (e)=>{
    e.preventDefault();  
    loginForm.classList.add(STYLE_HIDDEN)
    const username = loginInput.value; 

    localStorage.setItem(USERNAME_KEY , username)

    paintGreetings(username)
}

const paintGreetings=(username)=>{
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(STYLE_HIDDEN)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);
if(savedUsername === null){
    loginForm.classList.remove(STYLE_HIDDEN);
    loginForm.addEventListener('submit', handleSubmit);
}else{
    paintGreetings(savedUsername)
}