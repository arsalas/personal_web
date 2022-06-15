<section class="projects-section">
    <div class="projects-content container">

        <h1 class="title">PROYECTOS</h1>

        <div id="modal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">

                    <p class="image is-2by1 mb-2">
                        <img src="<?= Image::get('CaminoReal.png')  ?>" alt="">
                    </p>
                    <h2 class="subtitle">Descripcion </h2>

                    <p class="mb-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, architecto laudantium. Eligendi nisi ut dolore exercitationem. Maxime deleniti quod, magni impedit voluptatum assumenda aliquid iusto distinctio ratione. Suscipit, nisi cumque.
                    </p>
                    <h2 class="subtitle">Tecnologias </h2>

                    <p class="mb-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, architecto laudantium. Eligendi nisi ut dolore exercitationem. Maxime deleniti quod, magni impedit voluptatum assumenda aliquid iusto distinctio ratione. Suscipit, nisi cumque.
                    </p>

                    <button class="button is-info is-large is-outlined">VISITAR</button>
                </div>
            </div>
            <button id="close" class="modal-close is-large" aria-label="close"></button>
        </div>

        <div class="columns is-multiline" style="width:100%">

            <?php
            $projects = ProjectsController::get();
            foreach ($projects as $key => $project) : ?>

                <div class="column is-4">

                    <div class="card animate__animated animate__zoomIn" style="border-radius: 20px; overflow: hidden">
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="<?= Image::get($project->image)  ?>" alt="Placeholder image">
                            </figure>
                        </div>
                      
                    </div>
                </div>

            <?php endforeach ?>

        </div>
    </div>

    <script>
        const handleClick = () => {
            document.querySelector('#modal').classList.add('is-active');
        }
        const handleClickClose = () => {
            document.querySelector('#modal').classList.remove('is-active');
        }
        document.querySelector('.card').addEventListener('click', handleClick, false);
        document.querySelector('#close').addEventListener('click', handleClickClose, false);
    </script>


</section>