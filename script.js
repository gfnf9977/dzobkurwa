document.addEventListener('DOMContentLoaded', function() {
    const jobList = document.querySelector('.job-list');

    const jobs = [
        {
            title: 'Пакувальник',
            requirements: 'Знання роботи на складі.',
            jobDescription: 'Робота на складі, пакування товарів.',
            schedule: 'Пн-Пт, 8 годин на день.',
            salary: '2000 PLN/місяць',
            formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfU9griz_6SUgoG_65oFJHdRzr2SpwU2ZZqJgjBOPTdU3iDAw/viewform?fbzx=1655969763015360734' // Замініть на ваш URL Google Форми
        },
        {
            title: 'Оператор машини',
            requirements: 'Досвід роботи з виробничими машинами.',
            jobDescription: 'Обслуговування виробничих машин.',
            schedule: 'Пн-Пт, 8 годин на день.',
            salary: '2500 PLN/місяць',
            formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfD.../viewform' // Замініть на ваш URL Google Форми
        },
        {
            title: 'Водій',
            requirements: 'Наявність водійських прав категорії C.',
            jobDescription: 'Транспортні перевезення товарів по Польщі.',
            schedule: 'Гнучкий графік.',
            salary: '3000 PLN/місяць',
            formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfD.../viewform' // Замініть на ваш URL Google Форми
        }
    ];

    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');

        const jobTitle = document.createElement('div');
        jobTitle.classList.add('job-title');
        jobTitle.innerHTML = `
            <span>${job.title}</span>
            <i class="fas fa-chevron-down toggle-arrow"></i>
        `;

        const jobDetails = document.createElement('div');
        jobDetails.classList.add('job-details');
        jobDetails.innerHTML = `
            <div class="job-detail">
                <label>Вимоги:</label>
                <p>${job.requirements}</p>
            </div>
            <div class="job-detail">
                <label>Суть роботи:</label>
                <p>${job.jobDescription}</p>
            </div>
            <div class="job-detail">
                <label>Графік:</label>
                <p>${job.schedule}</p>
            </div>
            <div class="job-detail">
                <label>ЗП:</label>
                <p>${job.salary}</p>
            </div>
            <a href="${job.formUrl}" class="apply-button" target="_blank">Відгукнутися</a>
        `;

        jobItem.appendChild(jobTitle);
        jobItem.appendChild(jobDetails);

        jobList.appendChild(jobItem);

        jobTitle.addEventListener('click', () => {
            jobItem.classList.toggle('expanded');
            jobDetails.style.display = jobItem.classList.contains('expanded') ? 'block' : 'none';
        });
    });
});
