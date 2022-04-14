
const container = document.querySelector("#container");
const button = document.querySelector("button");

createGrid(10);


function createGrid(size){
    container.style.setProperty("--grid-size", size);
    for (let i = 0; i < (size * size); i++){
        let cell = document.createElement("div"); 
        cell.onmouseover = () => {
            cell.classList.add("colored");           
        }
        container.appendChild(cell);
        }

}

button.addEventListener('click', () => {
    setTimeout(function(){
        location.reload();
    }, 0.1);
  });

