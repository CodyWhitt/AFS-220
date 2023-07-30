document.addEventListener('DOMContentLoaded', function() {
    var menuSoupSalad = document.getElementById('menuSoupSalad');
    var menuPastaBar = document.getElementById('menuPastaBar');
    var menuSandwiches = document.getElementById('menuSandwiches');

    var btnSoupSalad = document.getElementById('btnSoupSalad');
    var btnPastaBar = document.getElementById('btnPastaBar');
    var btnSandwiches = document.getElementById('btnSandwiches');

    function hideAllMenus() {
        menuSoupSalad.style.display = 'none';
        menuPastaBar.style.display = 'none';
        menuSandwiches.style.display = 'none';
    }

    function showMenu(menu) {
        hideAllMenus();
        menu.style.display = 'block';
    }

    showMenu(menuSoupSalad);

    btnSoupSalad.addEventListener('click', function() {
        showMenu(menuSoupSalad);
    });

    btnPastaBar.addEventListener('click', function() {
        showMenu(menuPastaBar);
    });

    btnSandwiches.addEventListener('click', function() {
        showMenu(menuSandwiches);
    });

    const menuItemsContainer = document.getElementById("menu-container");

    menuItems.forEach((item) => {
        const menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menu-item");

        const titleElement = document.createElement("h3");
        titleElement.innerText = item.title;
        menuItemDiv.appendChild(titleElement);

        if (item.price !== null) {
            const priceElement = document.createElement("strong");
            priceElement.innerText = `$${item.price.toFixed(2)}`;
            menuItemDiv.appendChild(priceElement);
        }

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = item.description;
        menuItemDiv.appendChild(descriptionElement);

        switch (item.category) {
            case "soup_salad":
                menuSoupSalad.appendChild(menuItemDiv);
                break;
            case "pasta_bar":
                menuPastaBar.appendChild(menuItemDiv);
                break;
            case "sandwiches":
                menuSandwiches.appendChild(menuItemDiv);
                break;
            default:
                break;
        }
    });
});
