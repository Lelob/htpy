// O input vai ser sempre constituido de uma string com 5 letras
// O jogo deve respeitar as seguintes regras:
// Dada a palavra-do-dia (a palavra que é a resposta para o problema):

// - Se o usuário escreveu uma letra que não existe na palavra do dia
// retorne Cinza

// - Se o usuário escreveu uma letra que existe na palavra do dia porém
// em uma posição diferente, retorne Amarelo

// - Se o usuário escreveu uma letra que existe na palavra do dia e está
// na mesma posição, retorne Verde

// Ou seja
// Cinza: Se a letra não existe na palavra
// Amarelo: Se a letra existe e está na posição errada
// Verde: Se a letra existe e está na posição correta

// - A palavra-do-dia e a entrada do usuário serão sempre formadas por letras minúsculas.

// Ex:                 01234  
// Palavra-do-dia =   'pedro'
//                     01234   
// Texto do usuário = 'peras'
// Retorno esperado = ['Verde','Verde','Amarelo','Cinza','Cinza']

// EXTRA: resolver o exercício baseado em um input do usuário via página HTML, demonstrar o resultado em quadrados nas cores


/*
indexOf ->
0123456
aaabcde

indexOf ->
a -> 0
b -> 3
e -> 6
w -> -1
*/


/*          01234
userWord -> peras
            01234
dayWord ->  pedro
*/

/*
answer = ['Verde', 'Verde', 'Amarelo', 'Cinza', 'Cinza']
i = 5
userWord[4] = 's'
dayWord[4] = 'o'
*/
function calcColors(userWord, dayWord) {
    const answer = [];
    // Percorre todas as letras
    for (let i = 0; i < userWord.length; i++) {
        // Verifica se a letra atual está na msm posição da palavra real
        if (userWord[i] === dayWord[i]) {
            answer.push('Verde');
        // Verifica se a letra atual existe na palavra
        } else if(dayWord.indexOf(userWord[i]) !== -1) {
            answer.push('Amarelo');
        // Deu merda, ela não existe!
        } else {
            answer.push('Cinza');
        }
    }
    // Retorna as cores
    return answer;
}

console.log(calcColors('eowpo', 'pedro'));
// ('Amarelo', 'Amarelo', 'Cinza', 'Amarelo', 'Verde')