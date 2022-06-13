<?php

class ProjectCard
{
    private $title;
    private $description;
    private $tecnologies;
    private $image;
    private $url;

    public function __construct($title, $description, $tecnologies, $image, $url)
    {
        $this->title = $title;
        $this->description = $description;
        $this->tecnologies = $tecnologies;
        $this->image = $image;
        $this->url = $url;
    }

    public function render()
    {
?>
        <div class="image is-3by2 project " :style="{ backgroundImage: 'url(' + data.image + ')' }">
            <div class="project-cover" @mouseover="show = true" @mouseleave="show = false">
                <div :class="'project-content ' + color" v-if="show">
                    <div class="is-size-5 is-size-6-mobile"><?= $this->description ?></div>
                    <div class="is-flex is-flex-wrap-wrap is-justify-content-space-around mt-4" style="width: 100%">
                        <List class="" v-for="technology in data.list" :key="technology.name" :name="technology.name" :icon="technology.icon" />
                    </div>

                    <div class="mt-5">
                        <span v-if="data.inprogress" class="icon-text">
                            <span class="icon">
                                <i class="fas fa-tools"></i>
                            </span>
                            <span> En desarrollo</span>
                        </span>

                        <a v-else :href="<?= $this->url ?>" target="blank" :class="
                'button is-' +
                (color === 'primary' ? 'light' : 'primary') +
                ' is-outlined is-rounded'
                ">
                            Visitar sitio
                        </a>
                    </div>
                </div>
            </div>

        </div>
<?php
    }
}
