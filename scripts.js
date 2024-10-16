
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('h1, h2, h3');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const sibling = header.nextElementSibling;

            if (sibling && sibling.tagName === 'P') {
                sibling.style.display = sibling.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    const toc = document.querySelector("#toc ul");
    headers.forEach((header) => {

        if (header.innerText === "Table of Contents") return;

        const tocItem = document.createElement('li');
        const tocLink = document.createElement('a');
        
        tocLink.href = `#${header.id}`;
        tocLink.innerText = header.innerText;

        tocItem.style.marginLeft = `${(header.tagName === 'H2' ? 20 : header.tagName === 'H3' ? 40 : 0)}px`;
        
        tocItem.appendChild(tocLink);
        toc.appendChild(tocItem);
    });
});
