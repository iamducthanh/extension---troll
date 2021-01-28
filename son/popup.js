var thanh = document.getElementsByTagName('head');
var body = document.getElementsByTagName('body');
var phao = document.createElement('script')
var nameID = document.getElementsByClassName('gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl bp9cbjyn j83agx80')
var ten = document.createElement('h1')
ten.innerHTML = 'lol'
var hoaDao = document.createElement('script')
hoaDao.src = "http://webquangnam.com/jsShare/hoa-dao-roi.js"

// var nhac  = document.createElement('audio')
// nhac.src = "https://f9-stream.nixcdn.com/Believe_Audio17/DiVeNha-DenJustaTee-6892051.mp3?st=tHwqL17JilTpKBVlpRwvyw&e=1610966349"
// nhac.autoplay = 'true'
// nhac.controls = 'controls'
// nhac.type = 'audio/mpeg'

hoaDao.type = "text/javascript"

phao.src = "https://hocban.vn/wp-content/uploads/TrangTriTet2018/phaohoa.js"


var anh = document.createElement('img')

anh.src = "http://4.bp.blogspot.com/-Vlt_TV7Q9V8/UsA7lwMZryI/AAAAAAAAA3Q/ref7HQc1968/s1600/banner_left.png"
anh.style =     "position:fixed;z-index:9999;top:50px;left:0;wight:200px; height: 300px;"
anh._cke_saved_src = "http://4.bp.blogspot.com/-Vlt_TV7Q9V8/UsA7lwMZryI/AAAAAAAAA3Q/ref7HQc1968/s1600/banner_left.png"
var anhphai = document.createElement('img')
anhphai.src = "http://4.bp.blogspot.com/-A85wPjYE2BM/UsA7mDDQWmI/AAAAAAAAA3U/R9bxy6zSrLs/s1600/banner_right.png";
anhphai.style = "position:fixed;z-index:9999;top:50px;right:0;wight:200px; height: 300px;"
var anhduoi = document.createElement('img')
anhduoi.style = "position:fixed;z-index:9999;bottom:20px;left:20px"
anhduoi.src = "http://3.bp.blogspot.com/-4Zt-ZB4tols/UsA_qIR0w9I/AAAAAAAAA3w/Ffyy-5OqGec/s320/banner_header.png"
var content = document.createElement('div')
content.style = "position:fixed;z-index:9999;bottom:-75px;left:0;width:100%;height:107px;background:url(https://3.bp.blogspot.com/-uQrQaR3IkxE/WF9dDUUVLLI/AAAAAAAAAdw/VKNA5q7FJSQX5OWofOiPafEEENaoBcY9wCLcB/s1600/nentet.png) repeat-x bottom left;"

body[0].appendChild(anh)
body[0].appendChild(anhphai)
body[0].appendChild(anhduoi)
body[0].appendChild(content)
// thanh[0].appendChild(nhac)
thanh[0].appendChild(phao)

anh.onclick = function close1(){
    anh.src = ""
}

anhduoi.onclick = function close2(){
    anhduoi.src = ""
}

anhphai.onclick = function close3(){
    anhphai.src = ""
}

content.onclick = function close4(){
    content.src = ""
}


