const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
const listRef = document.querySelector('#ingredients');

const createItemCard = ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    return itemRef;
}

const itemCard = ingredients.map(ingredient => createItemCard(ingredient));

listRef.append(...itemCard);
