<?
if(isset($_POST['tel'])&&$_POST['tel']!=""){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'klimsava96@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка с сайта УхтыБокс'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>  
                        <p>E-mail: '.$_POST['mail'].'</p>
                        <p>Адрес: '.$_POST['addres'].'</p>                       
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <info@klimsava96.000webhostapp.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
