const micros = Array.from(document.getElementsByTagName('iframe'));

micros.forEach(micro => {
    micro.contentWindow.addEventListener("message", ({data}) => {
        const {name = ''} = data;
        if (name.includes('micro')) {
            const div = document.createElement('div');
            div.innerText = 'Got information from micro!';
            document.body.appendChild(div);
        }
    }, false);
});

document.querySelector('button').addEventListener('click', () => {
    micros.forEach(micro => micro.contentWindow.postMessage({name: 'parent'}));
});
