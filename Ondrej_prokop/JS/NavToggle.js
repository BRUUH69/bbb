const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
   
    
    
    burger.addEventListener('click',()=>{
        //Toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 50+1}s`;
            }
        });

          
            //posunutí textu
            //editCSS.classList.toggle('EditMargin');

        //posunutí zapati
        

        //burger animation
        burger.classList.toggle('toggle');
        
        

    });     
    
}

navSlide();