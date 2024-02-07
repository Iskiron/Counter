let count = 0;
document.getElementById("inc").onclick =() => {
    count++;
    document.getElementById("num").innerHTML= count;
}

document.getElementById("reset").onclick =() => {
    count=0;
    document.getElementById("num").innerHTML= count;
}
document.getElementById("dec").onclick =() => {
    count--;
    document.getElementById("num").innerHTML= count;
}
document.getElementById("num").innerHTML= count;