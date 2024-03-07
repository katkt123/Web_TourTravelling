const DataBD = [ {
				IDDL: "DL001", 
				address: "Đà Nẵng", 
				start: "T2 hằng tuần", 
				price: "5.700.000", 
				time: "3 ngày 2 đêm",
				pic: "IMG/Pic1.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: true, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 19,
				oldPrice: "7.000.000"
			    },
				{
				IDDL: "DL002", 
				address: "Seoul", 
				start: "T2 hằng tuần", 
				price: "20.400.000", 
				time: "3 ngày 2 đêm",
				pic: "IMG/Pic4.jpeg",
				vehicle1: true, /*máy bay*/
				vehicle2: false, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 18,
				oldPrice: "25.000.000"
				},
				{
				IDDL: "DL003", 
				address: "Vịnh Hạ Long", 
				start: "T5 hằng tuần", 
				price: "8.300.000", 
				time: "4 ngày 3 đêm",
				pic: "IMG/Pic3.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: true, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 17,
				oldPrice: "10.000.000"
				},
				{
				IDDL: "DL004", 
				address: "Vũng Tàu", 
				start: "T4 hằng tuần", 
				price: "8.300.000", 
				time: "2 ngày 1 đêm",
				pic: "IMG/Pic2.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: true, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 25,
				oldPrice: "6.000.000"
				},
				{
				IDDL: "DL005", 
				address: "Thailand", 
				start: "T3 hằng tuần", 
				price: "18.900.000", 
				time: "3 ngày 2 đêm",
				pic: "IMG/Pic6.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: false, /*xe*/
				vehicle3: true,/*tàu thủy*/
				description: "",
				sale: 14,
				oldPrice: "22.000.000"
				},
				{
				IDDL: "DL006", 
				address: "Nhật Bản", 
				start: "T3 hằng tuần", 
				price: "27.600.000", 
				time: "4 ngày 3 đêm",
				pic: "IMG/Pic5.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: false, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 21,
				oldPrice: "35.000.000"
				},
				{
				IDDL: "DL007", 
				address: "Sapa", 
				start: "T5 hằng tuần", 
				price: "8.400.000", 
				time: "3 ngày 2 đêm",
				pic: "IMG/Pic7.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: true, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 30,
				oldPrice: "12.000.000"
				},
				{
				IDDL: "DL008", 
				address: "Đà Lạt", 
				start: "T7 hằng tuần", 
				price: "14.300.000", 
				time: "3 ngày 3 đêm",
				pic: "IMG/Pic8.jpg.crdownload",
				vehicle1: true, /*máy bay*/
				vehicle2: true, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 29,
				oldPrice: "20.000.000"
				},
				{
				IDDL: "DL009", 
				address: "Phú Quốc", 
				start: "Chủ Nhật hằng tuần", 
				price: "16.500.000", 
				time: "4 ngày 3 đêm",
				pic: "IMG/Pic9.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: true, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 9,
				oldPrice: "18.000.000"
				},
				{
				IDDL: "DL010", 
				address: "Đài Loan", 
				start: "T5 hằng tuần", 
				price: "24.700.000", 
				time: "4 ngày 3 đêm",
				pic: "IMG/Pic10.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: false, /*xe*/
				vehicle3: true,/*tàu thủy*/
				description: "",
				sale: 12,
				oldPrice: "28.000.000"
				},
				{
				IDDL: "DL011", 
				address: "Australia", 
				start: "T2 hằng tuần", 
				price: "30.500.000", 
				time: "5 ngày 4 đêm",
				pic: "IMG/Pic11.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: false, /*xe*/
				vehicle3: true,/*tàu thủy*/
				description: "",
				sale: 15,
				oldPrice: "35.800.000"
				},
				{
				IDDL: "DL012", 
				address: "Pháp", 
				start: "CN hằng tuần", 
				price: "28.400.000", 
				time: "4 ngày 3 đêm",
				pic: "IMG/Pic12.jpg",
				vehicle1: true, /*máy bay*/
				vehicle2: true, /*xe*/
				vehicle3: false,/*tàu thủy*/
				description: "",
				sale: 19,
				oldPrice: "35.000.000"
				}
			  ];


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


export {removeAccents,DataBD};