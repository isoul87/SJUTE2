// Membuat generate gambar


const dataImg = []

fetch("dist/json/data.json") // ambil file json
    .then(response => response.json()) // ubah hasilnya menjadi data js
    .then(images => { //kalu berhasil lakukan ini
        dataMem = images
        generateImgMember(dataMem.imgMem);
        initFilter();
        })
    .catch(error => console.error("gagal memuat data", error))

// Generate gambar dari js
function generateImgMember(fileImg) {
    const imgMember  = document.getElementById("filterDvsImg");
    const member = [
        {year: '2024'},
        {year: '2025'}
    ]
    const divisi = [
        {year: '2024'},
        {year: '2025'}
    ]
    if(!fileImg) return; // Hentikan jika elemen tidak ditemukan

    fileImg.forEach(img => {

        // Buat elemen div untuk parentnya
        const cardDiv = document.createElement("div")
        cardDiv.className = "relative group flex items-center w-28 h-40 lg:w-40 lg:h-56"
        cardDiv.setAttribute("data-filter", img.year)

        // Buat img nya untuk parent 
        const imgMem = document.createElement("img")
        imgMem.className = "w-full h-full object-cover object-center transition-all duration-500 group-hover:brightness-60 saturate-0 group-hover:saturate-100"
        imgMem.src = img.src;

        // Buat detail Unt member
        const cardDMem = document.createElement("div")
        cardDMem.className = "bg-red-600 w-full absolute bottom-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"

        // Buat text detail unt member 
        const title = document.createElement("h5")
        title.className = "font-bold cursor-pointer text-xl lg:text-2xl text-center"
        title.textContent =img.name

        const DpMem = document.createElement("p")
        DpMem.textContent = img.role;

        cardDiv.appendChild(imgMem)
        cardDiv.appendChild(cardDMem)

        cardDMem.appendChild(title)
        cardDMem.appendChild(DpMem)

        imgMember.appendChild(cardDiv);


    })
}



function initFilter() {
const btnFilter = document.querySelectorAll("#filterDvs ul li button");
const imgItem  = document.querySelectorAll("#filterDvsImg .relative");

    btnFilter.forEach(data => {
    data.onclick = () => {
        btnFilter.forEach(data => {
            data.classList.remove("btn-list-active")
        });
        data.classList.add("btn-list-active")
        
        // filter images
        const btnText = data.textContent;
        imgItem.forEach(imgMem => {
            imgMem.style.display = "none";
            if(imgMem.getAttribute("data-filter") == btnText || btnText == "All"){
                imgMem.style.display = "block";
            }
        })
    };
});
}

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger) 

    const animBoxs = document.querySelectorAll(".anim-box")
  // gsap code here!
  gsap.from("#route", {
    y: -200,
    duration: 2,
    ease: "bounce.out"
  });

  animBoxs.forEach(animBox => {
         gsap.from(animBox, {
      opacity: 0,
      y: -200,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
          start: "top 80%",
          end: "bottom 20%",
          trigger: animBox,
          toggleActions: "play reverse play reverse"
      }

    
  });
  })
 
 });




// const navBtn = document.getElementById("nav-btn");
// const navCta = document.getElementById("navbar-cta")
// const chdNavBtn = document.querySelectorAll("header nav div ul li a")

// navBtn.addEventListener("click",() => {
//   navCta.classList.toggle("hidden")
//   navCta.classList.toggle("absolute")
// });

// chdNavBtn.forEach(btn => {
//   btn.addEventListener("click", () => {
//     [...chdNavBtn].forEach(el => el.classList.remove("activeNav"));
//     btn.classList.add("activeNav");
//   });
// });