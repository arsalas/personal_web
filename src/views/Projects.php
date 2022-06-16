<section class="projects-section">
    <div class="projects-content container">

        <h1 class="title">PROYECTOS</h1>


        <h2 class="subtitle">Trabajos en empresas</h2>
        <div class="columns is-multiline" style="width:100%">
            <?php
            $projects = Data::projects();
            foreach ($projects as $key => $project) : ?>
                <div class="column is-4">
                    <?php ProjectCard::render("project_" . $key, $project->image); ?>
                </div>
                <?php Modal::render('modal_project_' . $key, $project->isVideo, $project->name, $project->description, $project->tecnologies, $project->projectImage, $project->url) ?>
                <?php endforeach ?>
            </div>
            <h2 class="subtitle">Trabajos personales</h2>
            <div class="columns is-multiline" style="width:100%">
                <?php
            $projects = Data::personalProjects();
            foreach ($projects as $key => $project) : ?>
                <div class="column is-4">
                    <?php ProjectCard::render("personalProject_" . $key, $project->image); ?>
                    <?php Modal::render('modal_personalProject_' . $key, $project->isVideo, $project->name, $project->description, $project->tecnologies, $project->projectImage, $project->url) ?>
                </div>
            <?php endforeach ?>

        </div>

        <script>
            function handleClick() {
                document.querySelector('#modal_' + this.id).classList.add('is-active');
            }

            function handleClickClose() {
                const id = this.id.split('close_')[1];
                document.querySelector('#' + id).classList.remove('is-active');
            }
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.addEventListener('click', handleClick, false));

            const close = document.querySelectorAll('.close');
            close.forEach(card => card.addEventListener('click', handleClickClose, false));
        </script>


</section>