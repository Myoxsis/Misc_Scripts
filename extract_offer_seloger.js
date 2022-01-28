var text = ""

title = document.querySelector(".Summarystyled__Title-sc-1u9xobv-3").textContent;
var txt = '"' + title + '"';
text += txt + ";";

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
dt_construction = "";
dt_dispo = "";
prevoir_travaux = "";
refait_neuf = "";

for (const cont of conts) {
    if(cont.textContent.includes("Construit")){dt_construction = cont.textContent;}
    if(cont.textContent.includes("Dispo")){dt_dispo = cont.textContent;}
    if(cont.textContent.includes("Travaux à prévoir")){prevoir_travaux = cont.textContent;}
    if(cont.textContent.includes("Refait à neuf")){refait_neuf = cont.textContent;}
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
sans_vav = "";
sam = "";

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
    if(cont.textContent.includes("Sans vis-à-vis")){sans_vav = cont.textContent;}
    if(cont.textContent.includes("Salle à manger")){sam = cont.textContent;}
    else {
        console.log("[ALERT] Value not recognized : " + cont.textContent);
    }
}

typ_chauff = document.querySelector(".Diagnosticsstyled__TextWrapper-sc-kxy40a-9").textContent;


conts = document.querySelectorAll(".Diagnosticsstyled__PreviewContainer-sc-kxy40a-1");
dpe = "";
ges = "";

for (const cont of conts) {
    if(cont.textContent.includes("Diagnostic de performance énergétique (DPE)")){dpe = cont.textContent;}
    if(cont.textContent.includes("Indice d'émission de gaz à effet de serre (GES)")){sam = cont.textContent;}
}

l_col = "";
try{
    l_col = document.querySelector(".Pricestyled__LeftColumn-sc-r5ze64-2").textContent;
} catch (e) {}

r_col = "";
try{
    r_col = document.querySelector(".Pricestyled__RightColumn-sc-r5ze64-3").textContent;
} catch (e) {}



var txt = '"' + title + '";' + '"' + piece + '";' + '"' + chambre + '";' + '"' + surface + '";' + '"' + terrain + '";' + '"' + etage +
 '";' + '"' + nb_photos + '";' + '"' + price + '";' + '"' + location_est + '";' + '"' + desc + '";' + '"' + dt_construction + '";' +
  '"' + dt_dispo + '";' + '"' + balcon + '";' + '"' + ascenseur + '";' + '"' + terrasse + '";' + '"' + parking + '";' + '"' + cave +
   '";' + '"' + calme + '";' + '"' + expo + '";' + '"' + sdb + '";' + '"' + sde + '";' + '"' + cuisine + '";' + '"' +
    belle_vue + '";' + '"' + sans_vav + '";' + '"' + prevoir_travaux + '";' + '"' + refait_neuf + '";' + '"' + interphone + '";' + 
'"' + toilettes + '";' + '"' + toilettes_sep + '";' + '"' + gardien + '";' + '"' + digicode + '";' + '"' + sej_sal + '";' + 
'"' + typ_chauff + '";' + '"' + entree_sep + '";' + '"' + handic + '";' + '"' + cheminee + '";' + '"' + plc_rg + '";' +
 '"' + parquet + '";' + '"' + sam + '";' + '"' + piscine + '";' + '"' + alarme + '";' + '"' + dpe + '";' + '"' + ges +
  '";' + '"' + l_col + '";' + '"' + r_col + '";';

console.log(txt);
