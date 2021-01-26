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

var experiences = [{
    dateStart: "2014/09/01",
    dateEnd: "2016/06/31",
    name: "ENSEA",
    shortDesc: "Master degree in computer science",
    longDesc: "I studied 2 years at the ENSEA (Ecole Nationale de l'Electronique et ses Applications). This university located near Paris, teaches mainly electronics and computer science. I had the opportunity to work on several projects that helped me to improve my abilities. <br /> <br /> <b>Graduated with a Master degree in computer science</b><br />",
    logo: "https://www.ensea.fr/sites/all/themes/custom/customer/logo.png",
    alt: "Logo ENSEA",
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
    longDesc: "Academic exchange for two semesters. I had the opportunity to develop a whole project and also to learn how to build web application. <br/>Major in computer science. Minor in information security and networking.",
    logo: "https://www.uwo.ca/img/homepage/2017/ttl-westernlogo.svg",//"https://studyqa.com/media/upload/univers/871/1/uni_profile_8711.jpg",
    alt: "Logo Western University",
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
    longDesc: "A 6-months internship as a front-end developer. I joined the technical team, six people (designers, back-end and front-end developers) to implement the new website that has been released four months after I start.",
    logo: "https://media.routard.com/image/07/5/logo-option-way.1498075.png",
    alt: "Logo Option Way",
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
    longDesc: "Training at Esker as a Consultant. I learned how to work with the framework developed by the compnay and also tools and processes used internally.",
    logo: "https://img.sdcexec.com/files/base/acbm/sdce/image/2018/11/New_esker_logo.5bec454c8317f.png?auto=format&fit=max&w=1200",
    alt: "Logo ESKER",
    smallLogo: "",
    color: "#ed1a37",
    type: "Professional service",
    location: new Location("Lyon", "", "France"),
    link: "https://www.esker.com"
},{
    dateStart: "2018/03/01",
    dateEnd: "2020/08/31",
    name: "Esker",
    shortDesc: "",
    longDesc: "I was working as a solution consultant for Esker, which is a company specialized in document automation. My role aws to help our customers to implement Esker's solutions, end to end, from project design to the delivery. I was also in charge of customizing the solution based on their needs.  <br />Delivered 10+ successful projects for both Accounts Payable and Purchasing solutions across a wide range of industries <br /> <br /><b>Named Rookie of the year 2018</b>",
    logo: "https://img.sdcexec.com/files/base/acbm/sdce/image/2018/11/New_esker_logo.5bec454c8317f.png?auto=format&fit=max&w=1200",
    alt: "Logo Esker",
    smallLogo: "",
    color: "#ed1a37",
    type: "Professional service",
    location: new Location("Sydney", "NSW", "Australia"),
    link: "https://www.esker.com.au"
}];
