var nome, i, j, nomecat;
var nomeid = "_a_"; 
var opacita;
var nomicategorie = ["Case history internazionali comunicazione",
"Case history internazionali mobilità sostenibile",
"Mostre",
"Conferenze",
"Festival",
"Laboratori di ricerca",
"Team studenteschi universitari",
"Aziende",
"Servizi",
"App",
"Progetti locali",
"Fondi europei",
"Report banche dati",
"Festival"];

var numericategorie = [19, 13, 18, 5 ,5, 4, 8, 17, 22, 62, 16, 15, 13, 5];
var fontsizeiniziale = "11px";
var fontsizeattivo = "32px";
var fontsizecategoria ="16px";
var fontsizenoncategoria = "9px";
var strokewidthiniziale = "1px";
var strokewidthnoncategoria = "0.1px";
var fontweightiniziale = "500";
var fontweightattivo = "800";
var opacitacategoria = 0.5;
var opacitanoncategoria = 0.5;
var opacitaattivo = 1;
var opacitainiziale = 1;

function quante(a){
    if (a == "Case history internazionali comunicazione"){
        return 19;
    }
    if (a == "Case history internazionali mobilità sostenibile"){
        return 13;
    }
    if (a == "Mostre"){
        return 18;
    }
    if (a == "Conferenze"){
        return 5;
    }
    if (a == "Festival"){
        return 5;
    }
    if (a == "Laboratori di ricerca"){
        return 4;
    }
    if (a == "Team studenteschi universitari"){
        return 8;
    }
    if (a == "Aziende"){
        return 17;
    }
    if (a == "Servizi"){
        return 22;
    }
    if (a == "App"){
        return 62;
    }
    if (a == "Progetti locali"){
        return 16;
    }
    if (a == "Fondi europei" ){
        return 5 ;
    }
    if (a == "Report banche dati"){
        return 13;
    }
    if (a == "Festival"){
        return 5 ;
    }
    }


function mouseon(nomeid){
    // tutti_gli_elementi(0.3, nomeid);
    tutti_gli_elementiOFF(nomeid);
    // categorie(nomeid);
    var nomecat = nomeid.split("_");
               document.getElementById("nomedellacategoria").innerHTML = nomecat[0] ;



               // ACCENDI GLI ELEMENTI PREMUTI
    document.getElementById(nomeid).style.fontSize = fontsizeattivo;
    document.getElementById(nomeid).style.opacity = opacitaattivo;
    document.getElementById(nomeid).style.fontWeight = fontweightattivo;
    document.getElementById(nomeid).style['stroke-width'] = "3px";
    

    
}
function mouseoff(){
    tutti_gli_elementiON();
        
}



function tutti_gli_elementiOFF(nomeid){
    
    for (var i = 0; i < 14; i++) {
        
        for (var j = 0; j < numericategorie[i] ; j++) {
                var nome =  nomicategorie[i];
                var nomecat = nomeid.split("_");
                if (nome == nomecat[0]) {               // ELEMENTI CATEGORIA
                    document.getElementById(nome + "_" + (j + 1).toString()).style.opacity = opacitacategoria;
                    document.getElementById(nome + "_" + (j + 1).toString()).style.fontWeight = "300";
                    // document.getElementById(nome + "_" + (j + 1).toString()).style.fontSize = fontsizecategoria;    


               }
               else{                                    // ELEMENTI NON DELLA CATEGORIA
                document.getElementById(nome + "_" + (j + 1).toString()).style.opacity = opacitanoncategoria;
                document.getElementById(nome + "_" + (j + 1).toString()).style['stroke-width'] = strokewidthnoncategoria;                
                // document.getElementById(nome + "_" + (j + 1).toString()).style.fontSize = fontsizenoncategoria;    
                document.getElementById(nome + "_" + (j + 1).toString()).style.fontWeight = "300";

                     
                
               }

               
        };   
    };
    }
    function tutti_gli_elementiON(){ // RIACCENDI TUTTI GLI ELEMENTI
    
        for (var i = 0; i < 14; i++) {
            
            for (var j = 0; j < numericategorie[i] ; j++) {
                var nome =  nomicategorie[i];

                    document.getElementById(nome + "_" + (j + 1).toString()).style.opacity = opacitainiziale;
                    document.getElementById(nome + "_" + (j + 1).toString()).style.fontWeight = fontweightiniziale;
                    document.getElementById(nome + "_" + (j + 1).toString()).style['stroke-width'] = strokewidthiniziale;
                    document.getElementById(nome + "_" + (j + 1).toString()).style.fontSize = fontsizeiniziale;
                    document.getElementById("nomedellacategoria").innerHTML = " " ;
                    
                   }
    
                   
            };   
        };
        
// function categorie(nomeid){
//     var ncat = quante(nomeid);
    
//     for (var j = 0; j < numericategorie[i] ; j++) {
//         var nome =  nomicategorie[i];
//        document.getElementById(nome + "_" + (j + 1).toString()).style.opacity = 0;
//     }}