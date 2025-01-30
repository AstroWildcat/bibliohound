function insertHTML() {
  const targetElement = document.getElementById("menu"); // Get the element where you want to insert the HTML
  const newHTML = `
    <link rel="stylesheet" href="style.css">
<div class="image-links">
<a href="/"><img src="https://bibliohound.neocities.org/images/sidebar/home.png" alt="Home"></a>
<a href="/about"><img src="https://bibliohound.neocities.org/images/sidebar/about.png"
        alt="About Me"></a>
<a href="/stories"><img src="https://bibliohound.neocities.org/images/sidebar/stories.png"
        alt="Stories"></a>
<a href="/characters"><img src="https://bibliohound.neocities.org/images/sidebar/characters.png"
        alt="Characters"></a>
<a href="/shrines"><img src="https://bibliohound.neocities.org/images/sidebar/shrines.png"
        alt="Shrines"></a>
<a href="/graphics"><img src="https://bibliohound.neocities.org/images/sidebar/graphics.png"
        alt="Graphics"></a>
<a href="/entertainment"><img
        src="https://bibliohound.neocities.org/images/sidebar/entertainment.png"
        alt="Fun Stuff"></a>
<a href="/webrings"><img src="https://bibliohound.neocities.org/images/sidebar/webrings.png"
        alt="Webrings"></a>
<a href="/websites"><img src="https://bibliohound.neocities.org/images/sidebar/websites.png"
        alt="Other Websites"></a>
</div>
  `;

  targetElement.insertAdjacentHTML("beforeend", newHTML); // Insert the HTML at the end of the target element
}