const iframe = document.querySelector('iframe');
iframe.contentWindow.addEventListener("message", (event) => {
    const { name } = event.data || {data: {name: undefined}};
    if (name === 'micro-frontend') {
        const div = document.createElement('div');
        div.innerText = 'Got information from micro-frontend!';
        document.body.appendChild(div);
    }
}, false);

document.querySelector('button').addEventListener('click', () => {
    iframe.contentWindow.postMessage({name: 'parent'});
});
