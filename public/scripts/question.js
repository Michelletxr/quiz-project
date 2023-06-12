

const loadPag = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/update-question/0`, {
        method: 'GET',
        redirect:'follow'
    })
    .then(res => res.redirected && ( location.href = res.url ))
}