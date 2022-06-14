<section class="projects-section">
    <div class="projects-content container">

        <h1 class="title">PROYECTOS</h1>

        <div id="modal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">

                    <p class="image is-2by1 mb-2">
                        <img src="https://uploads-ssl.webflow.com/5f56e7a67c306d6e44db2cc7/5f7f72d7e9f157ec8164f9ba_6a28634d-4fef-4de7-a6f4-51e66c6628b9.jpg" alt="">
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
            for ($i = 0; $i < 9; $i++) :
            ?>
                <div class="column is-4">

                    <div class="card animate__animated animate__zoomIn" style="border-radius: 20px; overflow: hidden">
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="https://uploads-ssl.webflow.com/5f56e7a67c306d6e44db2cc7/5f7f72d7e9f157ec8164f9ba_6a28634d-4fef-4de7-a6f4-51e66c6628b9.jpg" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content" style="padding: 10px;">

                            <div class="content">
                                <div class="title">Nombre</div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php
            endfor;
            ?>
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