const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const imageListRef = document.querySelector('#gallery');

  const createCard = image => {
    const itemRef = document.createElement('li');
    const imageRef = document.createElement('img');
    imageRef.src = image.url;
    imageRef.alt = image.alt;
    itemRef.classList.add('js-list_item')
    itemRef.appendChild(imageRef);
    return itemRef;
  }

  const itemCard = images.map(image => createCard(image));

  imageListRef.append(...itemCard);