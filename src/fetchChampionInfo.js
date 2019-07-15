// export const fetchChampionInfo = (champion, info) => {
//   fetch(
//     "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
//   )
//     .then(res => res.json())
//     .then(
//       result => {
//         let query = "";
//         if (info === undefined) {
//           query = "result.data." + champion;
//           //console.log(eval(query));
//         } else {
//           query = "result.data." + champion + "." + info;
//           //console.log(eval(query));
//         }
//         for (var champ in result.data) {
//           let champion = eval("result.data." + champ);
//           console.log(champion);
//         }
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       error => {
//         alert("Error");
//       }
//     );
// };
// // export async const fetchRandomChampion = () => {
// //   fetch(
// //     "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
// //   )
// //     .then(res => res.json())
// //     .then(

// //       result => {

// //         let championObjects = [];
// //         const totalNumber = 4;

// //         for (var champ in result.data) {
// //           var champObject = "result.data." + champ + ".name";
// //           championObjects.push(eval(champObject));
// //           //console.log(eval(champObject));
// //         }
// //         let chosenChampions = [];
// //         let chosenNumbers = [];
// //         for (var i = 0; i < 3; i++) {
// //           let randomNumber = Math.floor(Math.random() * totalNumber);
// //           while (chosenNumbers.includes(randomNumber)) {
// //             randomNumber = Math.floor(Math.random() * totalNumber);
// //           }

// //           chosenChampions.push(
// //             "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
// //               championObjects[randomNumber] +
// //               "_0.jpg"
// //           );
// //           chosenNumbers.push(randomNumber);
// //         }
// //         console.log(chosenChampions);
// //         return chosenChampions;
// //       },

// //       // Note: it's important to handle errors here
// //       // instead of a catch() block so that we don't swallow
// //       // exceptions from actual bugs in components.
// //       error => {
// //         alert("Error");
// //       }
// //     );
// // };
