const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", () => {
  const x = event.clientX;
  const y = event.clientY;
  //   console.log(`${x}, ${y}`);

  // 마우스가 움직일 때마다 left, top을 바꾸면
  // layout부터 발생해서 크기가 다시 측정되고 pain도 다시해야되고 composite도 다시 일어나야 하는 나쁜 코드
  // vertical.style.left = `${x}px`;
  // horizontal.style.top = `${y}px`;
  // css에서 top, left:50%도 지운다
  // target.style.left = `${x}px`;
  // target.style.top = `${y}px`;
  // tag.style.left = `${x}px`;
  // tag.style.top = `${y}px`;
  // tag.innerHTML = `${x}px, ${y}px`;

  // 요소를 움직일 때는 translate을 이용해 composite만 발생하도록 만드는 것이 효율적이다.
  // 위치를 바꿀때 translate은 이미 페인트까지 완료된 아이들만 움직이는 거라 Layout이 발생하지 않아요
  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x}px, ${y}px)`;
  tag.style.transform = `translate(${x}px, ${y}px)`;
  tag.innerHTML = `${x}px, ${y}px`;
  // 그냥 요소의 색상을 바꾸는, 사이즈나 위치에 상관 없는 아이들은 layout을 발생하지 않아요.
  //innerHtml과 innerText들은 값을 새로 설정할때 어떻게 DOM 요소에 영향을 주냐에 따라서 Reflow가 발생 할 수도, 발생 하지 않을 수도 있어요.
});
