app.component('product-details', {
    props: {
        details: {
            type: String
        }
    },
    template:
    /*html*/
    `<div class="details">
        <p>Product Detail</p>
        <p>{{ details }}</p>
    </div>`

})