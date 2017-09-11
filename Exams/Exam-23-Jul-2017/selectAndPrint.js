function move(command) {
    
    switch(command) {
        case 'right':
            moveRight();
            break;
        case 'left':
            moveLeft();
            break;
        case 'print':
            print();
            break;
    }
    
    function moveRight() {
        let selectedTown=$('#available-towns').find(':selected');
        let selectedTownList=$('#selected-towns');

        if (selectedTown !==undefined&& selectedTown!=='') {
            $('#available-towns').find(':selected').remove();
            selectedTownList.append(selectedTown);
        }
    }
    
    function moveLeft() {
        let selectedTown=$('#selected-towns').find(':selected');
        let availableTownList=$('#available-towns');

        if (selectedTown !==undefined&& selectedTown!=='') {
            $('#selected-towns').find(':selected').remove();
            availableTownList.append(selectedTown);
        }
    }
    
    function print() {
        let selectedTowns=$('#selected-towns option');
        let selectedTownsText=[];
        for (var i = 0; i < selectedTowns.length; i++) {
            selectedTownsText.push(selectedTowns[i].value)
        };
        let output=$('#output');
        console.log(selectedTownsText.join('; '));
        output.text(selectedTownsText.join('; '))
    }
}