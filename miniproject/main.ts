import{IProduct,ITelevision,ISmartPhone,ILaptop,IProductAPI,ITablet} from "./models/Interfaces"
import {dummyData} from "./data"


const findTelevision=():ITelevision[]=>{
    
    let televisions:ITelevision[]=[];
    let televisionitem={} as ITelevision;
    

    dummyData.filter((item)=>{

        if(item.category==="television"){

            televisionitem={
                title:item.title,
                description: item.description,
                price:item.price,
                rating:item.rating,
                id:item.id,
                thumbnail:item.thumbnail,
                smartTv:item.smartTv as boolean,
                stock:item.stock
            }
            televisions.push(televisionitem);          
        }
    })
    return televisions
}

const findSmartPhone=():ISmartPhone[]=>{
    
    let smartPhones:ISmartPhone[]=[];
    let smartPhoneItem={} as ISmartPhone;

    dummyData.filter((item)=>{
        if(item.category==="smartphones"){

            smartPhoneItem={
                title: item.title,
                description :item.description,
                price:item.price,
                rating:item.rating,
                id:item.id,
                thumbnail:item.thumbnail,
                color:item.color as string
            }
            smartPhones.push(smartPhoneItem);
            
        }
    })
    return smartPhones
}
const findLaptop=():ILaptop[]=>{
    
    let laptopItem={} as ILaptop;
    let Laptops:ILaptop[]=[];

    dummyData.filter((item)=>{
        if(item.category==="laptop"){
            laptopItem={
                title:item.title,
                description: item.description,
                price:item.price,
                rating:item.rating,
                id:item.id,
                thumbnail:item.thumbnail,
                discountPercentage:item.discountPercentage,
                screenDimentions:item.screenDimentions as number
            }
            Laptops.push(laptopItem)
            
        }
    })
    return Laptops
}

const findTablet=():ITablet[]=>{
    
    let Tablets:ITablet[]=[];
    let tabletItem={} as ITablet;
    

    dummyData.filter((item)=>{
        if(item.category==="tablet"){
            
            tabletItem={
                title: item.title,
                description: item.description,
                price:item.price,
                rating:item.rating,
                id:item.id,
                thumbnail:item.thumbnail,
                cellular:item.celluar as boolean,
                wifi:item.wifi as boolean,
            }
            Tablets.push(tabletItem)          
        }
    })
    return Tablets
}

class ProductApi implements IProductAPI{
    
    findAll():IProduct[] {

        let product={} as IProduct;
        let productArray:IProduct[]=[];

        dummyData.filter((item)=>{
            product={
                title:item.title,
                description:item.description,
                price:item.price,
                rating:item.rating,
                id:item.id,
                thumbnail:item.thumbnail
            }
            productArray.push(product);
        })
        return productArray;
    }

    findByCategory<T extends IProduct>(category: string): T[] {
        
        let productArray:IProduct[]=[];
       
        dummyData.forEach(function(item){

            if (item.category=="television" && category=="television") {
                productArray=findTelevision();
            }
            else if (item.category=="smartphones" && category=="smartphones") {
                productArray=findSmartPhone();
            }
            else if (item.category=="laptop" && category=="laptop") {
                productArray=findLaptop(); 
            }
            else if (item.category=="tablet" && category=="tablet") {
                productArray=findTablet();  
            }
        })
        return productArray as T[]
    }
    findByText(input:string):IProduct[]{

        let product={} as IProduct;
        let productArray:IProduct[]=[];

        dummyData.forEach(function(item){
            if(item.title.indexOf(input)!== -1 || item.description.indexOf(input)!== -1 
            ||item.brand.indexOf(input)!== -1 
            )
            
            product={
                title:item.title,
                description:item.description,
                price:item.price,
                rating:item.rating,
                id:item.id,
                thumbnail:item.thumbnail
                
                
            }
            productArray.push(product);
        })
        return productArray;     
    }

    findByPrice(x: number, y: number): IProduct[] {
        let product={} as IProduct;
        let productArray:IProduct[]=[];

        dummyData.forEach(function(item){
            if((item.price>=x && item.price <=y  ) || (item.price<=x && item.price>=y)){

                product={
                    title:item.title,
                    description:item.description,
                    price:item.price,
                    rating:item.rating,
                    id:item.id,
                    thumbnail:item.thumbnail

                }
                
                
                productArray.push(product);
            }
        })
        return productArray; 

    }
}

let p=new ProductApi();
//console.log(p.findAll());
console.log(p.findByCategory<IProduct>("laptop"))
//console.log(p.findByText("Samsung"));
//console.log(p.findByPrice(1000,2000));

