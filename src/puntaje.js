function puntaje (j1,j2){
 if(j1 ===0&&j2 ===0)
    return ['love', 'love'];
 
if((j1 === 0 && j2 === 1))
    return [0, 15];

if((j1 === 1 && j2 === 0 ))
    return [15,0];
}

export default puntaje;