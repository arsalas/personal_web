<?php
class Data
{
	public static function projects()
	{  
		return json_decode(file_get_contents(dirname(__DIR__) . '/data/projects.json'));
	}
	public static function personalProjects()
	{  
		return json_decode(file_get_contents(dirname(__DIR__) . '/data/personalProjects.json'));
	}
}
