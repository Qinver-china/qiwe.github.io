<?php

$dir = "home";

// Run the recursive function 

$response = scan($dir);


// This function scans the files folder recursively, and builds a large array

function scan($dir){

	$files = array();

	// Is there actually such a folder/file?

	if(file_exists($dir)){
	
		foreach(scandir($dir) as $f) {
		
			if(!$f || $f[0] == '.') {
				continue; // Ignore hidden files
			}

			if(is_dir($dir . '/' . $f)) {

				// The path is a folder

				$files[] = array(
					"name" => $f,
					"type" => "folder",
					"path" => $dir . '/' . $f,
					"items" => scan($dir . '/' . $f) // 递归地获取文件夹的内容
				);
			}
			
			else {

				// It is a file

				$files[] = array(
					"name" => $f,
					"type" => "file",
					"path" => $dir . '/' . $f,
					"size" => filesize($dir . '/' . $f) // 得到这个文件的大小
				);
			}
		}
	
	}

	return $files;
}



// 将目录列表输出为JSON

header('Content-type: application/json');

echo json_encode(array(
	"name" => "home",
	"type" => "folder",
	"path" => $dir,
	"items" => $response
));
