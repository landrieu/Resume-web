function Location(city, region, country) {
    this.city = city;
    this.region = region;
    this.country = country;
}

var exp = [{
    dateStart: "2014/09/01",
    dateEnd: "2016/06/31",
    name: "ENSEA",
    shortDesc: "Master degree in computer science",
    longDesc: "Studies during 2 years at the ENSEA (Ecole Nationale de l'Electronique et ses Applications). This university located near Paris, teaches mainly electronics and computer science. I had the opportunity to work on several projectshelping me to improve my abilities. ",
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
    longDesc: "I worked at Option as a frontend developer. This internship lasted 6m onths.",
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
    longDesc: "I worked at Option as a frontend developer. This internship lasted 6m onths.",
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
    shortDesc: "Training at Esker as a Consultant",
    longDesc: "",
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
    longDesc: " chaired the Committee to Elect Alessandra Biaggi, State Senator for New York's 34th Senate district (the Bronx & Westchester).",
    logo: "https://img.sdcexec.com/files/base/acbm/sdce/image/2018/11/New_esker_logo.5bec454c8317f.png?auto=format&fit=max&w=1200",
    smallLogo: "",
    color: "#ed1a37",
    type: "Professional service",
    location: new Location("Sydney", "NSW", "Australia"),
    link: "https://www.esker.com.au"
}];