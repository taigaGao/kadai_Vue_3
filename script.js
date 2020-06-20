var app = new Vue({
    el:"#app",
    data:{
        newTask:"",
        taskList: [],
        checkOn : 'all'
    },
    methods: {
        addTask: function() {
            const task = {
                id: 0,
                comment: "",
                state: 0
            };
            task.id = this.taskList.length;
            task.comment = this.newTask;
            this.taskList.push(task);
            this.newTask ='';
        },
        addTaskEnter: function() {
            const task = {
                id: 0,
                comment: "",
                state: 0
            };
            task.id = this.taskList.length;
            task.comment = this.newTask;
            this.taskList.push(task);
            this.newTask ='';
        },
        removeTask: function(index) {
            this.taskList.splice( index, 1 )
            for (let i = 0; i < this.taskList.length; i++) {
                this.taskList[i].id = i;
            };
        },
        workEnd: function(index) {
            this.taskList[index].state = 1;
        },
        workStart: function(index) {
            this.taskList[index].state = 0;
        }
    }
});