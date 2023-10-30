var color = document.getElementById("backg")
        var letter = document.getElementById("letter")

        function colorbackg(){
            document.body.style.backgroundColor = color.value;
            console.log (color.value);
        }

        function lettercolor(){
            document.body.style.color = letter.value;
            console.log (letter.value);
        }