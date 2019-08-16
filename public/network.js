class Network {
    static get = (uri) => {
        return fetch(uri, {
            credentials: 'include',
        })
    }

    static render = (id, content) => {
        const setInnerHTML = (elm, html) => {
            elm.innerHTML = html;
            Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
                const newScript = document.createElement("script");
                Array.from(oldScript.attributes)
                    .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });
        }

        const element= document.getElementById(id)
        console.log("render:", element, id)
        setInnerHTML(element, content)
    }

    static responseToBody = (response) => {
        return response.text();
    }

    static renderHtml = (url, id) => {
        Network.get(url)
            .then(Network.responseToBody)
            .then(Network.render.bind(this, id))
    }
}

export {Network}
