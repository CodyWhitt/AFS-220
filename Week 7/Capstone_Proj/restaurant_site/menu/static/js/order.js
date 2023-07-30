document.addEventListener('DOMContentLoaded', function() {
    const menuItemsContainer = document.querySelector(".menu-section");
    const orderContainer = document.getElementById("order-container");
    const btnCheckout = document.getElementById("btnCheckout");
    const categories = {};
    let orderItems = [];

    function displayMenuItems() {
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

            const addButton = document.createElement("button");
            addButton.innerText = "Add to Order";
            addButton.addEventListener("click", () => addToOrder(item));
            menuItemDiv.appendChild(addButton);

            const category = item.category || 'Others';
            if (!categories[category]) {
                categories[category] = document.createElement('div');
                categories[category].classList.add('category-column');

                const categoryBox = document.createElement('div');
                categoryBox.classList.add('menu-item');
                categoryBox.innerText = category;
                categories[category].appendChild(categoryBox);
            }
            categories[category].appendChild(menuItemDiv);
        });

        for (const category in categories) {
            const categoryColumn = categories[category];
            menuItemsContainer.appendChild(categoryColumn);
        }
    }

    function addToOrder(item) {
        orderItems.push(item);
        updateOrderDisplay();
    }

    function updateOrderDisplay() {
        orderContainer.innerHTML = "";

        orderItems.forEach((item) => {
            const orderItemDiv = document.createElement("div");
            orderItemDiv.classList.add("order-item");

            const titleElement = document.createElement("h3");
            titleElement.innerText = item.title;
            orderItemDiv.appendChild(titleElement);

            if (item.price !== null) {
                const priceElement = document.createElement("strong");
                priceElement.innerText = `$${item.price.toFixed(2)}`;
                orderItemDiv.appendChild(priceElement);
            }

            orderContainer.appendChild(orderItemDiv);
        });

        const totalPrice = orderItems.reduce((total, item) => total + (item.price || 0), 0);
        const totalElement = document.createElement("h3");
        totalElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
        orderContainer.appendChild(totalElement);
    }

    displayMenuItems();

    btnCheckout.addEventListener('click', function() {
        alert("Thank you for your order!");
        orderItems = [];
        updateOrderDisplay();
    });
});
