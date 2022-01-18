var text = ""

title = document.querySelector(".Summarystyled__Title-sc-1u9xobv-3").textContent;
var txt = '"' + title + '"';
text += txt + ";";

conts = document.querySelectorAll(".Summarystyled__TagsWrapper-sc-1u9xobv-13 div");
for (const cont of conts) {
    var txt = '"' + cont.textContent + '"';
    text += txt + ";";
}
nb_photos = document.querySelector(".Tabsstyled__Label-sc-18f5wnt-2").textContent;
var txt = '"' + nb_photos + '"';
text += txt + ";";

price = document.querySelector(".Summarystyled__PriceText-sc-1u9xobv-7").textContent;
var txt = '"' + price + '"';
text += txt + ";";

location_est = document.querySelector(".Localizationstyled__Title-sc-gdkcr2-0").textContent;
var txt = '"' + location_est + '"';
text += txt + ";";

desc = document.querySelector(".ShowMoreText__UITextContainer-sc-1swit84-0").textContent;
var txt = '"' + desc + '"';
text += txt + ";";

conts = document.querySelectorAll(".BasicFeaturesstyled__Feature-sc-ngbzhd-1");
for (const cont of conts) {
    var txt = '"' + cont.textContent + '"';
    text += txt + ";";
}

conts = document.querySelectorAll(".GeneralFeaturesstyled__TextWrapper-sc-1ia09m5-3");
for (const cont of conts) {
    var txt = '"' + cont.textContent + '"';
    text += txt + ";";
}

chauff = document.querySelector(".Diagnosticsstyled__TextWrapper-sc-kxy40a-9").textContent;
var txt = '"' + chauff + '"';
text += txt + ";";

conts = document.querySelectorAll(".Preview__PreviewBar-sc-9hhhpm-0");
for (const cont of conts) {
    var txt = '"' + cont.textContent + '"';
    text += txt + ";";
}

chauff = document.querySelector(".Pricestyled__LeftColumn-sc-r5ze64-2").textContent;
var txt = '"' + chauff + '"';
text += txt + ";";

chauff = document.querySelector(".Pricestyled__RightColumn-sc-r5ze64-3").textContent;
var txt = '"' + chauff + '"';
text += txt + ";";

console.log(text);
