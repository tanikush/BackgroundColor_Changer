const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = "#ff0a0a"
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = "#1a9804"
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = "#4000af"
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = "#f3ff10"
            body.style.color = "black"
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = "#ad00b6"
        }
        
        
    })

})