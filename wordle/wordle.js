

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
    var h = document.querySelector("table.mainTable")
    console.log(h)
    h.setProperty('style', 'background-color: red;')




    answer = ""
    for(j = 0; j < 4; j++){
        if(arr[i][j] == ""){
            alert("Please finish the word")
            return
        }else{
            answer += arr[i][j]
        }
        
    }
    console.log(answer)
    if (answer == word){
        console.log("CORRECT")
    }else{
        console.log("INCORRECT")
    }

    //Change Colours

    for(j = 0; j < 4; j++){
        if(arr[i][j] == word[i]){
            
            var h = document.querySelector("table:nth-child(2)")

            //mainTable tbody tr:nth-child(2) td:nth-child(2)
            h.style.setProperty('style', 'background-color: red;')
        }


    guess += 1

    }
}

async function getWords(){
    res = await fetch("https://api.masoudkf.com/v1/wordle", {
    headers: {
    "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
        },
    })
    .then((res) => res.json())

    var num = Number.parseInt(Math.random() * res.dictionary.length)
    word = res.dictionary[num]['word']
    word = word.toLowerCase()
    hint = res.dictionary[num]['hint']
    console.log(word)
    console.log(hint)
    setupCode()
}

function setupCode(){
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

//--------------------------------MAIN---------------------------------------
guess = 0
getWords()


    //mainTable tbody tr:nth-child(2) td:nth-child(2)        



document.addEventListener("keyup", (e) => {
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
        updateArray(pressedKey, orderArray, guess)
    }
})




















// var running = true;
// var i = 0
// var j = 0
// while(running){

//     eventTarget.addEventListener("keydown", (event) => {
//         if (event.isComposing || event.keyCode === 229) {
//             return;
//         }
//         alert("Keypress")
//     })




// }
