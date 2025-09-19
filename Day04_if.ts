let a=0;

if(a>0){
    console.log(`a는 0보다 큽니다`);
}
else{
    console.log(`a는 0보다 작거나 같다`)
}

let user_input=1234;
let door_password=1234;

/*if (user_input == door_password){
    console.log('문을 열겠습니다');
}else{
    console.log('비밀번호 오류입니다');
} */

if(user_input == door_password){
    console.log(`비밀번호 ok`);
}
if(user_input != door_password){
    console.log(`비밀번호 틀림`);
} //자바는 if else , if if , if else if else 이 3개구문이 모두된다


let score =89;
if (score>=90){
    console.log(`A학점입니다`);
}
else if(score>=80 && score<=89){
    console.log(`B학점입니다`);
}
else if(score>=70){
    console.log(`C학점입니다`);
}
else if(score>=60){
    console.log(`D학점입니다`);
}
else{
    console.log(`F학점입니다`);
}