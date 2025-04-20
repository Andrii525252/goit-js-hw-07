const listElem = document.querySelector('#categories');
const listItemElem = listElem.querySelectorAll('.item');
console.log(`Number of categories: ${listItemElem.length}`);


for (const item of listItemElem) {
    const title = item.querySelector('h2').textContent;
    const text = item.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${text}`);
}