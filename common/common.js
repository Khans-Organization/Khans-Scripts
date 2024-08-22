let common = `<div class="nav">
            Khan's Scripts!
            <nav>
                  <ul class="ul">
                        <li><a class="link navlinks" href="../index.html">Home</a></li>
                        <li><a class="link navlinks" href="#">About Us</a></li>
                        <li><button class="link navlinks btn" id="btn1">Languages</button></li>
                  </ul>
            </nav>
            <button id="ham1"><span class="material-symbols-outlined">menu</span></button>
      </div>
      <div class="response">
            <nav>
                  <ul class="ul">
                        <li><a class="link navlinks" href="../index.html">Home</a></li>
                        <li><a class="link navlinks" href="#">About Us</a></li>
                        <li><button class="link navlinks btn" id="btn2">Languages</button></li>
                  </ul>
            </nav>
      </div>
      <div class="lang above">
            <ul>
                  <li class="li"><a class="link langlinks" href="../C/c1.html">C</a></li>
                  <li class="li"><a class="link langlinks" href="../JS/js1.html">JavaScript</a></li>
                  <li class="li"><a class="link langlinks" href="../PYTHON/python1.html">Python</a></li>
            </ul>
      </div>`
document.body.insertAdjacentHTML('afterbegin',common);
