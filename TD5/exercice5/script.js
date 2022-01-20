const MyVueApp = Vue.createApp({
    data() {
        return {
            soundLevel: 0,
            newUserMood: ''
        }
    },
    computed: {},
    methods: {
        /**
         * @constant : newUserMood (string)
         * @constant : soundmodule = référence donnée à l'instance du component (partie HTML)
         */
        setMood(){
            this.newUserMood = this.$refs.soundmodule.userMood;
        }
    }
})

MyVueApp.component('sound-icon', {
    props: ['level'],
    template: `
        <div style="background-color:#EEE;
                padding:20px; margin:10px;">
            <h5>Cette partie sur fond gris est gérée par le composant soud-icon</h5>
        
            <p>
                {{ soundEmojis[level] }}
            </p>

            <button v-on:click="$emit('couper-volume')">
                Mute
            </button>
            &nbsp;

            <button v-on:click="$emit('max-volume')">
                Volume maximum
            </button>
            <br/>

            <label>Vous vous sentez plutôt : </label>
            &nbsp;
            <input type="text" v-model="userMood"
                />
            <button v-on:click="$emit('new-mood')">Valider</button>
        </div>
    `,
    data() {
        return {
            soundEmojis: ['🔇', '🔈', '🔉', '🔊'],
            userMood: ''
        }
    }
})

MyVueApp.mount('#app')