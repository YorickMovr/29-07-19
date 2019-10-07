let table = document.querySelector('table');
table.addEventListener('click', function(ev){
    if(ev.target.tagName === 'SPAN'){
        let table = ev.target.parentNode.parentNode;
        table.remove();
    }
}, false);



function newContact(){
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let number = document.getElementById('number').value;

    let n = document.createTextNode(name)
    let s = document.createTextNode(surname)
    let p = document.createTextNode(number)

    let span = document.createElement('SPAN');
    let txt = document.createTextNode("X");
    span.className = 'close';
    span.appendChild(txt);
    td4.appendChild(span);

    td1.appendChild(n);
    td2.appendChild(s);
    td3.appendChild(p);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

        if(name ==""||surname == ""){
            alert('Проверьте введенные данные')
        }else if(!isFinite(number)||number == ""){
            alert('Проверьте номер еще раз')}
         else {
            document.getElementById('table').appendChild(tr);
        }

    

    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('number').value = '';

    // console.log(td1,td2,td3,td4)

}
