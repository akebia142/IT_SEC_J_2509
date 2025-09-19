let a:number =1;
let b:string = "2";
let sum: number = 0;
//sum=a+b; 
//console.log(sum);


/* let a=1;
이건 들어오는 값에 따라서 타입 지정되고 

let a:number=1;
이건 타입 정한거

let sum:number=a+b;
이건 에러남
*/

//let array1 = [1,2,3];
let array1: number[] = [1, 2, 3];

//과제 서랍번호 0번의 값을 5로 바꿔주세요

array1[0] = 5;
console.log(array1[0]);
array1= [5]; //서랍 자체를 바꿈

let jsObject ={ a: 1,b:2}
console.log(`jsObject: ${jsObject} `); //jsObject 굉장히 많이쓸것
let 내쇼핑몰=[{"제품":"멍멍이","가격":"500"}
   ,{"제품":"타이거","가격":"5000"}]
console.log(`jsObject:`, jsObject);
console.log(`jsObject a:`, jsObject.a);
console.log(`jsObject b:`, jsObject.b);





console.log("jsObject "+ jsObject.a + " 입니다");

console.log(`내쇼핑몰 상품 ${JSON.stringify(내쇼핑몰)}`,);  // ${}로 들어가면 문자열 변환 백틱으로 변환됬으니 먼저 구분을 지어줘야한다 그래서 JSON.stringify 를쓴것

let js1: any;
js1 = 1;
js1 = "dfsdfs";
js1 = {}
js1 = []
// any라는 타입은 아무거나 담을수 있으니 쇼핑몰 상품 올리기 하기전 이미지 미리보기 같은거나 gpt한테 어려운 기능을 대리맡길때 쓰는 타입입니다.