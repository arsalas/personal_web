<?php


class Image
{

    public static function get($name)
    {

		$path = dirname(__DIR__) . "/assets/images/" . $name;
        // Extensión de la imagen
        $type = pathinfo($path, PATHINFO_EXTENSION);
        // Cargando la imagen
        $data = file_get_contents($path);
        // Decodificando la imagen en base64
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
        return $base64;
    }
}
