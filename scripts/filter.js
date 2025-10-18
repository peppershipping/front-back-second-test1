function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card-large');
    const noProjectsMessage = document.querySelector('.no-projects');
    
    // Удаляем существующее сообщение "нет проектов"
    if (noProjectsMessage) {
        noProjectsMessage.remove();
    }
    
    let visibleCount = 0;
    
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.classList.remove('hidden');
            visibleCount++;
        } else {
            project.classList.add('hidden');
        }
    });
    
    // Если нет видимых проектов, показываем сообщение
    if (visibleCount === 0) {
        const projectsGrid = document.getElementById('projectsGrid');
        const message = document.createElement('div');
        message.className = 'no-projects';
        message.textContent = 'Проектов в этой категории пока нет';
        projectsGrid.appendChild(message);
    }
}

// Обработчики для кнопок фильтра
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Фильтруем проекты
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
    
    // Инициализируем показ всех проектов
    filterProjects('all');
});