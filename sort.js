'use strict'

class Products {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

}

const productsList = [];
productsList.push(new Products('001', 'apples', 50))
productsList.push(new Products('002', 'oranges', 60))
productsList.push(new Products('003', 'pineapples', 73))
productsList.push(new Products('004', 'nuts', 15))
productsList.push(new Products('005', 'pears', 36))
productsList.push(new Products('006', 'plums', 43))
productsList.push(new Products('007', 'bananas', 18))
productsList.push(new Products('008', 'mango', 92))
productsList.push(new Products('009', 'jackfruits', 450))
productsList.push(new Products('010', 'coconuts', 100))
productsList.push(new Products('011', 'lychee', 30))
productsList.push(new Products('012', 'watermelons', 150));

const tableRows = document.getElementById('tableRows');
document.getElementById('tableHeader').addEventListener('click', sortColumn);

const ascendingColumns = { idHeader: false, nameHeader: false, priceHeader: false }

productsList.forEach(displayTable)

function displayTable(element) {

    tableRows.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                </tr>
                `
}

function sortColumn(event) {
    if (event.target.id === 'idHeader') {
        productsList.sort((a, b) => stringSort(a.id, b.id, ascendingColumns.idHeader))
        ascendingColumns.idHeader = !ascendingColumns.idHeader;
    } else if (event.target.id === 'nameHeader') {
        productsList.sort((a, b) => stringSort(a.name, b.name, ascendingColumns.nameHeader))
        ascendingColumns.nameHeader = !ascendingColumns.nameHeader;
    } else if (event.target.id === 'priceHeader') {
        productsList.sort((a, b) => numbersSort(a.price, b.price, ascendingColumns.priceHeader))
        ascendingColumns.priceHeader = !ascendingColumns.priceHeader;
    }

    tableRows.innerHTML = '';
    productsList.forEach(displayTable)
}



function stringSort(first, second, isAsc) {
    const nameA = first.toUpperCase();
    const nameB = second.toUpperCase();

    return numbersSort(nameA, nameB, isAsc)

}

function numbersSort(first, second, isAsc) {
    if (isAsc === false) {
        if (first > second)
            return -1;

        if (first < second)
            return 1;
    } else {
        if (first < second)
            return -1;

        if (first > second)
            return 1;
    }
    return 0;
}