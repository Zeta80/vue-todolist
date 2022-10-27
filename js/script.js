// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//MILESTONE 1 [X]
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
//MILESTONE 2 [X]
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
//MILESTONE 3 [X]
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
//Bonus: [X]
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)//

const { createApp } = Vue;
createApp({
    data() {
        return {
            hasError: false,
            pippo: false,
            lineTrough: false,
            newTask: {
                name: "",
                done: false,
            },
            tasks: [
                {
                    name: "fare la Spesa",
                    done: false,
                },
                {
                    name: "pulire il bagno",
                    done: false,
                },
                {
                    name: "guardare anime",
                    done: false,
                },
            ],
        }
    },
    methods: {
        addNewTask() {

            //inserire task solo se ha più di 5 caratteri
            if (this.newTask.name.length < 5) {
                this.hasError = true;
            } else {
                //.unshift permette di aggiungere un elemento all'inizio
                this.tasks.unshift({ ...this.newTask });
                this.newTask.name = "";
                this.hasError = false;
            }
        },
        deleteTask(indexOfTasks) {
            //quando terminiamo tutti i task facciamo apparire una scritta
            this.tasks.splice(indexOfTasks, 1);
        },
        doneTask(indexOfTasks) {
            // this.tasks.done = !this.tasks.done
            // // this.tasks.done = false
            // console.log(this.takes);
            if (!this.tasks[indexOfTasks].done) {
                this.pippo = true
                this.tasks[indexOfTasks].done = !this.tasks[indexOfTasks].done
            } else {
                this.pippo = false
                this.tasks[indexOfTasks].done = !this.tasks[indexOfTasks].done
            }
            console.log(this.pippo);
            console.log(this.tasks[indexOfTasks]);
            // } else {
            //     this.tasks.done = false
            // }
        },
    }
}).mount("#app")
// JAVASASSONE VUE EDITION (￣o￣) . z Z🗿