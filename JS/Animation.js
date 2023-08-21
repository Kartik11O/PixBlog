let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
         entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
    })

 const hiddenElements = document.querySelectorAll(".animation")  
 hiddenElements.forEach((el) => observer.observe(el));  