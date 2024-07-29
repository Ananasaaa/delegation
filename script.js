const div = document.createElement('div');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.textContent = 'Button 1';
btn2.textContent = 'Button 2';
btn3.textContent = 'Button 3';

btn1.style.margin = '10px';
btn2.style.margin = '10px';
btn3.style.margin = '10px';


function showBtn(event) {
    if(event.target) {
        alert('Button clicked: ' + event.target.textContent);
    }
}

div.addEventListener('click', showBtn);


div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);

document.body.appendChild(div);
