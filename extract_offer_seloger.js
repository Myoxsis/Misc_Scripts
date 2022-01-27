var text = ""

title = document.querySelector(".Summarystyled__Title-sc-1u9xobv-3").textContent;
var txt = '"' + title + '"';
text += txt + ";";

//subdescription = document.querySelectorAll(".Summarystyled__TagsWrapper-sc-1u9xobv-13 div");
//for (const cont of subdescription) {
//    var txt = '"' + cont.textContent + '"';
//    text += txt + ";";
//}

subdescription = document.querySelectorAll(".Summarystyled__TagsWrapper-sc-1u9xobv-13 div");
piece = "";
chambre = "";
surface = "";
etage = "";
terrain = "";

for (const cont of subdescription) {
    if(cont.textContent.endsWith("pièce") || cont.textContent.endsWith("pièces")){
        piece = cont.textContent;
    } 
    if (cont.textContent.endsWith("chambre") || cont.textContent.endsWith("chambres")){
        chambre = cont.textContent;
    }
    if (cont.textContent.endsWith("m²")){
        surface = cont.textContent;
    }
    if (cont.textContent.startsWith("Étage")){
        etage = cont.textContent;
    }
    if (cont.textContent.startsWith("Terrain")){
        terrain = cont.textContent;
    }
}

console.log("Piece : " + piece);
console.log("chambre : " + chambre);
console.log("surface : " + surface);
console.log("etage : " + etage);
console.log("terrain : " + terrain);


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
ascenseur = "";
terrasse = "";
calme = "";
belle_vue = "";
parking = "";
cuisine = "";
sdb = "";
sde = "";
toilettes = "";
cave = "";
gardien = "";
digicode = "";
interphone = "";

for (const cont of conts) {
    if(cont.textContent == "Ascenseur"){ascenseur = cont.textContent;}
    if(cont.textContent == "Terrasse"){terrasse = cont.textContent;}
    if(cont.textContent == "Calme"){calme = cont.textContent;}
    if(cont.textContent == "Belle vue"){belle_vue = cont.textContent;}
    if(cont.textContent == "Parking"){parking = cont.textContent;}
    if(cont.textContent == "Cuisine américaine"){cuisine = cont.textContent;}
    if(cont.textContent == "Salle de bain (baignoire)"){sdb = cont.textContent;}
    if(cont.textContent == "Salle d'eau (douche)"){sde = cont.textContent;}
    if(cont.textContent.endsWith("ilettes")){toilettes = cont.textContent;}
    if(cont.textContent == "Séjour / salon"){sej_sal = cont.textContent;}
    if(cont.textContent == "Cave"){cave = cont.textContent;}
    if(cont.textContent == "Gardien"){gardien = cont.textContent;}
    if(cont.textContent == "Digicode"){digicode = cont.textContent;}
    if(cont.textContent == "Interphone"){interphone = cont.textContent;}
    if(cont.textContent == "Calme"){calme = cont.textContent;}
    else {
        console.log("[ALERT] Value not recognized : " + cont.textContent);
    }

}

console.log(ascenseur);
console.log(terrasse);
console.log(calme);
console.log(belle_vue);
console.log(parking);
console.log(cuisine);
console.log(sdb);
console.log(sde);
console.log(toilettes);
console.log(sej_sal);



chauff = document.querySelector(".Diagnosticsstyled__TextWrapper-sc-kxy40a-9").textContent;
var txt = '"' + chauff + '"';
text += txt + ";";

conts = document.querySelectorAll(".Preview__PreviewBar-sc-9hhhpm-0");
for (const cont of conts) {
    if (cont.length == 1){
        console.log(cont.length + " X ");
    }
    //console.log(cont.length);//textContent);
    //var txt = '"' + cont.textContent + '"';
    //text += txt + ";";
}

try{
    chauff = document.querySelector(".Pricestyled__LeftColumn-sc-r5ze64-2").textContent;
    var txt = '"' + chauff + '"';
    text += txt + ";";
} catch (e) {}

try{
    chauff = document.querySelector(".Pricestyled__RightColumn-sc-r5ze64-3").textContent;
    var txt = '"' + chauff + '"';
    text += txt + ";";
} catch (e) {}


var offer = new Object();
offer.name = title;
offer.nb_photos  = nb_photos;
offer.location_est = location_est;
offer.price = price;
offer.subdescription = subdescription;
offer.desc = desc;
offer.chauff = chauff;
var jsonString= JSON.stringify(offer);


console.log(jsonString);
