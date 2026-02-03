let Holder = [];
let number = Number(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));

for (let book = 0; book < number; book++) {
     Holder.push(prompt(`Nhập tên cuốn sách bị trả muộn thứ: ${book + 1}`));
}
console.log(`Danh sách sách bị trả muộn: ${number}`);
let count = 0;
for (let list = 0; list < Holder.length; list++){
    console.log(`${list + 1}.${Holder[list]}`);
    let lettercount = Holder[list].length;
    if(Holder[list].length > 20){
        count++;
    }
}
console.log(`Số lượng sách có tên dài hơn 20 ký tự: ${count}`);

