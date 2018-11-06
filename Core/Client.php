<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Content-Type: application/json');
    
   
    class Client {
        public function __construct()
        {   
            include('db.php');
            $this->DBH = new PDO($dsn, $user, $pass, $opt);
        }
        public function signup($data){
            $errors = [];

            if (!isset($data->name) || !isset($data->email) || !isset($data->password)){
				$errors[] = "fields is deleted";
            }
            if (!$data->name || !$data->email || !$data->password){
				$errors[] = "fill in the fields";
            }
            $sl_user = $this->DBH->prepare("SELECT `id` FROM `user` where `email` = ?");
            $sl_user->execute([$data->email]);
            $row_user = $sl_user->fetch();
            if($row_user){
                $errors[] = "E-mail  already registered";
            }

            if(!$errors){
                $hash = password_hash($data->password, PASSWORD_ARGON2I);
                $in_user = $this->DBH->prepare("INSERT into `user` (`name`,`email`,`password`) VALUES(?,?,?)");
                $in_user->execute([$data->name, $data->email, $hash]);
                return 'success';
            }else return array_shift($errors);



           
        }
        public function signin($data){
            $errors = [];

            if (!isset($data->email) || !isset($data->password)){
				$errors[] = "Fields is deleted";
            }
            if (!$data->email || !$data->password){
				$errors[] = "Fill in the fields";
            }
            $sl_user = $this->DBH->prepare("SELECT `email`, `password`  FROM `user` WHERE `email`= ?");
            $sl_user->execute([$data->email]);
            $row_user = $sl_user->fetch();
            if(!$row_user){
				$errors[] = "This user does not exist";
            }
            if (!password_verify($data->password, $row_user['password'])){
				$errors[] = "Wrong password";
            }
            if(!$errors)
                return 'success';
            else  return array_shift($errors);
            

        }
    }
    
    $client = new Client;
    $json_str = file_get_contents('php://input');
    $data = json_decode($json_str);

    if($data->Signup && isset($data->Signup)){
        echo $client->signup($data->Signup);
    }

    if($data->Signin && isset($data->Signin)){
        echo $client->signin($data->Signin);
    }
  