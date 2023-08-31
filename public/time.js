const updateTime = function(){ 
    let d = new Date()
    usa.innerHTML = d.toLocaleString('en-US',   { timeZone: 'America/Los_Angeles',}).split(", ")[1]
    india.innerHTML = d.toLocaleString('en-US', { timeZone: 'Asia/Kolkata',}).split(", ")[1]
    china.innerHTML = d.toLocaleString('en-US', { timeZone: 'Asia/Shanghai',}).split(", ")[1]

  let alarmhour = alarm1.value.split(":")[0]
  let alarmmin = alarm1.value.split(":")[1]
 
  if(d.getHours()==alarmhour && d.getMinutes() == alarmmin){  //getHours() & getMinutes() are built in functions
    console.log("Alarm is ringing")
    var audiourl = new Audio('mixkit-classic-alarm-995.wav');
    
    audior1.play();
  }
  }
  setInterval(updateTime, 1000);  //this will update time after every second
