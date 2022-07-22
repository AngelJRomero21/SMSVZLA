
const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://www.interconectados.net/api2/';
const urlMobile = 'https://www.interconectados.net/api2/';



$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let phone = document.querySelector('#phone').value
        let text = document.querySelector('#text').value
        let message = '?phonenumber=' + phone + '&text=' + text + '&user=' + CROMSTUDIO '&password=' + OCM7RP + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar SMS'
        buttonSubmit.disabled = false

    }, 4000);

});
