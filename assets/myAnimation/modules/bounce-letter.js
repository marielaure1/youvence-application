export default class BounceLetter{

   

    constructor(options = {}){
        this.className = options.className || ".animation.animation-bounce-letter"
        this.spanHeight = ""

        if(document.querySelectorAll(this.className)[0]){
            this.explodeWord()
        }
    }

    explodeWord(){
        document.querySelectorAll(this.className).forEach((element, index) => {
            // console.log(element.offsetTop);
            
            element.setAttribute("data-animation-id", `${index}`)
            let string = element.textContent.split(' ')
            const styleElement = getComputedStyle(element)
            
            this.spanHeight = styleElement.fontSize
            element.innerText= ""

            for (var i = 0; i < string.length; i++) {
                
                let span = document.createElement("span")
                span.classList.add("animation-explode-word")
                span.style.height = `calc(${this.spanHeight} * 1.2)`
                span.dataset.scroll = ''
                span.classList.add("hoverable")

                if(string[i].includes("-")){
                    let stringTiret = string[i].split("-")

                    for (let tiret = 0; tiret < stringTiret.length; tiret++) {
                        let spanb = document.createElement("span")
                        spanb.classList.add("animation-explode-word")
                        
                        spanb.innerHTML = `${stringTiret[tiret]}`
                        element.appendChild(spanb)
                        
                        if(tiret  < string.length - 1){
                            let spanTiret = document.createElement("span")
                            spanTiret.classList.add("animation-explode-word")
                            spanTiret.innerHTML = `<span>-</span>`
                            element.appendChild(spanTiret)
                        }
                    }

                } else{
                    
                    span.innerText = `${string[i]}`
                    element.appendChild(span)

                    if(i  < string.length - 1){
                        let spanSpace = document.createElement("span")
                        spanSpace.classList.add("animation-explode-word")
                        spanSpace.innerHTML = `<span>&nbsp;</span>`
                        element.appendChild(spanSpace)
                    }
                }
            }

            
            // this.bounce(element)
            this.explodeLetter(element)
        });
    }

    explodeLetter(element){
        let words = element.childNodes

        for (let index = 0; index < words.length; index++) {
            if(index < words.length){             
                
                let string = words[index].textContent
                words[index].innerText= ""
                
                for (var i = 0; i < string.length; i++) {
                    let spanSpace = document.createElement("span")
                    spanSpace.classList.add("animation-explode-letter")
                    spanSpace.dataset.scroll = ''
                    spanSpace.dataset.scrollSpeed = `4`
                    spanSpace.innerText = `${string.charAt(i)}`
                    words[index].appendChild(spanSpace)
                }

                index++
            }
            
        }

        if(element.getAttribute('data-on-view')){
            this.scroll(element)
        } 
    }

    bounce(element){

        element.style.display = "flex"
        element.style.visibility = "visible"

        let word = document.querySelector(`[data-animation-id="${element.getAttribute("data-animation-id")}"]`)
        let letters = word.querySelectorAll(".animation-explode-letter")

        let duration = (parseInt(element.getAttribute("data-duration")) || 20 ) * 0.01
        let d = duration

        let top = letters[0].offsetTop
        let statue = 0

        for (let c = 0; c < letters.length; c++) {

            if(top < letters[c].offsetTop && statue == 0){
                d = duration
                top = letters[c].offsetTop
            }
            
            letters[c].style.transitionDelay = `${d}s`
            // letters[c].style.marginTop = `0px`

            d += duration
        }

        setTimeout(() => {
            for (let c = 0; c < letters.length; c++) {
                letters[c].style.marginTop = `${parseInt(this.spanHeight) * 0.1}px`
            }
        }, element.getAttribute("data-delay") || 0);

        element.classList.add("show")

    }

    scroll(element){

        window.addEventListener("scroll", () => {

            if(window.scrollY > element.offsetTop - ((window.innerHeight / 3) * 3) && window.scrollY < element.offsetTop + ((window.innerHeight / 3))){
                this.bounce(element)
            }

        })
        
    }
}