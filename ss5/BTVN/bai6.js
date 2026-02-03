let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let totalOverdueReaders;
do {
    totalOverdueReaders = Number(
        prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?")
    );
} while (isNaN(totalOverdueReaders) || totalOverdueReaders <= 0);
for (let readerIndex = 0; readerIndex < totalOverdueReaders; readerIndex++) {
    let inputReaderCardId;
    do {
        inputReaderCardId = prompt(`Nhập mã thẻ bạn đọc thứ ${readerIndex + 1}:`);
    } while (!inputReaderCardId || readerCardIds.includes(inputReaderCardId));
    let inputReaderName;
    do {
        inputReaderName = prompt(`Nhập tên bạn đọc thứ ${readerIndex + 1}:`);
    } while (!inputReaderName);
    let inputBorrowedBooks;
    do {
        inputBorrowedBooks = prompt(
            `Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):`
        );
    } while (!inputBorrowedBooks);
    let inputOverdueDays;
    do {
        inputOverdueDays = Number(
            prompt(`Nhập số ngày quá hạn:`)
        );
    } while (isNaN(inputOverdueDays) || inputOverdueDays < 0);
    readerCardIds.push(inputReaderCardId);
    readerNames.push(inputReaderName);
    borrowedBookCodes.push(inputBorrowedBooks);
    overdueDays.push(inputOverdueDays);
}
let overdueTenDaysCount = 0;
for (let countIndex = 0; countIndex < overdueDays.length; countIndex++) {
    if (overdueDays[countIndex] >= 10) {
        overdueTenDaysCount++;
    }
}
console.log(`Danh sách bạn đọc quá hạn (${totalOverdueReaders} người):`);
for (let list = 0; list < readerCardIds.length; list++){
    console.log(`${list + 1}. Mã thẻ: ${readerCardIds[list]} | Tên: ${readerNames[list]} | Sách đang mượn: ${borrowedBookCodes[list]} | Quá hạn: ${overdueDays[list]}`);
}
console.log(
    "Tổng số bạn đọc quá hạn ≥ 10 ngày:",
    overdueTenDaysCount,
    "người"
);
console.log("Các bạn đọc đang mượn cả sách JS* và PYT*:");
for (let checkIndex = 0; checkIndex < borrowedBookCodes.length; checkIndex++) {
    let borrowedText = borrowedBookCodes[checkIndex].toUpperCase();
    if (borrowedText.includes("JS") && borrowedText.includes("PYT")) {
        console.log(readerCardIds[checkIndex]);
    }else{
        console.log("không bạn nào");
    }
}
let maxOverdueIndex = 0;
for (let compareIndex = 1; compareIndex < overdueDays.length; compareIndex++) {
    if (overdueDays[compareIndex] > overdueDays[maxOverdueIndex]) {
        maxOverdueIndex = compareIndex;
    }
}
console.log(
    "Bạn đọc có số ngày quá hạn cao nhất:",
    readerNames[maxOverdueIndex],
    `(${overdueDays[maxOverdueIndex]} ngày)`
);
let overdueSevenDaysCount = 0;
for (let warningIndex = 0; warningIndex < overdueDays.length; warningIndex++) {
    if (overdueDays[warningIndex] >= 7) {
        overdueSevenDaysCount++;
    }
}
if (overdueSevenDaysCount === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (overdueSevenDaysCount <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
