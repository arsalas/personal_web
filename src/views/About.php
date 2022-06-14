<section class="about-section">
    <div class="about-content container">

        <h1 class="title">SOBRE MI</h1>

        <header class="skill-container">
            <?php
            Skill::render("fa-solid fa-globe", "Web");
            Skill::render("fa-solid fa-mobile-screen", "Movil");
            Skill::render("fa-solid fa-gamepad", "Videojuegos");
            Skill::render("fa-solid fa-graduation-cap", "Mentor");
            ?>
        </header>

        <div class="columns">
            <div class="column">
                <div class="about-content">
                    <div class="about-text">

                        Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time. </p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="subtitle">
                    Lenguajes
                </div>
                <?php
                Lang::render("JavaScript");
                Lang::render("TypeScript");
                Lang::render("PHP");
                Lang::render("NodeJs");
                Lang::render("Vue");
                Lang::render("HTML");
                Lang::render("CSS");
                Lang::render("MySQL");
                Lang::render("Unreal Engine");
                ?>
            </div>
        </div>
    </div>


</section>