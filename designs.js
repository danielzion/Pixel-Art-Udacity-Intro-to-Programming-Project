
// Variable Declarations
// Select size input
const inputHeight = document.getElementById('inputHeight');

const inputWidth = document.getElementById('inputWidth');

const submitBtn = document.getElementById('submitInput')

const container = document.getElementById('pixelCanvas');
const colorSelect = document.getElementById('colorPicker');

// Event Listeners
submitBtn.addEventListener('click', submitFunc);



// Functions Declaration
// Resets the table whenever the values are changed
function resetTable() {
    container.innerHTML = '';   
}

// Submit Function
function submitFunc(e) {
    resetTable()
    e.preventDefault();
    const rows = inputHeight.value;

    const cols = inputWidth.value
    // makeGrid()
    makeGrid(rows, cols);
}

// When size is submitted by the user, call makeGrid()
function makeGrid(rows, cols) {
    for (let i = 1; i <= rows; i++) {
        const tableRow = document.createElement('tr')
        container.appendChild(tableRow).classList.add(`tr`)
        tableRow.setAttribute('id', `${i}`)
        for (let j = 1; j <= cols; j++) {
            const tableCols = document.createElement('td')
            tableRow.appendChild(tableCols).classList.add(`td`)
            tableCols.setAttribute('id', `${i}x${j}`)
            tableCols.addEventListener('click', function(e){
                tableCols.style.backgroundColor = colorSelect.value;
                });
        }
    }
}


