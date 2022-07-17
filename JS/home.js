window.onload = function(){
    window.addEventListener('scroll', function(e){
        if(window.pageYOffset > 100){

        }else{
            
        }
    })
    const menu_btn = document.querySelector('.hamburger');
    const menu_bar = document.querySelector('.menubar');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        menu_bar.classList.toggle('is-active');
    })
    const music_btn = document.querySelector('.music');
    const audio = new Audio('audio/Don_Toliver_No_Idea.mp3');
    const spin = document.querySelector('.fa-brands');
    music_btn.addEventListener('click', function(e){
        audio.play();
        spin.classList.add('fa-flip');
        document.querySelector('.vol').style= "--fa-beat-scale: 1.3; color:rgb(8, 239, 216)";
        document.querySelector('.vol-txt').style= "color:rgb(8, 239, 216)";
        document.querySelector('.vol-txt').innerHTML = "ON";
    
        music_btn.addEventListener('click', function(e){
        audio.pause();
        spin.classList.remove('fa-flip');
        document.querySelector('.vol').style="--fa-beat-scale: 1.3; color: #FD1056;";
        document.querySelector('.vol-txt').style= " color: #FD1056;";
        document.querySelector('.vol-txt').innerHTML = "OFF";

        music_btn.addEventListener('click', function(e){
            audio.play();
            spin.classList.add('fa-flip');
            document.querySelector('.vol').style= "--fa-beat-scale: 1.3; color:rgb(8, 239, 216)";
            document.querySelector('.vol-txt').style= "color:rgb(8, 239, 216)";
            document.querySelector('.vol-txt').innerHTML = "ON";
            

        })
    })
})
}

