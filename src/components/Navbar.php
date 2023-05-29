<header class="navbar">

	<div class="brand">
		<img src="<?php echo Image::get('logo.png') ?>" alt="">
	</div>
	<nav>
		<ul>
			<li onclick="sectionActive(this)"> <a href="#about"> SOBRE MI </a></li>
			<li onclick="sectionActive(this)"> <a href="#experience"> EXPERIENCIA </a></li>
			<li onclick="sectionActive(this)"> <a href="#projects"> PROYECTOS</a></li>
		</ul>
	</nav>
</header>

<script>
	const sectionActive = (element) => {
		const options = document.querySelectorAll('.navbar li')
		options.forEach(op => {
			op.classList.remove('active');
		});
		element.classList.add('active')
	}
</script>