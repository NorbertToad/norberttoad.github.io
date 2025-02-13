let moveCount = 0;
const gifs = ["1.gif", "2.gif", "3.gif", "4.gif"]; 
function showMessage() {
    document.getElementById("message").innerText = " AWWWWW THANK YOU!!!!!! ⸜(｡˃ ᵕ ˂ )⸝♡ ";
    document.getElementById("message").innerText = " kaso libre mo.... >ᴗ< ";
    document.getElementById("message").style.display = "block";
}

function moveButton() {
    let button = document.querySelector(".no");
    let gifContainer = document.getElementById("gif-container");

    if (moveCount < 3) {
        let currentLeft = parseInt(button.style.left) || 0;
        let currentTop = parseInt(button.style.top) || 0;

        button.style.left = `${currentLeft + 50}px`;
        button.style.top = `${currentTop + 50}px`;

        gifContainer.innerHTML = `<img src="${gifs[moveCount]}" alt="Cute Reaction" width="150">`;

        moveCount++;
    } else {
        button.remove();
        gifContainer.innerHTML = "";
        document.querySelector(".yes").style.width = "50%";
        document.querySelector(".yes").style.height = "50px";
    }
}
