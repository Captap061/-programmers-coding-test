function solution(n) { //수학적 풀이는 별도로 하지 않았습니다.
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let sum = 0
        for (let j = i; j <= n; j++) {
            sum += j
            if (sum >= n) {
                if (sum === n) answer++
                break
            }
        }
    }
    return answer;
}

