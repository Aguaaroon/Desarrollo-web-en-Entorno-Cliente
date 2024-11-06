let array = ['Kiwi', 'Albaricoque']

function insert(array, item, booleano){
      if(array.includes(item) == false) 
         if (booleano == true){
            array.unshift(item)}
            else{
               array.push(item)
            }
            return array
      }

      console.log(insert (array, 'Kiwi', false))
      console.log (insert (array, 'Uva', false))
      console.log(insert (array, 'Sandia', true))