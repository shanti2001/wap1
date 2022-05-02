function demo(){
    var x = document.getElementById("pic").value.replace(/.*(\/|\\)/,'');
    var y = document.getElementById("div1");
    y.style.backgroundImage = "url("+x+")";
    
}