const gradeDescription = {
    "A+": "Outstanding",
    "A": "Excellent",
    "B+": "Very Good",
    "B": "Good",
    "C+": "Satisfactory",
    "C": "Acceptable",
    "D+": "Partially Acceptable",
    "D": "Insufficient",
    "E": "Very Insufficient"
};

function check(gpa) {
    if (gpa > 3.6 && gpa <= 4.0) return "A+";
    else if (gpa > 3.2 && gpa <= 3.6) return "A";
    else if (gpa > 2.8 && gpa <= 3.2) return "B+";
    else if (gpa > 2.4 && gpa <= 2.8) return "B";
    else if (gpa > 2.0 && gpa <= 2.4) return "C+";
    else if (gpa > 1.6 && gpa <= 2.0) return "C";
    else if (gpa > 1.2 && gpa <= 1.6) return "D+";
    else if (gpa > 0.8 && gpa <= 1.2) return "D";
    else if (gpa > 0.0 && gpa <= 0.8) return "E";
}

let box = document.querySelector('main'),
    form = document.querySelector('form'),
    input = document.querySelector('#gpa'),
    desc = document.querySelector('#desc'),
    grade = document.querySelector('#grade');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let gpa = input.value;
    if (gpa) {
        let res = check(parseFloat(gpa));
        console.log(gpa, res);
        grade.innerText = res;
        desc.textContent = gradeDescription[res];
    }
});

// darkmode
let isDarkMode = false;
let darkButton = document.querySelector('#darkMode');
darkButton.addEventListener('click', () => {
    if (!isDarkMode) {
        document.body.style.backgroundColor = 'black';
        box.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        document.body.style.color = 'white';
        isDarkMode = true;
    } else {
        document.body.style.backgroundColor = '';
        box.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        document.body.style.color = '';
        isDarkMode = false;
    }
});