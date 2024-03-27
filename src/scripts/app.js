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

window.addEventListener('load', function() {
  const fileInput = document.getElementById('image-input');
  const imageContainer = document.getElementById('image-container');

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) { // if file is selected then it is truethy
      const reader = new FileReader();
      
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        imageContainer.innerHTML = ''; 
        imageContainer.appendChild(img);
      };
      
      reader.readAsDataURL(file); // Convert file to base64, 
    }
  });
});