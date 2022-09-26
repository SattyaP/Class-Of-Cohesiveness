export function transisi(){
    var transisis = document.querySelectorAll('.transisi');

    for(var i = 0; i < transisis.length; i++){
        
        var windowheight = window.innerHeight;
        var transisitop = transisis[i].getBoundingClientRect().top;  
        var transisipoint = 150;
        
        if(transisitop < windowheight - transisipoint){
            transisis[i].classList.add('active');
        }
        else{
            transisis[i].classList.remove('active');
        }
    }
}