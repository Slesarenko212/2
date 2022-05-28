document.querySelector('.INN').addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
});
