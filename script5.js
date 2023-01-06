////////////////////////
const  d1 = [33,'best', 66, 'best'];
let b = document.querySelector('.b-1');
let i = document.querySelector('.i-1');
let c = document.querySelector('.out');

b.onclick = () => {
    d1.push (i.value);
    console.log(d1);
    c.innerHTML = d1;
}

b.onclick = () => {
    d1.shift (i.value);
    console.log(d1);
    c.innerHTML = d1;
}
