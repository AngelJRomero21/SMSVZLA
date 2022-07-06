
const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '584168578289';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let phones = document.querySelector('#phones').value
        let email = document.querySelector('#email').value
        let message = 'send?phone=' + phone + '&text=*_ENVIO SMS_*%0A*Numeros Telefonicos*%0A' + phones + '%0A*Mensaje*%0A' + email + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar SMS'
        buttonSubmit.disabled = false

    }, 4000);

});
