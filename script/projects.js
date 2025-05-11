
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.item-project');
    const projectSections = document.querySelectorAll('.project');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const selectedProject = item.getAttribute('data-project');

            // Remove classe 'active' de todos os projetos e miniaturas
            listItems.forEach(i => i.classList.remove('active'));
            projectSections.forEach(section => section.classList.remove('active'));

            // Adiciona classe 'active' ao projeto e à miniatura clicada
            item.classList.add('active');
            const projectToShow = document.querySelector(`.project[data-project="${selectedProject}"]`);
            if (projectToShow) {
                projectToShow.classList.add('active');
            }
        });
    });
});
