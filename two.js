
let sammy = document.getElementsByName('Cstyle');
let azumah = document.getElementById('modify');
function set()
{
    for (let i=0; i<elements.length; i++){
        let Cstyle=sammy[i].getAttribute('id');
        let CV=elements[ index].value;
        div.style[ Cstyle ]= CV;
    }
}
document.getElementById('set').addEventListener('click',set);
