let myStorage = localStorage;

let common = `<div class="nav red">
      <div class="myNav">
            Khan's Scripts!
            <nav>
                  <ul class="ul">
                        <li><a class="link navlinks" href="../index.html">Home</a></li>
                        <li><a class="link navlinks" href="#">About Us</a></li>
                        <li><button class="link navlinks btn red" id="btn1">Languages</button></li>
                  </ul>
            </nav>
            <button id="ham1" class="red"><span class="material-symbols-outlined">menu</span></button> 
      </div>
      <button class="darkMode red">Dark Mode</button> 
</div>
<div class="response red">
      <nav>
            <ul class="ul">
                  <li><a class="link navlinks" href="../index.html">Home</a></li>
                  <li><a class="link navlinks" href="#">About Us</a></li>
                  <li><button class="link navlinks btn red" id="btn2">Languages</button></li>
            </ul>
      </nav>
</div>
<div class="lang above red">
      <ul>
            <li class="li"><a class="link langlinks" href="../C/c1.html">C</a></li>
            <li class="li"><a class="link langlinks" href="../JS/js1.html">JavaScript</a></li>
            <li class="li"><a class="link langlinks" href="../PYTHON/py1.html">Python</a></li>
      </ul>
</div>`;


document.body.insertAdjacentHTML('afterbegin', common);

const hamButton = document.querySelector('#ham1');
const langButton1 = document.querySelector('#btn1');
const langButton2 = document.querySelector('#btn2');
const responseDiv = document.querySelector('.response');
const langDiv = document.querySelector('.lang');
const darkMode = document.querySelectorAll('.darkMode');
const redElements = document.querySelectorAll('.red');
const children = document.body.children;

// Checking for dark mode 
if (JSON.parse(myStorage.getItem('val')) === 1) {
      document.body.classList.add('black');
      Array.from(children).forEach(child => {
            child.classList.add('white');
      });
      redElements.forEach(element => {
            darkMode.innerHTML = "Light Mode";
            element.classList.remove('red');
            element.classList.add('gray');
      })
}



// Dark mode toggle
darkMode.forEach(button => {
      button.addEventListener('click', () => {
            document.body.classList.toggle('black');
            Array.from(children).forEach(child => {
                  child.classList.toggle('white');
            });

            redElements.forEach(element => {
                  if (element.classList.contains('red')) {
                        myStorage.setItem('val', 1);
                        button.innerHTML = "Light Mode";
                        element.classList.remove('red');
                        element.classList.add('gray');
                  } else {
                        myStorage.setItem('val', 0);
                        button.innerHTML = "Dark Mode";
                        element.classList.remove('gray');
                        element.classList.add('red');
                  }
            });
      });
});
// Toggle the navigation for mobile view
hamButton.addEventListener('click', () => {
      responseDiv.classList.toggle('below');
      if (!langDiv.classList.contains('above')) {
            langDiv.classList.add('above');
      }
});

// Toggle language menu
langButton1.addEventListener('click', () => {
      langDiv.classList.toggle('above');
});

langButton2.addEventListener('click', () => {
      langDiv.classList.toggle('above');
});

// Adjust the navigation when resizing
window.addEventListener('resize', () => {
      if (document.body.offsetWidth > 1170) {
            responseDiv.classList.remove('below');
      }
});


