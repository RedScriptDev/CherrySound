<?php

$db_host = "localhost";
$db_user = "redscrip_chris";
$db_pass = "Olesnay*7";
$db_name = "redscrip_cherrysound";
$db_connection_error = "Could Not Connect to Your Database";
$db_query_error = "Query Threw An Error";

$db = new Mysqli('localhost', $db_user, $db_pass, $db_name) or die ($db_connection_error);