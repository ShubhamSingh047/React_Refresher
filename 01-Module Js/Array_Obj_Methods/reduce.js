const items = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
  ];

  const reduce=items.reduce((result,items)=>result+items.price,0);
  console.log(reduce);


  //---------- Grouping Same kind of Obj ---------------

  const category = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];

  const resuCate=category.reduce((accumulator, item)=>{
    const cat=item.category;
    if(!accumulator[cat]){
        accumulator[cat]=[];
    }
    accumulator[cat].push(item.name);
    return accumulator;
  },{});
console.log(resuCate);


//--------Removing deublicate value from Array-----------

const dublArray=[1, 2, 3, 1, 2, 3, 7, 8, 7];
const resArr=dublArray.reduce((accumulator,item)=>{
    if(!accumulator.includes(item)){
        accumulator.push(item);
    }
    return accumulator;
},[]);

console.log(resArr)