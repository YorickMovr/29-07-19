const person = {
    name: 'Alex',
    callMyName: callMyName

}

function callMyName(){
    console.log(this)
}

callMyName();