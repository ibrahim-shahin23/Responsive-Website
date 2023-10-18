//toggle spin

document.querySelector(".toggle-settings .fa-gear").onclick = function() {

    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
};

//navigation bullets
const allBullets=document.querySelectorAll(".nav-bullets .bullet");
allBullets.forEach( bullet => {
    bullet.addEventListener("click" , (e) =>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:('smooth')
        });
    })
 });
 //Navigation for Links 
const allLinks=document.querySelectorAll(".links a");
allLinks.forEach( link => {
    link.addEventListener("click" , (e) =>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:('smooth')
        });
    })
 });
 
 function scrollToElement(elements){
    elements.forEach( ele => {
        ele.addEventListener("click" , (e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:('smooth')
            });
        })
     });
 }
 scrollToElement(allBullets);
 scrollToElement(allLinks);


//check local storage color//
let mainColor = localStorage.getItem("color-option");

console.log(mainColor);

if (mainColor !== null){
    // console.log("local storage not empty");
    // console.log(localStorage.getItem("color-option"));
    document.documentElement.style.setProperty('--main-color', mainColor);
    //remove active from all colors list items

    document.querySelectorAll(".colors-list li").forEach(Element=>{
        Element.classList.remove("active");

        if(Element.dataset.color===mainColor){
            Element.classList.add("active");

        }
    });

};


//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li =>{

    li.addEventListener("click", (e)=>{

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem('color-option', e.target.dataset.color);

        //remove active from all children
        e.target.parentElement.querySelectorAll(".active").forEach(Element=>{
            Element.classList.remove("active");
        });

        //add active on target element
        e.target.classList.add("active");
    });
});
// end switch colors

// start random background option

let randomBackgroundOption = true;

let backgroundInterval;

let backgroundLocalItem = localStorage.getItem("background-option");

if (backgroundLocalItem !== null){

    if (backgroundLocalItem === 'true'){
        
        randomBackgroundOption =true;
    }else{
        randomBackgroundOption=false;
    }
    if (backgroundLocalItem === 'true'){

        document.querySelector(".option-box .yes").classList.add("active");
    
    }else{
    
        document.querySelector(".option-box .no").classList.add("active");
    };

};

document.querySelectorAll(".option-box span").forEach(element=>{

    element.classList.remove("active");

});

const randomBackgroundElement = document.querySelectorAll(".option-box span");

randomBackgroundElement.forEach(span =>{

    span.addEventListener("click", (e)=>{

        e.target.parentElement.querySelectorAll(".active").forEach(Element=>{

            Element.classList.remove("active");
        });

        e.target.classList.add("active");

        if (e.target.dataset.background ==="yes"){
            
            randomBackgroundOption = true;
            
            randomizeImgs();
            
            localStorage.setItem("background-option" , true);

        }else{
                randomBackgroundOption= false;

                clearInterval(backgroundInterval);

                localStorage.setItem("background-option" , false);

            }
    });
});

// end random background option

// start random back ground//

let landingPage= document.querySelector(".landing-page");

let imgsArray=[01.jpg, 02.jpg , 03.jpg ,04.jpg , 05.jpg];

function randomizeImgs(){
    if (randomBackgroundOption===true){

        backgroundInterval = setInterval( () => {

            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            landingPage.style.backgroundImage ='url("Images/0'+randomNumber+'.jpg")';
        
        } ,3000);
    }
}


//end random back ground//


let ourskill =document.querySelector(".skills")

window.onscroll =function(){

    let skillsOffsetTop= ourskill.offsetTop;
    
    this.console.log(skillsOffsetTop);
    
    let skillsOuterHeight=ourskill.offsetHeight;
    
    let windowHeight= this.innerHeight;
    
    let windowScrollTop= this.pageYOffset;
    
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        this.console.log("reached");
        
        let allSkills =document.querySelectorAll(".skill-box .skill-progress span");
        
        allSkills.forEach( skill =>{
        
            skill.style.width= skill.dataset.progress ;
        });
    }
} 
// END ourskillS ANIMATION

// start our gallary
let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach(img =>{

    img.addEventListner('click' , (e) => {

        let overlay = document.createElement("div");

        overlay.className='popup-overlay';

        document.body.appendChild(overlay);

        let popupBox= document.createElement("div");

        popupBox.className='popup-box';

        let popupImage = document.createElement("img");

        console.log(img.src);

        popupImage.src=img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);
    
    });
});
// end our gallary

//toggle menu
let toggleBtn =document.querySelector(".toggle-menu");

let tLinks =document.querySelector(".links");

toggleBtn.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");
};
document.addEventListener("click" , (e) => {

    if (e.target!== toggleBtn && e.target!==tLinks){

        if (tLinks.classList.contains("open")){

            toggleBtn.classList.toggle("menu-active");

            tLinks.classList.toggle("open");
        }
    }
});
tLinks.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");
};



