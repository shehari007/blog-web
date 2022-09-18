<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
error_reporting(E_ERROR | E_PARSE);
include 'config_db2.php';

foreach (glob("blogapi/*.php") as $filename)
{
    include $filename;
}