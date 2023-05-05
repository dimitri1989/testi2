
var baza1 = ["ხანდახან", "საყიდლებზე წასვლა","ფაბრიკა","მუზეუმი","school","banki","ჩამოსვლა","დარეკვა","გაკეთება","მოსმენა","წელი","ზოგი","ახლოს"];
var baza2 = ["ocasionally", "shopping","factory","museum","სკოლა","ბანკი","arrive","call","make","hear","year","some","near"];
let pasuxebi = [];

var zero = 0;
var zero2 = 0;
var zero3 = 0;
var shekitxva1= baza1[length++];
var answers= baza2[zero++];
var swori = 0;


function kitxva(){
    
    var f = document.getElementById("onclick");
    shekitxva1= baza1[zero3++];
    answers = baza2[zero2++];
    if(f == onclick){
		document.getElementById('rezultati').innerHTML = '';
        document.getElementById('rezultati2').innerHTML = '';
        axalikitxva.innerHTML = shekitxva1;
        
        
    }
    if(answers == undefined){ 
        axalikitxva4.innerHTML = "სწორი პასუხების რაოდენობა" + " "+ swori;
        axalikitxva.innerHTML = " ტესტი დასრულდა ";
       

    }
}

 function shekitxva(){
    var x = document.getElementById("messige").value;
    if( x == answers && !pasuxebi.includes(answers)){
		pasuxebi.push(answers);
        swori ++;
        rezultati.innerHTML = "სწორია პასუხია";
        rezultati.style.color="green";
        axalikitxva4.innerHTML = "სწორი პასუხების რაოდენობა" + " "+ swori;
        axalikitxva4.style.color="blue";
         
    }
    
   
    if( x != answers){
        rezultati2.innerHTML = "პასუხი არასწორია სცადეთ კიდევ ერთხელ";
        rezultati2.style.color="red"; 
    }
}



