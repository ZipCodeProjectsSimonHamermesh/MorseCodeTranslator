console.log("Hello");
var notreplied = true;
var morseTranslated="";


while(notreplied){
var reply = prompt("What would you like to translate to Morse Code?");
if(reply){notreplied = false}
}
var replyLC = reply.toLowerCase();

var morseLib = {
a:". _ ",
b:"_ . . . ",
c:"_ . _ . ",
d:"_ . . ",
e:". ",
f:". . _ . ",
g:"_ _ . ",
h:". . . . ",
i:". . ",
j:". _ _ _ ",
k:"_ . _ ",
l:". _ . . ",
m:"_ _ ",
n:"_ . ",
o:"_ _ _ ",
p:". _ _ . ",
q:"_ _ . _ ",
r:". _ . ",
s:". . . ",
t:"_ ",
u:". . _ ",
v:". . . _ ",
w:". _ _ ",
x:"_ . . _ ",
y:"_ . _ _ ",
z:"_ _ . . ",
1:". _ _ _ _ ",
2:". . _ _ _ ",
3:". . . _ _ ",
4:". . . . _ ",
5:". . . . . ",
6:"_ . . . . ",
7:"_ _ . . . ",
8:"_ _ _ . . ",
9:"_ _ _ _ . ",
0:"_ _ _ _ _ ",
".":". _ . _ . _ ",
",":"_ _ . . _ _ ",
"?":". . _ _ . . ",
"!":"_ . _ . _ _ ",
":":"_ _ _ . . . ",
"=":"_ . . . _ ",
"+":". _ . _ . ",
"-":"_ . . . . _ ",
" ":"| "}

for(i=0, length = replyLC.length;i<length;i++){
		console.log(morseLib[replyLC[i]]);
		morseTranslated+=morseLib[replyLC[i]];
}
console.log(reply);
console.log(morseTranslated);
document.getElementById('result').innerHTML = "<p>You have entered: " + reply + "</p><br><br><p>In Morse Code that is: " + morseTranslated+"</p>";