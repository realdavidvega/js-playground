window.addEventListener("message", (event) => {
    const { name } = event.data || {data: {name: undefined}};
    if (name === 'parent') {
        const div = document.createElement('div');
        div.innerText = 'Got information from parent!';
        document.body.appendChild(div);
    }
}, false);


document.querySelector('button').addEventListener('click', () => {
    window.postMessage({name: 'micro-frontend'});
});
