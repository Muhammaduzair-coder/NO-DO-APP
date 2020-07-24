
function AddTodo(){

    var list = document.getElementById("list");

var inp = document.getElementById("sizz")

var li = document.createElement('li');

var txtnode = document.createTextNode(inp.value);

li.appendChild(txtnode);

li.setAttribute("class" , "alert alert-secondary")

list.appendChild(li);


 inp.value  = " ";


var delbtn = document.createElement("button")

delbtn.setAttribute("class" , "btn btn-danger")

var delword = document.createTextNode("Delete")

delbtn.appendChild(delword)
delbtn.setAttribute("onclick" , "deleteone(this)")
li.appendChild(delbtn)

list.appendChild(li)

var editbtn = document.createElement("button")

editbtn.setAttribute("class" , "btn btn-warning ")
editbtn.setAttribute("onclick" , "editmode(this)")
var editword = document.createTextNode("Edit")

editbtn.appendChild(editword)

li.appendChild(editbtn)

list.appendChild(li)



}
function deleteone(e){
e.parentNode.remove()
}

function editmode(e){

    var edito =  prompt("Edit your note" , e.parentNode.firstChild.nodeValue);
    
    e.parentNode.firstChild.nodeValue = edito

}





function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  
function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
  }


  myFunction();
