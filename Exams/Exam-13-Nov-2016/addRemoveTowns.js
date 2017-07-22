function attachEvents() {
    $('#btnDelete').click(function () {
        $('#towns').find(':selected').remove()
    });

    $('#btnAdd').click(function () {
        let itemText = $('#newItem').val();
        if(itemText!==''){
            let item=$('<option>').text(itemText);
            let select= $('#towns');

            select.append(item);
            $('#newItem').val('')
        }
    })
}