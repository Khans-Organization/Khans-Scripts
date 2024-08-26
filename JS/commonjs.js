let btn = `<button id="ham2" class="whiteBack"><span class="material-symbols-outlined">menu</span></button>
      <div class="sidebar behind red">
            <button id="close" class="red"><span class="material-symbols-outlined">close</span></button>
            <ul class="topics">
                <li class="lists"><a class="anchors" href="js1.html">Introduction to JS</a></li>
                <li class="lists"><a class="anchors" href="js2.html">Declaring Variables</a></li>
                <li class="lists"><a class="anchors" href="js3.html">Data Types</a></li>
                <li class="lists"><a class="anchors" href="js4.html">Operators and Expressions</a></li>
                <li class="lists"><a class="anchors" href="js5.html">If-Else Statements</a></li>
                <li class="lists"><a class="anchors" href="js6.html">Switch Cases</a></li>
                <li class="lists"><a class="anchors" href="js7.html">Loops</a></li>
                <li class="lists"><a class="anchors" href="js8.html">Functions</a></li>
                <li class="lists"><a class="anchors" href="js9.html">Strings</a></li>
                <li class="lists"><a class="anchors" href="js10.html">Arrays</a></li>
                <li class="lists"><a class="anchors" href="js11.html">Some methods for Arrays</a></li>
                <li class="lists"><a class="anchors" href="js12.html">setTimeout and setInterval</a></li>
                <li class="lists"><a class="anchors" href="js13.html">Scope</a></li>
                <li class="lists"><a class="anchors" href="js14.html">Closures</a></li>
                <li class="lists"><a class="anchors" href="js15.html">Event Loop</a></li>
                <li class="lists"><a class="anchors" href="js16.html">Freezing and Sealing an Object</a></li>
                <li class="lists"><a class="anchors" href="js17.html">Deep Copy and Shallow Copy</a></li>
                <li class="lists"><a class="anchors" href="js18.html">Alert, Prompt and Confirm</a></li>
                <li class="lists"><a class="anchors" href="js19.html">.some() amd .every()</a></li>
                <li class="lists"><a class="anchors" href="js20.html">Browser Object Model</a></li>
                <li class="lists"><a class="anchors" href="js21.html">Document Object Model</a></li>
                <li class="lists"><a class="anchors" href="js22.html">Events</a></li>
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

Array.from(darkMode).forEach((val)=>{
    val.addEventListener('click',()=>{
        if (document.querySelector('#ham2').classList.contains('whiteBack') && document.querySelector('.sidebar').classList.contains('red') && document.querySelector('#close').classList.contains('red')) {
            document.querySelector('#ham2').classList.remove('whiteBack');
            document.querySelector('#ham2').classList.add('black');
            document.querySelector('.sidebar').classList.remove('red');
            document.querySelector('.sidebar').classList.add('gray');
            document.querySelector('#close').classList.remove('red');
            document.querySelector('#close').classList.add('gray');
            val.innerHTML = "Dark Mode";
        }
        else {
            document.querySelector('#ham2').classList.remove('black');
            document.querySelector('#ham2').classList.add('whiteBack');
            document.querySelector('.sidebar').classList.remove('gray');
            document.querySelector('.sidebar').classList.add('red');
            document.querySelector('#close').classList.remove('gray');
            document.querySelector('#close').classList.add('red');
            val.innerHTML = "Light Mode";
        }
    })
})

