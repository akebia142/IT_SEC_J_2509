//반복문 자 이제 시작이야
/* 
컴퓨터 이 빡통이 한번하고 그만두니까 계속 뺑뺑이 시킴
*/

for (let idx=0; idx < 3; idx++){
    console.log(`idx:${idx}`)
} // 변수선언및 초기화는 딱한번만
// 더많이 쓰는 방식 iterable(반복가능)한 객체를 생성하여 그걸 조건으로 거는듯

let array1= ["고양이","멧돼지","뱀"];

for (let item of array1){
    console.log(`item: ${item}`);
} // 이건뭐지? 배열 설정해서 거기에 데이터(원소)들을 삼을수 있음

/*
{} 이걸 영어로 bracket, 어려운 이론으로는 scope
 각 scope 마다 메모리 영역이 다르다
 그래서 scope가 다르면 소스코드에 동일한 변수 이름이 보여도 다른놈으로 취급 
 */

 /*
 for (let idx=2; idx<=9; idx++){
    for (let idy=1; idy<=9; idy++){
        console.log(`idx: ${idx} * idy: ${idy} = ${idx*idy}`);
    }
 } //구구단
  */

 /* 제어문-
 if 
 loop
 함수 -모듈, 기계 블랙박스 & 화이트박스
 *블랙 박스는 그냥 대충 필요한 기능만 나오는지 확인, 화이트박스는 모든 조건에서 모든 출력을 확인
 블랙 박스 기준: 함수는 사용법이 있다
 */

function summ(){
    console.log("1+2=3");
}
summ();

// subtract 함수 선언및 2-1=1 출력하게 하기


function subtract(){
    console.log("2-1=1");
}
subtract();

function sum2( a:number, b:number){
    console.log(`save ${a+b}`);
    return a+b;
}
sum2(5,8);// 이렇게 해도 되고 다른 변수 값에 저장해두는것도 좋다 이럼 sum2를 불러야하는데 그건 역할을 헷갈릴수 있다

let array2 = [9, 1, 7, 3, 2, 4, 7, 89665, 22, 42, 1, 111];


for (let i =0; i<array2.length; i++){
    for(let j =0; j<array2.length; j++){
        try{
            if(array2[i]>array2[j]){
                let temp = array2[j];
                array2[j]= array2[i];
                array2[i]= temp;
                }
        } 
        catch(error:any){

        }    
    }
}
console.log(array2);

function number_sort(array2: number[]) {
    for (let i = 0; i < array2.length; i++) {
        for (let j = i + 1; j < array2.length; j++) {
            try {
                if (array2[i] > array2[j]) {
                    let temp = array2[j];
                    array2[j] = array2[i];
                    array2[i] = temp;
                }
            } catch (error: any) {

            }
        }
    }
    return array2
} //이둘은 반대다 연구해보자 흐름이 둘다 0부터 시작하면 어떻게든 계속 앞으로 큰값을 보내버리는거고 j=1+1로 하면 작은값을 밀어내는것

array2 = number_sort(array2);
console.log(array2);

//함수를 쓰는 궁극적인 이유: 어려운 작업을 할때 굉장히 난감해요 컴퓨터는 무조건 사칙연산 논리 제어를 거쳐서 작동
// 하지만 사람의 뇌는 그렇지 않아서 어려운걸 함수로 감쌈(모듈화시키고) 그래서 사용설명서만 주고 작동시킴
// 만든 정렬은 메모리변수를 3개만씀> 자료 자체는 많아도 생각보다 계산할만함
// 퀵정렬, 합병정렬, 힙정렬 얘네들은 데이터의 갯수만큼 메모리를씀 > 그래서 실성능이 생각보다 구림