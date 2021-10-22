document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let width = 10
    let bombAmount = 3 
    let squares = []
    
    
    function createBoard () {
        const bombsArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('valid')
        console.log(bombsArray)
        console.log(emptyArray)
        const gameArray = emptyArray.concat(bombsArray) 
        console.log(gameArray)
        const shuffleArray = gameArray.sort(() => Math.random() -0.5)
        console.log(shuffleArray)
        


        for(let i = 0; i < width*width; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square) 

        }
    }
    createBoard() 






})