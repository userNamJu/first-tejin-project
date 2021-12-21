//1. 박스2개 만들기
//2. 드랍다운 리스트만들기
//2. 환율정보 들여오기
//3. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//4. 금액을 입력하면 환전이 된다
//5. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
//6. 숫자를 한국어로 읽는법

let currencyRatio={
    USD:{
        KRW:1184.36,
        USD:1,
        VND:22972.50,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:12.49,
        unit:"원"
    },
    VND:{
        KRW:0.052,
        USD:0.000044,
        VND:1,
        unit:"동"

    }

}

let fromCurrency = "USD";
let toCurrency = "USD";


document.querySelectorAll("#from-currency-list a").forEach(menu => menu.addEventListener("click",function(){

    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;

    console.log("fromCurrency는 ",fromCurrency);
})
);


    //1. 버튼을 가져온다.
     //2. 버튼의 값을 바꾼다.
    //3. 선택된 from 값을 변수에 저장한다.
   
document.querySelectorAll("#to-currency-list a").forEach(menu => menu.addEventListener("click",function(){

    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent; 

   
})
);



