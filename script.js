function start() {
    if (document.getElementById("1").className === "color" && document.getElementById("2").className === "color" && document.getElementById("3").className === "color") {
        console.log("p1 Wins!!!");}
    let lastColor = "color2";
    var el  = document.getElementById("1");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    var el  = document.getElementById("2");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    var el  = document.getElementById("3");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    var el  = document.getElementById("4");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    var el  = document.getElementById("5");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    var el  = document.getElementById("6");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    var el  = document.getElementById("7");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    var el  = document.getElementById("8");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    var el  = document.getElementById("9");
    if (el) {
        el.addEventListener("click", runMe);
        
    } else {
        console.log("No such element found");
    }
    function runMe(args) {
        if (!args.srcElement.className) {
            if (lastColor === "color2") {
                args.srcElement.className = "color";
                console.log(args);
                lastColor = "color";
                console.log(lastColor)
            } else if (lastColor === "color"){
                args.srcElement.className = "color2";
                console.log(args);
                lastColor = "color2";
                console.log(lastColor)
            }
        }
    }
}