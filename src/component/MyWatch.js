

var hourEle=document.getElementById('hour')
var minEle=document.getElementById('min')
var secEle=document.getElementById('sec')


function watch(){
    var date=new Date()
    var h=date.getHours()
    var m=date.getMinutes()
    var s=date.getSeconds()
    h=(h < 10) ? '0'+ h : h
    m=(m < 10) ? '0'+ m : m
    s=(s < 10) ? '0'+ s : s

    hourEle.textContent=h
    minEle.textContent=m
    secEle.textContent=s
}

(function (){
    setInterval(watch,1000)
})();
// running()
function MyWatch() {
  return (
    <div className="myWatch">
      <div className="box" id="hour"></div>:<div className="box" id="min"></div>:
      <div className="box" id="sec"></div>
    </div>
  );
}
export default MyWatch;