// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const title = document.createElement('h1');
    const tempSpan = document.createElement('span');

    dateSpan.textContent = "SMARCH 28, 2019";
    title.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    headerDiv.classList.add('header');
    span.classList.add('date');
    degrees.classList.add('temp');
    title.classList.add('title');

    headerDiv.append(dateSpan);
    headerDiv.append(title);
    headerDiv.append(tempSpan);
    
    return headerDiv;

}

const headAnchor = document.querySelector('.header-container')
const newHeader = Header();
headAnchor.appendChild(newHeader);