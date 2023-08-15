const fro=document.querySelector(".from"),
t=document.querySelector(".to"),
sel=document.querySelectorAll("select");
trans=document.querySelector(".tran"),
cop=document.querySelector(".copy"),
cop1=document.querySelector(".copy1"),
v=document.querySelector(".voice"),
v1=document.querySelector(".voice1"),
clearall=document.querySelector(".c"),

sel.forEach((tag,id) => {
    for(const code in countries){
        
    let op=`<option value="${code}">${countries[code]}</option>`;
    tag.insertAdjacentHTML("beforeEnd",op);
       }
});
trans.addEventListener("click", () => {
    let text = fro.value.trim(),
    translateFrom = sel[0].value,
    translateTo = sel[1].value;
    if(!text) return;
    t.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        t.value = data.responseData.translatedText;
    });
});

cop.addEventListener("click", () => {
    navigator.clipboard.writeText(fro.value);
})

cop1.addEventListener("click", () => {
    navigator.clipboard.writeText(t.value);
})

v.addEventListener("click",() =>{
    let x=new SpeechSynthesisUtterance(fro.value);
    x.lang=sel[0].value;
    speechSynthesis.speak(x);
});

v1.addEventListener("click" ,() =>{
    let y=new SpeechSynthesisUtterance(t.value);
    y.lang=sel[1].value;
    speechSynthesis.speak(y);
});

function clear() {
const fro=document.querySelector(".from")
const t=document.querySelector(".to")
fro.value=''
t.value=''
}

clearall.onclick= () =>clear()

