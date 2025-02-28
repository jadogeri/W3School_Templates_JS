// Modal Image Gallery
export const handleCloseModal = () => {
    try{

    const element = document.getElementById("modal01")
    element.style.display = "none"

    }catch(e){
        console.log(e)
    }
}
