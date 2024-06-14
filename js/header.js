export function header(){
    const d = document;
    const w = window;
   
    const containerMenu = d.querySelector(".header");
    const hambur = d.querySelector(".hamburger");
    const nodoButton = d.querySelectorAll(".nodobutton");
    const redesHeader = d.querySelector(".redes-cel-container");
    const textHeader = d.querySelector(".text-header h1");
    const menu = d.querySelector(".header");
    const logoHeader = d.querySelector(".logo-header");

    const ToggleAnimationButton = el =>{
        hambur.addEventListener("click", e=>{
           hambur.classList.toggle("is-active");
        });
    }

    ToggleAnimationButton();

    const ClickEnlaceCerrarMenu = el =>{
        if(el.target.matches(".menu-enlace")){
            containerMenu.classList.add("menu-cerrado");
        }
    }

    const MenuAbierto = e =>{
        containerMenu.classList.toggle("menu-abierto");
        
    }

    const RemoveMenuCerradoAbierto = e =>{
        containerMenu.classList.remove("menu-cerrado");
        containerMenu.classList.remove("menu-abierto");
    }

    const menuFixedAndThin = () =>{
        menu.style.position = "fixed";
        menu.style.height = "150px";
        redesHeader.classList.add("display-none");
        textHeader.classList.add("display-none");
        logoHeader.classList.add("logo-transform");
    }

    const RemoveMenuFixedAndThin = () =>{
        menu.style.position = "relative";
        redesHeader.classList.remove("display-none");
        textHeader.classList.remove("display-none");
        menu.style.height = "160px";
        logoHeader.classList.remove("logo-transform");
    }



    
    d.addEventListener("click", (e)=>{
       if(e.target.matches(".nodobutton")){
        MenuAbierto();
       }
       if(screen.width <= 800){
        if(e.target.matches(".menu-enlace")){
            RemoveMenuCerradoAbierto();
            hambur.classList.toggle("is-active");
        }
       }
    });

    //Efecto scroll menu
    if(screen.width>800){
        w.addEventListener("scroll", () =>{
            scrollY >100 ?  menuFixedAndThin() : RemoveMenuFixedAndThin()        
        })
    }
    

   


}