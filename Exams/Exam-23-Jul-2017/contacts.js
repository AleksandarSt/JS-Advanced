class Contact {

    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) {
        let article =$('<article>');
        let nameDiv = $('<div>')
            .addClass('title')
            .text(`${this.firstName} ${this.lastName}`);

        let button = $('<button>')
            .html('&#8505;')
            .click(() => {});

        let infoDiv = $('<div>')
            .addClass('info');
        infoDiv.style.display = 'none';

        let phoneSpan = $('<span>')
            .text(`&phone; ${this.phone}`);
        let emailSpan = $('span')
            .text(`&#9993; ${this.email}`);

        infoDiv.append(phoneSpan);
        infoDiv.append(emailSpan);
        nameDiv.append(button);
        article.append(nameDiv);
        article.append(infoDiv);

        let mainElementId = `#${id}`;
        let mainElement = $(mainElementId);

        mainElement.append(article)
    }
}


