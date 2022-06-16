<?php


class Carousel
{

	public static function render($data)
	{

		$images = ['http://fakeimg.pl/2000x800/0079D8/fff/?text=Without', 'http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript', 'http://fakeimg.pl/2000x800/F90/fff/?text=Carousel'];

?>
		<div class="carousel">
			<div class="carousel-inner">
				<?php
				foreach ($images as $key => $image) : ?>
					<input class="carousel-open" type="radio" id="carousel-<?= $key + 1 ?>" name="carousel" aria-hidden="true" hidden="" <?= ($key + 1 == 1) ? 'checked="checked"' : '' ?>>
					<div class="carousel-item">
						<img src="<?= $image ?>">
					</div>
				<?php endforeach;
				for ($i = 1; $i <= count($images); $i++) : ?>
					<label for="carousel-<?= ($i - 1) < 0 ? count($images) - 1 : $i - 1 ?>" class="carousel-control prev control-<?= $i ?>">‹</label>
					<label for="carousel-<?= ($i + 1) ?>" class="carousel-control next control-<?= $i ?>">›</label>
				<?php endfor; ?>
				<ol class="carousel-indicators">
					<?php
					for ($i = 0; $i < count($images); $i++) : ?>
						<li>
							<label for="carousel-<?= $i ?>" class="carousel-bullet">•</label>
						</li>
					<?php endfor ?>
				</ol>
			</div>
		</div>
<?php

	}
}
