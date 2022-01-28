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
toilettes_sep = "";
sej_sal = "";
cave = "";
gardien = "";
digicode = "";
interphone = "";
entree_sep = "";
expo = "";
balcon = "";
handic = "";
box = "";
plc_rg = "";
cheminee = "";
piscine = "";
alarme = "";
parquet = "";

for (const cont of conts) {
    if(cont.textContent.includes("Ascenseur")){ascenseur = cont.textContent;}
    if(cont.textContent.includes("Balcon")){balcon = cont.textContent;}
    if(cont.textContent.includes("Exposition")){expo = cont.textContent;}
    if(cont.textContent.includes("Pas d'ascenseur")){ascenseur = cont.textContent;}
    if(cont.textContent.includes("Terrasse")){terrasse = cont.textContent;}
    if(cont.textContent.includes("Calme")){calme = cont.textContent;}
    if(cont.textContent.includes("Belle vue")){belle_vue = cont.textContent;}
    if(cont.textContent.includes("Parking")){parking = cont.textContent;}
    if(cont.textContent.includes("Cuisine américaine")){cuisine = cont.textContent;}
    if(cont.textContent.includes("Cuisine séparée")){cuisine = cont.textContent;}
    if(cont.textContent.includes("Cuisine équipée")){cuisine = cont.textContent;}
    if(cont.textContent.includes("Aucune cuisine")){cuisine = cont.textContent;}
    if(cont.textContent.includes("Coin cuisine")){cuisine = cont.textContent;}
    if(cont.textContent.includes(" de bain (baignoire)")){sdb = cont.textContent;}
    if(cont.textContent.includes(" d'eau (douche)")){sde = cont.textContent;}
    if(cont.textContent.includes("ilettes")){toilettes = cont.textContent;}
    if(cont.textContent.includes("ilettes séparée")){toilettes_sep = cont.textContent;}
    if(cont.textContent.includes("Séjour / salon")){sej_sal = cont.textContent;}
    if(cont.textContent.includes("Cave")){cave = cont.textContent;}
    if(cont.textContent.includes("Gardien")){gardien = cont.textContent;}
    if(cont.textContent.includes("Digicode")){digicode = cont.textContent;}
    if(cont.textContent.includes("Interphone")){interphone = cont.textContent;}
    if(cont.textContent.includes("Entrée séparée")){entree_sep = cont.textContent;}
    if(cont.textContent.includes("Accès handicapé")){handic = cont.textContent;}
    if(cont.textContent.toLowerCase().includes("box")){box = cont.textContent;}
    if(cont.textContent.includes("Placards / rangements")){plc_rg = cont.textContent;}
    if(cont.textContent.includes("Cheminée")){cheminee = cont.textContent;}
    if(cont.textContent.includes("Piscine")){piscine = cont.textContent;}
    if(cont.textContent.includes("Alarme")){alarme = cont.textContent;}
    if(cont.textContent.includes("Parquet")){parquet = cont.textContent;}
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
console.log(toilettes_sep);
console.log(sej_sal);
console.log(cave);
console.log(gardien);
console.log(digicode);
console.log(interphone);
console.log(entree_sep);
console.log(expo);
console.log(balcon);
console.log(handic);
console.log(box);
console.log(plc_rg);
console.log(cheminee);
console.log(piscine);
console.log(alarme);
console.log(parquet);



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


//var offer = new Object();
//offer.name = title;
//offer.nb_photos  = nb_photos;
//offer.location_est = location_est;
//offer.price = price;
//offer.subdescription = subdescription;
//offer.desc = desc;
//offer.chauff = chauff;
//var jsonString= JSON.stringify(offer);

//console.log(jsonString);

var txt = '"' + title + '";' + '"' + piece + '";' + '"' + chambre + '";' + '"' + surface + '";' + '"' + terrain + '";' + '"' + etage +
 '";' + '"' + nb_photos + '";';
console.log(txt);
