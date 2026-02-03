let bookIdList = [];
let bookNameList = [];
let bookCategoryList = [];
let bookInventoryList = [];
let totalBookTypes;
do {
    totalBookTypes = Number(
        prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?")
    );
} while (isNaN(totalBookTypes) || totalBookTypes <= 0);
for (let bookIndex = 0; bookIndex < totalBookTypes; bookIndex++) {
    let inputBookId;
    do {
        inputBookId = prompt(`Nhập mã sách thứ ${bookIndex + 1}:`);
    } while (!inputBookId || bookIdList.includes(inputBookId));
    let inputBookName;
    do {
        inputBookName = prompt(`Nhập tên sách thứ ${bookIndex + 1}:`);
    } while (!inputBookName);
    let inputBookCategory;
    do {
        inputBookCategory = prompt(
            `Nhập các thể loại của sách thứ ${bookIndex + 1} (cách nhau bởi dấu phẩy):`
        );
    } while (!inputBookCategory);
    let inputInventoryQuantity;
    do {
        inputInventoryQuantity = Number(
            prompt(`Nhập số lượng tồn kho của sách thứ ${bookIndex + 1}:`)
        );
    } while (isNaN(inputInventoryQuantity) || inputInventoryQuantity < 0);
    bookIdList.push(inputBookId);
    bookNameList.push(inputBookName);
    bookCategoryList.push(inputBookCategory);
    bookInventoryList.push(inputInventoryQuantity);
}
let programmingBookCount = 0;
for (let checkIndex = 0; checkIndex < bookCategoryList.length; checkIndex++) {
    if (bookCategoryList[checkIndex].toLowerCase().includes("lập trình")) {
        programmingBookCount++;
    }
}
console.log(
    "Tổng số sách thuộc thể loại 'Lập trình':",
    programmingBookCount
);
console.log(
    "Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':"
);
for (let searchIndex = 0; searchIndex < bookCategoryList.length; searchIndex++) {
    let categoryTextLower = bookCategoryList[searchIndex].toLowerCase();
    if (categoryTextLower.includes("javascript") && categoryTextLower.includes("web")) {
        console.log(bookIdList[searchIndex]);
    }
}
let lowestInventoryIndex = 0;
for (let compareIndex = 1; compareIndex < bookInventoryList.length; compareIndex++) {
    if (bookInventoryList[compareIndex] < bookInventoryList[lowestInventoryIndex]) {
        lowestInventoryIndex = compareIndex;
    }
}
console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(
    "Mã sách:", bookIdList[lowestInventoryIndex],
    ", Tên sách:", bookNameList[lowestInventoryIndex],
    ", Tồn kho:", bookInventoryList[lowestInventoryIndex]
);