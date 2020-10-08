
let sammy = document.getElementByName('Cstyle');
let azumah = document.getElementById('new');
function mawuli()
{
    for (let one =0; one<sammy.length; one++){
        let Cstyle=sammy[one].getAttribute('id');
        let Cv=sammy[ one ].value;
        azumah.style[ Cstyle ]= Cv;
    }
}
document.getElementById('set').addEventListener('click',set);
