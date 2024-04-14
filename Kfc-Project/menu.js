
let product=[
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/sm/D-PR00002144.jpg?ver=41.8",
        title:"5 Leg Pc & 2 Dips Bucket",
        img:"https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        non:"Non veg",
        serves:"Serves 2",
        price:"₹519.05",
        dis:"Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=41.8",
        title:"Single Chicken Roll",
        img:"https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        non:"Non veg",
        serves:"",
        price:"₹119.05",
        dis:"Street style roll with single chicken strip, onions and two spicy sauce"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002348.jpg?ver=41.8",
        title:"Chicken Longer Burger & 2 Strips Combo",
        img:"https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        non:"Non veg",
        serves:"",
        price:"₹219.05",
        dis:"Longgg burger with crunchy chicken, onions & a punchy sauce , served with 2 peri peri chicken strips"
    },
    {
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K136.jpg?ver=41.8",
        title:"Regular Popcorn",
        img:"https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg",
        non:"Non veg",
        serves:"",
        price:"₹115.24",
        dis:"Signature bite-sized boneless chicken, with special spices"
    }
]

let body=document.querySelector(".bodyRight");
function showData(){
    product.forEach(function(ele,i){
        let div=document.createElement('div')
            div.id='sdiv'
        let image=document.createElement('img')
            image.src=ele['image']
            image.id='simage'
            
        let title=document.createElement('h4')
            title.innerText=ele.title;
            
            title.id='stitle'
        let div2=document.createElement('div')
            div2.id='sdiv2'
        let img=document.createElement('img')
            img.src=ele['img']
            console.log(ele.img)
            img.id='simg'
        let non=document.createElement('div')
            non.innerText=ele.non+" "+ele.serves;
            non.id='snon'
        let price=document.createElement('h4')
            price.innerText=ele.price;
            price.id='sprice'
        let dis=document.createElement('p')
            dis.innerText=ele.dis;
            dis.id='sdis';
        let btn=document.createElement('button')
            btn.innerText="Add to card";
            btn.id='sbtn';
        btn.addEventListener('click',function(){
            addCard(i)
            
        })
        console.log(i)
        div2.append(img,non)
        div.append(image,title,div2,dis,price,btn)
        body.append(div)

    })


}
let array=JSON.parse(localStorage.getItem('data')) || []
// let final=[]
let card=document.querySelector('#card')
function vi(){
    card.style.display='block'
}
function vin(){
    card.style.display='none'
}
function showItem(value){
    let totalItem=0;
    let totalPrice=0;
    let a=document.querySelector('#totalItem')
    let b=document.querySelector('#totalPrice')
    value.forEach(function(ele,i){
        totalItem++;
        let remove=ele.price;
            
        let result = remove.replace('₹', '');
        

        console.log(remove)
        totalPrice+=+result
        let div=document.createElement('div')
            div.id='idiv'
        let image=document.createElement('img')
            image.id='iimage'
            image.src=ele.image
        let title=document.createElement('div')
            title.id='ititle';
            title.innerText=ele.title
        let price=document.createElement('div')
            price.id='iprice';
            price.innerText=ele.price
        let btnremove=document.createElement('button')
            btnremove.innerText="Remove"
            btnremove.id='btnremove'
        btnremove.addEventListener('click',function(){
            rem(ele,i)
        })
        div.append(image,title,price,btnremove)
        card.append(div)

    })
    a.innerText='Total Item '+totalItem
    b.innerText='Total Price ₹ '+Math.round(totalPrice)

}

let value=JSON.parse(localStorage.getItem('data'))
showItem(value)
function savaCard(){
    localStorage.setItem('data',JSON.stringify(array))
    
    
    showItem(value)
    // value.filter(function(elt,i){
    //     console.log(elt)
    //     value.filter(function(element,j){
    //         if(elt.price == element.price && elt.title == element.title && elt.image==element.image && elt.dis==element.dis){
    //             final.push(elt)
    //             final[i]
    //         }
    //     })
        
    // })

}
function addCard(index){
    
    array.push(product[index])
   
    savaCard()
    location.reload()

}
function rem(ele,i){
    value.splice(i, 1);
    localStorage.setItem('data',JSON.stringify(value))
    console.log(value)
    location.reload()
    

    showItem(value)

}

showData()