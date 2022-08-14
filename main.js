window.onscroll = () =>{

    if(window.scrollY > 80){
      document.querySelector('.second').classList.add('active');
    }else{
      document.querySelector('.second').classList.remove('active');
    }  
  }


  window.onload = () =>{ 
    if(window.scrollY > 80){
      document.querySelector('.second').classList.add('active');
    }else{
      document.querySelector('.second').classList.remove('active');
    }
  
  }



  let loginForm = document.querySelector('.form');

  document.querySelector('.google').onclick = () =>{
    loginForm.classList.toggle('active');
  }
  
  document.querySelector('.cross').onclick = () =>{
    loginForm.classList.remove('active');
  }
  


  $('.owl-carousel').owlCarousel({
  
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

  

$('.six').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;