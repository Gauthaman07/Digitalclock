let btn = document.getElementById('btn')
function showTime(){
    var date = new Date()
    var hour = addZero(date.getHours())
    var minutes =addZero(date.getMinutes())
    var seconds = addZero(date.getSeconds())

    var time = (`${hour} : ${minutes} : ${seconds}`)
    document.getElementById('clockDisplay').innerText = time ;

    setTimeout(showTime, 1000);
}
showTime()


function addZero(zero){
    return (zero<10)? `0${zero}` : zero
}

function myFunction(){
   var element=  document.body;
   element.classList.toggle('dark-mode');
   
}


