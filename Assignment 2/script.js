
var n =  [ [4, 3, 2, 4], 
       [9, 1, 5, 6], 
       [2, 7, 9, 8], 
       [8, 5, 2, 0], 
    ];
    function DiagonalAdd(){
        let sum = 0;
        for(let i = 0; i < n.length; i++){
           for(let j = 0; j < n[i].length; j++){
              if(i === j){
                 sum += n[i][j];
              }
           }
        }
     return sum;
     }
   var z = DiagonalAdd();
   console.log(z);
   document.write(z);