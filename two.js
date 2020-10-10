/*Turton, L. (2018). Javascript Essentials. Learn how Javascript works, some basic API's and finally create a mini project. 
Retrieved from https://www.udemy.com/course/javascript-essentials/learn/lecture/4275948#overview on 6th October, 2020.*/
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
