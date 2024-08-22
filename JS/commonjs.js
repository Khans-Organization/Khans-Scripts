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
                <li class="lists"><a class="anchors" href="js8.html">Functions In JavaScript</a></li>
                <li class="lists"><a class="anchors" href="js9.html">Strings In JavaScript</a></li>
                <li class="lists"><a class="anchors" href="js10.html">Arrays In JavaScript</a></li>
                <li class="lists"><a class="anchors" href="js11.html">Some methods for Arrays</a></li>
                <li class="lists"><a class="anchors" href="js12.html">setTimeout and setInterval</a></li>
                <li class="lists"><a class="anchors" href="js13.html">Scope in JavaScript</a></li>
                <li class="lists"><a class="anchors" href="js14.html">Closures in JavaScript</a></li>
                <li class="lists"><a class="anchors" href="js15.html">Event Loop in JavaScript</a></li>
                <li class="lists"><a class="anchors" href="js16.html">Freezing and Sealing an Object</a></li>
                <li class="lists"><a class="anchors" href="js17.html">Deep Copy and Shallow Copy</a></li>
                <li class="lists"><a class="anchors" href="js18.html">Alert, Prompt and Confirm</a></li>
                <li class="lists"><a class="anchors" href="js19.html">.some() amd .every()</a></li>
                <li class="lists"><a class="anchors" href="js19.html">Browser Object Model</a></li>
                <li class="lists"><a class="anchors"></a></li>
                <li class="lists"><a class="anchors"></a></li>
            </ul>
      </div>`

document.body.insertAdjacentHTML('afterbegin', btn);

document.querySelector('#close').addEventListener('click',()=>{
    document.body.querySelector('.sidebar').classList.add('behind');
})

document.querySelector('#ham2').addEventListener('click',()=>{
    document.body.querySelector('.sidebar').classList.remove('behind');
})