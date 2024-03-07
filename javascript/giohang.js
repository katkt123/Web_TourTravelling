
let gioHang = document.getElementById("numberHang");
let btnVaoGio = document.querySelector(".btn-VaoGio");

var soVeHien = 0;
if (JSON.parse(localStorage.getItem("SoVeHien")) === null){
  console.log("KO tìm thấy số vé đã lưu");
} else {
  soVeHien = JSON.parse(localStorage.getItem("SoVeHien"));
  gioHang.innerHTML = soVeHien;
}
btnVaoGio.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("click");
});

function themVaoGio(str){
	gioHang.innerHTML = Number(gioHang.textContent) + 1;
	str = removeAccents(str);
  soVeHien++;
  gioHang.innerHTML = soVeHien;
	var VoHang = JSON.parse(localStorage.getItem("Vohang"));


	if (VoHang){
		VoHang.push(str);
	} else {
		VoHang = [str];
 	}
 	let json = JSON.stringify(VoHang);
 	localStorage.setItem("Vohang", json);
  localStorage.setItem("SoVeHien", JSON.stringify(soVeHien));
}

let grabQuaVo = document.getElementById("ChuyenQuaVo");
grabQuaVo.addEventListener("click", (e) => {
	e.preventDefault();
  let url = "pages/gioHang.html";
  window.location.href = url;
});

function removeAccents(str) {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ", "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ"    
  ];
  for (var i=0; i<AccentsMap.length; i++) {
    var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}