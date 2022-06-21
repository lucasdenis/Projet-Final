const data = [
    {
        id:1,
        height:165
    },
    {
        id:2,
        height:175
    },
    {
        id:3,
        height:185
    } ];


const peopleAbove170 = data.filter(person => person.height > 170);
console.log(peopleAbove170);

const dataMap = data.map(person => person.height + 1);
console.log(dataMap);


const dataNum = [165,175,180]
// valeur numérique uniquement pour reduce
const meanHeight = dataNum.reduce((previous,current) => previous + current)/dataNum.length;
console.log(meanHeight);

const tailleMoyenne = data
    .filter(person => person.height > 170)
    /*.filter(function(person){
        return person.height > 170
        }) //meme chose */
    .map(person => person.height + 5)//permet de transformer liste dictio en liste de num
    .reduce((prev,curr) => prev + curr) /data.length

console.log(tailleMoyenne)
