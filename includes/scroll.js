//<iframe> script by Dynamicdrive.com

//Specify speed of scroll. Larger=faster (ie: 5)
var scrollspeed=1
//var scrollspeed=cache=2

function initialize(){
marqueeheight=document.all? parent.document.all.datamain.height : parent.document.getElementById("datamain").getAttribute("height")
dataobj=document.all? document.all.datacontainer : document.getElementById("datacontainer")
dataobj.style.top=5
thelength=dataobj.offsetHeight
scrolltest()
}

function scrolltest(){
dataobj.style.top=parseInt(dataobj.style.top)-scrollspeed 
if (parseInt(dataobj.style.top)<thelength*(-1)){
dataobj.style.top=0}
setTimeout("scrolltest()",50)
}

window.onload=initialize



