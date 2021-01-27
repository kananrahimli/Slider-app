var models=[
    {
        name:'BMW',
        image:'bmw.jpg',
        link:'https://www.ixbt.com/news/2019/11/10/mercedes-benz-g-class.html'
    },
    {
        name:'Mercedes',
        image:'mercedes.jpg',
        link:'https://www.ixbt.com/news/2019/11/10/mercedes-benz-g-class.html'
    },
    {
        name:'Range Rover',
        image:'rangerover.jpg',
        link:'https://www.ixbt.com/news/2019/11/10/mercedes-benz-g-class.html'
    },
    {
        name:'Infiniti FX-35',
        image:'infiniti.jpg',
        link:'https://www.ixbt.com/news/2019/11/10/mercedes-benz-g-class.html'
    },
    {
        name:'Mazda CR-v',
        image:'mazda.jpg',
        link:'https://www.ixbt.com/news/2019/11/10/mercedes-benz-g-class.html'
    },
];
var index=0;
var countSlide=models.length;
var autoslide={
    duration:'2000',
    random:true
}
var interval;
init(autoslide);


document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(autoslide);
    })
})

//Auto slide random or no.
function init(autoslide){
  interval= setInterval(function(){
    var prev;
    if(autoslide.random){
        do{
            index=Math.floor(Math.random()*countSlide);
        }while(prev==index);
        prev=index;
        showSlide(index);
        console.log(index);
    }
    else{
        if(index+1==countSlide){
            index=-1;
        }
        index++;
        showSlide(index);
        console.log(index);
    }
   },autoslide.duration);
}

//change slide 
function showSlide(i){

    index=i;
    if(i<0){
        index=countSlide-1;
    }
    if(i>=countSlide){
        index=0;
    }
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-title').textContent=models[index].name;
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}
