/* const people = [
    {
     name : "Jean-Loic",
     age: 30
   },
   {
     name: "Barney",
     age: 35
   }
 ]

function showPeople(data) {
  for (let i = 0; i< people.length; i++) {
  const item = data[1];
  console.log(item);
  }
}
showPeople(people)

//array people 1 year older
//[32, 36]
let olderPeople = []
for (const p of people) {
  olderPeople.push(p.age + 1)
} */


const data = [
    {
      id: 1,
      height: 165
    },
    {
      id: 2,
      height: 175
    },
    {
      id: 3,
      height: 180
    }, 
  ]
  
  const meanHeight = data.reduce((prev, curr) => prev.height + curr.height) / data.length
  console.log(meanHeight)