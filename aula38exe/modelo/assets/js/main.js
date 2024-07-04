const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundBodyColor = estilosBody.backgroundColor;

for (let p of ps){
    console.log(p);
    p.style.backgroundColor = backgroundBodyColor;
    p.style.color = 'white';
}