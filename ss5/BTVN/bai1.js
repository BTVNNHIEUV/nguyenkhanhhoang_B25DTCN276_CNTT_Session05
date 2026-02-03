let Holder = [];
let number = Number(prompt("Bạn muốn trả bao nhiêu cuốn sách ?"));

for (let book = 0; book < number; book++) {
     Holder.push(prompt(`Nhập tên sách thứ: ${book + 1}`));
}
console.log(`số sách đã trả: ${number}`);
for (let list = 0; list < Holder.length; list++){
    console.log(`${list + 1}.${Holder[list]}`);
}
