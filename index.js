/** Global Variables **/
const baseURL = "https://api.thedogapi.com/v1/images/search";
let randomDogTitles = ['goddest of boy', 'boop the snoot', 'bestest fren', 'pupperino', 'chimkim croncher', 'heckin cute doggo'];
let randomComments = ['This dog is so cute!', 'Awww', 'Look at that lil guy', 'Who\'s the goodest boy?', 'woof', 'That dog looks like mine!', 'I just want to take that dog home', 'That dog looks so happy!', 'I just want to take that dog home'];
let count = 0;
let count2 = 0;


/** Nodes **/
const commentList = () => document.getElementById('fg-comments');
const randoDogBtn = () => document.querySelector('button.btn-1');
const dogResults = () => document.getElementById('rando-doggo');
const breedName = () => document.querySelector('#fg-title');
let countStart = () => document.getElementById("fg-likes");
let countStart2 = () => document.getElementById("fg-likes2");
let likeButton = () => document.getElementById('like-button');
let likeButton2 = () => document.getElementById('like-button2');
const newBreedName = () => document.querySelector('h2#fg-title');
const mainForm = () => document.querySelector('form');

/** Event Listeners **/
const attachImageRender = () => { 
    randoDogBtn().addEventListener('click', getRandomDog);
} 

const attachRemoveComments = () => { 
randoDogBtn().addEventListener('click', removeComments);
}

const attachAddComments = () => { 
randoDogBtn().addEventListener('click', addRandomComments);
}

const attachResetCounters = () => { 
randoDogBtn().addEventListener('click', resetCounters);
}

const attachlike1 = () => { 
likeButton().addEventListener("click", function() {
    countStart().innerHTML = ++count;
  });
}

const attachLike2 = () => { 
likeButton2().addEventListener("click", function() {
    countStart2().innerHTML = ++count2;
});
}

const attachResetLike1 = () => { 
countStart().innerHTML = count;
}

const attachResetLike2 = () => { 
countStart2().innerHTML = count2;
}

/** Event Handlers **/

function resetCounters() {
    countStart().innerHTML = 0;
    countStart2().innerHTML = 0;
}

function submitButton() {
    mainForm().addEventListener('submit', (e) => {
        e.preventDefault()
        renderUserComments(e.target.comment_input.value);

    })
}
function getRandomDog() {
    
	fetch(baseURL)
        .then(res => res.json())
		.then(renderImageAndTitle)
}

function renderImageAndTitle(data) {
        let nameIdentifier = data[0].breeds[0];
        dogResults().innerHTML = `<img src="${data[0].url}"/>`

        if (nameIdentifier === undefined) {
            breedName().textContent = randomTitle(randomDogTitles);
        } else {
            breedName().textContent = `${data[0].breeds[0].name}`;
        }
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
        commentList().appendChild(list)
        
        randomComments.slice(r, 1)
    }
}

function removeComments() {
    commentList().innerHTML = "";
}

/** NODE Creators **/

function renderUserComments(comments) {
    let li = document.createElement('li');
    li.textContent = comments;
    commentList().appendChild(li);
}

/** Startup **/

document.addEventListener('DOMContentLoaded', function() {
    submitButton();
    removeComments();
    attachImageRender();
    attachRemoveComments();
    attachAddComments();
    attachResetCounters();
    attachlike1();
    attachLike2();
    attachResetLike1();
    attachResetLike2();
})