function solve(input) {
    let html = '<table>';

    for (let obj of input) {
        obj = JSON.parse(obj); // { name: 'Pesho', position: 'Promenliva', salary: 100000 }

        html += `\n\t<tr>\n\t\t<td>${obj.name}</td>\n\t\t<td>${obj.position}</td>\n\t\t<td>${obj.salary}</td>\n\t</tr>`;
    }

    html += '\n</table>';
    console.log(html);
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);

/*
<table>
	<tr>
		<td>Pesho</td>
		<td>Promenliva</td>
		<td>100000</td>
	</tr>
	<tr>
		<td>Teo</td>
		<td>Lecturer</td>
		<td>1000</td>
	</tr>
	<tr>
		<td>Georgi</td>
		<td>Lecturer</td>
		<td>1000</td>
	</tr>
</table>

*/