<?php
$lines = file('https://raw.githubusercontent.com/sunlightlabs/eff_scorecard/master/scores.csv');
$reps= new stdClass();
foreach($lines as $line) {
  $data = str_getcsv($line);
  $key = $data[0];
  array_splice($data, 11, 1);
  array_shift($data);
  $reps->{$key} = $data;
}
file_put_contents('json', json_encode($reps));
	