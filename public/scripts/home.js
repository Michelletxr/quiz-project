
const loadPag = (e) => {
    localStorage.setItem("index", 1)
    e.preventDefault();
    fetch(`http://localhost:3000/update-question/1`, {
        method: 'GET',
        redirect:'follow'
    })
    .then(res => res.redirected && ( location.href = res.url ))
}


document
    .getElementById('init-quizz')
    .addEventListener('click', loadPag)

let points = 0
localStorage.setItem('points', points)
