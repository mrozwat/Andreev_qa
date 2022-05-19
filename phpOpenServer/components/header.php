<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title><?= $title ?> – <?= $name ?> </title>
</head>
<body class="page">
  <header class="page-header">
    <div class="container">

      <h1 class="page-title"><?= $title ?></h1>
       <i>QA Engineer/Тестировщик</i>

       <p >
 
       <i>Email:</i> <a href="mailto:<?= $email ?>"><?= $email ?></a>
       </p>

      <p><i>Телефон:</i> <a href="tel:<?= $phone ?>"><?= $phone ?></a></p>
      <p><i>Telegram:</i> <a href="https://t.me/<?= $tg ?>"><?= $tg ?></a></p>
<button  class="theme-button" type="button"  >Изменить тему</button>
    </div>
  </header>
  <main>
