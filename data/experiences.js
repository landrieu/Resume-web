function Location(city, region, country) {
    this.city = city;
    this.region = region;
    this.country = country;
}

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

var exp = [{
    dateStart: "2014/09/01",
    dateEnd: "2016/06/31",
    name: "ENSEA",
    shortDesc: "Master degree in computer science",
    longDesc: "Studies during 2 years at the ENSEA (Ecole Nationale de l'Electronique et ses Applications). This university located near Paris, teaches mainly electronics and computer science. I had the opportunity to work on several projects helping me to improve my abilities. ",
    logo: "https://www.ensea.fr/sites/all/themes/custom/customer/logo.png",
    smallLogo: "",
    color: "#b10044",
    type: "Master in Computer Science",
    degreeName: "Master in Computer Science",
    location: new Location("Cergy", "", "France"),
    link: "https://www.ensea.fr/en"
},{
    dateStart: "2016/09/01",
    dateEnd: "2017/04/30",
    name: "University of Western Ontario",
    shortDesc: "",
    longDesc: "Academic exchange for two semesters. <br>Major in computer science.</br>",
    logo: "https://www.uwo.ca/img/homepage/2017/ttl-westernlogo.svg",//"https://studyqa.com/media/upload/univers/871/1/uni_profile_8711.jpg",
    smallLogo: "",
    color: "#4f2683",
    type: "Academic exchange",
    degreeName: "",
    location: new Location("London", "ON", "Canada"),
    link: "https://www.uwo.ca"
},{
    dateStart: "2017/05/01",
    dateEnd: "2017/11/31",
    name: "Option Way",
    shortDesc: "Option is a travel agency.",
    longDesc: "A 6-months internship as front-end developer. I joined the technical team (among a team of) to implement the new website that has been released 4 months after I start.",
    logo: "https://media.routard.com/image/07/5/logo-option-way.1498075.png",
    smallLogo: "",
    color: "#2a9ef2",
    type: "Front-end developer",
    location: new Location("Nice", "", "France"),
    link: "https://web.optionway.com"
},{
    dateStart: "2018/01/01",
    dateEnd: "2018/02/28",
    name: "Esker",
    shortDesc: "",
    longDesc: "Training at Esker as a Consultant. I learned how to work with the framework developed by the compnay and also tools and process sused internally.",
    logo: "https://img.sdcexec.com/files/base/acbm/sdce/image/2018/11/New_esker_logo.5bec454c8317f.png?auto=format&fit=max&w=1200",
    smallLogo: "",
    color: "#ed1a37",
    type: "Professional service",
    location: new Location("Lyon", "", "France"),
    link: "https://www.esker.com"
},{
    dateStart: "2018/03/01",
    dateEnd: "2020/03/30",
    name: "Esker",
    shortDesc: "",
    longDesc: "I am working as a solution consultant for Esker, which is company spcialzed as . My role is to our customers end to end, from peoject desgin to the delivery. <br><b>Named Rookie of the year 2018</b></br>",
    logo: "https://img.sdcexec.com/files/base/acbm/sdce/image/2018/11/New_esker_logo.5bec454c8317f.png?auto=format&fit=max&w=1200",
    smallLogo: "",
    color: "#ed1a37",
    type: "Professional service",
    location: new Location("Sydney", "NSW", "Australia"),
    link: "https://www.esker.com.au"
}];