(function(){
    var list = document.getElementsByTagName("li");
    for(i in list){
        list[i].onclick = function(event){
            var uls = this.getElementsByTagName("ul");
            if(uls.length > 0){
                uls[0].style.display = uls[0].style.display!="none" ? "none" : null;
            }
            event.stopPropagation();
        } 
    }
})()