// TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

import axios from "axios";

const Tabs = (topics) => {
  // Making DOM Variable 
  const topicHolder = document.createElement('div');

  // Modding DOM Variables
  topicHolder.classList.add('topics');

  // Making a Component for Argument
  function topicMaker (item) {
    // Creating DOM Variable
    const tabThing = document.createElement('div');
    
    // Modding Variables
    tabThing.classList.add('tab');
    tabThing.textContent = item;

    // Giving topicHolder kids
    topicHolder.appendChild(tabThing);
  }

  // Sending Argument through component
  topics.forEach(string => topicMaker(string))

  // returning component
  return topicHolder
}

 // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

const tabsAppender = (selector) => {
  // Grabbing info and storing inside a variable

  axios.get('http://localhost:5001/api/topics')
  .then(object => document.querySelector(selector).appendChild(Tabs(object.data.topics)))
  .catch(err => console.log('error!@', err))
}

export { Tabs, tabsAppender }
