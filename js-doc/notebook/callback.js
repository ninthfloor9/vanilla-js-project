const loadScript = (src, callback) => {
    let script = document.createElement('script');
    script.src = src;
    {/* script가 모두 로드 되면 callback(script)를 실행시킴 여기서 script는 전체 script를 대표함 */}
    script.onload = () => callback(script); 

    document.head.append(script);
}



// script 를 순차적으로 돌린다. 콜백지옥이 없어야 한다. 에러 핸들링이 되어야 한다. - 스크립트는 순차적으로 돈다.
 

const load1 = (script, error) => { 
    if(error) {
        console.log(`첫번째 에러가 났어요!`);
    } else {
        console.log(`${script.src} 첫번째 스크립트가 실행되었습니다.`);
        loadScript('script2.js', load2);
    }
}


loadScript('script.js', load1)

const load2 = (script, error) => {
    if(error) {
        console.log('두번째 에러가 났어요!');
    } else {
        console.log(`${script.src} 두번째 스크립트가 실행되었습니다.`);
        loadScript('script3.js', load3);
    }
}

const load3 = (script, error) => {
    if(error) {
        console.log(`세번째 에러가 났어요!`);
    } else {
        console.log(`${script.src} 세번째 스크립트가 실행되었씁니다.`);
        
    }
}






// loadScript('/js-doc/notebook/script.js', (script, e) => {
//     if (e) { // 로드가 실패하면 e 인자에는 null 이 아닌 값을 준다. 로드가 성공하면 e인자에는 null 을 준다. 
//         console.log(`${script.src}가 에러났습니다.`);
//     } else {
//         console.log(`${script.src}가 에러나려다 로드되었습니다. 되었습니다.`);
//     }
//     loadScript('/js-doc/notebook/script2.js', script => {
//         console.log(`${script.src} 가 2번째로 로드되었습니다.`);

//         loadScript('/js-doc/notebook/script3.js', script => {
//             console.log(`${script.src} 가 세번째로 로드되었습니다.`);
//         });
//     });
// });
