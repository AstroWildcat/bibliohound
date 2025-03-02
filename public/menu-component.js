// menu-component.js

class MenuComponent extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a template element
        const template = document.createElement('template');

        // Define the HTML structure
        template.innerHTML = `
            <style>
                body, html {
                    width: 100%;
                    overflow-x: hidden;
                }

                .image-links {
                    display: flex;
                    flex-direction: column;
                    row-gap: 25px; 
                    width: 100%;
                    margin: 0 25%;
                    overflow-y: scroll;
                }

                .image-links > a {
                    max-width: 50%;
                    max-height: auto;
                    display: inline-block;
                }

                .image-links > a > img {
                    max-width: 100%;
                    max-height: auto;
                    display: block;
                }

                @media screen and (max-device-width: 812px) {
                    .image-links {
                        display: flex;
                        flex-direction: row;
                        gap: 0 10px;
                        width: 100%;
                    }
                    
                    .image-links > a > img {
                        max-width: 75px;
                        height: auto;
                    }
                }
            </style>
            <div class="image-links">
                <a href="/"><img src="https://bibliohound.neocities.org/images/sidebar/home.png" target="_top" alt="Home"></a>
                <a href="/about"><img src="https://bibliohound.neocities.org/images/sidebar/about.png" alt="About Me"></a>
                <a href="/stories"><img src="https://bibliohound.neocities.org/images/sidebar/stories.png" target="_top" alt="Stories"></a>
                <a href="/characters"><img src="https://bibliohound.neocities.org/images/sidebar/characters.png" target="_top" alt="Characters"></a>
                <a href="/shrines"><img src="https://bibliohound.neocities.org/images/sidebar/shrines.png" target="_top" alt="Shrines"></a>
                <a href="/graphics"><img src="https://bibliohound.neocities.org/images/sidebar/graphics.png" target="_top" alt="Graphics"></a>
                <a href="/entertainment"><img src="https://bibliohound.neocities.org/images/sidebar/entertainment.png" target="_top" alt="Fun Stuff"></a>
                <a href="/webrings"><img src="https://bibliohound.neocities.org/images/sidebar/webrings.png" target="_top" alt="Webrings"></a>
                <a href="/websites"><img src="https://bibliohound.neocities.org/images/sidebar/websites.png" target="_top" alt="Other Websites"></a>
            </div>
        `;

        // Append the template content to the shadow root
        shadow.appendChild(template.content.cloneNode(true));

        // Add event listeners to the links
        shadow.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default link behavior
                window.parent.location.href = this.href; // Navigate the parent window
            });
        });
    }
}

// Define the custom element
customElements.define('menu-component', MenuComponent);