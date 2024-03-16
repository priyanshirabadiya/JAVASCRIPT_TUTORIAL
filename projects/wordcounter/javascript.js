




document.getElementById('countBtn').addEventListener('click', function() {
    let text = document.getElementById('text').value;
    let words = text.trim().split(/\s+/).filter(Boolean).length;
    document.getElementById('result').innerText = `Total words: ${words}`;
});
