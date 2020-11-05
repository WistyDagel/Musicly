var table = document.getElementById('table');

fetch('./data.json')
.then(res => res.json())
.then(data => {
    if(data){
        constructTable(data);
    }
});

constructTable = data => {
    console.log(data);

    var cols = [];

    for (let i = 0; i < data.length; i++) {
        for (var col in data[i]) {
            //push the value of the column in the cols array (-1 removes the duplication of the multple column names)
            if(cols.indexOf(col) === -1){
                cols.push(col);
            }
        }
    }
    // console.log(cols);

    var tr = table.insertRow(-1);
    
    //Creates the table headers
    for (let i = 0; i < cols.length -1; i++) {
        
        var th = document.createElement("th");
        th.innerHTML = cols[i];

        tr.appendChild(th);
    }

    //Creates the table row content
    for (let i = 0; i < data.length; i++) {
        var trow = table.insertRow(-1);
        for (let j = 0; j < cols.length - 1; j++) {
            const element = trow.insertCell(-1);
            
            element.innerHTML = data[i][cols[j]];
        }        
        const element = trow.insertCell(-1);
        
        element.innerHTML = "▶";
        element.addEventListener("click", ()=>{
            playAudio(data[i][cols[3]], element);
        });
        element.classList = "playButton";
    }
}



let audio = null;
let isPlaying = false;
let playButtons = document.getElementsByClassName("playButton");

// for(let singleButton of playButtons) {
//     console.log(singleButton);
//     singleButton.addEventListener('ended', evt => {
//         console.log('ended', singleButton);
//         singleButton.innerHTML = '▶';
//     });
// }

let playAudio = (path, element) =>{
    if(!isPlaying){
        audio = new Audio(path);
        audio.addEventListener('ended', evt => {
            console.log('ended', element);
            isPlaying = false;
            element.innerHTML = "▶";
            
            for (let index = 0; index < playButtons.length; index++) {
            const button = playButtons[index];
            button.style.display = "block";
        }
        });
        audio.play();
        isPlaying = true;
        element.innerHTML = "⏸"

        for (let index = 0; index < playButtons.length; index++) {
            const button = playButtons[index];
            button.style.display = "none";
        }

    element.style.display = "block";

    } else if(isPlaying && audio){
        audio.pause();
        isPlaying = false;
        element.innerHTML = "▶";
        
        for (let index = 0; index < playButtons.length; index++) {
        const button = playButtons[index];
        button.style.display = "block";
    }
    }
}

let index = 0;
let playAll = () =>{
playButtons[index].click();

audio.addEventListener('ended', ()=>{
    if(index<(playButtons.length)-1){
        index++;
        playAll();
    } else{
        index = 0;
    }
})

//JS for switching the theme 
var switchTheme = document.getElementById('switch');
var theme = document.getElementById('theme');
var isDark = false;

switchTheme.onclick = () => {
    if(isDark){
        theme.href = "css/light.css";
        isDark = !isDark;
    } else { 
        theme.href = "css/dark.css";
        isDark = !isDark;
    }
}