const MyVueApp = Vue.createApp({
    data() {
        return {}
    },
    computed: {},
    methods: {}
})

MyVueApp.component('my-list-item', {
    props: [
        'finished',
        'priority'
    ],
    template: `
        <div
            class="my-list-item"
            v-bind:style="finished === 'true'
            ?   'text-decoration: line-through' 
            :   '' "
        >
            - <slot></slot>
            <span style="color:gray"> | priorité : {{ priority }} </span>
        </div>
    `
})

MyVueApp.component('task-item',{
    template: `
        <li style="color:green; list-style-type:square">
            <slot></slot>
        </li>
    `,
})

MyVueApp.component('task-list',{
    template: `
        <div>
            <ul>
                <task-item v-for="task in tasks">
                    {{task}}
                </task-item>
            </ul>
        </div>
    `,
    data(){
        return {
            tasks: [
                "Eat",
                "Go to the bank",
                "Go to the shop",
                "Got to work"
            ]
        }
    }
})


MyVueApp.mount('#app')