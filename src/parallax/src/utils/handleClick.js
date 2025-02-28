// Modal Image Gallery
export const handleClick = (e) => {
    try{
        console.log(e)
    const element = e.target
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
     var captionText = document.getElementById("caption");
     captionText.innerHTML = element.alt;
    }catch(e){
        console.log(e)
    }
}
