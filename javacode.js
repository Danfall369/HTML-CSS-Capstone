/* Mobile Menu */
const logo = document.querySelector('.mobileMenu');
const menu = document.querySelector('.mobilePop');

logo.addEventListener('click', () => {
  menu.classList.toggle('showmenu');
  logo.classList.toggle('active');
});

document.querySelectorAll('.mobileItem').forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('showmenu');
}));

/* Object Array (Speakers) */
const speakers = [{
  pic: ['./assets/Speakers/1.PNG'],
  name: ['Maria Garcia'],
  job: ['National Autonomous University of Mexico (UNAM) '],
  resume: ['Dr. Garcia is an expert in the investigation of violent crimes and the application of criminal profiling techniques. She has worked on homicide and kidnapping cases, and is the author of numerous publications on criminal behavior. '],
},

{
  pic: ['./assets/Speakers/2.PNG'],
  name: ['John Smith'],
  job: ['Federal Bureau of Investigation (FBI) '],
  resume: ['Agent Smith is an expert in the investigation of financial crimes and the application of forensic data analysis techniques. He has worked on fraud, money laundering and corruption cases, and has developed specialized software to help investigators analyze large amounts of financial information.'],
},

{
  pic: ['./assets/Speakers/3.PNG'],
  name: ['Ana Perez'],
  job: ['University of Buenos Aires (UBA)'],
  resume: ['Prof. Perez is a criminologist with expertise in crime analysis and victimization. She has researched the relationship between crime and the urban environment, and has developed crime prevention programs for vulnerable communities.'],
},

{
  pic: ['./assets/Speakers/4.PNG'],
  name: ['David Johnson'],
  job: ['Colombian National Police '],
  resume: ['Officer Johnson is an expert in the investigation of crimes related to drug trafficking and organized crime. He has worked on drug trafficking and money laundering cases, and has developed intelligence networks to combat organized crime.'],
},

{
  pic: ['./assets/Speakers/5.PNG'],
  name: ['Laura Torres'],
  job: ['University of California, Los Angeles (UCLA)'],
  resume: [' Dr. Torres is an expert in the investigation of sex crimes and in the application of forensic psychology techniques. She has worked on rape and sexual abuse cases, and has developed protocols for interviewing victims of sex crimes. '],
},

{
  pic: ['./assets/Speakers/6.PNG'],
  name: ['Martin Brown '],
  job: ['Australian National Investigation Agency (ANI) '],
  resume: ['Agent Brown is an expert in the investigation of computer crime and the application of digital forensic analysis techniques. He has worked on cybercrime cases and has developed specialized software to analyze electronic devices. In his lectures, he discusses how computer crimes can be investigated and how technology can be used to combat online crime.'],
}];

/* dynamics cards */
const speakersGrid = document.querySelector('.speakersGrid');
speakers.forEach((result) => {
  const speakersCards = document.createElement('div');
  speakersCards.classList.add('speakersCards');
  const speakersCardsCont = `<div class="speakersCards">
  <img
    src="${result.pic}"
    alt="Speakers"
    class="speakersImg"
  />
  <ul class="speakersInfo">
    <li class="speakersName">${result.name}</li>
    <li class="speakersjob">${result.job}</li>
    <li class="speakersResume">${result.resume}</li>
  </ul>
</div>
 `;
  speakersGrid.innerHTML += speakersCardsCont;
});