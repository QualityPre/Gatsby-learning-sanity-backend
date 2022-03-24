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
        {
            name:'toppings',
            title:'Toppings',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{
                        type:'topping'
                    }]
                }
            ]

        }
    ],
    // custom preview
    preview:{
        select:{
            title:'name',
            media:'image',
            topping0:'toppings.0.name',
            topping1:'toppings.1.name',
            topping2:'toppings.2.name',
            topping3:'toppings.3.name'
        },
        prepare:({title,media,...toppings})=>{
         const tops = Object.values(toppings).filter(Boolean)
         return {title,media,subtitle:tops.join(',')}
        }

    }
}