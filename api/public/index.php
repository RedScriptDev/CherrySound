<?php
require __DIR__ . '/../vendor/autoload.php';

$app = new \Slim\App();

$container = $app->getContainer();
$container['db'] = new PDO('mysql:host=localhost;dbname=redscrip_cherrysound', 'redscrip_chris', 'Olesnay*7');

$app->get('/search', function ($request, $response, $args){
    $queryParams = $request->getQueryParams();
    $artist = $queryParams['artist'];
    $song = $queryParams['song'];
    if($song && $artist){
        $query = 'SELECT a.artistID, a.artistName, s.songID, s.songName FROM artists a INNER JOIN songs s ON a.artistID = s.artistID AND a.artistName LIKE "%'. $artist .'%" AND s.songName LIKE "%'. $song .'%" ORDER BY artistName LIMIT 500';
    } else if($artist){
        $query = 'SELECT a.artistID, a.artistName, s.songID, s.songName FROM artists a INNER JOIN songs s ON a.artistID = s.artistID AND a.artistName LIKE "%'. $artist .'%" ORDER BY artistName LIMIT 500';
    } else {
        $query = 'SELECT a.artistID, a.artistName, s.songID, s.songName FROM artists a INNER JOIN songs s ON a.artistID = s.artistID AND s.songName LIKE "%'. $song .'%" ORDER BY artistName LIMIT 500';
    }

    $db = $this->get("db");
    $data = $db->query($query)->fetchAll(PDO::FETCH_ASSOC);
    $newResponse = $response->withJson($data);
    return $newResponse;
});

$app->run();
