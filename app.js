const app ={
    init: function(selectors){
        this.flickArray = []
        
        this.max =0
        this.list =document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)

        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.handleSubmit.bind(this))
    },

renderListItem: function(flick){
    const item= this.template.cloneNode(true)
    item.classList.remove('template')
    //this.flicks=flick.name
    item.dataset=flick.id
    item.querySelector('.flick-name')
    .textContent=flick.name

    this.flickArray.unshift(flick)

    item.querySelector('button.remove')
    .addEventListener('click',this.removeFlick.bind(this, flick))

    item.querySelector('button.fav')
    .addEventListener('click',this.favFlick.bind(this, flick))
    
/*
    item.appendChild(this.renderFavButton())
    item.appendChild(this.renderDeleteButton())
    item.appendChild(this.renderUpButton())
    item.appendChild(this.renderDownButton())
    item.style.padding='1em'
*/
    
    return item
},

favFlick(flick, ev){
const listItem = ev.target.closest('.flick')
flick.fav= listItem.classList.toggle('fav')

},

removeFlick(flick, ev)
{
    //remove from DOM
    const listItem = ev.target.closest('.flick')
    listItem.remove()
    //remove from array
    const i = this.flickArray.indexOf(flick)
    this.flickArray.splice(i, 1)
},






    handleSubmit: function(ev){
        ev.preventDefault()
        const f = ev.target
       const flick ={
           id: this.max +1,
           name: f.flickName.value,
           fav: false,
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
    templateSelector: '.flick.template'
})