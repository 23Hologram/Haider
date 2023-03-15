function sayHello() {
    var name = document.getElementById("name").value
    var message = "<h2>Nice to meet you " + name + ".</h2>";
         document.getElementById("content")
    .innerHTML = message;

    if (name === "Mazen") {
        var title =
        document
        .querySelector("#title")
        .textContent;
        title += " Greetings Adventurer !";
        document
        .querySelector("#title")
        .textContent = title;
       
    };
    if (name === "Ahmed") {
        var title =
        document
        .querySelector("#title")
        .textContent;
        title += " Greetings Racer";
        document
        .querySelector("#title")
        .textContent = title;
    };
    if (name === "Abdullah") {
        var title = 
         document
        .querySelector("#title")
        .textContent;
        title += " Greetings Fighter";
        document
        .querySelector("#title")
        .textContent = title;
        
    }
}