let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
while(true){
    let choices = Number(prompt(
    "====== QUẢN LÝ THƯ VIỆN 4.0 ======\n"+
    "1 - Hiển thị sách\n"+
    "2 - Thêm sách mới\n"+
    "3 - Mượn sách (xóa)\n"+
    "4 - Cập nhật sách\n"+
    "5 - Sắp xếp A-Z\n"+
    "0 - Thoát\n"+
    "Nhập lựa chọn của bạn"
    ));
    switch (choices) {
    case 1:{
        console.log("Danh sách hiện tại (3 cuốn):");
        for (let list = 0; list < books.length; list++) {
            console.log(`${list + 1} . ${books[list]}`);
        }
        break;
    }
    case 2:{
        let newbook = prompt("nhập sách mới");
        books.push(newbook);
        break;
    }
    case 3:{
        let borrow = prompt("Nhập sách cần mượn");
        let locate = -1;
        for (let check = 0; check < books.length; check++) {
            if (books[check] == borrow){
                locate = check;
                break;
            }
        }
        if (locate == -1){
            alert("không tìm thấy sách");
        }else{
            alert(`Đã cho mượn cuốn '${locate}'`)
            books.splice(locate,1);
        }
        break;
        }
    case 4:{
        let update = prompt("nhập sách cần cập nhật");
        let locate = -1;
        for (let check = 0; check < books.length; check++) {
            if(books[check] == update){
                locate = check;
                break;
            }   
        }
        if (locate == -1){
            alert("không tìm thấy sách");
        }else{
            let bookupdate = prompt("đổi thành?");
            books.splice(locate, 1, bookupdate);
        }
        break;
    }
    case 5:
        books.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        break;
    case 0:
        alert("chào tạm biệt");
        break;
    default:
        alert("lựa chọn không phù hợp");
}
if (choices == 0) {
    break;
}
}