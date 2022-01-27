const MyVueApp = Vue.createApp({
    data() {
        return {
            monnaie : '€',
            articles: [{
                "color": 'black',
                "intitule": 'Enceinte Alexa',
                "description": 'troisième génération, waterproof',
                "quantite": "1",
                "prix": "24.50"
            },
            {
                "color": 'blue',
                "intitule": 'Image bleue',
                "description": 'Pas très utile',
                "quantite": "2",
                "prix":"1.00"
            },
            {
                "color": 'red',
                "intitule": 'Image rouge',
                "description": 'Pas très utile non plus',
                "quantite": "5",
                "prix":"0.50"
            }],
        }
    },
})

MyVueApp.component('panier', {
    props: ['articles', 'monnaie'],
    data() {
        return {
            monnaie : this.monnaie,
            articles: this.articles
        }
    },
    template: `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Article</th>
                <th scope="col"></th>
                <th scope="col">Quantité</th>
                <th scope="col">Prix</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="article in articles">
                    <th scope="row" v-bind:style="{backgroundColor: article.color}"
                                    style="height: 100px; width: 100px;">
                    </th>
                    <td> {{ article.intitule }} <br/><span class="small"> {{ article.description }}</span> </td>
                    
                    <td>
                        <button type="button" class="btn btn-light" @click="article.quantite == 1 ? removeItem(article.intitule) : article.quantite--;">-</button>
                        
                        <span style="margin-left: 10px; margin-right: 10px;">{{ article.quantite }}</span>
                        
                        <button type="button" class="btn btn-light" @click="article.quantite++;">+</button>
                    </td>
                    <td>{{ article.prix }}</td>
                    <td>{{ article.prix * article.quantite }} {{ monnaie }}</td>
                    <td>
                        <button @click="removeItem(article.intitule)" type="button" class="btn btn-light me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </button>
                    </td>
                </tr>                
            </tbody>
        </table>
        <h2> Montant total : {{ total }} </h2>
    `,
    methods: {
        removeItem(intitule) {
            this.$parent.articles = this.$parent.articles.filter(article => article.intitule !== intitule)
        }
    },
    computed:{
        total(){
            let total = 0;
            this.articles.forEach(article => {
                total += article.prix * article.quantite
            });
            total += ' ' + this.monnaie;
            return total;
        },
    }
})

MyVueApp.mount('#app')