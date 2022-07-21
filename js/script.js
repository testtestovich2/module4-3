// const nameOfProduct = 'Hyundai H-SF16-F1601'; // Наименование товара
// const quantityOfGoods = 5; // Количество товара
// const productCategory = 'Вентилятор'; // Категория товара
// const priceProduct = 89; // Цена товара

// console.log('Наименование товара: ', nameOfProduct);

// let totalAmount = quantityOfGoods * priceProduct;
// console.log('Общая сумма:', totalAmount);

{
    let nameOfProduct = prompt('Введите наименование товара', 'Hyundai H-SF16-F1601');
    // console.log('Тип данных Наименование товара: ', typeof nameOfProduct);
    // console.log('Значение: ', nameOfProduct);

    let quantityOfGoods = +prompt('Введите количество товара: ', 5);
    // console.log('Тип данных количества товара: ', typeof quantityOfGoods);
    // console.log('Значение: ', quantityOfGoods);

    let productCategory = prompt('Введите категорию товара', 'Вентилятор');
    // console.log('Тип данных Категория товара: ', typeof productCategory);
    // console.log('Значение: ', productCategory);

    let priceProduct = +prompt('Введите цену товара', 89);
    // console.log('Тип данных цену товара: ', typeof priceProduct);
    // console.log('Значение: ', priceProduct);

    let totalAmount = quantityOfGoods * priceProduct;
    if(isNaN(quantityOfGoods) || isNaN(priceProduct)){
        console.log('Вы ввели некорректные данные');
    }else{
        console.log(`На складе ${quantityOfGoods} единиц товара ${productCategory} на сумму ${totalAmount} деревянных`);
    }
}