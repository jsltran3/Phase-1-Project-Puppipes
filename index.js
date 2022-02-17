// should get rid of the fg-image error
// get the like working
// get the dog bio working
// get dog title 
// use db.json to create a list of good doggo names
///////////////



const baseURL = "https://api.thedogapi.com/v1/images/search";
//to get our data 
let imageData;
const commentList = document.getElementById('fg-comments');
const randoDogBtn = document.querySelector('button.btn-1');
const dogResults = document.getElementById('rando-doggo');
const breedName = document.querySelector('#fg-title');
let randomDogTitles = ['goddest of boy', 'boop the snoot', 'bestest fren', 'pupperino', 'chimkim croncher', 'heckin cute doggo'];
let randomComments = ['This dog is so cute!', 'Awww', 'Look at that lil guy', 'Who\'s the goodest boy?', 'woof', 'That dog looks like mine!', 'I just want to take that dog home', 'That dog looks so happy!', 'I just want to take that dog home'];
let count = 0;
let count2 = 0;
let countStart = document.getElementById("fg-likes");
let countStart2 = document.getElementById("fg-likes2");
countStart.innerHTML = count;
countStart2.innerHTML = count2;
let likeButton = document.getElementById('like-button');
let likeButton2 = document.getElementById('like-button2');
const newBreedName = document.querySelector('h2#fg-title');


randoDogBtn.addEventListener('click', getRandomDog);
randoDogBtn.addEventListener('click', removeComments);
randoDogBtn.addEventListener('click', addRandomComments);
randoDogBtn.addEventListener('click', resetCounters);

likeButton.addEventListener("click", function() {
    countStart.innerHTML = ++count;
  });

likeButton2.addEventListener("click", function() {
    countStart2.innerHTML = ++count2;
});

function resetCounters() {
    countStart.innerHTML = 0;
    countStart2.innerHTML = 0;
}

function getRandomDog() {
    
	fetch(baseURL)
            .then(res => res.json())
		.then(data => {
            let nameIdentifier = data[0].breeds[0];
			dogResults.innerHTML = `<img src="${data[0].url}"/>`
 
            if (nameIdentifier === undefined) {
                breedName.textContent = randomTitle(randomDogTitles);
            } else {
                breedName.textContent = `${data[0].breeds[0].name}`;
            }
		})
        // .then(data => {
        //     console.log(data[0].breeds);
        // })
        // .then(data => {
            
            // document.getElementById('rando-fact').innerText = `${data[0].breeds[0].weight}`
            //renderDogFacts(data);
            //lotta redundances here

            // if (data[0]!== undefined) {
                
            //     console.log(document.getElementById('rando-fact').innerHTML = `${data}`)
            // }
            // else {
            //     breedName.textContent = randomTitle(randomDogTitles);
            // }
        // })

}

function randomTitle(items) {
    return randomDogTitles[Math.floor(Math.random()*items.length)];
}


window.onload = addRandomComments();

function addRandomComments()  {
    for (let i=0; i < 3; i++) {
        let r = Math.floor(Math.random() * randomComments.length)
        let comment = randomComments[r]
        
        list = document.createElement('li');
        list.setAttribute("href","#");
        list.innerHTML = comment;
        commentList.appendChild(list)
        
        randomComments.slice(r, 1)
    }
}

function removeComments() {
    commentList.innerHTML = "";
}

//read more on this DOMcontentloaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        renderUserComments(e.target.comment_input.value);
    })
})

function renderUserComments(comments) {
    let li = document.createElement('li');
    li.textContent = comments;
    document.querySelector('#fg-comments').appendChild(li);

}

function renderDogFacts(datas) {
    let li = document.createElement('li');
    li.textContent = datas; 
    document.getElementById('rando-fact').appendChild(li);
}

