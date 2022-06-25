const micros = Array.from(document.getElementsByTagName('iframe'));

micros.forEach(micro => {
    micro.contentWindow.addEventListener("message", ({data}) => {
        const {name = ''} = data;
        if (name.includes('MFE-')) {
            const div = document.createElement('div');
            div.innerText = `Got information from ${name}`;
            document.body.appendChild(div);
        }
    }, false);
});

document.querySelector('button').addEventListener('click', () => {
    micros.forEach(micro => micro.contentWindow.postMessage({name: 'parent'}));
});
