$('.INN').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});
