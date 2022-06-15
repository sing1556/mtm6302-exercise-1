const $emojis = document.getElementById('emojis')
const emojis = []

for (let i = 127900 ; i <= 127955; i++ )
{
  emojis.push(`
  
<div class="emojis-container">

  <div class="emojis">&#${i}</div>
  <code class="code">${i}</code>
  
</div>

  `)  
}

$emojis.innerHTML += emojis.join('')