export function animation(){
    const d = document;

    const sectionsToAnimate = d.querySelectorAll(".animacion, .enlace-gob");
    
   
    const cb = (entries) =>{
        entries.forEach(entry =>{
            
            if(entry.isIntersecting){
              if(entry.target.classList[1] === "animacion"){
                 entry.target.classList.add("fade-in-bottom");
              }
             
              if(entry.target.classList[0] === "enlace-gob"){
                entry.target.classList.add("fade-in");
              }
      
            }
        })
    }

     //Recibe una callback y una serie de opciones 
     const observer = new IntersectionObserver(cb, {
        rootMargin: '-150px'
     });

    //A cada section le agregamos atributo observe
    sectionsToAnimate .forEach(el => {
        el.style.opacity = "0";
        observer.observe(el);
     })
        
}