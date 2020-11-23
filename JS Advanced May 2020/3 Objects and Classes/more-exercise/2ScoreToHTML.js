function solve(input) {
    input = JSON.parse(input); // [ { name: 'Pesho', score: 479 }, { name: 'Gosho', score: 205 } ]

    let html = '<table>\n<tr><th>name</th><th>score</th></tr>';

    for (const obj of input) {
        obj.name = obj.name.replace(/&/g, '&amp;');
        obj.name = obj.name.replace(/</g, '&lt;');
        obj.name = obj.name.replace(/>/g, '&gt;');
        obj.name = obj.name.replace(/"/g, '&quot;');
        obj.name = obj.name.replace(/'/g, '&#39;');


        html += `\n<tr><td>${obj.name}</td><td>${obj.score}</td></tr>`;
    }

    html += '\n</table>';
    console.log(html);
}

solve(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
solve(['[{"name":"Pesho & Kiro", "score":479}, {"name": "Gosho, Maria & Viki","score": 205}]']);

/*obj.score = obj.score.replace(/&/g, '&amp');
        obj.score = obj.score.replace(/</g, '&lt');
        obj.score = obj.score.replace(/>/g, '&gt');
        obj.score = obj.score.replace(/"/g, '&quot');
        obj.score = obj.score.replace(/'/g, '\''); */