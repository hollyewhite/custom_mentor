<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');



require_once 'objects/user.php';

// class instance

$user = new User();
$requesttype=$_POST['requesttype'];
$obj = json_decode($_POST['data'],true);
$user->name = array_key_exists("name", $obj) ? $obj['name']:'';
$user->phone = array_key_exists("phone", $obj) ? $obj['phone']:'';
$user->email = array_key_exists("email", $obj) ? $obj['email']:'';
$user->password = array_key_exists("password", $obj) ? $obj['password']:'';
$user->type = array_key_exists("type", $obj) ? $obj['type']:'';

// if the form was signup is sent
if($requesttype=="Signup"){
  $result = $user->create();
}
elseif($requesttype=="Signin"){
$result = $user->auth();
}elseif($requesttype=="SearchMentor"){
echo "hahah";
}



//sample response :{"response":"failed","error":"Your email has been registered. Please pick another email."}

//echo json_encode($user->resultv);
?>
