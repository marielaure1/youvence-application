/**
 * Changement de couleurs background
 */

let bgColor = document.querySelectorAll(".background")
let oldScrollY = 0

function background(){

    console.log(window.scrollY);

    if(bgColor){
        if(window.scrollY >= oldScrollY){
            bgColor.forEach(element => {
                if(window.scrollY > element.offsetTop - (window.innerHeight / 3 )){
                    document.body.style.backgroundColor = element.getAttribute("data-color")
                }
            })
    
        } else{
            bgColor.forEach(element => {
                if(window.scrollY < element.offsetTop + (window.innerHeight / 3 )   ){
                    document.body.style.backgroundColor = element.getAttribute("data-color")
                }
            })
    
        }
        
        oldScrollY = window.scrollY
    }
}

window.addEventListener("scroll", background)

/**
 * Apparitition texte
 */

let fadeContent = document.querySelectorAll(".animation.animation-fade-content")

function fade(){

    if(fadeContent){
        if(window.scrollY >= oldScrollY){
            fadeContent.forEach(element => {
                if(window.scrollY > element.offsetTop - ((window.innerHeight / 3) * 2)){
                    element.classList.add("show")
                }
            })
    
        } 

        // else{
        //     fadeContent.forEach(element => {
        //         if(window.scrollY > element.offsetTop - 400){
        //             element.classList.add("show")
        //         }
        //     })
    
        // }
        
        oldScrollY = window.scrollY
    }
}

window.addEventListener("scroll", () => {
    background()
    fade()
})

background()