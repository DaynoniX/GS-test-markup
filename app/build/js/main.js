const accordionsSelector ='.offer';
const trigger = ".offer-toggler";

function activateAllAccordions(selector, trigger){
    const accordionsList =  document.querySelectorAll(selector);
   for (const instance of accordionsList) {
        const btn = instance.querySelector(trigger);

        btn.addEventListener('click', (e) => {
            for (const instance of accordionsList) {
                if (!e.path.includes(instance)) {
                    instance.classList.remove('active');
                }
            }
            e.target.closest(selector).classList.toggle('active')
        })
   }
}

function trackInput(){
    const inputs = document.querySelectorAll('.input-container');
    for (const instance of inputs) {
        const input = instance.querySelector('input');
        const textarea = instance.querySelector('textarea');
        
        if (input) {
            input.addEventListener('input', (e) => {
                if (input.value.length > 0){
                    instance.classList.add('filled');
                } else {
                    instance.classList.remove('filled')
                }
            });
        }

        if (textarea) {
            textarea.addEventListener('input', (e) => {
                if (textarea.value.length > 0){
                    instance.classList.add('filled');
                } else {
                    instance.classList.remove('filled')
                }
            });
        }
    }
}

trackInput();
activateAllAccordions(accordionsSelector, trigger);