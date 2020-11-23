let string = 'This Java is Java ing a Java with a need For Java Java Javan Javar Javaaa'

string = string.replace('Java', 'JS');

while (string.indexOf('Java') !== -1) {
    string = string.replace('Java', 'JS');
}

console.log(string);