function ChangeBG() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
 }
 
 function cambiarFondo() {
    const card = document.querySelector(".card-body");
    const color = ChangeBG();

    card.style.backgroundColor = color;
    card.style.border = `3px solid ${color}`;
    
 }

 cambiarFondo();
 