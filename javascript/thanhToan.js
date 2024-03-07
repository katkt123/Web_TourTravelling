let DL = JSON.parse(localStorage.getItem("thanhToan"));

//localStorage.setItem("thanhToan", JSON.stringify(DL));

//let tranHien = document.getElementById("trang_hien");

import {DataBD,removeAccents} from "/javascript/StartedData.js";

var DSVe = DataBD;

if (JSON.parse(localStorage.getItem("DSVe")) === null){
	console.log("không tìm thấy");
} else {
	var DSVeLS = JSON.parse(localStorage.getItem("DSVe"));
	for (var i = 0;i < DSVeLS.length;i++){
		DSVe.push(DSVeLS[i]);
	}
}
let VoHang = JSON.parse(localStorage.getItem("Vohang"))
var soVe = 0;
for (var i = 0;i < DSVe.length;i++){
	if (DL === DSVe[i].IDDL){
		for (var j = 0;j < VoHang.length;j++){
			console.log(VoHang[i], removeAccents(DSVe[i].address));
			if (removeAccents(DSVe[i].address) === VoHang[j]){
				soVe++;
			}
		}
		let Dulich = document.getElementById("Ten");
		Dulich.innerHTML = "Du Lịch " + DSVe[i].address;
		let gia = document.getElementById("gia");
		gia.innerHTML =  DSVe[i].price + "đ/khách";

		var phuongTien = "";
		if (DSVe[i].vehicle1)
			phuongTien += PhuongTienMayBay();
		if (DSVe[i].vehicle2)
			phuongTien += PhuongTienXe();
		if (DSVe[i].vehicle3)
			phuongTien += PhuongTienTauThuy();
		let phuongtien2 = document.getElementById("phuongtien");
		phuongtien2.innerHTML = phuongTien;


		let khoi_hanh = document.getElementById("khoi_hanh");
		khoi_hanh.innerHTML = "Khởi hành lúc: " + DSVe[i].start;

		let thoi_gian = document.getElementById("thoi_gian");
		thoi_gian.innerHTML = "Thời gian: " + DSVe[i].time;

		let so_ve =  document.getElementById("so_ve");
		so_ve.innerHTML = "<p> Số Vé: " + soVe + "</p>";

		var tien = soVe * Number(tachCham(DSVe[i].price));
		let tong_tien = document.getElementById("tong_tien");
		tong_tien.innerHTML = "Tổng: " + tien + "đ";
		break;
	}
}


function tachCham(str){
			for (var i = 0;i < str.length;i++){
				if (str[i] === '.'){
					str = str.replace('.', '');
				}
			}
			return str;
		}

function PhuongTienMayBay(){
	return "<i><span class='material-icons-outlined'>"
	+		"	flight"
	+		"</span> máy bay</i><br>";
}
function PhuongTienXe(){
	return "<i><span class='material-icons-outlined'>"
	+		"	directions_car_filled"
	+		"	</span> xe bus</i><br>";
}
function PhuongTienTauThuy(){
	return "<i><span class='material-icons-outlined'>"
	+		"	directions_boat"
	+		"	</span> tàu thủy</i><br>";
}