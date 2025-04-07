import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['no-one', 'himself', 'everything', 'what'];
  let adj = ['Huge', 'red', 'angry', 'tremendous'];
  let noun = ['city', 'ice-cream', 'teacher', 'chair'];

  const domainNames = [];
  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++){
    const domainPronoun = pronoun[pronounIndex];
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++){
      const domainAdj = adj[adjIndex];
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++){
        const domainNoun = noun[nounIndex];
        const domainName = domainPronoun + domainAdj + domainNoun;
        domainNames.push(domainName);
      }
    }
  }
  console.log('List of domain names');
  for (let i = 0; i < domainNames.length; i++){
    console.log(domainNames[i] + '.com');
  }





  console.log("Hello Rigo from the console!");
};

