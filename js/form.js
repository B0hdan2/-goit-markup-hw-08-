   (() => {
        document
            .querySelector('.js-speaker-form')
            .addEventListener('submit', e => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                formData.forEach((value, name) =>
                    console.log(`${name}: ${value}`),
                );
            });
    })(); 

