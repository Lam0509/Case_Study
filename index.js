let arr = [];
let pos;

function showTable() {
    let myTable;
    myTable = "<table>"
    myTable = myTable + "<tr>" + "<th colspan='7' style='font-size: 40px;color: brown'>" + 'Danh sách học viên' + "</th>" + "</tr>"
    myTable = myTable + "<tr>" + "<th>" + 'ID' + "</th>" + "<th>" + 'Họ tên' + "</th>" + "<th>" + 'Ngày sinh' + "</th>" + "<th>" + 'Giới tính' + "</th>" + "<th>" + 'Lớp' + "</th>" + "<th>" + 'Ảnh' + "</th>" + "<th>" + 'Tùy chọn' + "</th>"
    for (let i=0;i<arr.length;i++) {
        myTable = myTable + "<tr>";
        for (var j=0;j<arr[i].length-1;j++) {
            myTable = myTable + "<td>" + arr[i][j] + "</td>";
        }
        myTable = myTable + "<td>" + '<img src="'+arr[i][j]+'" alt=""/>' + "</td>";
        myTable = myTable + "<td id='options'>" + "<button type='button' onclick='deleteData("+i+")'>Delete</button>" + "<button type='button' onclick='editData("+i+")'>Edit</button>" + "</td>";
        myTable = myTable + "</tr>";
    }
    myTable = myTable + "</table>";
    document.getElementById("showList").innerHTML = myTable;
}

function addData() {
    let valueId = document.getElementById("Id").value;
    let valueName = document.getElementById("Name").value;
    let valueBirth = document.getElementById("birthday").value;
    let valueGender = document.getElementById("gender").value;
    let valueClass = document.getElementById("classroom").value;
    let valueImage = document.getElementById("linkImage").value;
    let subArr = [valueId, valueName, valueBirth, valueGender, valueClass, valueImage];
    arr.push(subArr);
    showTable();
}

function editData(index) {
    for (let j=0;j<arr[index].length;j++) {
        document.getElementsByTagName("input")[j].value = arr[index][j];
    }
    pos = index;
}

function deleteData(index) {
    arr.splice(index, 1);
    showTable();
}

function saveData() {
    for (let j=0;j<arr[pos].length;j++) {
        arr[pos][j] = document.getElementsByTagName("input")[j].value
    }
    showTable();
}












