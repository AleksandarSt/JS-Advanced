class Task {
    constructor(title, deadline) {
        if(deadline<Date.now()){
            throw(Error,'Deadline cannot be in the past!');
        }

        this.title = title;
        this._deadline = deadline;
        this.status = 'Open';
    }

    get deadline(){
        return this._deadline;
    }

    set deadline(value){
        if(value<Date.now()){
            throw(Error,'Deadline cannot be in the past!');
        }
        this._deadline=value;
    }

    get isOverdue() {
        return (this.deadline < Date.now()) && this.status != 'Completed';
    }

    static comparator(task1, task2) {
        let status1=task1.status;
        let status2=task2.status;
        let deadline1=task1.deadline;
        let deadline2=task2.deadline;

       if(task1.isOverdue||task2.isOverdue){
          if(task1.isOverdue&&!task2.isOverdue){
              return -1;
          }
          if(task1.isOverdue&&task2.isOverdue){
              if(deadline1>deadline2){
                  return -1
              }
              if(deadline1<deadline2){
                  return 1;
              }
              return 0
          }

          return 1;
       }

       if(status1==='In Progres'||status2!=='In Progres'){
           if(status1==='In Progress'&&status2!=='In Progress'){
               return -1;
           }
           if(status1===status2){
               if(deadline1>deadline2){
                   return -1
               }
               if(deadline1<deadline2){
                   return 1;
               }
               return 0
           }

           return 1;
       }

       if(status1==='Open'||status2==='Open'){
           if(status1==='Open'&&status2 !=='Open'){
               return -1;
           }
           if(status1===status2){
               if(deadline1>deadline2){
                   return -1
               }
               if(deadline1<deadline2){
                   return 1;
               }
               return 0
           }

           return 1
       }

        if(deadline1>deadline2){
            return -1
        }
        if(deadline1<deadline2){
            return 1;
        }
        return 0
    }

    toString(){
        let _map = new Map();
        _map.set('Open', '\u2731');
        _map.set('In Progress', '\u219D');
        _map.set('Complete', '\u2714');
        _map.set('Overdue tasks', '\u26A0');

        let result='';

        if(this.isOverdue){
            result=`[${_map.get('Overdue tasks')}] ${this.title} ${'(overdue)'}`;
        }
        else {
            result=`[${_map.get(this.status)}] ${this.title} (deadline: ${this.deadline})`
        }

        return result;
    }

}

let dateInThePast = new Date();
dateInThePast.setDate(-60);
let task = new Task('New Task', dateInThePast)
console.log(task.toString());

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
task1.deadline = new Date(2005, '4', '20');
