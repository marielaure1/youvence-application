let oldDataToggleElement

if (document.querySelectorAll("[data-toggle='modal']")) {
    document.querySelectorAll("[data-toggle='modal']").forEach(element => {
        element.addEventListener("click", () => {
    
            element.classList.toggle("active")
            document.querySelector(element.getAttribute("data-target")).classList.toggle("active")
    
            if(oldDataToggleElement && oldDataToggleElement != element){
                oldDataToggleElement.classList.remove("active")
                document.querySelector(oldDataToggleElement.getAttribute("data-target")).classList.remove("active")
            }
            
            oldDataToggleElement = element
        })    
    });
}