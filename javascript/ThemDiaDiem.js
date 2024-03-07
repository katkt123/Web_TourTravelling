if (JSON.parse(localStorage.getItem("DSVe")) == null){
	console.log("không tìm thấy");
} else {
	var DSVe = JSON.parse(localStorage.getItem("DSVe"));

	let themVe = document.getElementById("BoxDl");
	var cpTt = themVe.outerHTML;
	cpTt = cpTt.substr(0, cpTt.length-5);
	cpTt = cpTt.substr(27, cpTt.length);
	for (var i = 0; i < DSVe.length; i++) {
		let DiaDiem =  DSVe[i];
		console.log(DiaDiem);
		
		const recentImageDataUrl = DiaDiem.pic;

		var phuongTien = "";
		if (DiaDiem.vehicle1)
			phuongTien += PhuongTienMayBay();
		if (DiaDiem.vehicle2)
			phuongTien += PhuongTienXe();
		if (DiaDiem.vehicle3)
			phuongTien += PhuongTienTauThuy();

		var str = "<li>"                    
					+ "<div>"
					+	"<div class='khung'>"
					+		"<img src='"+ recentImageDataUrl  +"' alt='DuLich'>"
					+	"</div>"
					+	"<div class='text'>"
					+		"<h3>Du lịch " + DiaDiem.address +"</h3>"
					+		"<div class='money'>"
					+		"	<p class='sale'>" + DiaDiem.price + "đ/khách</p>"
					+		"	<div class='traffic'>"
					+		phuongTien
					+		"	</div>"
					+		"</div>"
					+		"<!-- <p class='cost'>7.000.000đ</p>-->"
					+		"<div class='start'>"
					+		"	<i><span class='material-icons-outlined'>"
					+		"		calendar_month"
					+		"		</span></i>"
					+		"	<p>Khởi hành: " + DiaDiem.start + "</p>"
					+		"</div>"
					+		"<div class='time'>"
					+		"	<i><span class='material-icons-outlined'>"
					+		"		schedule"
					+		"		</span></i>"
					+		"	<p>Thời gian: "+ DiaDiem.time + "</p>"
					+		"</div>"
					+		"</div>"
					+		"<!--<div class='hot_sale'>"
					+		"	<p>-19%</p>"
					+		"</div>-->"
					+		"<div class='set_product'>"
					+		"	<div class='add'>"
					+		"		<button class='btn btn-VaoGio' "+ ThemGioStrin(DiaDiem.address) +"><span class='material-icons-outlined'>"
					+		"			local_grocery_store"
					+		"		</span></button>"
					+		"	</div>"
					+		"	<div class='buy'>"
					+		"		<button>"
					+		"			<p>Mua</p>"
					+		"		</button>"
					+		"	</div>"
					+		"</div>"
					+	"</div>"                   
					+"</li>";

		cpTt = cpTt + str ;
	}
	themVe.innerHTML = cpTt ;
}
function ThemGioStrin(str1){
	var s = "onclick="+  String.fromCharCode(34) + "themVaoGio('" + str1 + "') "+ String.fromCharCode(34); 
	return s;
}
function PhuongTienMayBay(){
	return "<i><span class='material-icons-outlined'>"
	+		"	flight"
	+		"</span></i>";
}
function PhuongTienXe(){
	return "<i><span class='material-icons-outlined'>"
	+		"	directions_car_filled"
	+		"	</span></i>";
}
function PhuongTienTauThuy(){
	return "<i><span class='material-icons-outlined'>"
	+		"	directions_boat"
	+		"	</span></i>";
}