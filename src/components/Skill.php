<?php

class Skill
{
	public static function render($icon, $skill)
	{
		?>
		<div class="skill">
		<span class="icon-text title">
			<span class="icon">
				<i class="fas fa-2x <?=$icon ?>"></i>
			</span>
		</span>
		<span class="subtitle mt-2"><?=$skill ?></span>
	   </div>
	   <?php

	}
}