let last_known_scroll_position = 0;
let ticking = false;
let previousScrollPosition = 0;

var backgroundImage = [
  {
    src: "img/background-sydney.jpg", 
    backgroundPosition: "bottom",
    type: "desktop"
  },{
    src: "img/background-nyc.jpg", 
    backgroundPosition: "center",
    type: "mobile"
  }
];

function loadImage(divImgID, imgSrc){
    var divImgID = "background-image";
    var imgArr = [];

    for(let i = 0; i < backgroundImage.length; i++){
      imgArr[i]     = new Image();
      imgArr[i].src = backgroundImage[i].src;

      if(i == 0){
        imgArr[i].onload = function(){
          var divImg = document.getElementById(divImgID);
          divImg.style.backgroundImage = "url(" + backgroundImage[i].src + ")";
          divImg.style.opacity = 1;
        };
      }
    }
}

/********** INDICATOR  **********/

function initIndicator(){
  buildIndicator();
  handleIndicator();

  var elements = document.getElementsByClassName("menu-section");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', roundListener, false);
  }
}

var roundListener = function() {
  var attribute = this.getAttribute("number");

  var sectionToScroll = document.getElementById("section-" + attribute);
  window.scrollTo(0, sectionToScroll.offsetTop);
};


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
        let nodeTitle       = createDivNode(null, "menu-title", null, sectionsElements[i].getAttribute("section-name"), "H2");
        let nodeMenuSection = createDivNode("menu-section-" + i, "menu-section", i, null);

        nodeContainer.appendChild(nodeRound);

        nodeMenuSection.appendChild(nodeTitle);
        nodeMenuSection.appendChild(nodeContainer);
        
        document.getElementById("menu-sections").appendChild(nodeMenuSection);
    }
}

function createDivNode(id, className, number, content, type){
  var node = document.createElement(type || "DIV");        

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
/*******************************/

function initEvents(){
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

  window.addEventListener('resize', handleIndicator);

  //Scroll to top
  setTimeout(function(){
    window.scrollTo(0, 0);
  });
}


document.addEventListener("DOMContentLoaded", function(event) {
    //DOM is loaded and ready
    initIndicator();
    
    //Init events 
    initEvents();

    //Load background image
    loadImage();

    //Insert experiences
    insertExperienceInformations();

    //Insert abilities
    insertSkillsInformations();

    //Insert projects
    insertProjectsInformations();
});
