// Uppgift 1


function OrdnaArrayNumber(item)
{
   
    let NewArray=[];
       
    for(let i=0;i<item.length;i++)
    {  
        for(let j=1+i;j<item.length;j++)
    {
        if( item[i]<item[j])
        {
          item[i];
          
      
       
        }
        else if(item[i]>=item[j])
        {
            let spara = item[i];
            item[i] = item[j];
            item[j] = spara;
          
        }

    } 
    }
    console.log(item);
   
}

//OrdnaArrayNumber(ArrayOfNumber);






let ArrayOfNumber =[1,333333333,9,2,23,4,4,56,6,767,8,8,8,83,2,2,2,3435,56,56,67,67,787888989,89,8990,9,4,2];


function Tv(item)
{
   
   

       let save;
     
    for(let i=0;i<item.length;i++)
    {  
      if(item[i]>item[i+1])
      {
        save =item[i];
        item[i] = item[i+1];
        item[i+1] = save;
        Tv(item);
      }
    

    }
   return item
    
}  

console.log(Tv(ArrayOfNumber));
