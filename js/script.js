

let text = document.getElementById('leaf')
let tree = document.getElementById('tree')

window.addEventListener('scroll', ()=>{
  let value=scrollY
  console.log(value)

  leaf.style.top = value * -2.5 +"px";
  leaf.style.left = value * -2.5 +"px";
  tree.style.right = value * -0.4 +"px";
})


/* accordion */

function accordion(ele) {
  const accordion = document.querySelector(ele);

  accordion.addEventListener("click", ({ target }) => {
    if (!target.closest(".js-accordion-btn")) {
      return;
    }
    const btn = target.closest(".js-accordion-btn");
    const item = btn.parentElement.parentElement;
    const body = btn.parentElement.nextElementSibling;

    if (target.closest(".active")) {
      slideUp();
      return;
    }

    if (accordion.querySelector(".active")) {
      slideUp();
    }

    item.classList.add("active");
    body.style.height = body.scrollHeight + "px";

    function slideUp() {
      accordion.querySelector(".active").lastElementChild.style.height = "0";
      accordion.querySelector(".active").classList.remove("active");
    }

  });
}
accordion(".js-accordion");