/*
I need to create a 16 * 16 grid of divs
I could start with making a 2 sided loop and for each loop I create 16 divs on a new line?




*/
let container = document.querySelector("#container")
let btn = document.querySelector("#grid-button")
let gridTrigger = btn.addEventListener('click', handleClick)




function handleClick(e){
    container.innerHTML=""
    let dimension = +prompt('How many squares per side of the grid do you want?')
    
    for (let i = 0; i < dimension ; i++){
        if(dimension>100){
            alert("Dimension cannot be greater than 100")
            break;
        }
        let gridRow = document.createElement('div') 
        gridRow.setAttribute("class", "grid-row")
        for(let j = 0; j < dimension; j++){
            let newDiv = document.createElement("div")
            newDiv.setAttribute("class", "grid-item")
            gridRow.appendChild(newDiv)
        }
        container.appendChild(gridRow)
    }
}


    

    
