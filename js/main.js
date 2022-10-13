document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const selectedDate = document.querySelector('#date').value
  console.log(selectedDate)

  const url = `https://api.nasa.gov/planetary/apod?api_key=ofOgxszFSktCZV4aQ6W10ByVuTFzYlFsYYcgeTpY&date=${selectedDate}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        let name = document.querySelector('#name').value

        document.querySelector('img').src = data.hdurl
          
        document.querySelector('h3').innerText = data.explanation
        
        document.querySelector('h2').innerText = `${name}'s Name Day Sky`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


/*  if( data.media_type === 'image' ){
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }*/













/* document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)
        }else{
         let books = localStorage.getItem('books') + " ; " + data.title 
         localStorage.setItem('books', books)
        }
        //put title into localStorage
        // let books = localStorage.getItem('books') + " ; " + data.title 
        // localStorage.setItem('books', books)
        document.querySelector('h2').innerText = localStorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
