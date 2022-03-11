
// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const Header = (title, date, temp) => {

    // Creating DIV Variables
    const headerDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const spanTemp = document.createElement('span');
    const h1Title = document.createElement('h1');

    // Giving headerDiv kids
    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(h1Title);
    headerDiv.appendChild(spanTemp);

    // Modding DOM variables
    headerDiv.classList.add('header');

    spanDate.classList.add('date');
    spanDate.textContent = date;

    spanTemp.classList.add('temp');
    spanTemp.textContent = temp;

    h1Title.textContent = title;

    return headerDiv;
};

// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  
  const parent = document.querySelector(selector);
  parent.appendChild(Header('Waddles', 'July 10, 2025', '70'))
};

export { Header, headerAppender }
