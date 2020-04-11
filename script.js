let last_known_scroll_position = 0;
let ticking = false;
let previousScrollPosition = 0;

function loadImage(divImgID, imgSrc){
    var img = new Image();
    img.src = imgSrc;
    img.onload = function(){
        console.log("Height: " + this.height);
        var divImg = document.getElementById(divImgID);
        divImg.style.backgroundImage = "url(" + imgSrc + ")";
        divImg.style.opacity = 1;
    }
    
    //Load back up image for mobile
    var imgBackUp = new Image();
    imgBackUp.src = "img/background-nyc.jpg";
}

function handleIndicator() {
  // Do something with the scroll position
  let sections = document.getElementsByClassName("section");
  let rounds   = document.getElementsByClassName("round-indicator");
  let menuSections = document.getElementsByClassName("menu-section");
  let sectionDown = 0;
  var windowHeight = window.innerHeight;
  let windowPosition = document.documentElement.scrollTop;
  let scrollUp = previousScrollPosition > windowPosition;
  let conditionChange = false;
  
  if(menuSections && menuSections.length > 0 && sections && sections.length > 0){
    let index = 0;
    
    do{
      sectionDown = sections[index].offsetTop + sections[index].offsetHeight;
      conditionChange = scrollUp ? sectionDown <= windowPosition : sectionDown < (windowPosition + windowHeight);

      index += 1;
    }while(conditionChange  && index < sections.length) 
  
    
    for(let i = 0; i < sections.length; i++){        
        let menuSection = document.getElementById("menu-section-" + i);

        if((i + 1) === index){
            menuSection.classList.add("active");
        }else{
            menuSection.classList.remove("active");
        }
    }
  }

  previousScrollPosition = windowPosition;
}

function buildIndicator(){
    var sectionsElements = document.getElementsByClassName("section");
    
    for (var i = 0; i < sectionsElements.length; i++) {
        let nodeRound       = createDivNode("round-indicator-" + i,"round-indicator", i, null);
        let nodeContainer   = createDivNode(null, "round-indicator-container", null, null);
        let nodeTitle       = createDivNode(null, "menu-title", null, sectionsElements[i].getAttribute("section-name"));
        let nodeMenuSection = createDivNode("menu-section-" + i, "menu-section", i, null);

        nodeContainer.appendChild(nodeRound);

        nodeMenuSection.appendChild(nodeTitle);
        nodeMenuSection.appendChild(nodeContainer);
        
        document.getElementById("menu-sections").appendChild(nodeMenuSection);
    }
}

function createDivNode(id, className, number, content){
    var node = document.createElement("DIV");        

    if(id){
       node.id = id
    };
    
    if(number !== null){
      node.setAttribute("number", number + 1)
    };

    if(content){
      node.innerHTML = content
    };

    node.className          = className;

    return node;
}

var roundListener = function() {
    var attribute = this.getAttribute("number");

    var sectionToScroll = document.getElementById("section-" + attribute);
    window.scrollTo(0, sectionToScroll.offsetTop);
};





window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      handleIndicator(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    buildIndicator();
    handleIndicator();

    var elements = document.getElementsByClassName("menu-section");
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', roundListener, false);
    }

    window.addEventListener('resize', handleIndicator);

    loadImage("background-image", "https://www.andrewbarnesphotography.com.au/wp-content/uploads/2016/01/Sails-and-Clouds.jpg");

    //Insert experiences
    insertExperienceInformations();

    //Insert abilities
    insertSkillsInformations();

    //Insert projects
    insertProjectsInformations();
});