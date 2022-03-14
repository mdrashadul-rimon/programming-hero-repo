const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'Dell yellow laptop with black camera',
    '1x59 Lenovo comercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price phone',
    'purple color phone with Laptop'
];

// const searching = 'laptop';
const searching = 'Dell';


//indexOf

const output = [];
for(const product of products)

// {
//     if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
//         output.push(product);
//     }
// }
// same jinis includes diye kora jai tobe sekhetre condition diye check kora lagena eta subidha
{
    // if(product.toLowerCase().startsWith(searching.toLowerCase())){       //startsWith() dile surute test korbe
    //     output.push(product);
    // }
    if(product.toLowerCase().endsWith(searching.toLowerCase())){            //endsWith() dile last a ache kina test korbe
        output.push(product); 
    }

}

console.log(output);