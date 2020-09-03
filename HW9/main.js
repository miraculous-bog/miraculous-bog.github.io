arr = ['#FFFF33','#FF0000','#FF0033','#CC0066','#9900CC','#6633FF','#0099FF','#00CCFF','# 99FFFF','#339966','#33CC66','#66CC66','#99CC66','#333300','#000033','#000000','#666666','#FFFFFF'];




function startDicko() {
  setInterval(() => {
    let grid = document.querySelectorAll('.grid-el');
    grid.forEach((el) => {
      el.style.background = arr[Math.floor(Math.random() * 19)];  
    });
  }, 1000);
}

const cont = document.querySelector('.container');
function generateBlocksInterval(){
  for(let i = 0; i < 25; i++) {
    let block = document.createElement("div");
    block.className = "grid-el";
    cont.append(block);
  }
}