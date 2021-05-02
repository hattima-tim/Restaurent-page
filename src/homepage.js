function homepage(){
    const body=document.querySelector('body');
    const content=document.querySelector('#content')
    const parentdiv=document.createElement('div');
    const div=document.createElement('div');
    const headerOne=document.createElement('h1');
    const headerTwo=document.createElement('P');
    const img=document.createElement('img');
    headerOne.textContent="A BOWL OF LOVE FROM JAPANESE COUSINE FOR YOU";
    headerTwo.textContent="Honest ramen crafted with ethically farmed ingredients and love.";
    img.setAttribute('src','https://cdn.dribbble.com/users/4680578/screenshots/13882368/media/6fc181c5bb4ab9a3c57a5065cf36f107.jpeg?compress=1&resize=800x600');
    parentdiv.style='display:flex;align-items:center'
    img.style='float:right;height:100%;'
    body.style.background='#ff2f2b'
    div.appendChild(headerOne)
    div.appendChild(headerTwo)
    parentdiv.appendChild(div)
    parentdiv.appendChild(img)
    content.appendChild(parentdiv)
    return content;
}
export default homepage;