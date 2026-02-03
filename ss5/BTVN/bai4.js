let bookid = [];
let bookname = [];
let bookStatus = [];

let bookcheck = Number(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));
for (let book = 0; book < bookcheck; book++){
    let id;
    while (!id || id.trim() == ""){
        id = prompt(`Nhập mã sách thứ ${book + 1}:`);
    }
    bookid.push(id);
    let name;
    while (!name || name.trim() == ""){
        name = prompt(`Nhập tên sách thứ ${book + 1}:`);
    }
    bookname.push(name);
    let status;
    do{
        status = prompt(
            "Nhập tình trạng ban đầu (chọn số 1–3)\n" +
            "1 → Hỏng nhẹ\n" +
            "2 → Hỏng nặng\n" +
            "3 → Cần sửa gấp\n"
        );
    }while (Number(status) < 1 || Number(status) > 3)
       
    status = Number(status);
    if (status == 1){
        status = "Hỏng nhẹ";
    }else if (status == 2){
        status = "Hỏng nặng"
    }else{
        status = "Cần sửa gấp"
    }
    bookStatus.push(status);
}
console.log(`Danh sách hiện tại có (${bookcheck} cuốn)`);
for (let list = 0; list < bookid.length; list++){
    console.log(`${list + 1}. ${bookid[list]} - ${bookname[list]} - ${bookStatus[list]}`);
}
let jobdone = 0;
let bookgone = 0;
while (true) {
    let choices = Number(prompt(
        "mời chọn những function sau\n" +
        "1: Sửa tình trạng một cuốn sách\n" +
        "2: Loại bỏ (xóa) một cuốn sách khỏi danh sách\n" +
        "0: Kết thúc và in báo cáo cuối"
    ));
    switch (choices) {
            case 1:{
                let editid = prompt("Nhập mã sách cần sửa:")
                let locate = -1;
                for (let check = 0; check < bookid.length; check++) {
                    if (bookid[check] == editid) {
                        locate = check;
                        break
                    }; 
                }
                if (locate == -1){
                    alert("không tìm thấy sách")
                }else{
                    let newStatus;
                do {
                    newStatus = Number(prompt(
                        "Chọn tình trạng mới (1–5)\n" +
                        "1: Hỏng nhẹ\n" +
                        "2: Hỏng nặng\n" +
                        "3: Cần sửa gấp\n" +
                        "4: Đã sửa xong\n" +
                        "5: Loại bỏ"
                    ));
                }while(newStatus < 1 || newStatus > 5);
                    if (newStatus == 1) {
                        newStatus = "Hỏng nhẹ";
                    }else if (newStatus == 2) {
                        newStatus = "Hỏng nặng";
                    }else if (newStatus == 3) {
                        newStatus = "Cần sửa gấp";
                    }else if (newStatus == 4) {
                        newStatus = "Đã sửa xong";
                        jobdone++;
                    }else{
                        newStatus == "Loại bỏ";
                        bookgone++;
                    }
                bookStatus[locate] = newStatus;
                }
                break;
            }
            case 2:{
                let editid = prompt("Nhập mã sách cần xóa:")
                let locate = -1;
                for (let check = 0; check < bookid.length; check++) {
                    if (bookid[check] == editid) {
                        locate = check;
                        break;
                    }
                    if (locate == -1){
                        alert("không tìm thấy sách")
                    }else{
                        bookid.splice(locate, 1);
                        bookname.splice(locate, 1);
                        bookStatus.splice(locate, 1);
                    }
                }
                break;
            }
            case 0:
                console.log("Kết thúc và in báo cáo cuối");
                break;
            default:
                alert("Lựa chọn không hợp lệ");
    }
    if (choices == 0) {
        break;
    }
}
console.log("Danh sách hiện tại:");
console.log(`Tổng số sách còn lại: ${bookid.length}`);
console.log(`Số sách đã "Đã sửa xong": ${jobdone}`);
console.log(`Số sách "Loại bỏ": ${bookgone}`);
for (let list = 0; list < bookid.length; list++){
    console.log(`${list + 1}. ${bookid[list]} - ${bookname[list]} - ${bookStatus[list]}`);
}