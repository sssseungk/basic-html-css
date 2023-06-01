// voting 클래스를 가진 객체를 참아서 버튼에 삽입시켜라
// 여러개를 한꺼번에 찾아서 담을 때 querySelectorAll 메서드 이용
const button = document.querySelector('.voting-result-button');
const results = document.querySelectorAll('.voting-result');

button.addEventListener("click", () => {
  results.forEach(result => {
    // hidden이라고 써있는 속성 제거
    result.removeAttribute('hidden');
  });
});