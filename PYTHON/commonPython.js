let btn = `<button id="ham2"><span class="material-symbols-outlined">menu</span></button>
      <div class="sidebar behind">
            <button id="close"><span class="material-symbols-outlined">close</span></button>
            <ul class="topics">
                <li class="lists"><a class="anchors" href="py1.html">Introduction to Python</a></li>
                <li class="lists"><a class="anchors" href="py2.html">Declaring Variables</a></li>
                <li class="lists"><a class="anchors" href="py3.html">Data Types</a></li>
                <li class="lists"><a class="anchors" href="py4.html">Operators and Expressions</a></li>
                <li class="lists"><a class="anchors" href="py5.html">If Else Statements</a></li>
                <li class="lists"><a class="anchors" href="py6.html">Loops</a></li>
                <li class="lists"><a class="anchors" href="py7.html">Functions</a></li>
            </ul>
      </div>`

document.body.insertAdjacentHTML('afterbegin', btn);

document.querySelector('#close').addEventListener('click',()=>{
    document.body.querySelector('.sidebar').classList.add('behind');
})

document.querySelector('#ham2').addEventListener('click',()=>{
    document.body.querySelector('.sidebar').classList.remove('behind');
})