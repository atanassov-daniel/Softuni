let text = 'softuni.bg has a user called dabe.bg and one called alo.eu and one called beijing.ch'

/*text = text.replace(/\.\w+/g, '.com')
console.log(text);*/

console.log(text.split(/ [a-z]{3} /g));