const seconds = document.getElementById("Seconds-hand")

const minutes = document.getElementById("minutes-hand")

const hours = document.getElementById("hours-hand")

function getTime() {
  
    let time = new Date()
    
    let secs = time.getSeconds()
    let mins = time.getMinutes()
    let hrs = time.getHours()
    let interval = 6

    //console.log(time)


     //console.log('The time is '+ hrs +":" + mins +":"+ secs)
seconds.style.transform = "rotate(" + (secs * interval) + "deg)"
minutes.style.transform = "rotate(" + (mins * interval + secs /10) + "deg)"
hours.style.transform = "rotate(" + (hrs * 30 + mins /2) + "deg)"
} 

//getTime()
setInterval(getTime, 100)


