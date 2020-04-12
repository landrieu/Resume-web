function compareExperiences(a, b) {
    return compareEvent(a, b, "dateStart", true);
}

function compareProjects(a, b) {
    
    return compareEvent(a, b, "year", true);
}

function compareEvent(a, b, c, isDate) {
    let compA = a[c];
    let compB = b[c];
    let comparison = 0;

    if(isDate){
        compA = new Date(compA);
        compB = new Date(compB);
    }
    console.log(compA, compB);
    if (compA > compB) {
      comparison = -1;
    } else if (compA < compB) {
      comparison = 1;
    }
    return comparison;
}

function getTotalTime(){
    var todayDate = new Date();

    //First event is the older, array has been sorted
    var firstEventDate = new Date(exp[0].dateStart);

    //Time epoch elapsed between today's date and the first event
    var elapsedTime = todayDate - firstEventDate;

    return elapsedTime;
}

function createNode(tag, className, id, content, styles){
    var node = document.createElement(tag || "DIV");        

    if(id){
        node.id = id;
    }
    
    if(className){
        node.className = className;
    }
    
    node.innerHTML = content;

    for(let k in styles){
        node.style[k] = styles[k];
    }

    return node;
}

function createNodeLink(href, innerHTML){
    var node = document.createElement("A");
    node.href       = href;
    node.target     = "_blank";

    if(innerHTML){
        node.innerHTML  = innerHTML;
    }

    return node;
}

function createImgNodeExperience(src, className, id){
    var img = document.createElement("IMG");        

    img.src       = src;
    img.className = className;
    img.id        = id;

    return img;
}

function appendNodeToNode(nodeToAppend, node, nodeID){

    node.appendChild(nodeToAppend);

    return node;
}

function formatDates(dateStart, dateEnd){
    if(dateStart && dateEnd){
        return "From " + dateStart + " to " + dateEnd; 
    }else{
        return "From " + dateStart;
    }
}

function formatLocation(location){
    if(location.region){
        return location.city + ", " + location.region + ", " + location.country;
    }

    return location.city + ", " + location.country;
}

function formatNameEvent(event){
    if(event.type){
        return event.name + " - " + event.type;
    }

    return event.name;
}

function buildProjectTime(year, length){
    if(year && length){
        return year + " - " + length;
    }else if(year){
        return year;
    }else{
        return length;
    }
}

function buildProjectTop(name, type){
    if(type){
        return name + " - " + type;
    }else{
        return name;
    }
}

function insertProjectsInformations(){

    for(let i = 0; i < projects.length; i++){
        let project = projects[i];

        let nodeProject         = createNode("DIV", "project", null, null, null);
        let nodeProjectInner    = createNode("DIV", "project-inner", null, null, {"background-image": project.backgroundImg});
        let nodeProjectOverlay  = createNode("DIV", "overlay overlay-project", null, null, null);
        let nodeProjectContent  = createNode("DIV", "project-content", null, null, null);
        let nodeProjectTop      = createNode("DIV", "project-top", null, buildProjectTop(project.name, project.type), null);
        let nodeProjectInfo     = createNode("DIV", "project-info", null, null, null);
        let nodeProjectDate     = createNode("DIV", "project-date", null, buildProjectTime(project.year, project.length), null);
        let nodeProjectTechno   = createNode("DIV", "project-techno", null, project.technology, null);
        let nodeProjectDesc     = createNode("DIV", "project-desc", null, project.shortDesc, null);
        let nodeProjectLink     = createNodeLink(project.link);
    
        nodeProjectInfo = appendNodeToNode(nodeProjectDate, nodeProjectInfo);
        nodeProjectInfo = appendNodeToNode(nodeProjectTechno, nodeProjectInfo);
        nodeProjectInfo = appendNodeToNode(nodeProjectDesc, nodeProjectInfo);

        nodeProjectContent = appendNodeToNode(nodeProjectTop, nodeProjectContent);
        nodeProjectContent = appendNodeToNode(nodeProjectInfo, nodeProjectContent);
        

        nodeProjectLink = appendNodeToNode(nodeProjectInner, nodeProjectLink);
        nodeProjectLink = appendNodeToNode(nodeProjectOverlay, nodeProjectLink);
        nodeProjectLink = appendNodeToNode(nodeProjectContent, nodeProjectLink);

        nodeProject = appendNodeToNode(nodeProjectLink, nodeProject);

        document.getElementById("projects-container").appendChild(nodeProject);
    }
}

function insertSkillsInformations(){
    insertSkillInformations("Skills",    abilities.skills);
    insertSkillInformations("Tools",     abilities.tools);
    insertSkillInformations("Languages", abilities.languages);
}

function insertSkillInformations(sectionName, abilities){

    let nodeRatingLeftSection  = createNode("UL", "rating-section-left", null, null, null);
    let nodeRatingRightSection = createNode("UL", "rating-section-right", null, null, null);
    let nodeRatingSections = createNode("DIV", "rating-sections", null, null, null);
    let nodeRatingTitle    = createNode("DIV", "rating-title", null, sectionName);

    for(let i = 0; i < abilities.length; i++){
        let ability = abilities[i];

        let nodeRatingName      = createNode("SPAN", "rating-name", null, ability.name, null);
        let nodeRatingItemLine  = createNode("SPAN", "rating-item-line", null, null, null);
        let nodeRatingItemCntnr = createNode("DIV", "rating-item-container", null, null, null);
        let nodeRatingDesc      = createNode("DIV", "rating-desc", null, ability.comment, null);
        let nodeRatingLine      = createNode("LI", "rating-line", null, null, null);

        var grade = ability.rate;

        for(let j = 0; j < 5; j++){
            let nodeRatingItemFirst, nodeRatingItemSecond;
            let nodeRatingItemFirstFull, nodeRatingItemSecondFull;
            let nodeRatingItem = createNode("DIV", "rating-item", null, null, null);

            nodeRatingItemFirstFull  = ((grade - 0.5) == 0) || ((grade - 1) >= 0);
            nodeRatingItemSecondFull = ((grade - 1) >= 0);

            grade -= 1;

            nodeRatingItemFirst  = createNode("DIV", "rating-item-first", null, null, null);
            nodeRatingItemSecond = createNode("DIV", "rating-item-second", null, null, null);

            if(nodeRatingItemFirstFull){
                nodeRatingItemFirst.classList.add("active");
            }

            if(nodeRatingItemSecondFull){
                nodeRatingItemSecond.classList.add("active");
            }

            nodeRatingItem = appendNodeToNode(nodeRatingItemFirst,  nodeRatingItem);
            nodeRatingItem = appendNodeToNode(nodeRatingItemSecond, nodeRatingItem);

            nodeRatingItemLine = appendNodeToNode(nodeRatingItem, nodeRatingItemLine);
        }

        //nodeRatingLine = appendNodeToNode(nodeRatingName, nodeRatingLine);
        //nodeRatingLine = appendNodeToNode(nodeRatingItemLine, nodeRatingLine);
        nodeRatingItemCntnr = appendNodeToNode(nodeRatingName, nodeRatingItemCntnr);
        nodeRatingItemCntnr = appendNodeToNode(nodeRatingItemLine, nodeRatingItemCntnr);

        nodeRatingLine = appendNodeToNode(nodeRatingItemCntnr, nodeRatingLine);
        nodeRatingLine = appendNodeToNode(nodeRatingDesc, nodeRatingLine);

        if(i % 2 === 0){
            nodeRatingLeftSection = appendNodeToNode(nodeRatingLine, nodeRatingLeftSection);
        }else{
            nodeRatingRightSection = appendNodeToNode(nodeRatingLine, nodeRatingRightSection);
        }
    }

    nodeRatingSections = appendNodeToNode(nodeRatingLeftSection, nodeRatingSections);
    nodeRatingSections = appendNodeToNode(nodeRatingRightSection, nodeRatingSections);

    document.getElementById("section-sub-4").appendChild(nodeRatingTitle);
    document.getElementById("section-sub-4").appendChild(nodeRatingSections);
}

function insertExperienceInformations(){
    for(let i = 0; i < exp.length; i++){
        let event = exp[i];

        let nodeDates       = createNode("DIV", experienceHTMLClassNames.experienceDetailDates, null, formatDates(event.dateStart, event.dateEnd));
        let nodeLocation    = createNode("DIV", experienceHTMLClassNames.experienceDetailLocation, null, formatLocation(event.location));
        let nodeLongDesc    = createNode("DIV", experienceHTMLClassNames.experienceDetailLongDesc, null, event.longDesc);
        let nodeInfoBox     = createNode("DIV", experienceHTMLClassNames.experienceDetailInformationBox, null, null);
        let nodeName        = createNode("DIV", experienceHTMLClassNames.experienceDetailName, null, formatNameEvent(event));
        let nodeInfo        = createNode("DIV", experienceHTMLClassNames.experienceDetailInformation, null, null);
        let nodePhotoContainer = createNode("DIV", experienceHTMLClassNames.experienceDetailPhotoContainer, null, null);
        let nodePhoto          = createNode("DIV", experienceHTMLClassNames.experienceDetailPhoto, null, null);
        let nodeDetail         = createNode("DIV", experienceHTMLClassNames.experienceDetail, null, null, {"backgroundColor": "#fff", "color": "rgb(51, 51, 51)"});
        
        let nodeLink = createNodeLink(event.link, event.link);
        let nodeImg  = createImgNodeExperience(event.logo, null, null);

        nodeInfoBox = appendNodeToNode(nodeDates, nodeInfoBox);
        nodeInfoBox = appendNodeToNode(nodeLocation, nodeInfoBox);
        nodeInfoBox = appendNodeToNode(nodeLongDesc, nodeInfoBox);
        nodeInfoBox = appendNodeToNode(nodeLink, nodeInfoBox);

        nodeInfo = appendNodeToNode(nodeName, nodeInfo);
        nodeInfo = appendNodeToNode(nodeInfoBox, nodeInfo);

        nodePhotoContainer = appendNodeToNode(nodeImg, nodePhotoContainer);
        notePhoto          = appendNodeToNode(nodePhotoContainer, nodePhoto);

        nodeDetail = appendNodeToNode(nodePhoto, nodeDetail);
        nodeDetail = appendNodeToNode(nodeInfo, nodeDetail);

        document.getElementById("section-sub-3").appendChild(nodeDetail);
    }
}

exp.sort(compareExperiences);

projects.sort(compareProjects);

//Download the resume


/*
function computeExpTime(){
    for(let i = 0; i < exp.length; i++){
        var event = exp[i];

        exp[i].time;
    }
}

function drawTimeLine(){
    console.log("Draw");
    
    var totalTime = getTotalTime();

    //computeExpTime();
    for(let i = 0; i < exp.length; i++){
        var event = exp[i];

        var addPeriod = function(color, dates, id, addEvent){
            var node = document.createElement("DIV");                 // Create a <li> node
            node.id = id;
            node.style.backgroundColor = color;
            node.style.width = 100 * (new Date(dates.end) - new Date(dates.start)) / totalTime + "%";
            node.style.height = "10px";

            if(addEvent){
                node.className = "experience-period";
            }

            node.addEventListener('mouseover', function(){console.log("rw")}, false);
            document.getElementById("line-graph-container").appendChild(node);  
        };

        if(i !== 0){
            var eventPast = exp[i - 1];
            addPeriod("inherit", {start: eventPast.dateEnd, end: event.dateStart}, "void-" + i, false); 
        }
        addPeriod(event.color, {start: event.dateStart, end: event.dateEnd}, "experience-" + i, true);
    }
}
*/