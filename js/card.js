// 변수 button에 현재 문서의 querySelector메소드를 이용해 flip-button 클래스를 가진 객체를 넣겠다. -> 카드뒤집기
const button = document.querySelector('.flip-button');
// card-face의 부모에 접근
const card = document.querySelector('.card');

// 어떤 이벤트가 반응할지 듣고있겠다. 사용자가 클릭하는 이벤트가 발생하면 카드영역에 toggle함수를 이용해 is-flipped 클래스를 넣었다 빼겠다.
// classlist라고 써있기 때문에 is-flipped에 . 안붙여도됨
// 버튼 클릭 - > card 영역에 is-flipped가 들락날락함
button.addEventListener('click', () => {
  card.classList.toggle('is-flipped');
});