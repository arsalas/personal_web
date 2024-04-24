<div id="app">
	<div class="container">
		<?php include dirname(__DIR__) . "/components/Navbar.php" ?>
		<div class="app-layout">

			<div class="app-column user-description">
				<main>
					<h1 class="title">Alberto Ramirez Salas</h1>
					<h2 class="subtitle">Aplicaciones Web | Videojuegos | Profesor</h2>
					<h3 class="description">
					Desarrollo aplicaciones web, videojuegos y doy clases de programación.
					</h3>

					<form id="form" class="mt-6" action="">
						<p class="mb-4">Si quieres más información sobre mis servicios puedes enviarme un mensaje.</p>
						<div class="columns">
							<div class="column">
								<div class="field">
									<label class="label">Nombre</label>
									<div class="control">
										<input id="name" required class="input" type="text" placeholder="Nombre">
									</div>
								</div>
							</div>
							<div class="column">
								<div class="field">
									<label class="label">Email</label>
									<div class="control">
										<input id="email" class="input" required type="email" placeholder="Email">
									</div>
								</div>
							</div>
						</div>


						<div class="field">
							<label class="label">Mensaje</label>
							<div class="control">
								<textarea id="message" class="textarea" placeholder="Mensaje"></textarea>
							</div>
						</div>

						<div class="field is-grouped">
							<div class="control">
								<button id="btn" class="button is-rounded">Enviar</button>
							</div>

						</div>
					</form>
				</main>

				<footer class="mt-5">
					<a href="https://github.com/arsalas" target="_blank">

						<span class="icon link is-medium">
							<i class="fab fa-github"></i>
						</span>
					</a>
					<a href="https://www.linkedin.com/in/alberto-ram%C3%ADrez-salas-883810117/" target="_blank">
						<span class="icon link is-medium">
							<i class="fab fa-linkedin"></i>
						</span>
					</a>
				</footer>
			</div>
			<div class="app-column app-sections">
				<?php include 'About.php' ?>
				<?php include 'Experience.php' ?>
				<?php include 'Projects.php' ?>
			</div>
		</div>
	</div>

</div>

<script>
	document.querySelector('#form').addEventListener('submit', async (e) => {
		e.preventDefault();
		const name = document.querySelector('#name');
		const email = document.querySelector('#email');
		const message = document.querySelector('#message');
		const form = new FormData()
		form.append('name', name.value)
		form.append('email', email.value)
		form.append('message', message.value)
		document.querySelector('#btn').classList.add('is-loading');
		const resp = await fetch('https://albertoramirezsalas.com/email', {
			method: 'POST',
			body: form,
		})
		document.querySelector('#btn').classList.remove('is-loading');
		alert('El mensaje se ha enviado correctamente, en breve recibirás una respuesta.')
		name.value = ''
		email.value = ''
		message.value = ''
	})
</script>