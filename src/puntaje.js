function puntaje (j1,j2){
 if(j1 ===0 && j2 === 0)
    return ['love', 'love'];
 
if(j1 === 0 && j2 === 1)
    return [0, 15];

if(j1 === 1 && j2 === 0 )
    return [15,0];

if(j1 === 2 && j2 === 0)
    return [30,0]

if(j1 === 3 && j2 === 0)
    return [40,0]

if(j1 === 0 && j2 === 2)
    return [0,30]

}

export default puntaje;