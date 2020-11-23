function solve(data, criteria) {
    data = JSON.parse(data);

    if (criteria === "all") {
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];

            console.log(`${i}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`);
        }
    } else if (criteria !== "" && criteria.includes("-")) {
        let [criteriaName, criteriaValue] = criteria.split('-');

        let filtered = data.filter(object => object[criteriaName] === criteriaValue);
        //if (filtered.length >= 1) {
            filtered.forEach((object, index) => {
                console.log(`${index}. ${object["first_name"]} ${object["last_name"]} - ${object["email"]}`);
            });
        //}
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);
// 0. Ardine Bassam - abassam0@cnn.com
// 1. Kizzee Jost - kjost1@forbes.com
solve(`[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
    'last_name-Johnson'
);
// 0. Kaylee Johnson - k0@cnn.com
// 1. Kizzee Johnson - kjost1@forbes.com
// 2. Evanne Johnson - ev2@hostgator.com 