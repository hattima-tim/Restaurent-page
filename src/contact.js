function contact(){
    const content=document.querySelector('#content');
    const div=document.createElement('div');
    const img=document.createElement('img');
    img.setAttribute('src','https://cdn.hipwallpaper.com/i/88/1/tmOK0P.jpg');
    const headerOne=document.createElement('h1');
    const headerTwo=document.createElement('h2');
    const headerThree=document.createElement('h2');
    headerOne.textContent="Book A Seat"
    headerTwo.textContent="Phone: (619) 123-4567"
    headerThree.textContent='Email: letsgo@go.com'
    img.style="height:50%"
    div.appendChild(headerOne)
    div.appendChild(headerTwo)
    div.appendChild(headerThree)
    div.appendChild(img)
    div.style='display:flex;align-items:center;justify-content:center;flex-direction:column;height:500px'
    content.appendChild(div)
    return content;
}
export default contact;