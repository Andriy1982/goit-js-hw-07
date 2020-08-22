const listRef = document.querySelector('#categories');
const numberOfCategories = listRef.children.length;
console.log(`В списке ${numberOfCategories} категории.`);

const listItemsRef = document.querySelectorAll('.item');

listItemsRef.forEach(item => {
    const textTitle = item.firstElementChild.textContent;
    const numberOfElements = item.lastElementChild.children.length;
    console.log(`Категория: ${textTitle}\nКоличество элементов: ${numberOfElements}`);
})