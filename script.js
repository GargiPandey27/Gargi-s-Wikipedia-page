// collapsible section
document.querySelectorAll(".collapsible").forEach((heading) => {
    heading.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});


const tocList = document.getElementById('toc-list');
let tocItems = [];

document.querySelectorAll('section').forEach((section, index) => {
    const h1 = section.querySelector('h1');
    if (h1) {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${h1.textContent}`;
        tocList.appendChild(li);
        tocItems.push({ li: li, section: section });
    }

    section.querySelectorAll('h2').forEach((h2, subIndex) => {
        let subLi = document.createElement('li');
        subLi.textContent = `    ${index + 1}.${subIndex + 1} ${h2.textContent}`;
        subLi.style.paddingLeft = '20px';
        tocList.appendChild(subLi);
        tocItems.push({ li: subLi, section: section });
    });

    section.querySelectorAll('h3').forEach((h3, subSubIndex) => {
        let subSubLi = document.createElement('li');
        subSubLi.textContent = `        ${index + 1}.${subSubIndex + 1} ${h3.textContent}`;
        subSubLi.style.paddingLeft = '40px';
        tocList.appendChild(subSubLi);
    });
});


tocItems.forEach(({ li, section }) => {
    li.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
