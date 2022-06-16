<?php

class ProjectCard
{
    public static function render($id, $image)
    {
?>
        <div id="<?= $id  ?>" class="card animate__animated animate__zoomIn">
            <div class="card-image">
                <figure class="image is-16by9">
                    <img src="<?= Image::get($image)  ?>" alt="Placeholder image">
                </figure>
            </div>
        </div>
<?php
    }
}
