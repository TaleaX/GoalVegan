const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
        nav {
            display: flex;
            justify-content: center;
            font-size: 20px;
            padding: 0.5%;
            /* background-color: #aaaaaa; */
            background-color: rgba(100, 100, 100, 0.5);
        }
        
        .nav-elem {
            text-decoration: none;
            color:rgb(61, 61, 61);
            border-radius: 1px;
            /* margin: 0.5%; */
            padding: 0.5% 1% 0.5% 1%;
            background-color: rgb(104, 104, 104);
            /* opacity: 1!important; */
        }
        
        .nav-elem:hover {
            color: rgb(224, 224, 224);
        }
        .active {
            background-color: #a3a3a3;
        }
    </style>
    <nav>
        <a class="nav-elem" href="/public/index.html">Home</a>
        <a class="nav-elem" href="/public/breakfast.html">Breakfast</a>
        <a class="nav-elem" href="/public/dinner.html">Dinner</a>
    </nav>
`;

class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(headerTemplate.content);
        const currentPath = window.location.pathname;
        const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
        const parentFolder = currentPath.split('/').slice(-2, -1)[0] + '/';
        const navLinksActive = shadowRoot.querySelectorAll('.nav-elem .active');
        const navLinks = shadowRoot.querySelectorAll('.nav-elem');
        console.log(filename);
        console.log(basePath);
        console.log(parentFolder);
        navLinksActive.forEach(link => {
            link.classList.remove("active");
        });
        if (parentFolder == "dinner/" || filename == "dinner.html") {
            navLinks[2].classList.add("active");
        } else if (parentFolder == "breakfast/" || filename == "breakfast.html") {
            navLinks[1].classList.add("active");
        } else if (parentFolder == "public/" || filename == "index.html") {
            navLinks[0].classList.add("active");
        }
    }
}

customElements.define('header-component', Header);