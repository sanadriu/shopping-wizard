function loadProduct(product) {
  const template = `
    <article class="product">
      <aside class="product__thumbnail-wrapper">
          <ul class="product__thumbnail-list">${getThumbnailsTemplate(product, product.viewDefaults.color)}</ul>
      </aside>
      <section class="product__view">
          <img class="product__view-img" alt=""/>
      </section>
      <section class="product__info">
          <h2 class="product__title">${product.name}</h2>
          <span class="product__property">Price</span>
          <span class="product__value product__price">${product.price.currency} ${product.price.value}</span>
          <span class="product__property">Size</span>
          <ul class="product__value product__size-list">${getSizeOptionsTemplate(product)}</ul>
          <span class="product__property">Color</span>
          <ul class="product__value product__color-list">${getColorOptionsTemplate(product)}</ul>
          <button class="product__buy-btn">Buy</button>
      </section>
    </article>
  `;
}

function getSizeOptionsTemplate(product) {
  let template = "";

  product.sizeList.forEach((size) => {
    template += `<li class="product__size-opt" data-size="${size}">${size}</li>`;
  });

  return template;
}

function getColorOptionsTemplate(product) {
  let template = "";

  for (const color of Object.keys(product.colorList)) {
    template += `<li><img class="product__color-opt" data-color="${color}" src="${product.colorList[color].imgs[0].src}" alt="${product.name}, ${color}"/></li>`;
  }

  return template;
}

function getThumbnailsTemplate(product, color) {
  let template = "";

  product.colorList[color].imgs.forEach((img) => {
    template += `<li><img class="product__thumbnail" src="${img.src}" alt="${product.name}, ${img.desc}"/></li>`;
  });

  return template;
}

function getPrimaryImageTemplate(product, color, viewIndex) {
  const img = product.colorList[color].imgs[viewIndex];

  const template = `<img class="product__view-img" src="${img.src}" alt="${product.name}, ${img.desc}"/>`;
}
