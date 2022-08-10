p1 = localStorage.getItem("p1name")
p2 = localStorage.getItem("p2name")

p1score = 0;
p2score = 0;

document.getElementById("p1name").innerHTML = p1
document.getElementById("p2name").innerHTML = p2
document.getElementById("p1score").innerHTML = p1score
document.getElementById("p2score").innerHTML = p2score
document.getElementById("playerQuestion").innerHTML = "O turno de pergunta é do(a): " + p1
document.getElementById("playerAnswer").innerHTML = "O turno de resposta é do(a): " + p2

function send() {
    getWord = document.getElementById("word").value
    word = getWord.toUpperCase()
    charAt1 = word.charAt(1)
    console.log("Palavra: " + word + " charAt 1: " + charAt1)

    lengthDivide2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(lengthDivide2);
    console.log("charAt 2: " + charAt2);

    lengthMinus1 = word.length - 1;
    charAt3 = word.charAt(lengthMinus1);
    console.log("charAt 3: " + charAt3);
    
    rchar1 = word.replace(charAt1,"_");
    rchar2 = rchar1.replace(charAt2, "_");
    rchar3 = rchar2.replace(charAt3, "_");

    qw = "<h4 id='wordDisplay'> P. " + rchar3 + "</h4>";
    ib = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    cb = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

qTurn = 'p1';
aTurn = 'p2';

function check() {
    getAnswer = document.getElementById('inputCheckBox').value;
    answer = getAnswer.toUpperCase();


if (answer == word) {
    if (aTurn == 'p1') {
        p1score = p1score + 1;
        document.getElementById('p1score').innerHTML = p1score;

    } else {
        p2score = p2score + 1;
        document.getElementById('p2score').innerHTML = p2score;
    }
}
if (qTurn == 'p1') {
    qTurn = 'p2'
    document.getElementById('playerQuestion').innerHTML = 'O turno de pergunta é do(a): ' + p2;
} else {
    qTurn = 'p1';
    document.getElementById('playerQuestion').innerHTML = 'O turno de pergunta é do(a): ' + p1;
}

if (aTurn == 'p1') {
    aTurn = 'p2'
    document.getElementById('playerAnswer').innerHTML = 'O turno de resposta é do(a): ' + p2;
} else {
    aTurn = 'p1';
    document.getElementById('playerAnswer').innerHTML = 'O turno de resposta é do(a): ' + p1;
}
document.getElementById('output').innerHTML = '';
}
document.getElementById('olho').addEventListener('mousedown', function() { document.getElementById('word').type = 'text'; });
document.getElementById('olho').addEventListener('mouseup', function() { document.getElementById('word').type = 'password'; });
 document.getElementById('olho').addEventListener('mousemove', function() { document.getElementById('word').type = 'password'; });
