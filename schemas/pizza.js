import {MdLocalPizza} from 'react-icons/md'

export default {
    // name for computer
    name:'pizza',
    // name for user
    title:'Pizzas',
    type:'document',
    icon:MdLocalPizza,
    fields:[
        {
            name:'name',
            title:'Pizza Name',
            type:'string',
            description:'Name of the pizza'
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:100
            }
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
               hotspot:true
            }
        },
        {
            name:'price',
            title:'Price',
            type:'number',
            description:'Price of the pizza in cents',
            validation:Rule=>Rule.min(1000).max(50000)
            
        },
        // add custom input component for toppings
        
    ]
}