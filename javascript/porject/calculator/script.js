let string = '';
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.value;

        if (value === '=') {
            try {
                string = eval(string).toString(); // Convert result to string
                document.querySelector('input').value = string;
            } catch {
                string = '';
                document.querySelector('input').value = "Error";
            }
        } else if (value === 'AC') {
            string = '';
            document.querySelector('input').value = string;
        } else if (value === 'DE') {
            string = string.toString().slice(0, -1); // Ensure it's a string before slice
            document.querySelector('input').value = string;
        } else {
            string += value;
            document.querySelector('input').value = string;
        }
    });
});
