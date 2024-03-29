import React, { useState } from "react";
import "./Mypage.css";
import Mypage from "./Mypage";

const FaqItem = ({ question, answer, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${className}`}>
      <span className="faq-question" onClick={toggleAnswer}>
        {question}
      </span>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

function Faq() {
  return (
    <>
      <Mypage />
      <div className="faq_every">
        <div>
          <h2>브랜디 자체 배송</h2>
          <div>
            <FaqItem
              question="브랜디 자체 배송 상품이 뭔가요?"
              answer="브랜디 배송센터를 통해 출고되는 브랜디 자체배송 상품으로, 해당 상품들은 스토어가 달라도 함께 출고될 수 있으며  합포장 반품이 가능합니다.

        브랜디 자체 배송 상품은 일반배송과 하루배송의 두가지 배송 타입이 있습니다."
              className="faq_contents"
            />
            <FaqItem
              question="브랜디 자체 배송 중 일반 배송은 뭔가요?"
              answer="브랜디 자체 배송 상품은 하루배송과 일반배송의 두가지 배송 타입이 있으며, 일반배송은 주문 후 거래처로 입고요청이 진행되는 1:1 오더시스템 상품입니다.

주문 확인 시 거래처로부터 새상품을 받아와 입고 > 배송준비 > 츌고의 과정으로 배송이 진행되고 있으며,  

배송일은 평균 평일 2-5일정도 소요됩니다. :) 



■ 일반배송

- 일반배송 상품은, 우체국 택배를 통하여 출고됩니다. 

- 일반배송 상품은, 거래처 사정에 의하여 입고 지연 및 품절이 발생할 수 있습니다. 

- 옵션별로 일반/하루배송 여부가 상이할 수 있으며, 옵션 선택 창에서 옵션별 배송 타입이 기재되어있습니다. "
              className="faq_contents"
            />
            <FaqItem
              question="브랜디 자체 배송 중 하루배송은 뭔가요?"
              answer="브랜디 자체 배송 상품 중 [빠른 배송 서비스] 의 명칭입니다.

브랜디 홈 화면 '하루배송' 탭 안의 상품 및 하루배송 마크가 붙어 있는 옵션에 적용됩니다.

하루배송은 주문 지역 및 시간에 따라 수령일자가 상이하니, 아래 내용을 참고 부탁드립니다.



■ 내일도착 (서울 외 지역)

-전일 오후 2시 부터 ~ 당일 오후 2시 이내 주문 > 영업일 기준 주문 다음날 수령

-택배사 : 우체국 택배

※ 주말, 공휴일 제외

※ 제주, 도서산간 지역의 경우 평일 기준 1~2일 추가 소요



■ 저녁도착 (서울지역)

-전일 오후 2시 부터 ~ 당일 오후 2시 이내 주문  > 영업일 기준 주문 당일 밤 8시 이내 수령

-택배사 : 두발 히어로 (체인로지스)

* 저녁도착 서비스는 서울지역만 이용가능합니다.

* 저녁도착 서비스는 앱 전용 서비스 입니다."
              className="faq_contents"
            />
            <FaqItem
              question="하루배송 상품 결제 시 무통장 입금이 안돼요."
              answer="브랜디 자체 배송의 [내일도착/저녁도착] 하루배송 서비스는 무통장 결제가 불가합니다. 



정해진 시간 내 결제완료 주문건을 기준으로 즉시 배송 준비가 진행되고 있어,

주문 후 결제 완료시까지 시간이 소요되는 무통장 입금의 경우 결제가 어려운 점 양해 부탁드립니다. 



무통장 입금 외에 네이버페이, 카카오페이, toss, 신용/체크카드, 휴대폰결제 가능합니다.
"
              className="faq_contents"
            />
            <FaqItem
              question="저녁도착은 서울 지역만 가능한가요?"
              answer="■ 내일도착

-전일 오후 2시부터 ~ 당일 오후 2시 이내 주문 > 영업일 기준 주문 다음날 수령

-택배사 : 우체국 택배

※ 주말, 공휴일 제외

※ 제주, 도서산간 지역의 경우 평일 기준 1~2일 추가 소요



■ 저녁도착

-전일 오후 2시 ~ 오후 2시 이내 주문  > 영업일 기준 주문 당일 밤 8시 이내 수령

-택배사 : 두발 히어로 (체인로지스)

* 저녁도착 서비스는 서울지역만 이용가능합니다.

* 저녁도착 서비스는 앱 전용 서비스 입니다.
"
              className="faq_contents"
            />
          </div>
        </div>
        <div>
          <h2>상품</h2>
          <div>
            <FaqItem
              question="정품이 아닌 것 같아요"
              answer="브랜디에서 판매하는 브랜드 상품은 모두 정품만 취급합니다.

만일 구매한 상품이 가품으로 의심될 경우 안전거래 센터로 접수하시면 절차를 통하여 담당 부서에서 안내드리겠습니다.

또한 정상유통경로 검증이 불가한 경우 200% 보상제를 시행하고 있으니 안심하고 구매하셔도 됩니다."
              className="faq_contents"
            />
            <FaqItem
              question="상품관련하여 문의하고 싶어요"
              answer="브랜디는 여러 스토어가 입점한 패션플랫폼입니다.

상품은 각 스토어에서 직접 판매하는 형태로, 상품관련한 문의는 상품페이지 내 Q&A 게시글 작성 또는 스토어 고객센터로 문의 바랍니다."
              className="faq_contents"
            />
          </div>
        </div>
        <div>
          <h2>주문/배송</h2>
          <div>
            <FaqItem
              question="주문내역을 확인하고 싶어요"
              answer="주문 시 카카오 알림톡을 통해 주문번호가 안내됩니다.

카카오톡을 사용하지 않거나 차단한 경우 SMS로 안내되고 있으며 확인이 어려울 경우 카카오톡 채널 [@브랜디]로 문의 바랍니다."
              className="faq_contents"
            />
            <FaqItem
              question="주문자/수령자 정보를 변경하고 싶어요"
              answer="주문정보는 주문 시 변경 가능합니다.

이미 결제완료된 경우 직접 변경이 어려우니 스토어 고객센터로 문의 바랍니다."
              className="faq_contents"
            />
            <FaqItem
              question="주문상태에 따른 배송현황을 알고 싶어요"
              answer="■ 주문상태에 따른 배송현황

1. 주문

- 결제대기 : 주문이 완료되어 결제를 기다리는 상태(가상계좌 입금 전)

- 결제완료 : 주문과 결제가 완료된 상태



2. 배송

- 상품준비 : 주문 요청을 확인한 상태

- 배송준비 : 상품 포장 등 배송 처리를 진행하고 있는 상태

- 배송중 : 송장번호 등록 및 택배사 통하여 출고된 상태

- 배송완료 : 상품이 고객에게 배송된 상태

- 구매확정 : 수령한 상품의 교환/환불 의사가 없는 상태로 리뷰 작성 가능



3. 취소

- 주문취소중 : 취소 접수되어 처리중 상태

(무통장입금/전월 휴대폰결제의 경우 계좌 확인이 필요할 수 있음)

- 주문취소완료 : 취소 완료된 상태로 결제수단에 따라 1-3영업일 내 환불 예정



4. 교환/반품

- 교환/환불요청 : 교환/반품 요청이 접수된 상태

- 반품진행 : 상품 회수 후 검수중 상태

- 환불승인중 : 반품 승인된 상태

- 환불 : 반품 완료된 상태로 결제수단에 따라 1-3영업일 내 환불 예정"
              className="faq_contents"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
