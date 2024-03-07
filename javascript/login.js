let popup = document.getElementById("popup");
var poping = true;
function openPopup(){
	popup.classList.add("open-popup");
}

function closePopup(){
	if (poping)
		poping = false;
	else {
		popup.classList.remove("open-popup");
		poping = true;
	}
}
document.getElementById('body-matisse').onclick = function(e) {
	if (e.target != document.getElementById('popup') && e.target != document.getElementById('popupm')
		&& e.target != document.getElementById('popupm1') && e.target != document.getElementById('popupm2')
		&& e.target != document.getElementById('popupm3') && e.target != document.getElementById('popupm4') 
		&& e.target != document.getElementById('popupm5') && e.target != document.getElementById('popupm6')
		&& e.target != document.getElementById('username') && e.target != document.getElementById('popupm8')
		&& e.target != document.getElementById('popupm9') && e.target != document.getElementById('password') 
		&& e.target != document.getElementById('popupm11')&& e.target != document.getElementById('popupm12') 
		&& e.target != document.getElementById('popupm13')&& e.target != document.getElementById('popupm14')  ){
		closePopup();
	} 
}
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");


let Import_address = document.getElementById("import_address");
Import_address.style.display = 'none'; 
function isAdmin(){
	Import_address.style.display = 'block';
}
function GoThemDiaDiem(){
	let url = "pages/ThemDiaDiem.html";
    window.location.href = url;
}

btnLogin.addEventListener("click", (e) => {
	e.preventDefault();
	let user = {
		username: username.value,
		password: password.value,
	}
	if (JSON.parse(localStorage.getItem(username.value)) === null){
		alert("Tên người dùng không tìm thấy");
		return;
	}
	if (!username.value) {
		alert("Vui lòng nhập tên đăng nhập");
	} else if (!password.value){
		alert("Vui lòng nhập mật khẩu");
	} else if (JSON.parse(localStorage.getItem(username.value)).password == user.password) {
		alert("Đăng nhập thành công");
		if (username.value === "Duy#admin26")
			isAdmin();
		document.getElementById("tenDangNhap").innerHTML = username.value;
		closePopup();
	} else {
		alert("Đăng nhập thất bại");
	}
});




