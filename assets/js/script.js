(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    })

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "";
    });

    document.addEventListener('keydown', function (event) {
        const key = event.key; // Get the key pressed

        if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
            // If it's a number or operator, add it to the screen
            screen.value += key;
        } else if (key === 'Enter') {
            // Calculate result on Enter
            if (screen.value !== '') {
                try {
                    let answer = eval(screen.value);
                    screen.value = answer;
                } catch (error) {
                    screen.value = "Error";
                }
            }
        } else if (key === 'Backspace') {
            // Remove the last character on Backspace
            screen.value = screen.value.slice(0, -1);
        } else if (key.toLowerCase() === 'c') {
            // Clear the screen on 'C' key
            screen.value = "";
        }
    });
})()

