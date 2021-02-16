const btnItem = document.querySelectorAll('.item .btn-item')

for(let i=0; i<btnItem.length; i++) {
    btnItem[i].addEventListener('click', function(e) {
        btn = e.target
        if(btn.classList == 'btn-item active') {
           removeClass()
        } else {
           removeClass()
           btn.classList.add('active')
        }
    })
}

function removeClass() {
    for(let i=0; i<btnItem.length; i++) {
        btnItem[i].classList.remove('active')
    }
}