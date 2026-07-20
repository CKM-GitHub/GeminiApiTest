document.addEventListener("DOMContentLoaded", function () {

``
const menuHtml = `
    <nav style="
        background:#1f2937;
        padding:0;
        margin-bottom:20px;
        font-family:Arial,sans-serif;
    ">
        <div style="
            display:flex;
            flex-wrap:wrap;
            align-items:center;
        ">
           <a href="Wristband.html" class="menu-link">💪 Wristband</a>
<a href="BaseballBatAIPrompt.html" class="menu-link">⚾ Baseball Bat AI Prompt</a>
<a href="Aifashion.html" class="menu-link">🎨 Virtual Try On AI</a>
<a href="product-prompt-generator.html" class="menu-link">🖼️ First Image Generator</a>
<a href="Tennis_Racket.html" class="menu-link">🎾 Tennis Racket</a>

        </div>
    </nav>
`;

document.body.insertAdjacentHTML("afterbegin", menuHtml);

const style = document.createElement("style");
style.innerHTML = `
    .menu-link{
        color:white;
        text-decoration:none;
        padding:14px 18px;
        display:block;
        transition:.2s;
    }

    .menu-link:hover{
        background:#374151;
    }

    .menu-link.active{
        background:#2563eb;
        font-weight:bold;
    }

    @media(max-width:768px){
        .menu-link{
            width:100%;
            border-top:1px solid rgba(255,255,255,.1);
        }
    }
`;
document.head.appendChild(style);

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
``

});
