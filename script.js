
const par = document.getElementById('text')         //  paragraph 
const writer = document.getElementById('author')     //author
const btn = document.getElementById('btn');
const tw = document.getElementById('tw');



// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent     // this is for tweet the data 
let infot = "";
let main = "";

const nwtw = () => {
   const post = `https://twitter.com/intent/tweet?text=${main.text} author name :- ${main.author}`;
   window.open(post)
}


const getNewQuotes = () => {
   const run = Math.floor(Math.random() * 10);
   main = infot[run]
   console.log(infot[run].author)
   writer.innerText = `${main.author}`

   par.innerHTML = `${main.text}`
   main == null ?
      writer.innerText = `${unKnow}`
      : writer.innerText = `${main.author}`
}
    

const info = async () => {
   const data = 'https://type.fit/api/quotes'
   try {
      let dat = await fetch(data)
      infot = await dat.json();
      getNewQuotes();

   } catch (error) { }
}
tw.addEventListener("click", nwtw);
btn.addEventListener("click", getNewQuotes);

info()  