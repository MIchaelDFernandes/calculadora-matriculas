document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate-input');
    const datePickerButton = document.getElementById('date-picker-button');
    const resultDiv = document.getElementById('result');

    // Modern way to open the date picker
    datePickerButton.addEventListener('click', () => {
        try {
            birthdateInput.showPicker();
        } catch (error) {
            // Fallback for browsers that don't support showPicker()
            console.log("showPicker() not supported, falling back to click().");
            birthdateInput.click();
        }
    });

    birthdateInput.addEventListener('change', (event) => {
        const birthDateString = event.target.value;
        if (birthDateString) {
            // The value is in 'YYYY-MM-DD' format, which is parsed as UTC by default
            // To avoid timezone issues, we can manually parse it or treat it consistently
            const parts = birthDateString.split('-');
            const birthDate = new Date(parts[0], parts[1] - 1, parts[2]);
            const grade = calculateGrade(birthDate);
            resultDiv.textContent = grade;
        } else {
            resultDiv.textContent = 'Escolha uma data de nascimento.';
        }
    });

    function calculateGrade(birthDate) {
        const referenceDate = new Date('2025-03-31');
        
        // Calculate age based on the reference date
        let age = referenceDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = referenceDate.getMonth() - birthDate.getMonth();
        const dayDifference = referenceDate.getDate() - birthDate.getDate();

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        // Determine the grade based on the calculated age
        if (age < 1) {
            return "Berçário I";
        }
        if (age === 1) {
            return "Berçário II";
        }
        if (age === 2) {
            return "Infantil I";
        }
        if (age === 3) {
            return "Infantil II";
        }
        if (age === 4) {
            return "Pré-escola I";
        }
        if (age === 5) {
            return "Pré-escola II";
        }
        if (age === 6) {
            return "1º Ano do Ensino Fundamental";
        }
        if (age === 7) {
            return "2º Ano do Ensino Fundamental";
        }
        if (age === 8) {
            return "3º Ano do Ensino Fundamental";
        }
        if (age === 9) {
            return "4º Ano do Ensino Fundamental";
        }
        if (age === 10) {
            return "5º Ano do Ensino Fundamental";
        }
        if (age === 11) {
            return "6º Ano do Ensino Fundamental";
        }
        if (age === 12) {
            return "7º Ano do Ensino Fundamental";
        }
        if (age === 13) {
            return "8º Ano do Ensino Fundamental";
        }
        if (age === 14) {
            return "9º Ano do Ensino Fundamental";
        }
        if (age >= 15 && age <= 17) {
            return "Ensino Médio (1º ao 3º Ano)";
        }
        
        return "Fora da idade escolar padrão.";
    }
});
