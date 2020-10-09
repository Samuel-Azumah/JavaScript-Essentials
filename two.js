
let sammy = document.getElementsByName('Cstyle');
let azumah = document.getElementById('modify');
function set()
{
    for (let i=0; i<sammy.length; i++){
        let Cstyle=sammy[i].getAttribute('id');
        let CV=sammy[i].value;
        azumah.style[Cstyle]= CV;
    }
}
document.getElementById('set').addEventListener('click',set);
