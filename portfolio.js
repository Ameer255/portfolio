



   let navOpen=false;

     function navOpenClose(){

        
        let nav=document.getElementById("nav-sm");
    
        let navLinks=document.querySelector('#nav-sm a');
    
        let hamberger=document.querySelector('#hamberger');


        

        if (navOpen === false){
            nav.style.width = "100%";
            nav.style.left = "0";

            

            hamberger.classList.add('toggle');
            navOpen=true;

        }

        else if(navOpen===true){
            nav.style.width = "0%";
            nav.style.left = "-400px";
            
            

            hamberger.classList.remove('toggle');
            navOpen=false;

        }
    }
   
