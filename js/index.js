const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// ***************************  HEADER *******************************

//Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system.
let new1 = document.createElement('a');
let textNew1 = document.createTextNode('new nav 1');
new1.appendChild(textNew1);
document.querySelector('nav').appendChild(new1);

let new2 = document.createElement('a');
let textNew2 = document.createTextNode('new nav 2');
new2.prepend(textNew2);
document.querySelector('nav').prepend(new2);


//add contents to nav
const nav = document.querySelectorAll('a');
const navContent = siteContent['nav'];
nav[1].textContent = navContent["nav-item-1"];
nav[2].textContent = navContent["nav-item-2"];
nav[3].textContent = navContent["nav-item-3"];
nav[4].textContent = navContent["nav-item-4"];
nav[5].textContent = navContent["nav-item-5"];
nav[6].textContent = navContent["nav-item-6"];

//styles
for (let i = 0; i < nav.length; i++){
  nav[i].style.color = 'green';
};


// ***************************  CTA  *******************************
const arrH1 = siteContent['cta']['h1'].split(" ");
for (let i = arrH1.length - 2; i >= 0; i--){
  arrH1[i] += "\n";
}
const strH1 = arrH1.join("");
document.querySelector('h1').textContent = strH1;
document.querySelector('h1').style.whiteSpace = "pre";

document.querySelector('button').textContent = siteContent['cta']['button'];

//CTA styles
document.querySelector('.cta-text').style.margin = '0 95px 0 0';

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


// ************************ MAIN CONTENT  **************************
const mainContent = siteContent['main-content'];

const text = document.querySelectorAll('h4');
text[0].textContent = mainContent['features-h4'];
text[1].textContent = mainContent['about-h4'];
text[2].textContent = mainContent['services-h4'];
text[3].textContent = mainContent['product-h4'];
text[4].textContent = mainContent['vision-h4'];

const par = document.querySelectorAll('.text-content p');
par[0].textContent = mainContent['features-content'];
par[1].textContent = mainContent['about-content'];
par[2].textContent = mainContent['services-content'];
par[3].textContent = mainContent['product-content'];
par[4].textContent = mainContent['vision-content'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', mainContent['middle-img-src']);


// ************************ CONTACT  **************************
const siteContact = siteContent['contact'];

document.querySelector('.contact h4').textContent = siteContact['contact-h4'];

const contact = document.querySelectorAll('.contact p');
contact[0].textContent = siteContact['address'];
contact[1].textContent = siteContact['phone'];
contact[2].textContent = siteContact['email'];


// ************************ FOOTER  **************************
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];