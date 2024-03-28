'use strict';

import { User, Subscriber } from './User.js';
import { getRandomNumber } from './Utils.js';

const currentUser = new Subscriber(
  'IDX445987C',                                       //id
  'John Doe',                                         //name
  'jdoe',                                             //username
  'jdoe@me.com',                                      //email
  ['Darwin Society', 'Elemental Maths', 'Amazing'],   //pages 
  ['Classmates', 'Friends', 'Community college'],     //groups
  true                                                //canMonetize
  );

const postButton = document.querySelector('.post-button');
const postInput = document.querySelector('#post-input');
const postWall = document.querySelector('#post-wall');
const imageInput = document.getElementById('image-input');
const fileNameLabel = document.getElementById('image-name');

const placeHolderList = [
  "What\'s on your mind",
  "What\'s new",
  "Share your thoughts",
  "Anything new today",
  "How are you doing"
];

function init() {
  postInput.placeholder = `${placeHolderList
    [getRandomNumber(placeHolderList.length - 1)]}, ${currentUser.name}?`;
}

function addPost() {

  if (!(imageInput.files[0] || postInput.value)) return; // no input - do nothing


  const newDiv = document.createElement('div');
  const postDate = new Date();

  let imageSource;

 (imageInput.files[0]) ? imageSource = 
  `<div id="image-container"><img id ="post-image" src="
  ${URL.createObjectURL(imageInput.files[0])}" alt="image"></div>` 
  : imageSource = '';
  
  newDiv.innerHTML = `
    <div class="post-header">
     <div class="flex">
        <img id ="avatar" src="./src/media/avatar.jpg" alt="avatar"> 
        <p>${currentUser.name}</p></div>
        <p>${postDate.toLocaleDateString(
          'en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      </div>
      <div class="post-content">
        <p>${postInput.value}</p>
        ${imageSource}
      </div>
    </div>`;
  newDiv.classList.add('post');


  const firstPost = postWall.firstChild;
  postWall.insertBefore(newDiv, firstPost);
  resetInput();
}

function resetInput() {
  postInput.value = '';
  imageInput.value = '';
  fileNameLabel.textContent = '';
}

postButton.addEventListener('click', addPost);
window.addEventListener('load', init); // random placeholder for textinput


//this function shows the name of the image selected instead of the standard text
imageInput.addEventListener('change', function() {

  if (imageInput.files.length !== 0) {
    const fileName = imageInput.files[0].name;
    fileNameLabel.textContent = fileName;
  } else fileNameLabel.textContent = '';
});


const dialog = document.querySelector("dialog");
const avatar = document.querySelector("#avatar");
// "Show the dialog" button opens the dialog modally
avatar.addEventListener("click", () => {
  dialog.showModal();
});

//closes by clicking ouside of the dialog box
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

function fillUserData() {

  const infoId = document.querySelector("#info-id");
  const infoName = document.querySelector("#info-name");
  const infoUsername = document.querySelector("dialog h3");
  const infoEmail = document.querySelector("#info-email");
  const infoPages = document.querySelector("#info-pages");
  const infoGroups = document.querySelector("#info-groups");
  const infoMonetize = document.querySelector("#info-monetize");

  let [id, name, username, email, pages, groups, canMonetize] 
    = currentUser.getInfo().split("|");

  infoId.textContent = id;
  infoName.textContent = name;
  infoUsername.textContent = `@${username}`;
  infoEmail.textContent = email;
  infoPages.textContent = pages.split(",").join(", ") + ".";
  infoGroups.textContent = groups.split(",").join(", ") + ".";
  canMonetize ? infoMonetize.textContent = 'Yes' : infoMonetize.textContent = 'No';
}

window.addEventListener('load', fillUserData);