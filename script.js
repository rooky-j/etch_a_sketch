const container = document.getElementById('container');
const gridContainer = document.createElement('div');
const newGrid = document.getElementById('newGrid');
const blackColor = document.getElementById('blackColor');
const randomColor = document.getElementById('randomColor');

//Button clicks change this value which alters color in the loadGrid function
var whichColor = "black"; 

gridContainer.style.width = '640px';
gridContainer.style.height = '640px';
container.appendChild(gridContainer);

//Create a 16x16 grid when the page loads 
window.onload = function(){
    loadGrid(16);
}

//Color Select
blackColor.addEventListener('click', function(){
    whichColor = 'black';
})
randomColor.addEventListener('click', function(){
    whichColor = getRandomColor();
})

//Canvas Size
function number(){
    let number = prompt('Please choose canvas size. - (Rows x Columns)');
    return number;  
}

//Random Color Function 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//Removes existing Grid and puts a new one in place. 
newGrid.addEventListener('click', function(){
   while (gridContainer.hasChildNodes()){
       gridContainer.removeChild(gridContainer.lastChild);
   }
    var bPerRow = number();
    loadGrid(bPerRow);
})

//Logic to create a grid of x squares and rows in a confined 640px space. 
function loadGrid(x){
    for (let i = 0; i < x; i++){
        let row = document.createElement('div');
            row.style.height = (640/x) + 'px';
            row.style.width = '640px';
            row.className = 'gridRows';
        gridContainer.appendChild(row); 
        
        for (let j = 0; j < x; j++){
            let square = document.createElement('div');
                square.style.width = 640/x + 'px';
                square.style.height = 640/x + 'px';
                square.className = 'gridSquares';
            row.appendChild(square);
            square.onmouseover = function(){
                square.style.backgroundColor = whichColor;
                square.style.border = 'none';
            };
        }    
    }
}
