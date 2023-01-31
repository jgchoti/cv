document
    .getElementById("upper-case")
    .addEventListener("click", function () {
        let text = document.getElementById("text").value;
        document.getElementById("text").value = text.toUpperCase();
    });

document
    .getElementById("lower-case")
    .addEventListener("click", function () {
        let text = document.getElementById("text").value;
        document.getElementById("text").value = text.toLowerCase();
    });

document
    .getElementById("proper-case")
    .addEventListener("click", function () {
        let text = document.getElementById("text").value;
        document.getElementById("text").value = text
            .toLowerCase()
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ");
    });

document
    .getElementById("sentence-case")
    .addEventListener("click", function () {
        let text = document.getElementById("text").value;
        document.getElementById("text").value = text
            .toLowerCase()
            .split(". ")
            .map(
                (sentence) => sentence[0].toUpperCase() + sentence.substring(1)
            )
            .join(". ");
    });
document
    .getElementById("save-text-file")
    .addEventListener("click", function () {
        let text = document.getElementById("text").value;
        let filename = "text.txt";
        function download(filename, text) {
            let element = document.createElement("a");
            element.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," + encodeURIComponent(text)
            );
            element.setAttribute("download", filename);

            element.style.display = "none";
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }

        // Start file download.
        download("text.txt", text);
    });