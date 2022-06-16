<?php
class Modal
{
	public static function render($id, $isVideo, $title, $description, $tecnologies, $image, $url)
	{
?>
		<div id="<?= $id ?>" class="modal">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<?php
					if ($isVideo) : ?>
						<figure class="image is-16by9">
							<iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe>
						</figure>
					<?php else : ?>
						<p class="image is-16by9">
							<img src="<?= Image::get($image)  ?>" alt="">
						</p>
					<?php endif ?>
					<!-- <?php Carousel::render('a') ?> -->
					<h1 class="title"><?= $title ?> </h1>
					<h2 class="subtitle">Descripcion </h2>
					<p class="mb-2"><?= $description ?></p>
					<h2 class="subtitle">Tecnologias </h2>
					<p class="mb-2"><?= $tecnologies ?></p>
					<?php if ($url) : ?>
						<a href="<?= $url ?>" target="_blank">
							<button class="button is-info is-outlined">VISITAR</button>
						</a>
					<?php endif ?>
				</div>
			</div>
			<button id="close_<?= $id ?>" class="modal-close is-large close" aria-label="close"></button>
		</div>
<?php
	}
}
