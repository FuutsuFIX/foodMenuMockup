//items
const menu = [
  {
    id: 1,
    title: "Cake",
    category: "breakfast",
    price: 6.99,
    img: "./assets/images/cake.jpg",
    desc: "The best mornings start with a treat",
  },
  {
    id: 2,
    title: "Pancake",
    category: "breakfast",
    price: 4.99,
    img: "./assets/images/pancake.jpg",
    desc: "It's like a cake, but it's cooked in a pan!",
  },

  {
    id: 3,
    title: "Salami",
    category: "appetizer",
    price: 3.99,
    img: "./assets/images/salame.jpg",
    desc: "In italian it's called 'Salame', did you know?",
  },
  {
    id: 4,
    title: "hamburger",
    category: "lunch",
    price: 11.99,
    img: "./assets/images/hamburger.jpg",
    desc: "Have a taste of our tasty and crispy meat!",
  },
  {
    id: 5,
    title: "Salmon",
    category: "lunch",
    price: 16.99,
    img: "./assets/images/salmon.jpg",
    desc: "For those who prefers an elegant lunch",
  },
  {
    id: 6,
    title: "Smoothie",
    category: "beverage",
    price: 2.99,
    img: "./assets/images/smoothie.jpg",
    desc: "A green smoothie",
  },
  {
    id: 7,
    title: "Tea",
    category: "beverage",
    price: 1.99,
    img: "./assets/images/tea.jpg",
    desc: "For a beatiful evening",
  },
];

const menuTest = [
  {
    id: 1,
    title: "Cake",
    category: "breakfast",
    price: 6.99,
    img: "./assets/images/cake.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget auctor libero, quis tempus tortor. Mauris sed urna purus. In.",
  },
  {
    id: 2,
    title: "Pancake",
    category: "breakfast",
    price: 4.99,
    img: "./assets/images/pancake.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget auctor libero, quis tempus tortor. Mauris sed urna purus. In.",
  },

  {
    id: 3,
    title: "Salami",
    category: "appetizer",
    price: 3.99,
    img: "./assets/images/salame.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget auctor libero, quis tempus tortor. Mauris sed urna purus. In.",
  },
  {
    id: 4,
    title: "hamburger",
    category: "lunch",
    price: 11.99,
    img: "./assets/images/hamburger.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget auctor libero, quis tempus tortor. Mauris sed urna purus. In.",
  },
  {
    id: 5,
    title: "Salmon",
    category: "lunch",
    price: 16.99,
    img: "./assets/images/salmon.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget auctor libero, quis tempus tortor. Mauris sed urna purus. In.",
  },
  {
    id: 6,
    title: "Smoothie",
    category: "beverage",
    price: 2.99,
    img: "./assets/images/smoothie.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget auctor libero, quis tempus tortor. Mauris sed urna purus. In.",
  },
  {
    id: 7,
    title: "Tea",
    category: "beverage",
    price: 1.99,
    img: "./assets/images/tea.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget auctor libero, quis tempus tortor. Mauris sed urna purus. In.",
  },
];

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menuTest);
  displayMenuBtns();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns() {
  const categories = menuTest.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
    </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menuTest.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menuTest);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
