let btn = `<button id="ham2"><span class="material-symbols-outlined">menu</span></button>
      <div class="sidebar behind">
            <button id="close"><span class="material-symbols-outlined">close</span></button>
            <ul class="topics">
                <li class="lists"><a class="anchors" href="js1.html">Introduction to JS</a></li>
                <li class="lists"><a class="anchors" href="js2.html">Declaring Variables</a></li>
                <li class="lists"><a class="anchors" href="js3.html">Data Types</a></li>
                <li class="lists"><a class="anchors" href="js4.html">Operators and Expressions</a></li>
                <li class="lists"><a class="anchors" href="js5.html">If-Else Statements</a></li>
                <li class="lists"><a class="anchors" href="js6.html">Switch Cases In JavaScript</a></li>
                <li class="lists"><a class="anchors" href="js7.html">Loops In JavaScript</a></li>
            </ul>
      </div>`

document.body.insertAdjacentHTML('afterbegin', btn);

document.querySelector('#close').addEventListener('click',()=>{
    document.body.querySelector('.sidebar').classList.add('behind');
})

document.querySelector('#ham2').addEventListener('click',()=>{
    document.body.querySelector('.sidebar').classList.remove('behind');
})