let oldDataToggleElement

if (document.querySelectorAll("[data-toggle='accordeon']")) {
    document.querySelectorAll("[data-toggle='accordeon']").forEach(element => {
        element.addEventListener("click", () => {
    
            element.classList.toggle("active")
            document.querySelector(element.getAttribute("data-target")).classList.toggle("active")
    
            if(document.querySelectorAll("[data-toggle='accordeon']")[0].getAttribute("data-accordeon")){
                if(oldDataToggleElement && oldDataToggleElement != element){
                    oldDataToggleElement.classList.remove("active")
                    document.querySelector(oldDataToggleElement.getAttribute("data-target")).classList.remove("active")
                }
                
                oldDataToggleElement = element
            }
        })    
    });
}