//solução 1

function verificarPalindromo(string) {
    if(!string) return;
    
    return string.split("").reverse().joi("") === string;
}