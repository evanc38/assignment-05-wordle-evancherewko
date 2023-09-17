

function darkMode(){
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    console.log(rs.getPropertyValue('--mode'))


    if(rs.getPropertyValue('--mode') == "0"){
        // dark Mode
        r.style.setProperty('--mode', '1')
        r.style.setProperty('--background', 'rgb(39, 39, 39)')
        r.style.setProperty('--textColor', 'rgb(230, 230, 230)')
        r.style.setProperty('--barColor', 'rgb(19, 19, 19)')
        r.style.setProperty('--barText', 'white')

    }else{
        // Light Mode
        r.style.setProperty('--mode', '0')
        r.style.setProperty('--background', 'white')
        r.style.setProperty('--textColor', 'black')
        r.style.setProperty('--barColor', 'rgb(224, 224, 224)')
        r.style.setProperty('--barText', 'black')

    }
}

function updateTable(orderArray){
    document.getElementById("tableID").outerHTML = "";
    
    var g = document.createElement("table")
    document.getElementById('tableDivID').appendChild(g)
    g.setAttribute("id", "tableID")
    g.setAttribute("class", "mainTable")

    var table = document.getElementById("tableID"); 

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    orderArray.forEach(function(items) {
    var row = document.createElement("tr");
    items.forEach(function(item) {
    var cell = document.createElement("td");
    cell.textContent = item;
    row.appendChild(cell);
    });
    tbody.appendChild(row);
    });
}

function updateArray(key, arr, i){
    // for(i = 0; i < 4; i++){
    for(j = 0; j < 4; j++){
        if(arr[i][j] == ""){
            arr[i][j] = key
            updateTable(arr)
            return
        }
    }
    // }
}

function arrayDelete(arr, i){
    // for(i = 3; i > -1; i--){
    for(j = 3; j > -1; j--){
        if(arr[i][j] != ""){
            arr[i][j] = ""
            updateTable(arr)
            return
        }
    }
    // }
}

function checkAnswer(arr, i){
    answer = ""
    for(j = 0; j < 4; j++){
        if(arr[i][j] == ""){
            alert("Please finish the word")
            return
        }else{
            answer += arr[i][j]
        }
        
    }


    //Change Colours
    r = document.querySelector(':root');
    for(j = 0; j < 4; j++){
        if(arr[i][j] == word[j]){
            r.style.setProperty("--"+(i+1).toString()+(j+1).toString(), 'rgba(7, 187, 67, 0.4)')
        }else if(word.includes(arr[i][j])){
            r.style.setProperty("--"+(i+1).toString()+(j+1).toString(), 'rgba(248, 234, 109, 0.4)')
        }else{
            r.style.setProperty("--"+(i+1).toString()+(j+1).toString(), 'var(--barColor)')
        }
    }

    console.log(answer)
    if (answer == word){
        console.log("CORRECT")
        document.getElementById("tableID").innerHTML = "The word was " + word + "!!"

        // alert("You Win!!!!!!")
    }else{
        if (guess == 3){
            document.getElementById("hintID").innerHTML = "You lost! The word was " + word
            r.style.setProperty("--highlight", 'red')
        }
        console.log("INCORRECT")
    }

    guess += 1
}

async function getWords(){
    // document.getElementById("butID").innerHTML = "LOADING"
    // res = await fetch("https://api.masoudkf.com/v1/wordle", {
    // headers: {
    // "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
    //     },
    // })
    // .then((res) => res.json())

    // var num = Number.parseInt(Math.random() * res.dictionary.length)
    // word = res.dictionary[num]['word']
    // word = word.toLowerCase()
    // hint = res.dictionary[num]['hint']

    
    
    wordList = ["Also",	"Able",	"Acid", "Aged",	"Away",	"Baby", "Back",	"Bank",	"Been", "Ball",	"Base",	"Busy", "Bend",	"Bell",	"Bird", "Come",	"Came",	"Calm", "Card",	"Coat",	"City", "Chat",	"Cash",	"Crow", "Cook",	"Cool",	"Dark", "Each",	"Evil",	"Even", "Ever",	"Face",	"Fact", "Four",	"Five",	"Fair", "Feel",	"Fell",	"Fire", "Fine",	"Fish",	"Game", "Gone",	"Gold",	"Girl", "Have",	"Hair",	"Here", "Hear",	"Into",	"Iron", "Jump",	"Kick",	"Kill", "Life",	"Like",	"Love", "Main",	"Move",	"Meet", "More",	"Nose",	"Near", "Open",	"Only",	"Push", "Pull",	"Sell",	"Sale"]

    var num = Number.parseInt(Math.random() * wordList.length)
    word = wordList[num]
    word = word.toLowerCase()
    hint = "test hint"


    console.log(word)
    console.log(hint)
    document.getElementById("butID").innerHTML = "Start Over"
    setupCode()
}

function reloadWord(){
    // reset changes
    var r = document.querySelector(':root')
    document.getElementById("hintID").innerHTML = "©EvanCherewko"
    r.style.setProperty("--highlight", 'var(--barColor)')
    


    // var num = Number.parseInt(Math.random() * res.dictionary.length)
    // word = res.dictionary[num]['word']
    // word = word.toLowerCase()
    // hint = res.dictionary[num]['hint']


    wordList = ["Also",	"Able",	"Acid", "Aged",	"Away",	"Baby", "Back",	"Bank",	"Been", "Ball",	"Base",	"Busy", "Bend",	"Bell",	"Bird", "Come",	"Came",	"Calm", "Card",	"Coat",	"City", "Chat",	"Cash",	"Crow", "Cook",	"Cool",	"Dark", "Each",	"Evil",	"Even", "Ever",	"Face",	"Fact", "Four",	"Five",	"Fair", "Feel",	"Fell",	"Fire", "Fine",	"Fish",	"Game", "Gone",	"Gold",	"Girl", "Have",	"Hair",	"Here", "Hear",	"Into",	"Iron", "Jump",	"Kick",	"Kill", "Life",	"Like",	"Love", "Main",	"Move",	"Meet", "More",	"Nose",	"Near", "Open",	"Only",	"Push", "Pull",	"Sell",	"Sale"]

    var num = Number.parseInt(Math.random() * wordList.length)
    word = wordList[num]
    word = word.toLowerCase()
    hint = "test hint"

    console.log(word)
    console.log(hint)

    orderArray= [
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""]];
    updateTable(orderArray)

    //reset colors
    for(i = 0; i < 4; i++){
        for(j = 0; j < 4; j++){
            r.style.setProperty("--"+(i+1).toString()+(j+1).toString(), 'var(--background)')
        }
    }

    guess = 0
}



function setupCode(){
    guess = 0
    orderArray= [
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""]];

    var table = document.getElementById("tableID");
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    orderArray.forEach(function(items) {
    var row = document.createElement("tr");
    items.forEach(function(item) {
    var cell = document.createElement("td");
    cell.textContent = item;
    row.appendChild(cell);
    });
    tbody.appendChild(row);
    });
}

function rules(){
    var x = document.getElementById("rulesID");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hintDisplay(){
    console.log(hint)
    document.getElementById("hintID").innerHTML = "Hint: " + hint
    var r = document.querySelector(':root')
    r.style.setProperty("--highlight", 'var(--barColor)')
}

//--------------------------------MAIN---------------------------------------
document.getElementById("rulesID").style.display = "none"

getWords()


document.addEventListener("keyup", (e) => {
    console.log(orderArray)
    // window.focus()
    let pressedKey = (String(e.key))
    if (pressedKey === "Backspace") {
        arrayDelete(orderArray, guess)
        return
    }
    if (pressedKey === "Enter") {
        checkAnswer(orderArray, guess)
        return
    }
    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        updateArray(pressedKey.toLowerCase(), orderArray, guess)
    }
})














