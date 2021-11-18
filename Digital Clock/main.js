const getTime = ()=>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm = h>=12 ?"PM":"AM"
    h = h%12;
    h = h == 0 ? 12 : h;
    m=m>9?m:"0" +m;
    s = s>9?s:"0"+s;
    return `${h}:${m}:${s} ${ampm}`;

}
setInterval(()=>{
let clockOB=document.querySelector('.click');
clockOB.innerHTML = getTime();
},1000);