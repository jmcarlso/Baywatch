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
    const item = document.createElement('li')
    item.textContent = flick.name
    this.flicks =flick.name

    this.flickArray.push(flick)
    
    return item
},
    handleSubmit: function(ev){
        ev.preventDefault()
        const f = ev.target
       const flick ={
           id: this.max +1,
           name: f.flickName.value,
       }

       this.list.appendChild(this.renderListItem(flick))

        this.max ++
    },
}

app.init({
    formSelector:'form#flick-form',
    listSelector: '#flick-list',
})