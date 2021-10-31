if(!!document.documentMode){
    alert('Algumas funcionalidades desta página podem não funcionar muito bem no internet explorer, recomendo que acesse este site em outro navegador mais moderno!');
}



                    /*códigos referentes ao menu mobile*/

const bars = document.getElementById('bars');
const mobile = document.getElementById('mobile');


function transitionend(){
    mobile.classList.remove('active');
    mobile.removeEventListener('transitionend', transitionend);
}


bars.addEventListener('click', function(e){
    e.preventDefault();

    if(!mobile.classList.contains('active')){
        mobile.classList.add('active');
        mobile.style.height = 'auto';

        let mobileHeight = mobile.clientHeight + 'px';
        mobile.style.height = 0;

        setTimeout(function(){
            mobile.style.height = mobileHeight;
        },0);
    }
    else{
        mobile.style.height = 0;

        mobile.addEventListener('transitionend', transitionend);
    }
});

window.addEventListener('click', function(){
    let mobileHeight = mobile.clientHeight;
    if(mobile.classList.contains('active') && mobileHeight !== 0){
        mobile.style.height = 0;
        mobile.addEventListener('transitionend', transitionend);
    }
})



                    /*códigos referentes ao scroll dos elementos no menu*/

const headerMenu = document.querySelectorAll('.menu-option');

for(let i = 0; i < headerMenu.length; i++){
    function scrolling(e){
        e.preventDefault();
        let element = document.getElementById(this.dataset.scroll);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    }
    headerMenu[i].addEventListener('click', scrolling);
}



                    /*códigos referentes às imagens da galeria e o modal*/

const close = document.getElementById('closeX');
const img = document.querySelectorAll('.gallery-images img');
const modalImg = document.querySelectorAll('.modal-img img');

for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click', function(){
        document.querySelector('.modal-img').classList.add('active');
        document.querySelector('#modal-'+this.id).classList.add('active');
    });
}

close.addEventListener('click', function(){
    document.querySelector('.modal-img').classList.remove('active');

    for(let i = 0; i < modalImg.length; i++){
        modalImg[i].classList.remove('active');
    }
});



                    /*código referente a função "ctrl + c" do clique no ícone do email e a mensagem
                    que aparece abaixo*/

const emailIcon = document.getElementById('emailIcon');
const email = document.getElementById('email');
const emailMsg = document.getElementById('email-msg');

emailIcon.addEventListener('click', function(e){
    e.preventDefault();
    email.style.display = "block";
    
    email.select();
    document.execCommand('copy');
    email.style.display = 'none';


    emailMsg.classList.add('active');
    emailMsg.style.opacity = 1;
    
    setTimeout(function(){
        emailMsg.style.opacity = 0;
    },0);

    emailMsg.addEventListener('transitionend', function opacity(){
        emailMsg.classList.remove('active');
        emailMsg.removeEventListener('transitionend', opacity);
    })
});