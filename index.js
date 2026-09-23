const viewMoreButton = document.querySelector(".view-more")
const extraArticles = document.querySelectorAll(".extra-article")


viewMoreButton.addEventListener("click",function(){
    if (extraArticles[0].classList.contains("hidden")){
        extraArticles.forEach(function(article){
        article.classList.remove("hidden") 
    })
    
    viewMoreButton.textContent = "View Less"
    
    } else {
        extraArticles.forEach(function(article){
            article.classList.add("hidden")
        })
        
    viewMoreButton.textContent = "View More"

    }    
})