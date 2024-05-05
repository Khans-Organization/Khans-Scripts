
document.body.querySelector('#ham1').addEventListener('click',()=>{
     document.body.querySelector('.response').classList.toggle('below')
     if (!document.body.querySelector('.lang').classList.contains('above')) {
          document.body.querySelector('.lang').classList.add('above')
     }
     
})
document.body.querySelector('#btn1').addEventListener('click',()=>{
     document.body.querySelector('.lang').classList.toggle('above')
})

document.body.querySelector('#btn2').addEventListener('click',()=>{
     document.body.querySelector('.lang').classList.toggle('above')
})

let inter1 = setInterval(()=>{
          if (document.body.offsetWidth > 1000) {  
                    document.body.querySelector('.response').classList.remove('below')
               }
},1000)
