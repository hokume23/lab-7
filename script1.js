<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <title>Tapşırıq 1</title>
</head>
<body>
    <input type="text" id="text" placeholder="Adınız nədir?">
    <button onclick="goster()">Göstər</button>
    <p id="result"></p>
    <script>
        function goster() {
            let metn = document.getElementById("text").value;
            document.getElementById("result").innerText = metn;
        }
    </script>
</body>
</html>
