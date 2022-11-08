let lnks = document.querySelectorAll('a[href*="#"]');

for (var i = 0; i < lnks.length; i++) {
    lnks[i].onclick = function(e){
    e.preventDefault();
    let  b = this; 
    let c = b.getAttribute("href").substring(1); 
    let el = document.querySelectorAll(`div[id="${c}"]`)[0];
        window.scrollTo({
            top: el.offsetTop -20, 
            behavior: "smooth"
        });
    };
}