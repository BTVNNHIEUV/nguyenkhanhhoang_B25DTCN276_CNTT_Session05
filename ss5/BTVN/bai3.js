let bookid = [];
let bookname = [];
let inventoryQuantity = [];
let alarm = "";
let needstock = 0;
let bookcheck = Number(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

for (let book = 0; book < bookcheck; book++) {
    let id;
    while (!id || id.trim() === "") {
        id = prompt(`Nhập mã sách thứ ${book + 1}:`);
    }
    bookid.push(id);
    let name;
    while (!name || name.trim() === "") {
        name = prompt(`Nhập tên sách thứ ${book + 1}:`);
    }
    bookname.push(name);
    let quantity;
    while (quantity === undefined || Number(quantity) < 0){
        quantity = prompt("Nhập số lượng tồn kho hiện tại:");
    }
    quantity = Number(quantity);
    inventoryQuantity.push(quantity);
    if(quantity == 0){
        alarm += bookid[book] + " ";
    }else{
        if(quantity <= 5){
            needstock++;
        }
    }
}
console.log(`Danh sách cần xem xét và bổ sung (${bookcheck})`);
for (let list = 0; list < bookid.length; list++){
    console.log(`${list + 1}. Mã: ${bookid[list]} - Tên: ${bookname[list]} - Còn: ${inventoryQuantity[list]} bản`);
}
console.log(`Số sách có tồn kho <= 5 bản: ${needstock} loại`);
console.log(`Các Mã sách đã hết hàng (0 bản): ${alarm}`);