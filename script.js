let area = document.getElementById('area');
let word = document.getElementById('word');
let char = document.getElementById('char');

area.addEventListener('input', updateCount);

function updateCount() {
    const text = area.value.trim();
    const words = text.split(/\s+/).filter(Boolean);
    const charCount = text.length;

    word.textContent = words.length;
    char.textContent = charCount;
}