let counter = 0;
document.getElementById("demo").innerHTML = counter;
function CounterAdd()
{   
    counter += 1
    document.getElementById("demo").innerHTML = counter;
}
function CounterSub()
{
    counter -= 1
    document.getElementById("demo").innerHTML = counter;
}