function printTable(){
  var number = document.getElementById("number").value;
  var display=document.getElementById("display")
  display.innerHTML ="";
  for(var count = 1; count <=10; count++){
    display.innerHTML+=(parseInt(number)*parseInt(count))+"\n";
           }
}
