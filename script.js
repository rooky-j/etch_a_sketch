const container = document.getElementById('container');
const gridContainer = document.createElement('div');

gridContainer.style.width = '640px';
gridContainer.style.height = '640px';
container.appendChild(gridContainer);


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
        }
    }
}

loadGrid(16);