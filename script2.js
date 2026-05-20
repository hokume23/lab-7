<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <title>Tapşırıq 2</title>
</head>
<body>
    <input type="number" id="first" placeholder="Birinci ədəd">
    <input type="number" id="second" placeholder="İkinci ədəd">
    <button onclick="topla()">+</button>
    <button onclick="cıx()">-</button>
    <h2 id="netice"></h2>
    <script>
        function topla() {
            let a = Number(document.getElementById("first").value);
            let b = Number(document.getElementById("second").value);
            document.getElementById("netice").innerText = "Nəticə: " + (a + b);
        }
        function cıx() {
            let a = Number(document.getElementById("first").value);
            let b = Number(document.getElementById("second").value);
            document.getElementById("netice").innerText = "Nəticə: " + (a - b);
        }
    </script>
</body>
</html>
