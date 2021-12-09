/*
var tentativas: number = 0
var cores: string[] = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
const arrayAleatorio: Array<string> = new Array(10);

for (var i: number = 0; i < arrayAleatorio.length; i++) {
    do {
        var aux: string = cores[Math.floor(Math.random() * cores.length)]
    } while (arrayAleatorio.includes(aux));
    arrayAleatorio[i] = aux
}
arrayAleatorio.sort();

var certa: string = arrayAleatorio[Math.floor(Math.random() * arrayAleatorio.length)]


function jogo() {
    var chute: string = prompt("Dessas cores \n " + arrayAleatorio.join('\n ') + "\n Em qual estou pensando?");
    tentativas += 1;
    verificar(chute);
}

function verificar(chute: string) {
    if (chute == "") {
        alert("Desculpe, eu não reconheci esta cor. \n\n Tente novamente");
        jogo();
    } else {
        if (chute.toLowerCase() < certa.toLowerCase()) {
            alert("Stairway to Heaven (Antes)"); // Antes
            jogo();
        } else if (chute.toLowerCase() > certa.toLowerCase()) {
            alert("Highway to Hell (Depois)"); // Depois
            jogo();
        } else {
            alert("Parabéns! \n\n Você precisou de: " + tentativas + "tentativas.");
            document.body.style.backgroundColor = certa;
        }
    }
}
*/