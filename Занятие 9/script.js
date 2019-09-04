const btm = document.getElementById('btn');
const div = document.getElementById('div');
const lis = document.querySelectorAll('#list > li');

for(let i=0; lis.length; i++){
    lis[i].addEventListener('click', onClick);
}

btn.addEventListener('click', onClick);
div.addEventListener('click', onDivClick);

function onClick(e){
    console.log('clicked', e.target, this)
    e.target.classList.add('clicked')
};

function onDivClick(e){
    console.log('div', e.target, this);
}