import { ETAPAS, GRADES_BY_BIRTHDATE } from './nascidos-2026.js';

document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');
    const monthSelect = document.getElementById('month-select');
    const yearSelect = document.getElementById('year-select');
    const confirmBirthdateButton = document.getElementById('confirm-birthdate-button');

    // Populate year select
    const years = Object.keys(GRADES_BY_BIRTHDATE).sort((a, b) => b - a);
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });

    confirmBirthdateButton.addEventListener('click', () => {
        const month = parseInt(monthSelect.value, 10);
        const year = parseInt(yearSelect.value, 10);

        const birthDate = new Date(year, month, 1);
        const gradeInfo = calculateGrade(birthDate);

        const monthName = monthSelect.options[monthSelect.selectedIndex].text;

        resultDiv.textContent = `Quem nasceu em ${monthName} de ${year} está no ${gradeInfo.gradeName} - ${gradeInfo.etapa}`;
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