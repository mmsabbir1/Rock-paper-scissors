
let titleDiv = document.getElementById('title');
//let title = document.getElementById('title').innerHTML 
//= 'Sabbir Hossain';
let message = 'Good bye my dear!';
titleDiv.innerText = message;

titleDiv.innerHTML = `<p> ${message} </p>`

titleDiv.style.color = 'red'
titleDiv.style.backgroundColor = 'yellow'

//let redDiv = document.getElementById('red');
//let yellowDiv = document.getElementById('yellow');
//let greenDiv = document.getElementById('green');

//redDiv.onclick = () => {
//   console.log('user choose rock')
//}

//yellowDiv.onclick = () => console.log('you clicked yellow')
//greenDiv.onclick = () => console.log('you clicked green')

const squares = document.querySelectorAll('.colorSquare')
//console.log(squares);
//console.log(squares[0].value)
//console.log(squares[1].value)
//console.log(squares[2].value)

const timeClicked = {red: 0, yellow:0, green: 0 }
squares.forEach(square => {
   //console.log(square.value)
   square.onclick =() => {
    timeClicked[square.value] += 1
    square.innerText = timeClicked[square.value]
    
   }
})

function clearScores(){
    timeClicked.red = 0
    timeClicked.yellow = 0
    timeClicked.green = 0
    squares.forEach(square => {
        square.innerText = ''
    })
}
const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()

