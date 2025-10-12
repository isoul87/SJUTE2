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
        imgItem.forEach(img => {
            img.style.display = "none";
            
            if(img.getAttribute("data-filter") == btnText || btnText == "All"){
                img.style.display ="block";
            }
        })
    };
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