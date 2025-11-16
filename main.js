import { ETAPAS, GRADES_BY_BIRTHDATE } from './nascidos-2026.js';

document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate-input');
    const datePickerButton = document.getElementById('date-picker-button');
    const resultDiv = document.getElementById('result');

    datePickerButton.addEventListener('click', () => {
        try {
            birthdateInput.showPicker();
        } catch (error) {
            console.log("showPicker() not supported, falling back to click().");
            birthdateInput.click();
        }
    });

    birthdateInput.addEventListener('change', (event) => {
        const birthDateString = event.target.value;
        if (birthDateString) {
            const parts = birthDateString.split('-');
            const birthDate = new Date(parts[0], parts[1] - 1, parts[2]);
            const gradeInfo = calculateGrade(birthDate);
            const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
            resultDiv.textContent = `Quem nasceu em ${formattedDate} está no ${gradeInfo.gradeName} - ${gradeInfo.etapa}`;
        } else {
            resultDiv.textContent = 'Escolha uma data de nascimento.';
        }
    });

    function calculateGrade(birthDate) {
        // The range "JAN-MAR" includes months 0, 1, and 2.
        const month_range = birthDate.getMonth() <= 2 ? "JAN-MAR" : "ABR-DEZ";
        const year = birthDate.getFullYear();

        // Safely access the grade name to prevent crashes
        const gradeName = (GRADES_BY_BIRTHDATE[year] && GRADES_BY_BIRTHDATE[year][month_range])
            ? GRADES_BY_BIRTHDATE[year][month_range]
            : "Fora da idade escolar padrão.";

        const etapa = ETAPAS[gradeName] || "ETAPA 14";
        
        return { gradeName, etapa };
    }
});