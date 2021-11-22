/***** Funktionen 01 *****/

// 1. Kappselung von Codeblöcken

// Funktionsaufruf (call/er)
// test();

// Funktionsrumpf (body) | callee
// function test() 
// {
//     console.log("Hallo Florian");
// }

/***** Funktionen 02a *****/
// 2a. Parametriesierung + Datenübergabe von INNEN

// ausgabeNamen();
// function ausgabeNamen() 
// {
//     let firstName = "Jan"                       // what happens in Vegas ... (was in der Funktion passiert)
//     console.log("Hallo " + firstName + "!");
//     console.log(firstName);  
// }

// console.log(firstName);                         // ... stays in Vegas! (passiert nur in der Funktion)

/***** Funktionen 02b *****/
// 2b. Parametriesierung + Datenübergabe von AUSSEN

// function ausgabeNamenParam(firstName) {
//     const cond1 = (firstName == "");
//     const cond2 = (firstName == undefined) ;
    
//         if (cond1 || cond2)  
//     {
//         firstName = "Nobody"    
//     }
    
//     //let firstName = "Florian"; Variablen --> Parameter
//     console.log("Hallo " + firstName + "!");
//     }
// ausgabeNamenParam("Florian");                       // Argument(e) / args
// ausgabeNamenParam("Anton");
// ausgabeNamenParam();                                // <-- ohne Definition
// ausgabeNamenParam(prompt("Vorname?:"));

/***** Funktion 02c *****/
// 2c. Mehrere Parameter

// function ausgabeNamenParams(firstName,familyName) {
    
//     console.log("Hallo " + firstName + " " + familyName +"!");

// }
// ausgabeNamenParams("Max", "Mustermann");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname"));

/***** Funktionen 03a *****/
// 3a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

function ausgabeNamenParams2(firstName,familyName) {

    // 1. Funktionalität: string composing
    const gap = " ";
    const outputStr = "Hallo" + gap + firstName + gap + familyName +"!";

    // 2. Funktionalität: dataoutput (Datenausgabe) 
    console.log(outputStr);
}

ausgabeNamenParams2("Max","Mütze");