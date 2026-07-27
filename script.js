// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



// Click image to view larger
document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.top="0";
        overlay.style.left="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,0.85)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="9999";

        const image=document.createElement("img");

        image.src=img.src;
        image.style.maxWidth="90%";
        image.style.maxHeight="90%";
        image.style.borderRadius="15px";

        overlay.appendChild(image);

        overlay.onclick=()=>{
            overlay.remove();
        }

        document.body.appendChild(overlay);

    });

});
let slideIndex = 0;
showSlides();

function showSlides(){

let slides=document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){
slides[i].style.display="none";
}

slideIndex++;

if(slideIndex>slides.length){
slideIndex=1;
}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

elements.forEach(element=>{
    observer.observe(element);
});

function searchProducts(){

let input=document.getElementById("searchInput").value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}
