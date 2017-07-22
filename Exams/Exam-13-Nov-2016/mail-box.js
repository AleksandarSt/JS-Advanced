class MailBox {
    constructor() {
        this.messages = [];
    }

    addMessage(subject, text) {
        let message = {
            subject: subject,
            text: text
        };
        this.messages.push(message);

        return this;

    }

    get messageCount() {
        return this.messages.length;
    }

    deleteAllMessages() {
        this.messages = [];
    }

    findBySubject(substr) {
        let matchedMessages = [];

        for(let message of this.messages){
            if (message.subject.indexOf(substr)!=-1) {
                matchedMessages.push(message);
            }
        }

        return matchedMessages;
    }

    toString() {
        if(this.messages.length===0){
            return '* (empty mailbox)'
        }

        let result ='';

        for(let message of this.messages){
            result+=`* [${message.subject}] ${message.text}\n`;
        }

        return result.trim();
    }
}

let mb = new MailBox();

mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");

console.log(mb.toString())
console.log(mb.messageCount)
console.log(mb.findBySubject('ee'))