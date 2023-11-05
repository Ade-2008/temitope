const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
const changeIcon = document.querySelector(".fa-bars");


hamburger.addEventListener("click", ()=>{
    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        nav_menu.classList.toggle("active");
        
        if( hamburger.classList.toggle("active")){
            changeIcon.setAttribute("class", "fa-solid fa-bars")
        }
        else{
            changeIcon.setAttribute("class", "fa-solid fa-times")
        }
    });
    
})





const quote = document.querySelector(".read");
const btn = document.querySelector(".btn");
const quotes =[{
    quote:`"HE MADE ME AN UNSTOPPABLE DEVELOPER."`
},{
    quote:`"I LOVE DESIGNING BECAUSE AM A DEVELOPER."`
},{
    quote:`"I'M WEB DESIGNER. WHO LOVE CODING."`
},{
    quote:`"I LOVE MY BOSS SO MUCH. HIS THE BEST TEACHER EVER."`
},{
    quote:`"AT DESIGNING I TRY MY BEST TO SATISFY MY VIEWER."`
}];


btn.addEventListener('click',function(e){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
})