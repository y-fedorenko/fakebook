'use strict';

import { User, Subscriber } from './User.js';

const currentUser = new Subscriber(
  'IDX445987C',                       //id
  'John Doe',                         //name
  'jdoe',                             //username
  'jdoe@me.com',                      //email
  ['page1', 'page2', 'page3'],        //pages 
  ['group1', 'group2', 'group3'],     //groups
  true                                //canMonetize
  );

const postButton = document.querySelector('.post-button');
const postInput = document.querySelector('#post-input');
const postWall = document.querySelector('#post-wall');
const imageInput = document.getElementById('image-input');

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
        <p>${postDate.toDateString()}</p>
      </div>
      <div class="post-content">
        <p>${postInput.value}</p>
        ${imageSource}
      </div>
    </div>`;
  newDiv.classList.add('post');
  postWall.appendChild(newDiv);
  resetInput();
}

function resetInput() {
  postInput.value = '';
  imageInput.value = '';
}

postButton.addEventListener('click', addPost);
