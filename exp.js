
//"https://s3-eu-west-1.amazonaws.com/uploads.services.internations.org/files/2018/11/30172220/moving-to-Toulouse.jpg"


var experienceHTMLClassNames = {
    experienceDetail:                   "experience-detail",
    experienceDetailPhoto:              "experience-detail-photo",
    experienceDetailPhotoContainer:     "experience-detail-photo-container",
    experienceDetailInformation:        "experience-detail-information",
    experienceDetailName:               "experience-detail-name",
    experienceDetailInformationBox:     "experience-detail-information-box",
    experienceDetailDates:              "experience-detail-dates",
    experienceDetailLocation:           "experience-detail-location",
    experienceDetailLongDesc:           "experience-detail-long-desc"
};

function compareEvent(a, b) {
    const startDateA = new Date(a.dateStart);
    const startDateB = new Date(b.dateStart);
  
    let comparison = 0;
    if (startDateA > startDateB) {
      comparison = -1;
    } else if (startDateA < startDateB) {
      comparison = 1;
    }
    return comparison;
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

function getTotalTime(){
    var todayDate = new Date();

    //First event is the older, array has been sorted
    var firstEventDate = new Date(exp[0].dateStart);

    //Time epoch elapsed between today's date and the first event
    var elapsedTime = todayDate - firstEventDate;

    return elapsedTime;
}

function computeExpTime(){
    for(let i = 0; i < exp.length; i++){
        var event = exp[i];

        exp[i].time
    }
}

function createNodeExperience(tag, className, id, content, backgroundColor, textColor){
    var node = document.createElement(tag || "DIV");        

    if(id){
        node.id = id;
    }
    
    node.className              = className;
    node.style.backgroundColor  = backgroundColor;
    node.style.color            = textColor;
    node.innerHTML              = content;

    return node;
}

function createLinkNodeExperience(evt){
    var node = document.createElement("A");
    node.href = evt.link;
    node.innerHTML = evt.link;
    node.target = "_blank";

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
    //document.getElementById(node).appendChild(nodeToAppend);  
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

function insertSkillsInformations(sectionName, abilities){
    let nodeRatingLeftSection  = createNodeExperience("UL", "rating-section-left", null, null, null);
    let nodeRatingRightSection = createNodeExperience("UL", "rating-section-right", null, null, null);

    for(let i = 0; i < abilities.length; i++){
        let ability = abilities[i];

        let nodeRatingName = createNodeExperience("SPAN", "rating-name", null, ability.name, null);

        let nodeRatingItemLine = createNodeExperience("SPAN", "rating-item-line", null, null, null);
        var grade = ability.rate;

        for(let j = 0; j < 5; j++){
            let nodeRatingItemFirst, nodeRatingItemSecond;
            let nodeRatingItemFirstFull, nodeRatingItemSecondFull;
            let nodeRatingItem = createNodeExperience("DIV", "rating-item", null, null, null);

            nodeRatingItemFirstFull  = ((grade - 0.5) == 0) || ((grade - 1) >= 0);
            nodeRatingItemSecondFull = ((grade - 1) >= 0);

            grade -= 1;

            nodeRatingItemFirst  = createNodeExperience("DIV", "rating-item-first", null, null, null);
            nodeRatingItemSecond = createNodeExperience("DIV", "rating-item-second", null, null, null);

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

        let nodeRatingLine = createNodeExperience("LI", "rating-line", null, null, null);

        nodeRatingLine = appendNodeToNode(nodeRatingName, nodeRatingLine);
        nodeRatingLine = appendNodeToNode(nodeRatingItemLine, nodeRatingLine);

        if(i % 2 === 0){
            nodeRatingLeftSection = appendNodeToNode(nodeRatingLine, nodeRatingLeftSection);
        }else{
            nodeRatingRightSection = appendNodeToNode(nodeRatingLine, nodeRatingRightSection);
        }
    }


    let nodeRatingSections = createNodeExperience("DIV", "rating-sections", null, null, null);

    nodeRatingSections = appendNodeToNode(nodeRatingLeftSection, nodeRatingSections);
    nodeRatingSections = appendNodeToNode(nodeRatingRightSection, nodeRatingSections);

    let nodeRatingTitle = createNodeExperience("DIV", "rating-title", null, sectionName);
    
    document.getElementById("section-sub-4").appendChild(nodeRatingTitle);
    document.getElementById("section-sub-4").appendChild(nodeRatingSections);
}

function insertExperienceInformations(){
    for(let i = 0; i < exp.length; i++){
        let event = exp[i];

        let nodeDates    = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetailDates, null, formatDates(event.dateStart, event.dateEnd));
        let nodeLocation = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetailLocation, null, formatLocation(event.location));
        let nodeLongDesc = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetailLongDesc, null, event.longDesc);
        let nodeLink     = createLinkNodeExperience(event);

        let nodeInfoBox = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetailInformationBox, null, null);
    
        nodeInfoBox = appendNodeToNode(nodeDates, nodeInfoBox);
        nodeInfoBox = appendNodeToNode(nodeLocation, nodeInfoBox);
        nodeInfoBox = appendNodeToNode(nodeLongDesc, nodeInfoBox);
        nodeInfoBox = appendNodeToNode(nodeLink, nodeInfoBox);

        let nodeName = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetailName, null, formatNameEvent(event));
    
        let nodeInfo = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetailInformation, null, null);
    
        nodeInfo = appendNodeToNode(nodeName, nodeInfo);
        nodeInfo = appendNodeToNode(nodeInfoBox, nodeInfo);

        let nodeImg = createImgNodeExperience(event.logo, null, null);

        let nodePhotoContainer = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetailPhotoContainer, null, null);
        let nodePhoto          = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetailPhoto, null, null);

        nodePhotoContainer = appendNodeToNode(nodeImg, nodePhotoContainer);
        notePhoto          = appendNodeToNode(nodePhotoContainer, nodePhoto);

        let backgroundColorExp = "white";
        let textColorExp = "rgb(51, 51, 51)";

        let nodeDetail = createNodeExperience("DIV", experienceHTMLClassNames.experienceDetail, null, null, backgroundColorExp/*event.color*/, textColorExp);

        nodeDetail = appendNodeToNode(nodePhoto, nodeDetail);
        nodeDetail = appendNodeToNode(nodeInfo, nodeDetail);

        document.getElementById("section-sub-3").appendChild(nodeDetail);
    }
}

exp.sort(compareEvent);

//Download the resume

//Abilities and skills