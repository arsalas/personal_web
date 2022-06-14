<section class="contact-section">
    <div class="contact-content container">

        <h1 class="title">CONTACTO</h1>

        <p style="font-size: 1.5rem;">
            Estoy emocionado de unirme a ustedes en este nuevo y emocionante capítulo donde podré compartir mi imaginación y trabajar con clientes en proyectos establecidos con un gran presupuesto para obtener excelentes resultados. Mi objetivo principal como curador es fomentar la colaboración, porque nadie quiere ver algo que no puede hacer por sí mismo. </p>

        <div class="" style="width:100%">

            <form id="form" action="" class="container" style="width:100%">
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input id="email" class="input is-large" type="email" placeholder="Email" value="">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <textarea id="msg" class="textarea is-large" placeholder="Mensaje"></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <button class="button is-link is-large">Enviar</button>
                    </div>
                </div>

            </form>
        </div>

    </div>

</section>

<script>
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = document.querySelector('#email');
        const msg = document.querySelector('#msg');
        console.log(email.value, msg.value);
        // const rawResponse = await fetch('https://httpbin.org/post', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         a: 1,
        //         b: 'Textual content'
        //     })
        // });
        // const content = await rawResponse.json();

        // console.log(content);
    };

    document.querySelector('#form').addEventListener('submit', handleSubmit, false)
</script>