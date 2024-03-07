let chatBox = document.getElementById("chatBox");
let guiTin = document.querySelector(".GuiTinNhan");
let doanTN = document.getElementById("doanTinNhan");

var dhl = "<div class='show_text' id='chatBox'>";
		

function GuiTinNhan(){
	var cpTt = chatBox.outerHTML;
	if (doanTN.value === "") return;
	var hople = false;
	for (var i = 0;i < doanTN.value.length;i++){
		if (doanTN.value[i] != " "){
			hople = true;
			break ;
		}
	}
	if (doanTN.value === "/*close*/")
		closeBoxChat();
	if (!hople) return;
	cpTt = chatBox.outerHTML;
	cpTt = cpTt.substr(0, cpTt.length-6);
	cpTt = cpTt.substr(dhl.length, cpTt.length);

	var themTinNhan = "<div class='customer'>"
					+	"<p>" + doanTN.value  +"</p>"
					+	"<img src='IMG/avatar2.png' alt=''>"
					+ "</div>";

	if ( removeAccents(doanTN.value) === "Chao ban"){
		themTinNhan += "<div class='person'>"
					+	"<img src='IMG/avatar1.jpg' alt=''>"
					+	"<p>" + "Travelling có thể giúp gì cho bạn ạ."  +"</p>"
					+ "</div>";
	} else if (removeAccents(doanTN.value) === "Toi muon dat 1 ve di Da Nang"){
		themTinNhan += "<div class='person'>"
					+	"<img src='IMG/avatar1.jpg' alt=''>"
					+	"<p>" + "Giá vé đi Đà Nẵng hiện tại là 5.700.000đ/khách"  +"</p>"
					+ "</div>";
	} else if (removeAccents(doanTN.value) === "Thanks AD"){
		themTinNhan += "<div class='person'>"
					+	"<img src='IMG/avatar1.jpg' alt=''>"
					+	"<p>" + "Cam on quy khach da lua chon Travelling"  +"</p>"
					+ "</div>";
	} else if (doanTN.value.substr(0, 10) === "/*search: "){

		var strSearch = doanTN.value;
		strSearch = strSearch.substr(10, strSearch.length);
		strSearch = removeAccents(strSearch);
		let timK = JSON.stringify(strSearch.toUpperCase());
		localStorage.setItem("timkiem", timK);
		searchInput.value = "";
		let url = "./pages/SearchResult.html";
     	window.location.href = url;
	}

	cpTt += themTinNhan ;

	chatBox.innerHTML = cpTt; 
	doanTN.value = "";

	chatBox.scrollTop = chatBox.scrollHeight;
}

guiTin.addEventListener("click", (e) => {
	e.preventDefault();
		GuiTinNhan();
});

$("#doanTinNhan").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        GuiTinNhan();
    }
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

let message_bg = document.querySelector(".message_bg");
message_bg.addEventListener("click", (e) => {
	e.preventDefault();
		openBoxChat()
});
let outBoxChat = document.querySelector(".out");
outBoxChat.addEventListener("click", (e) => {
	e.preventDefault();
		closeBoxChat()
});

function closeBoxChat(){
	var chat_box = document.querySelector(".box_chat");
	chat_box.style.display = 'none'; 
}function openBoxChat(){
	var chat_box = document.querySelector(".box_chat");
	chat_box.style.display = 'block'; 
}


function showDivContent(){
   console.log(cpTt );
}
export { showDivContent};