document.getElementById(`submit`).addEventListener(`click`, function(){
    song = document.getElementById(`song`).value;
    switch(song){
        case `Love Trip`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk`;
            break;
        case `チャイニーズ・レストラン [Chinese Restaurant]`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=3m58s`;
            break;
        case `真夜中のジョーク [Mayonaka no jōku / Midnight Joke]`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=7m51s`;
            break;
        case `哀しみは夜の向こう [Kanashimi wa yoru no mukō / Sorrow is Beyond the Night]`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=12m44s`;
            break;
        case `All or Nothing`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=16m50s`;
            break;
        case `渚でダンス [Nagisa de dansu / Dance on the Shore]`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=21m14s`;
            break;
        case `One More Night`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=25m32s`;
            break;
        case `モーニング・フライト [Morning Flight]`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=29m34s`;
            break;
        case `たそがれは銀箔の… [Tasogare wa ginpaku no... / Twilight is a Silver Foil...]`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=33m43s`;
            break;
        case `What a Broken Heart Can Do`:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=38m11s`;
            break;
        default:
            document.getElementById(`default`).innerHTML = `Invalid`;
            location.reload;
            break;
    }  
    
    /*
    let song = document.getElementById(`song`).value;
    if (song === 'Love Trip'){
      window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk`;  
    } 
    else if (song === `チャイニーズ・レストラン [Chinese Restaurant]`){
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=3m58s`;
    } 
    else if (song === `真夜中のジョーク [Mayonaka no jōku / Midnight Joke]`){
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=7m51s`;
    } 
    else if (song === `哀しみは夜の向こう [Kanashimi wa yoru no mukō / Sorrow is Beyond the Night]`){
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=12m44s`;
    }
    else if (song === `All or Nothing`){
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=16m50s`;
    }
    else if (song === `渚でダンス [Nagisa de dansu / Dance on the Shore]`){
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=21m14s`;
    }
    else if (song === `One More Night`){        
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=25m32s`;
    }
    else if (song === `モーニング・フライト [Morning Flight]`){        
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=29m34s`;
    }
    else if (song === `たそがれは銀箔の… [Tasogare wa ginpaku no... / Twilight is a Silver Foil...]`){        
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=33m43s`;
    }
    else if (song === `What a Broken Heart Can Do`){        
        window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=38m11s`;
    }*/
});

document.getElementById(`random`).addEventListener(`click`, function(){
    let randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);
    switch(randomNumber){
        case 1:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk`;
            break;
        case 2:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=3m58s`;
            break;
        case 3:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=7m51s`;
            break;
        case 4:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=12m44s`;
            break;
        case 5:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=16m50s`;
            break;
        case 6:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=21m14s`;
            break;
        case 7:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=25m32s`;
            break;
        case 8:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=29m34s`;
            break;
        case 9:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=33m43s`;
            break;
        case 10:
            window.location.href=`https://www.youtube.com/watch?v=sIsCELMpeWk&t=38m11s`;
            break;
    }
});