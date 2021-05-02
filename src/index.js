import homepage from './homepage';
import menu from './menu'
import contact from './contact'
homepage();
let parentDiv=document.querySelector('#content');
let removePreviousTab=()=>{
    while (parentDiv.firstChild) {
        parentDiv.firstChild.remove()
    }
}
let Home=document.querySelector('#home');
let Menu=document.querySelector('#menu');
let Contact=document.querySelector('#contact')
Menu.addEventListener('click',()=>{
    removePreviousTab();
    menu()
})
Home.addEventListener('click',()=>{
    removePreviousTab();
    homepage()
})
Contact.addEventListener('click',()=>{
    removePreviousTab();
    contact()
})