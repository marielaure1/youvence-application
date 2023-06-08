const produits = document.querySelectorAll(".product")
const dataFilters = document.querySelectorAll("[data-filter]")

dataFilters.forEach(dataFilter => {
    const value = dataFilter.getAttribute("data-filter")

    const filtres = document.querySelectorAll(`[data-filtre-${value}]`)

    filtres.forEach((filtre) => {
        filtre.addEventListener("click", () => {
            filtre.classList.toggle("active")

            produits.forEach((produit, index) => {
                
                let status = ""

                dataFilters.forEach(dataFilter => {
                    const value = dataFilter.getAttribute("data-filter")
                
                    if(produit.getAttribute(`data-filter-${value}`)){

                        if(filtre.getAttribute(`data-filter-${value}`) && filtre.getAttribute(`data-filter-${value}`) == "all"){
                            status = "actived"
                        } else {
                            let filtreProduit = $(".product").eq(index).data(`filter-${value}`)

                            filtreProduit.forEach(f => {
                                if(f == "all"){
                                    document.querySelector(`[data-filtre-${value}='all']`).classList.remove("actived")
                                }
                                filtres.forEach((filtre) => {

                                    if (filtre.getAttribute(`data-filtre-${value}`) == f  && filtre.classList.contains("active")) {
                                        status = "actived"
                                        console.log(filtre.getAttribute(`data-filtre-${value}`));
                                        console.log(f);
                                    } 
                                })
                                
                            });    
                        }
                    }
                })

                if(status == "actived"){
                    produit.classList.add("actived")
                } else {
                    produit.classList.remove("actived")
                }
            })
        })
    } )
});