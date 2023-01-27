function solution(x) {
  // x의 각 자리에 접근하기 위해 x를 문자열로 변환
  let x_str = x.toString();
  // 각 자릿수의 합을 저장할 변수
  let sum_of_digits = 0;
  // x_str의 각 문자를 숫자로 바꿔 sum_of_digits에 더해줌
  for (let i = 0; i < x_str.length; i++) {
    sum_of_digits += Number(x_str[i]);
  }
  // x가 각 자릿수의 합으로 나누어떨어지는지 여부 반환
  return x % sum_of_digits == 0;
}

