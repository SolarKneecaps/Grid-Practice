let mainItems = document.querySelectorAll('.main__items');
let popupItems = document.querySelectorAll('.popup__items');

mainItems.forEach(item=>{
    item.addEventListener('click', ()=>{
        popupItems.forEach(popup=>{
        if(popup.classList.contains(item.classList[1])){
            popup.classList.add('show');
            popup.addEventListener('click', ()=>{
                popup.classList.remove('show')})
           }
        })
    })
})
