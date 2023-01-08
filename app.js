// vue.component('sample-btn', {
//     template: '<button @click="onUpdate()">Click Me</button>',
//     methods: {
//         onUpdate() {
//             this.$emit('update');
//         }
//     }
// })

// new Vue({
//     el: '#app',
//     data: {
//         message: 'Message from vue2'
//     },
//     methods: {
//         onChangeMessage() {
//             this.message = 'Update Message from Vue 2';
//         }
//     }
// })

const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')