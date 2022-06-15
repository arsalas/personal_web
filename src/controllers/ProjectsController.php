<?php

Class ProjectsController{

    public static function get (){
        return json_decode(file_get_contents(dirname(__DIR__) . '/data/projects.json'));
    }
}