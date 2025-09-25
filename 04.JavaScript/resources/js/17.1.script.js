function validata() {
    const inputId = document.getElementById('userId');
    const inputPw = document.getElementById('userPw');
    const checkPw = document.getElementById('checkPw');
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');

    // id
    let regExp = /^[a-z][a-z\d]{3,11}$/i;    
    if(!regExp.test(inputId.value)) {
        alert('유효한 아이디가 아닙니다.');
        inputId.value = '';
        inputId.focus();
        return false;
    }
    
    // pw
    regExp = /^[a-z\d!@#$%^&*]{8,15}$/i;
    if(!regExp.test(inputPw.value)) {
        alert('유효한 비밀번호가 아닙니다.');
        inputPw.value = '';
        inputPw.focus();
        return false;
    }
    // pw 체크시 아래와 같은 정규표현식 표현
    // 영문자, 숫자, 특수기호가 반드시 1개씩은 들어가야됨
    // ?=  앞부분 일치;
    regExp = /(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,15}/i;

    // 비밀번호 일치
    if(inputPw.value != checkPw.value) {
        alert('비밀번호가 일치하지 않습니다.');
        checkPw.value = '';
        checkPw.focus();
        return false;
    }
    

    // name
    regExp = /^[가-힣]{2,}$/;
    if(!regExp.test(inputName.value)) {
        alert('유효한 이름을 입력하세요.');
        inputName.value = '';
        inputName.focus();
        return false;
    }

    // email
    // regExp = /^[a-zA-Z\d]+@[a-z]+\.[a-z]{2,5}(\.[a-z]+)?/;
    regExp = /^\w+@[a-z]+\.[a-z]+(\.[a-z]+)?/;
    // regExp = /^\w+@\w+\.]w+(\.\w+)?/;
    if(!regExp.test(inputEmail.value)) {
        alert('유효한 이메일을 입력하세요.');
        inputEmail.value = '';
        inputEmail.focus();
        return false;
    }
}