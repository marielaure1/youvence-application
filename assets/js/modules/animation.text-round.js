const textes = document.querySelectorAll(".text")

textes.forEach(element => {
    const text = element.firstElementChild

    text.innerHTML = text.innerText.split("").map(
        (char, i) => 
            `<span style="transform: rotate(${i * 8.4}deg)">${char}</span>`
    ).join("")
}); 