
let elements = document.getElementsByName('Cstyle');
let div = document.getElementById('new');
function set()
{
    for (let index =0; index<elements.length; index++){
        let Cstyle=elemts[index].getAttribute('id');
        let CssValue=elements[ index].value;
        div.style[ Cstyle ]= CssValue;
    }
}
document.getElementById('set').addEventListener('click',set);
