let btn = `<button id="ham2" class="whiteBack"><span class="material-symbols-outlined">menu</span></button>
      <div class="sidebar behind red">
            <button id="close" class="red"><span class="material-symbols-outlined">close</span></button>
            <ul class="topics">
                <li class="lists"><a class="anchors" href="js1.html">Introduction to C</a></li>
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
        if ((document.querySelector('#ham2').classList.contains('whiteBack')) && document.querySelector('.sidebar').classList.contains('red') && document.querySelector('#close').classList.contains('red')) {
            document.querySelector('#ham2').classList.remove('whiteBack');
            document.querySelector('#ham2').classList.add('black');
            document.querySelector('.sidebar').classList.remove('red');
            document.querySelector('.sidebar').classList.add('gray');
            document.querySelector('#close').classList.remove('red');
            document.querySelector('#close').classList.add('gray');
            val.innerHTML = "Light Mode";
        }
        else {
            document.querySelector('#ham2').classList.remove('black');
            document.querySelector('#ham2').classList.add('whiteBack');
            document.querySelector('.sidebar').classList.remove('gray');
            document.querySelector('.sidebar').classList.add('red');
            document.querySelector('#close').classList.remove('gray');
            document.querySelector('#close').classList.add('red');
            val.innerHTML = "Dark Mode";
        }
    })
})