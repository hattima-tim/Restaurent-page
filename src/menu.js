function menu(){
    const content=document.querySelector('#content');
    const div=document.createElement('div');
    const img=document.createElement('img');
    img.setAttribute('src','https://i.pinimg.com/originals/fb/52/81/fb528170c4a1115250f3f3d2d19105f7.jpg');
    div.style='display:flex;justify-content:center'
    div.appendChild(img)
    content.appendChild(div)
    return content;
}
export default menu;