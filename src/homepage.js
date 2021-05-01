function homepage(){
    const content=document.querySelector('#content')
    const headerOne=document.createElement('h1');
    const headerTwo=document.createElement('h2');
    const img=document.createElement('img');
    headerOne.textContent="Tobago & Tripoli";
    headerTwo.textContent="Where Bougie Meets Broke";
    img.setAttribute('src','https://cdn.dribbble.com/users/4680578/screenshots/13882368/media/6fc181c5bb4ab9a3c57a5065cf36f107.jpeg?compress=1&resize=800x600');
    
    content.appendChild(headerOne)
    content.appendChild(headerTwo)
    content.appendChild(img)
    return content;
}
export default homepage;