const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <div class='color'>
        <table border='1'>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.Key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>`
})


