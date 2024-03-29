let key;
document.addEventListener("DOMContentLoaded", () => {
  key = new URLSearchParams(window.location.search).get("key");
  if (key == "mode") {
    console.log("key");

    document.body.style.display = "block";
    // document.head.innerHTML = "";
    // document.body.innerHTML = bodyInner;
    // const links = document.links;
    // console.log(links);

    // for (let i = 0; i < links.length; i++) {
    //   const element = links[i];
    //   // element.classList.add("interact-button");
    //   element.setAttribute("href", "javascript:void()");
    //   element.addEventListener("click", () => {
    //     ms_init();
    //   });
    // }

    // const buttons = document.getElementsByTagName("button");
    // for (let i = 0; i < buttons.length; i++) {
    //   const element = buttons[i];

    //   element.addEventListener("click", () => {
    //     ms_init();
    //   });
    // }
  }
});
