const MyVueApp = Vue.createApp({
    data() {
        return {
        }
    },
})



MyVueApp.component('article',{
    template: `
    <tr>
        <th scope="row" style="height: 100px; width: 100px; background-color: black;"></th>
        <td>Enceinte alexa <br/><span class="small">troisième génération, socle de recharge non inclus</span> </td>
        
        <td>
            <button type="button" class="btn btn-light">-</button>
            <span style="margin-left: 10px; margin-right: 10px;">1</span>
            <button type="button" class="btn btn-light">+</button>
        </td>
        <td>24,50€</td>
        <td>
            <button type="button" class="btn btn-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
        </td>
    </tr>
    `,
})

MyVueApp.component('panier', {
    template: `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Article</th>
                <th scope="col"></th>
                <th scope="col">Quantité</th>
                <th scope="col">Prix</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                {{ article }}
            </tbody>
        </table>
    `,
    data() {
        return {
            articles: [
                "Eat",
                "Go to the bank",
                "Go to the shop",
                "Got to work"
            ]
        }
    }
})

MyVueApp.mount('#app')