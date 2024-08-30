let btn = `<button id="ham2" class="whiteBack"><span class="material-symbols-outlined">menu</span></button>
      <div class="sidebar behind red">
            <button id="close" class="red"><span class="material-symbols-outlined">close</span></button>
            <ul class="topics">
                <li class="lists"><a class="anchors" href="py1.html">Introduction to Python</a></li>
                <li class="lists"><a class="anchors" href="py2.html">Declaring Variables</a></li>
                <li class="lists"><a class="anchors" href="py3.html">Data Types</a></li>
                <li class="lists"><a class="anchors" href="py4.html">Operators and Expressions</a></li>
                <li class="lists"><a class="anchors" href="py5.html">If Else Statements</a></li>
                <li class="lists"><a class="anchors" href="py6.html">Loops</a></li>
                <li class="lists"><a class="anchors" href="py7.html">Functions</a></li>
                <li class="lists"><a class="anchors" href="py8.html">Strings</a></li>
                <li class="lists"><a class="anchors" href="py9.html">Lists</a></li>
                <li class="lists"><a class="anchors" href="py10.html">Some methods for Lists</a></li>
                <li class="lists"><a class="anchors" href="py11.html">Dictionaries</a></li>
                <li class="lists"><a class="anchors" href="py12.html">Some methods for Dictionaries</a></li>
                <li class="lists"><a class="anchors" href="py13.html">Scope</a></li>
                <li class="lists"><a class="anchors" href="py14.html">Closures</a></li>
                <li class="lists"><a class="anchors" </a></li>
                <li class="lists"><a class="anchors" </a></li>            </ul>
      </div>`

document.body.insertAdjacentHTML('afterbegin', btn);

document.querySelector('#close').addEventListener('click',()=>{
    document.body.querySelector('.sidebar').classList.add('behind');
})

document.querySelector('#ham2').addEventListener('click',()=>{
    document.body.querySelector('.sidebar').classList.remove('behind');
})

// Checking for dark mode 
if (JSON.parse(myStorage.getItem('val')) === 1) {
    document.querySelector('.sidebar').classList.remove('red');
    document.querySelector('.sidebar').classList.add('gray');
    document.querySelector('#close').classList.remove('red');
    document.querySelector('#close').classList.add('gray');
    document.querySelector('#ham2').classList.remove('whiteBack');
    document.querySelector('#ham2').classList.add('black');
    document.querySelector('#ham2').classList.add('white');
}

Array.from(darkMode).forEach((val)=>{
    val.addEventListener('click',()=>{
        if (document.querySelector('#ham2').classList.contains('whiteBack') && document.querySelector('.sidebar').classList.contains('red') && document.querySelector('#close').classList.contains('red')) {
            document.querySelector('#ham2').classList.add('white');
            document.querySelector('#ham2').classList.remove('whiteBack');
            document.querySelector('#ham2').classList.add('black');
            document.querySelector('.sidebar').classList.remove('red');
            document.querySelector('.sidebar').classList.add('gray');
            document.querySelector('#close').classList.remove('red');
            document.querySelector('#close').classList.add('gray');
        }
        else {
            document.querySelector('#ham2').classList.remove('white');
            document.querySelector('#ham2').classList.remove('black');
            document.querySelector('#ham2').classList.add('whiteBack');
            document.querySelector('.sidebar').classList.remove('gray');
            document.querySelector('.sidebar').classList.add('red');
            document.querySelector('#close').classList.remove('gray');
            document.querySelector('#close').classList.add('red');
        }
    })
})
