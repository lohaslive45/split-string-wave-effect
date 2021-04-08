//!--- 字串 切割成個別 獨立單字---
const text = document.querySelector(".text")
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

//!--- 產生 個別單字 延遲 >> 波浪錯覺---
const element = document.querySelectorAll("span")
for(let i=0; i<element.length; i++){
    //element[i].style.animationDelay = i + "s" //!---特效0 上下交錯 柵欄式效果 搭配動畫wave1
    //element[i].style.animationDelay = i*0.05 + "s" //!---特效1 波浪 連續效果 搭配動畫wave1
    element[i].style.animationDelay = i*0.07 + "s" //!---特效2 波浪 間歇效果 搭配動畫wave2
}