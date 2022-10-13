export function animation(){
    const d = document;

    const sectionsToAnimate = d.querySelectorAll(".animacion");
   
    const cb = (entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
              entry.target.classList.add("fade-in-bottom");
            }
        })
    }

     //Recibe una callback y una serie de opciones 
     const observer = new IntersectionObserver(cb, {
        rootMargin: '-150px'
     });

    //A cada section le agregamos atributo observe
     sectionsToAnimate.forEach(el => {
        el.style.opacity = "0";
        observer.observe(el);
     })
        
}