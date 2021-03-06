window.add-event-listener('load', load, false);

function load() {
    var link = document.query-selector(".map-block .btn-primary"),
        text-input = text-input = document.query-selector-all('.input-text'),
        len = text-input.length,
        placeholder = '',
        i = 0,
        storage = local-storage.get-item("name");

    if (link) {
        var popup = document.query-selector(".popup-form"),
            form = document.query-selector('.popup-feedback-form'),
            close = form.query-selector(".close-ico"),
            email = form.query-selector("#email-input"),
            name = form.query-selector("#name-input"),
            back-popup = document.query-selector(".back-popup");

        link.add-event-listener('click', open-popup);
        close.add-event-listener('click', close-popup);
        form.add-event-listener('submit', submit-form);
        window.add-event-listener('keydown', escape-popup);
    }

    for (i = 0; i < len; i += 1) {
        text-input[i].add-event-listener('focus', check-focus);
        text-input[i].add-event-listener('blur', set-placeholder);
    }

    function open-popup(event) {
        event.prevent-default();
        popup.class-list.remove("none");
        backPopup.class-list.remove("none");

        if (storage) {
            name.value = storage;
            name.nextElement-sibling.class-list.remove('none');
            email.focus();
            email.next-element-sibling.class-list.remove('none');
        } else {
            name.focus();
        }
    }

    function close-popup(event) {
        event.prevent-default();
        popup.class-list.remove("choice");
        popup.class-list.remove("popup-error");
        back-popup.class-list.remove("choice");
        popup.class-list.add("none");
        back-popup.class-list.add("none");
    }

    function submit-form(event) {
        if (!name.value || !email.value) {
            event.prevent-default();
            popup.class-list.remove("popup-error");
            popup.offset-width = popup.offset-width;
            popup.class-list.add("popup-error");
        } else {
            local-storage.set-item("name", name.value);
        }
    }

    function escape-popup(event) {
        if (event.key-code === 27) {
            if (!(popup.class-list.contains('none'))) {
                popup.class-list.remove("popup-error");
                popup.class-list.add("none");
                back-popup.class-list.add("none");
            }
        }
    }

    function check-focus(event) {
        target = event.target;
        placeholder = target.placeholder;
        target.placeholder = '';
        if (target.value === '') {
            var fake-placeHolder = target.next-element-sibling;
            fake-placeHolder.class-list.remove('none');
        }
    }

    function set-placeholder(event) {
        target = event.target;
        target.placeholder = placeholder;
        if (target.value === '') {
            var fake-placeHolder = target.next-element-sibling;
            fake-placeHolder.class-list.add('none');
        }
    }
}
