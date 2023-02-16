<!DOCTYPE html>
<html lang="tr">

<head>
  <meta charset="UTF-8">
  <title>JavaScript rastgele sayı üretme</title>
</head>

<body>
  <div id="sonuc">Rastgele üretilen sayı : <span id="sayi"></span></div>
  <button onclick="sayiUret();">Sayı üret</button>
  <script>
    function sayiUret() {
      document.getElementById("sayi").innerHTML = randomInt(10, 20);
    }

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  </script>
</body>

</html>