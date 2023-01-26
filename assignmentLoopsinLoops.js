const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];


for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let a = 0; a < listOfNeighbours[i].length; a++) {
        let neighbour = listOfNeighbours[i][a]
        console.log(`neibghor: ${neighbour}`);
    }
}

//while loop

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`yoe rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
