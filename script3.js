<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <title>Tapşırıq 3</title>
</head>
<body>
    <h1 id="counter">0</h1>
    <button onclick="artir()">Artır</button>
    <button onclick="azalt()">Azalt</button>
    <script>
        let say = 0;
        function artir() {
            say++;
            document.getElementById("counter").innerText = say;
        }
        function azalt() {
            say--;
            document.getElementById("counter").innerText = say;
        }
    </script>
</body>
</html>
