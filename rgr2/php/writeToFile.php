<?php
    error_reporting(E_ALL);
    $data = $_POST['text']; // the key we sent was "something"
    $f = fopen("../files/secrets.txt", 'a+');
    fwrite($f,"\n".$data);
    fclose($f);
?>