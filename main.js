var photos =[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd_zDq5RlnrYxaV0Iarsw3H23dEZM_y08Z6LC35JdVoVWUWMaJuUIEEqiyi7wS-fJ3hk&usqp=CAU",
        name:"The Walling",
        desc:"Memory February",
        bal:"7.5"
    },  
    {
        img:"https://numero.twic.pics/2022-12/babylon-films-attendus-2023.jpeg",
        name:"The Walling",
        desc:"Memory March",
        bal:"7.5"
    }, 
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4A2-Ch2hxS9Ra8B-JXVwfMocxgYoyk3WJZH0cKAdoYgNXZn0JE1sWr2TajRIcks7njk&usqp=CAU",
        name:"The Walling",
        desc:"Memory April",
        bal:""
    }, 
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvUposOoCMSm7eWLiS8lrerqnPtqlt54NxwDlXl0XgtjM7V7k588_7DRUKTRV_izUnpM&usqp=CAU",
        name:"The Walling",
        desc:"Memory May",
        bal:"7.5"
    }, 
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd_zDq5RlnrYxaV0Iarsw3H23dEZM_y08Z6LC35JdVoVWUWMaJuUIEEqiyi7wS-fJ3hk&usqp=CAU",
        name:"The Walling",
        desc:"Memory June",
        bal:"7.5"
    },
    {
        img:"https://numero.twic.pics/2022-12/babylon-films-attendus-2023.jpeg",
        name:"The Walling",
        desc:"Memory April",
        bal:"7.5"
    },  
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4A2-Ch2hxS9Ra8B-JXVwfMocxgYoyk3WJZH0cKAdoYgNXZn0JE1sWr2TajRIcks7njk&usqp=CAU",
        name:"The Walling",
        desc:"Memory Julay",
        bal:"7.5"
    },  
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvUposOoCMSm7eWLiS8lrerqnPtqlt54NxwDlXl0XgtjM7V7k588_7DRUKTRV_izUnpM&usqp=CAU",
        name:"The Walling",
        desc:"Memory June",
        bal:"7.5"
    },  
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd_zDq5RlnrYxaV0Iarsw3H23dEZM_y08Z6LC35JdVoVWUWMaJuUIEEqiyi7wS-fJ3hk&usqp=CAU",
        name:"The Walling",
        desc:"Memory June",
        bal:"7.5"
    },  
    {
        img:"https://numero.twic.pics/2022-12/babylon-films-attendus-2023.jpeg",
        name:"The Walling",
        desc:"Memory June",
        bal:"7.5"
    },  
    
]
for( var i=0;i <photos.length;i++){
    area.innerHTML+=`<div class="ob1">
    <div class="bal">
        <p>${ photos[i].bal}</p>
       </div>
    <img src="${photos[i].img}  " alt="" width="170px" height="200px">
    <h3>${photos[i].name}</h3>
${ photos[i].desc}
</div>`
}