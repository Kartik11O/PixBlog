if(screen.width < 980) { 
    // do any 480 width stuff here, or simply do nothing
    // return;
} else {
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
}