
// dynamic navlinks related to sections names and caount 

const sectionsArray = Array.from(document.getElementsByTagName("section"));
const linksHolder = document.getElementById("links");

sectionsArray.map(item => {
  const section = document.createElement("a");
  section.textContent = item.id;
  section.href = "#" + item.id;
  linksHolder.appendChild(section);
})

  //another solution
// function createNavLinks(){
//   const sectionsArray = document.getElementsByTagName("section");
//   const linksHolder = document.getElementById("links");

// // loop through the sections and create a new list item for each one
// for (let i = 0; i < sectionsArray.length; i++) {
//   const section = sectionsArray[i];
//   const sectionId = section.getAttribute("id");
//   const sectionName = sectionId ;

//   // create a new list item element
//   const listItem = document.createElement("a")

//   listItem.setAttribute("href" , `#${sectionId}`);

//   listItem.textContent = sectionName;

//   linksHolder.appendChild(listItem);

  
// }
// } 

// document.addEventListener("DOMContentLoaded",createNavLinks())



// ---------------------------------------------------------------------------------------






//navigation active links



const links = document.querySelectorAll(".header__links a");
links.forEach(link => {
  link.addEventListener("click", (e) => {
    links.forEach(link => {
      link.classList.remove("active");
    })
    e.target.classList.add("active");
  })
})

// btnHamburger 
const headerlinks = document.querySelector(".header__links");
const overlay = document.querySelector(".overlay")
const header = document.querySelector(".header");
const toggleBtn = document.querySelector(".header__menu");



function barsTransformer(){
  checkForElement(); // start checking for element
  if (header.classList.contains("open")){
    header.classList.remove("open") // close 
    overlay.classList.remove("show")
    headerlinks.classList.remove("show-links")
  }else {
    header.classList.add("open"); // open
    overlay.classList.add("show")
    headerlinks.classList.add("show-links")

  }
}


// display toggle menu smothly with dinamic height and transition delay for some effects 
  function checkForElement() {
      const showedLinks = document.querySelectorAll("#links a ");
      if (showedLinks) {
        let delation = 0 ;
        for (let i = 0 ; i < showedLinks.length ; i++){
          delation += .15 ;
          showedLinks[i].style.transitionDelay = delation + "s" ; 
        }
        // dinamic height
        showedLinks.forEach((link) => { 
          const totalHeight = link.clientHeight * showedLinks.length ;
          document.documentElement.style.setProperty("--client-height" , totalHeight + "px" ) ;
          link.onclick = () => {
            header.classList.remove("open") // close 
            overlay.classList.remove("show")
            headerlinks.classList.remove("show-links")
          }
        })
      } else {
        setTimeout(checkForElement, 100); // check again in 100ms
      }
  }
  

