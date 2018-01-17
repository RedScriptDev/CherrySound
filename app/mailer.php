<?php
//Create variables
$fname = trim($_POST['first_name']);
$lname = trim($_POST['last_name']);
$email = trim($_POST['email']);
$phonenumber = trim($_POST['phone']);
$reason = trim($_POST['reason']);
$comment = trim($_POST['comment']);

// --check email validity by minimum length

// if (strlen($email) < 6){
// 	echo "That is not a vaild email.";
// 	exit;
// }

// --Using Regular Expression to validate email

if(!eregi('^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$', $email)){
	echo "<p>That is not a valid email</p>".
	"<p>Please return to the previous page and re-enter</p>";
	exit;
}

if(strlen($phonenumber) < 6){
	echo "<p>That is not a phone number</p>".
	"<p>Please return to the previous page and re-enter</p>";
	exit;
}



// Setup static info
explode('@', $email);
// --Use explode to check and emails domain and sort where its sent

// if (strtolower($email_array[1]) == "bigcustomer.com") {
// 	$toaddress = "bob@example.com";
// } else {
// 	$toaddress = "tallahasseecreative@gmail.com";
// }

// --Change the $toaddress if criteria are met

// if (stristr($feedback, 'shop'))
// $toaddress = 'retail@example.com';
// else if (stristr($feedback, 'delivery'))
// $toaddress = 'fulfillment@example.com';
// else if (stristr($feedback, 'bill'))
// $toaddress = 'billing@example.com';

// --Sort mail with regular expressions

$toaddress = "djrazor1@msn.com"; //Default
// if(eregi('shop|customer service|retail', $feedback)){
// 	$toaddress = 'retail@example.com';
// } else if (eregi('deliver|fullfill', $feedback)){
// 	$toaddress = 'fullfillment@example.com';
// } else if (eregi('bill|account', $feedback)){
// 	$toaddress = 'billing@example.com';
// }


// if (eregi('bigcustomer/.com', $email)){
// 	$toaddress = 'bob@example.com';
// }


$subject = "Contact Form Submission from CherrySound.com";

$mailcontent = "Name: ".$fname." ".$lname."\n".
				"Email: ".$email."\n".
				"Phone Number: ".$phonenumber."\n".
				"Reason For Contact:  ".$reason."\n".
				"Message: ".$comment."\n";

$fromaddress = $email;
 // invoke mail function
mail($toaddress, $subject, $mailcontent, $fromaddress);



?>
