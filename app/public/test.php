<?php

$num =2;
$foo= $num . "be";
$bar= "or not to be";

echo $foo . ' ' . $bar;
echo  $num * $num * $num;
$arr = [
"first" => "Tom",
"second" => "Bipin",
"best" => "DS",
];

$arr2 = [1,1,2,3,5,6];

if (true) {
    echo "\nTrue\n";
}

while (true) {
    // this way  it doesnt actually do anyting
    break;
}

 //   foreach ($arr as $key=>$val) {
 //   echo "<
 //li>".$key . " is " .@val. "</val>";
 //}
 // echo "</ul>";

 function printAndEncode ($val) {
 echo json_encode(
     $arr,
     JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR
 );
} 


//

// Naming conventions 

// camelCase