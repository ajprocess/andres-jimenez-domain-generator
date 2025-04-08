import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['noOne', 'himself', 'everything', 'what'];
  let adj = ['Huge', 'red', 'angry', 'tremendous'];
  let noun = ['city', 'iceCream', 'teacher', 'chair'];

  const domainNames = [];
  for (const domainPronoun of pronoun){
    for (const domainAdj of adj){
      for (const domainNoun of noun){
        
        const domainName = domainPronoun + domainAdj + domainNoun;
        domainNames.push(domainName);
      }
    }
  }
console.log ('domain names'); domainNames.forEach(name => console.log(name + '.com'))





  console.log("Hello Rigo from the console!");
};

