
//подключение WOW библиотеки
new WOW({
    animateClass: 'animate__animated',
}).init();


//подключение библиотеки Magnific Popup


$('.product-image').magnificPopup({
    type:'image',
});

$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});


//Menu

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}


document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick =() => {
        document.getElementById('menu').classList.remove('open');
    }
})
document.getElementById('menu-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({ behavior:"smooth"});
}

document.getElementById('menu-consegna').onclick = function () {
    document.getElementsByClassName('order')[0].scrollIntoView({ behavior:"smooth"});
}
document.getElementById('menu-contatti').onclick = function () {
    document.getElementsByClassName('footer')[0].scrollIntoView({ behavior:"smooth"});
}

//S button

document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({ behavior:"smooth"});
}

let productInput = document.getElementById('product-input');
let addToCardButtons = document.getElementsByClassName('btn-add-to-card');
for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].onclick = function (e) {
        productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        document.getElementsByClassName('order')[0].scrollIntoView({ behavior:"smooth"});
    }

}

let phoneInput = $('#phone-input');
phoneInput.inputmask({"mask": "+(39) 999-999-9999"});

document.getElementById('create-order').onclick = function () {
    let productInput = document.getElementById('product-input');
    let addressInput = document.getElementById(   'address-input');
    let phoneInput = document.getElementById(   'phone-input');

    if (!productInput.value) {
        document.getElementById('message-product').style.display = 'block';
        return;
    } else {
        document.getElementById('message-product').style.display = 'none';
    }

    if (!addressInput.value) {
        document.getElementById('message-address').style.display = 'block';
        return;
    } else {
        document.getElementById('message-address').style.display = 'none';
    }

    if (!phoneInput.value) {
        document.getElementById('message-telefono').style.display = 'block';
        return;
    } else {
        document.getElementById('message-telefono').style.display = 'none';
    }


    if ((phoneInput.value)&&(addressInput.value)&&(phoneInput.value)) {
        document.getElementById('order-text').style.display = 'none';
        document.getElementById('order-image').style.display = 'none';
        document.getElementById('order-form').style.display = 'none';
        document.getElementById('order-container').style.display = 'block';
        document.getElementById('order-thanks').style.display = 'block';

    }





    document.getElementById(   'phone-input').value = '';
    document.getElementById(   'address-input').value = '';
    document.getElementById(   'product-input').value = '';

}

//footer year

document.querySelector('.rights span').innerText = (new Date()).getFullYear();






// обрабочик принятия куков
if (!localStorage.getItem('cookieAccepted')) {
    $('.cookie').show();
}

$('.cookie-accept').click(function () {
    $('.cookie').hide();
    localStorage.setItem('cookieAccepted', '1');
})

// установка и получение информации в/из строки куки

let cookie = {
    set: (name, value, options) => {
        if (!name || !value) {
            return null;
        }

        let string = name + '=' + value;
        if (options) {
            string += ';' + options;
        }

        document.cookie = string ;
        return  cookie;
    },

    get: (name) => {
        const value = ';' + document.cookie ;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();

    },

    delete: (name) => {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:001 GMT';

    }
}

