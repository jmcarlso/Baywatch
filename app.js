const app ={
    init: function(selectors){
        this.flickArray = []
        
        this.max =0
        this.list =document.querySelector(selectors.listSelector)

        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.handleSubmit.bind(this))
    },

renderListItem: function(flick){
    const item=document.createElement('li')
    item.textContent=flick.name
    //this.flicks=flick.name
    item.dataset=flick.id


    this.flickArray.unshift(flick)

    item.appendChild(this.renderFavButton())
    item.appendChild(this.renderDeleteButton())
    item.appendChild(this.renderUpButton())
    item.appendChild(this.renderDownButton())
    item.style.padding='1em'

    
    return item
},
renderFavButton: function(){
    const fav = document.createElement('BUTTON')
    fav.setAttribute('class','button alert')
    fav.style.position='absolute'
    fav.style.right='175px'
    fav.style.padding = '10px'
    fav.style.backgroundColor='gold'
    
    fav.textContent ='Favorite'
   
    return fav
},
renderDeleteButton: function(){
    const del = document.createElement('BUTTON')
    del.setAttribute('class','button alert')
    del.style.position='absolute'
    del.style.right='100px'
    del.style.padding = '10px'
    del.style.backgroundColor='red'
    
    del.textContent ='Delete'
    return del
    
},

renderUpButton: function(){
    const up = document.createElement('BUTTON')
    up.setAttribute('class','button')
    up.style.position='absolute'
    up.style.right='261px'
    up.style.padding = '10px'
    
    up.textContent ='↑'
    return up
},
renderDownButton: function(){
    const down = document.createElement('BUTTON')
    down.setAttribute('class','button alert')
    down.style.position='absolute'
    down.style.right='301px'
    down.style.padding = '10px'
    
    down.textContent ='↓'
    return down
},

    handleSubmit: function(ev){
        ev.preventDefault()
        const f = ev.target
       const flick ={
           id: this.max +1,
           name: f.flickName.value,
       }

       //this.list.appendChild(this.renderListItem(flick))
       this.list.insertBefore(this.renderListItem(flick),this.list.firstElementChild)
        this.max ++
        f.reset()
    },

}

app.init({
    formSelector:'form#flick-form',
    listSelector: '#flick-list',
})