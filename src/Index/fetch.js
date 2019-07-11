export const championFetch = () => {
  fetch(
    "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
  )
    .then(res => res.json())
    .then(
      result => {
        let arr = [];
        for (var first in result.data) {
          var champObject = "result.data." + first;
          var champKey = champObject + ".key";
          arr.push(eval(champObject));
          //console.log(eval(champObject));
        }
        console.log(arr);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        alert("Error");
      }
    );
};
