// 引用自 https://github.com/ClydeTime/BiliBili/blob/main/js/BiliBili.Modified.response.js
// 需订阅 https://raw.githubusercontent.com/chaoscard/proxyrules/master/bilibili.skin.boxjs.json
// 注意"user_equip"里面"data"里面的"side_bg_color"需在"color_second_page"后面，颜色代码不区分大小写，需要"package_md5"
const $ = new Env("📺 BiliBili: 👘 Modified v0.0.1(2) response");
const URL = new URLs();
const DataBase = {
	"Modified":{
		"Settings":{
			"Switch":true,
			"Skin":{
				"user_equip":1735549421001,
				"load_equip":1735546154001
			},
			"Private":{
				"coin":"",
				"bcoin":"",
				"follower":"",
				"level":"",
				"like":"",
				"vip":false
			}
		},
		"Configs":{
			"Skin":{
				"user_equip":[
					{"id":2529,"name":"初音未来-日版","preview":"https://i0.hdslb.com/bfs/garb/item/2fa16380b31b3cee6c889d645f2699de8e9d9faf.jpg","ver":1625570999,"package_url":"https://i0.hdslb.com/bfs/garb/zip/bbd834e1f783cef686569ff3cf94bdc3bc57f9e8.zip","package_md5":"b251980ad26b33b8c4a0a64049b14daf","data":{"color_mode":"light","color":"#212121","color_second_page":"#fff2d2","side_bg_color":"#ffe7ae","tail_color":"#996c00","tail_color_selected":"#0d6872","tail_icon_ani":true,"tail_icon_ani_mode":"once","head_myself_mp4_play":"once","pub_btn_shade_color_top":"#ffaf4c","pub_btn_shade_color_bottom":"#ffc37a","pub_btn_plus_color":"#fff6df","tail_icon_mode":"img"}},{"id":2530,"name":"初音未来-夜版","preview":"https://i0.hdslb.com/bfs/garb/item/51b5a4e7147c4fdcad1bb349e0b6ecd2ba6a82a6.jpg","ver":1625571046,"package_url":"https://i0.hdslb.com/bfs/garb/zip/14e2f377e601481e2befab34e0773c81886b7232.zip","package_md5":"e10f4ff37f3d964c6ecb3f8f2c8434c9","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#4c4974","side_bg_color":"#29244d","tail_color":"#ffffff","tail_color_selected":"#a2f3f7","tail_icon_ani":true,"tail_icon_ani_mode":"once","head_myself_mp4_play":"once","pub_btn_shade_color_top":"#40b7bb","pub_btn_shade_color_bottom":"#8edfe3","pub_btn_plus_color":"#4c4975","tail_icon_mode":"img"}},{"id":4124,"name":"良辰美景·不问天","preview":"https://i0.hdslb.com/bfs/garb/item/844860e8970ab045a4fd8e5c0923c902df25062f.jpg","ver":1625040105,"package_url":"https://i0.hdslb.com/bfs/garb/zip/5d83e72e2ca76b4c8c2b14dc7c5eb729d5c25e9a.zip","package_md5":"d1ae5d6445a9f12f388a097fe1dde9ad","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#b22d43","side_bg_color":"#8a2736","tail_color":"#ffbcbc","tail_color_selected":"#ffeaab","tail_icon_ani":true,"tail_icon_ani_mode":"once","head_myself_mp4_play":"once","pub_btn_shade_color_top":"#ffeaab","pub_btn_shade_color_bottom":"#ffdbb8","pub_btn_plus_color":"#c02e4b","tail_icon_mode":"img"}},{"id":32264,"name":"EveOneCat2","preview":"https://i0.hdslb.com/bfs/garb/item/af6ab166af22ed45d429bfde4e3962bb78f270c8.png","ver":1632051567,"package_url":"https://i0.hdslb.com/bfs/garb/zip/4f047ea64e0659dcbcf70092dd6e30c1eadb9390.zip","package_md5":"0f81680da60b12d0ca9ebe869b81e1b1","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#32376b","side_bg_color":"#32376b","tail_color":"#e9e9e9","tail_color_selected":"#fff57a","tail_icon_ani":true,"tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","pub_btn_shade_color_top":"","pub_btn_shade_color_bottom":"","pub_btn_plus_color":"","tail_icon_mode":"img"}},{"id":1680348700001,"name":"幻想乡的日常 第1弹","preview":"https://i0.hdslb.com/bfs/garb/41f8974a016ccd8e47bc892d945316e227c6e94b.jpg","ver":1680573803,"package_url":"https://i0.hdslb.com/bfs/garb/zip/c5d3ceb305754e7b222d67b93ad3de21882c20c4.zip","package_md5":"95806a78585ac34276a90d680a8f152a","data":{"color_mode":"light","color":"#000000","color_second_page":"#99C9E3","side_bg_color":"","tail_color":"#7D4E28","tail_color_selected":"#B6268C","tail_icon_ani":false,"tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","pub_btn_shade_color_top":"","pub_btn_shade_color_bottom":"","pub_btn_plus_color":"","tail_icon_mode":"img"}},{"id":1735549421001,"name":"东方收藏集·浮生若梦","preview":"https://i0.hdslb.com/bfs/garb/7655b68dc5777a0d34b3f3c3258ee922fd70d161.png","ver":"1735559463","package_url":"https://i0.hdslb.com/bfs/garb/zip/3c2be5c99d8d59983588d8b57127b3c085a8eebd.zip","package_md5":"fa2acf96e290c9bd08da5d298a340090","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#ADE3EA","side_bg_color":"","tail_color":"#CB400E","tail_color_selected":"#1CEAE7","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1707208933001,"name":"初音未来动态主题","preview":"https://i0.hdslb.com/bfs/garb/cbc47642e5b1ab1a05eae769322b51f23bf5847b.jpg","ver":"1708228069","package_url":"https://i0.hdslb.com/bfs/garb/zip/f453abf894f34cacfb131235698b7cb8a1719b56.zip","package_md5":"ab8d68de489c29c88f0661e9bf4551fd","data":{"color_mode":"light","color":"#000000","color_second_page":"#FFB4BC","side_bg_color":"","tail_color":"#ED095A","tail_color_selected":"#5E1518","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1765870054001,"name":"初音魔法星夜个性主题","preview":"https://i0.hdslb.com/bfs/garb/d7b06568fb1ca43e51e7fd07e3b366e82e8df631.jpg","ver":"1766138716","package_url":"https://i0.hdslb.com/bfs/garb/zip/35519fdc183c5e48b02ebf7bed2cb6768662604a.zip","package_md5":"4ed1bdeb6e54074656685c2e48b75a22","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#5885A4","side_bg_color":"","tail_color":"#525C89","tail_color_selected":"#EF70CF","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1739358425001,"name":"初音未来征稿收藏集","preview":"https://i0.hdslb.com/bfs/garb/8c80fbcfdcf1d1dabc1c50bff7855423ed915f28.png","ver":"1739360719","package_url":"https://i0.hdslb.com/bfs/garb/zip/60cb8b67bad8b867ff287525e864e963e111c67b.zip","package_md5":"04a20d235d1952aed9ceb23c5ee686b3","data":{"color_mode":"light","color":"#000000","color_second_page":"#87D7FE","side_bg_color":"","tail_color":"#11178F","tail_color_selected":"#FF004E","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1752737431001,"name":"洛天依流光协奏","preview":"https://i0.hdslb.com/bfs/garb/9df045cfb280a5b8762ec3782f429870000f2f58.jpg","ver":"1752752421","package_url":"https://i0.hdslb.com/bfs/garb/zip/5f0d187e91e0f3d7ac456221e1b125ec10071a2e.zip","package_md5":"3e913a6cebacfcd4bf35fd39d128634f","data":{"color_mode":"light","color":"#000000","color_second_page":"#9BBBF9","side_bg_color":"","tail_color":"#31458C","tail_color_selected":"#1933CD","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1752135412001,"name":"洛天依八音奇响","preview":"https://i0.hdslb.com/bfs/garb/98feeef6c2907c0c19833372e6bef6d1b16c639e.jpg","ver":"1752145330","package_url":"https://i0.hdslb.com/bfs/garb/zip/ef1704c49f245448f17a29357abdd9705701df5e.zip","package_md5":"150e16cf6a5babbbe52587b198785655","data":{"color_mode":"light","color":"#000000","color_second_page":"#95CDF8","side_bg_color":"","tail_color":"#04356C","tail_color_selected":"#FFFFFF","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1737365117001,"name":"洛天依·天星问","preview":"https://i0.hdslb.com/bfs/garb/2e0420bc2f98215e8c63c80c1c5c38110a2edc39.jpg","ver":"1737864387","package_url":"https://i0.hdslb.com/bfs/garb/zip/e3bebeff08b393b08328271ad448150db0527890.zip","package_md5":"fde500ef4170384ea7a93d60b67dc8ed","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#313173","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#00FFEA","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1734595774001,"name":"洛天依·戏游九州","preview":"https://i0.hdslb.com/bfs/garb/60fad4dc583eb37948f3ed1876b6c58d6521f62b.jpg","ver":"1734666779","package_url":"https://i0.hdslb.com/bfs/garb/zip/fd422f77c9b391a49a490b29c6664e8c3eddbd2c.zip","package_md5":"433f142cff6196abfded47dad455375e","data":{"color_mode":"light","color":"#000000","color_second_page":"#FFD578","side_bg_color":"","tail_color":"#000000","tail_color_selected":"#3000FF","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1774509554001,"name":"2233岩颂个性主题","preview":"https://i0.hdslb.com/bfs/garb/c9ecf3f4738e831f8db4a5272104935a8464d3fe.png","ver":"1774511854","package_url":"https://i0.hdslb.com/bfs/garb/zip/ffe7bd6d41fc2c7edb4f63939796834769a291d0.zip","package_md5":"99ee14ba1b90cf809e1cd139bdfb3622","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#AE82E0","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#35027E","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1766397138001,"name":"2233·霜星祈愿个性主题","preview":"https://i0.hdslb.com/bfs/garb/176995c85e0684efc6f6834ffb88813220c2c5a6.png","ver":"1766403129","package_url":"https://i0.hdslb.com/bfs/garb/zip/90e1e86c753e77bc0306c96a662a7b142433ad2f.zip","package_md5":"44249a9835ac3d5d7f996321d7333486","data":{"color_mode":"light","color":"#000000","color_second_page":"#60D7FF","side_bg_color":"","tail_color":"#14005E","tail_color_selected":"#C21802","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1760510307001,"name":"2233元素协奏·森脉","preview":"https://i0.hdslb.com/bfs/garb/3d4b87a36e8421f5091c7ad6831eae2f00a3b2e8.png","ver":"1760585216","package_url":"https://i0.hdslb.com/bfs/garb/zip/e0d008ca19985decad9bf8605958c94a14a49886.zip","package_md5":"670cb49e341d03b3b0b8d256908dd1de","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#8AAC70","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#EFC315","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1755076798001,"name":"2233十五岁生日","preview":"https://i0.hdslb.com/bfs/garb/eee9034a328ac7d5265b0a15fb1e4411cfc96767.jpg","ver":"1755151704","package_url":"https://i0.hdslb.com/bfs/garb/zip/69cdb2c29b66f983345eb4679f899f71d9d2ff1c.zip","package_md5":"c15a3ce6f875e069714c53241c3a5f93","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#AC2E2A","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#FFE451","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1747819619001,"name":"2233·元素协奏动态主题","preview":"https://i0.hdslb.com/bfs/garb/1783fc9ef449e04705cb9d7d0f6200525579b2d2.png","ver":"1747896772","package_url":"https://i0.hdslb.com/bfs/garb/zip/3af5c0c82cd07a387cf31b0d63491ccf5055e039.zip","package_md5":"87103b4eb5f43220dbf131b2cc8e571e","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#10274E","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#6EF3FF","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1754046817001,"name":"2233寻疆","preview":"https://i0.hdslb.com/bfs/garb/35af9e512991145b465661633909bbe555bf4807.jpg","ver":"1754048532","package_url":"https://i0.hdslb.com/bfs/garb/zip/4e7194bc818ac1c5298dd8b058abcb6d96d6a23c.zip","package_md5":"212f3ed767f71dec71289e8e63cbf3ba","data":{"color_mode":"light","color":"#000000","color_second_page":"#C8A15F","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#C2D714","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1716453643001,"name":"幻境序曲白昼主题","preview":"https://i0.hdslb.com/bfs/garb/8b44aa0bbab80ec2f025e8f9b0f4197752d9f6d9.png","ver":"1716524410","package_url":"https://i0.hdslb.com/bfs/garb/zip/5bbeb704b80edfaadd2fcdf2b25552ac5a73cef0.zip","package_md5":"1c7870561c1a4d93e5820a5bb2ddb635","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#215177","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#00EEFF","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":71367,"name":"群星闪耀时·众神1","preview":"https://i0.hdslb.com/bfs/garb/item/c0f8763e7f886ee9afef59d418d8d60dfa926fff.jpg","ver":"1729741199","package_url":"https://i0.hdslb.com/bfs/garb/zip/3c1a5b198e2fe053220def124f62cbabec929a18.zip","package_md5":"e8ddc54dd304b12c228c38c4695c2de7","data":{"color_mode":"light","color":"#212121","color_second_page":"#5594a9","side_bg_color":"","tail_color":"#115c7f","tail_color_selected":"#0072ff","tail_icon_ani":"false","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":56175,"name":"群星闪耀时双子座","preview":"https://i0.hdslb.com/bfs/garb/item/a76b1350b2fbdc3386da0d3975ca5e5a52b83e1b.jpg","ver":"1690534890","package_url":"https://i0.hdslb.com/bfs/garb/zip/2bbc0ccc1f1d9a328d86d81b98ca68f615091c4b.zip","package_md5":"349ae97732986bd3d861312d66923a00","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#170000","side_bg_color":"","tail_color":"#e9e9e9","tail_color_selected":"#ddb07c","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":67969,"name":"群星闪耀时金牛座","preview":"https://i0.hdslb.com/bfs/garb/item/81192f794f62a32dd9e0d7ba7df3c4eb5c965b26.jpg","ver":"1714033480","package_url":"https://i0.hdslb.com/bfs/garb/zip/2b4b5bcce522c6a6f98452400c146d3d101918f2.zip","package_md5":"4297ec6e137005a8497fb530c4cab8f2","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#0e1f3c","side_bg_color":"","tail_color":"#ffffff","tail_color_selected":"#2cfff2","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":67651,"name":"群星闪耀时白羊座","preview":"https://i0.hdslb.com/bfs/garb/item/89159a265411acf3d5a22a21f2b97a42ee74036f.jpg","ver":"1710995104","package_url":"https://i0.hdslb.com/bfs/garb/zip/d9b42ffc54d59739a9d482f7b6aa6a939159cf00.zip","package_md5":"794e19cae0329ec7bf2314db7ecdb244","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#645020","side_bg_color":"","tail_color":"#fff9e0","tail_color_selected":"#ffec5f","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":66848,"name":"群星闪耀时双鱼座","preview":"https://i0.hdslb.com/bfs/garb/item/2b3335816f696dc10510d90fdb6bf59b1cedc192.jpg","ver":"1710146748","package_url":"https://i0.hdslb.com/bfs/garb/zip/a5bb1e93cb8e187cf664b479138fcfaff1959ec9.zip","package_md5":"843abc6b073bd5d9a3e9f84d25b84dc2","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#070633","side_bg_color":"","tail_color":"#ffffff","tail_color_selected":"#fae25c","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":66425,"name":"群星闪耀时水瓶座","preview":"https://i0.hdslb.com/bfs/garb/item/9eb07550955c9d4c9cd469e2a3c22fcad5a18562.jpg","ver":"1706065833","package_url":"https://i0.hdslb.com/bfs/garb/zip/6cfab34d444e877cf2cada51f682a2a56231ba7b.zip","package_md5":"41962df693fa478b9e5c35ab81075316","data":{"color_mode":"light","color":"#212121","color_second_page":"#cceffd","side_bg_color":"","tail_color":"#007be0","tail_color_selected":"#0831a1","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":65914,"name":"群星闪耀时摩羯座","preview":"https://i0.hdslb.com/bfs/garb/item/fc3b7bd8429451bb0b1739614dca0d5fe94e5ce6.jpg","ver":"1703661600","package_url":"https://i0.hdslb.com/bfs/garb/zip/593e2ff3328f66260cae6db0827f5f3750c6bcea.zip","package_md5":"0d5017ce9ab557ebc31805145e4493d7","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#362c24","side_bg_color":"","tail_color":"#ffffff","tail_color_selected":"#10cdb8","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":64053,"name":"群星闪耀时射手座","preview":"https://i0.hdslb.com/bfs/garb/item/eb6767f63e12daee78effba700e7632e9f438290.jpg","ver":"1701086882","package_url":"https://i0.hdslb.com/bfs/garb/zip/4c7ab2c44a34067770edd8e76435a7de01a5f3f7.zip","package_md5":"6b1d29d71a411dceefc4aa237d42317e","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#27241e","side_bg_color":"","tail_color":"#fbf5ea","tail_color_selected":"#bea692","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":61113,"name":"群星闪耀时天蝎座主题","preview":"https://i0.hdslb.com/bfs/garb/item/c5f8aca500eb17245550610289c9bab34df22484.jpg","ver":"1700208269","package_url":"https://i0.hdslb.com/bfs/garb/zip/aa1430ce19e25d3c08885f2bb37da84f308f0362.zip","package_md5":"d33c5c392e934be0b50be9437c44f08a","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#171635","side_bg_color":"","tail_color":"#ffffff","tail_color_selected":"#ffe677","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":60039,"name":"群星闪耀时天秤座主题","preview":"https://i0.hdslb.com/bfs/garb/item/ae5af9ba9f87916ad75e512ff749fce6fb305404.jpg","ver":"1695701907","package_url":"https://i0.hdslb.com/bfs/garb/zip/4de38f48e81f52de484309630204a5dc0547a9ed.zip","package_md5":"8786b963869bf09c4be2c95748cc6da6","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#4A4C7F","side_bg_color":"","tail_color":"#fff7d5","tail_color_selected":"#3a24ff","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":58653,"name":"群星闪耀时处女座","preview":"https://i0.hdslb.com/bfs/garb/item/0d090d58cb603f42fd58eb45b9bb6fc1016b82ef.png","ver":"1697805397","package_url":"https://i0.hdslb.com/bfs/garb/zip/a5e726d705528fa5a2343123823471e5f620f04e.zip","package_md5":"5e5ccbd9a4ffec0308c6f3bdcea9b033","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#4d4049","side_bg_color":"","tail_color":"#ffffff","tail_color_selected":"#fc2e6c","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":55910,"name":"群星闪耀时巨蟹座主题","preview":"https://i0.hdslb.com/bfs/garb/item/f649d54c1d6c70bfd15ab65ad34c99609cb79e6f.jpg","ver":"1690343814","package_url":"https://i0.hdslb.com/bfs/garb/zip/aa15337ce33d7eb4008ae637dea818c045440789.zip","package_md5":"a5c83b7636f1b8e06303acc6a1d64cdb","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#19202a","side_bg_color":"","tail_color":"#ffffff","tail_color_selected":"#a5dcff","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":55865,"name":"群星闪耀时狮子座主题","preview":"https://i0.hdslb.com/bfs/garb/item/b56d0f18e7c90ed168f11990dd23b0f4ac980d08.jpg","ver":"1690273952","package_url":"https://i0.hdslb.com/bfs/garb/zip/e97fe96a41dd5b94299f2b9ffd8ba1e09f3762da.zip","package_md5":"2d1b60de9d9d8d7c53a5698b5bf3a108","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#212528","side_bg_color":"","tail_color":"#ffe7f7","tail_color_selected":"#ff1736","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":6059,"name":"星尘","preview":"https://i0.hdslb.com/bfs/garb/item/8b3c4de426203da2bdcf6e814ff629a02eb82e9c.jpg","ver":"1628582196","package_url":"https://i0.hdslb.com/bfs/garb/zip/13bf9b2afa234e994d23761cb8452d291f8cab6d.zip","package_md5":"ce3cf51610306d6e1e29bf9f36f0720b","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#37366c","side_bg_color":"#2d3356","tail_color":"#e9e9e9","tail_color_selected":"#ffff00","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"once","tail_icon_mode":""}},{"id":36781,"name":"海伊","preview":"https://i0.hdslb.com/bfs/garb/item/f1f06f0c3819ab08f56a915cc7b48bb0ca211ab5.jpg","ver":"1658484221","package_url":"https://i0.hdslb.com/bfs/garb/zip/a7bfca395d20e4debe20e1be49e53bc655299a09.zip","package_md5":"c5b740437529e44f27f00c57d5a804fe","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#80d6ed","side_bg_color":"","tail_color":"#3db7ff","tail_color_selected":"#f78c99","tail_icon_ani":"true","tail_icon_ani_mode":"once","head_myself_mp4_play":"once","tail_icon_mode":"img"}},{"id":1771441474001,"name":"近月少女的礼仪","preview":"https://i0.hdslb.com/bfs/garb/e94dba89dc255fd54aab22cd3ff0238e66d72b41.jpg","ver":"1772443919","package_url":"https://i0.hdslb.com/bfs/garb/zip/538ca7f9f5ad40d8741e80bdc13fc7ea257a39d2.zip","package_md5":"700e886e2de5b2f3cadf0426b6d485f2","data":{"color_mode":"light","color":"#000000","color_second_page":"#FFE1E9","side_bg_color":"","tail_color":"#421F1E","tail_color_selected":"#A85754","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1716959545001,"name":"星空列车与白的旅行收藏集","preview":"https://i0.hdslb.com/bfs/garb/1613cbc0a5d0410dc8cc913f12f7d392dd0117fa.png","ver":"1725009088","package_url":"https://i0.hdslb.com/bfs/garb/zip/8ba8cfc292ce64616efc93c4bea1eb4a7c440865.zip","package_md5":"d6a6812be2fbbfc1c979e34d12535724","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#06083D","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#6E89FF","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1770191094001,"name":"2026拜年纪个性主题","preview":"https://i0.hdslb.com/bfs/garb/ad565d98eee7324011107ba1682474792abdf64c.jpg","ver":"1770194356","package_url":"https://i0.hdslb.com/bfs/garb/zip/2b14510c855d74b0f8a7a621ce7be15aefbe2082.zip","package_md5":"77d65e07d3c407b4493a009d2d49745b","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#E9C89E","side_bg_color":"","tail_color":"#131913","tail_color_selected":"#BE211A","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1736321078001,"name":"2025拜年纪动态主题","preview":"https://i0.hdslb.com/bfs/garb/89572e7eba4c52a9d561d417d32050f7e8e8615e.png","ver":"1736762488","package_url":"https://i0.hdslb.com/bfs/garb/zip/c2d2033b557048a8974d6e375cef9567abbddd95.zip","package_md5":"ac7819e8742389c1803654fd1d172226","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#F26262","side_bg_color":"","tail_color":"#000000","tail_color_selected":"#339999","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1756718589001,"name":"诡秘之主","preview":"https://i0.hdslb.com/bfs/garb/6235555d117b351eb4be96a5238017b30084783a.jpg","ver":"1756973902","package_url":"https://i0.hdslb.com/bfs/garb/zip/a1d08a7f4dd1fb9cfc069e9eee2a741a045e4b99.zip","package_md5":"f038e3173cf566be53dc721339651679","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#8E7749","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#FFF789","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}},{"id":1775208367001,"name":"愚者旧梦","preview":"https://i0.hdslb.com/bfs/garb/7042494dd02cc497c7840819bcc328faf154bfe8.png","ver":"1775640849","package_url":"https://i0.hdslb.com/bfs/garb/zip/6f3dd74fe0fc99f3b89c82b75c061e52c43b73ae.zip","package_md5":"65dfe0f4e1597811f15e3e3b54642b52","data":{"color_mode":"dark","color":"#ffffff","color_second_page":"#271E0C","side_bg_color":"","tail_color":"#FFFFFF","tail_color_selected":"#F9CF0C","tail_icon_ani":"","tail_icon_ani_mode":"","head_myself_mp4_play":"loop","tail_icon_mode":"img"}}
				],
				"load_equip":[
					{"id":2531,"name":"初音未来13周年","ver":"1598602035","loading_url":"https://i0.hdslb.com/bfs/garb/item/9b12e8b5cc16a4c2e71e91c43796f09d5e132847.webp"},{"id":4125,"name":"良辰美景·不问天","ver":"1612771141","loading_url":"https://i0.hdslb.com/bfs/garb/item/4d6ac226ba78cc4fe14c3c97f3bd0bb2e7166c73.webp"},{"id":32263,"name":"EveOneCat2","ver":"1632046310","loading_url":"https://i0.hdslb.com/bfs/garb/item/880560233ce3fe7bde792f619bc02ac7b59fb02a.webp"},{"id":1680280135001,"name":"幻想乡的日常 第1弹","ver":"1680606000","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/6f33bea9f45c5dac7468ab82065a66e3c1b415cb582a3d66a843d68b142f9ebd.webp"},{"id":1735546154001,"name":"东方收藏集·浮生若梦","loading_url":"https://i0.hdslb.com/bfs/garb/item/e707cb5a3551fef5312816c4b8f0e7f679b35597.webp","ver":"1736310693"},{"id":1707211282001,"name":"初音未来加载","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/722c1125091d832ef47361429cc51c361e83cfe9054493059c25c497d4eeeec3.webp","ver":"1707796800"},{"id":1765868727001,"name":"初音魔法星夜加载动画","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/8aff709433784b2b94e80bc69b19fc9356b14cf29b8ce0651d9e9f809466931e.webp","ver":"1766203200"},{"id":1739357325001,"name":"初音未来征稿收藏集","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/d483f65b42f4e5adeeef8c2aece321c42ceef03366b5f2ccca72326a4713c690.webp","ver":"1739419260"},{"id":1734594614001,"name":"洛天依·戏游九州","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/f3785f1ed3b761008323ac69c7c6a184d9b4af4193b6b1039784147aa8ef3afd.webp","ver":"1734674400"},{"id":1774508734001,"name":"2233岩颂加载","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/175a866bfc8a84007b6f1ace2c6ad820374c5ea30814f0287f2af70160223414.webp","ver":"1774515601"},{"id":1766397271001,"name":"2233·霜星祈愿加载","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/3839831bbb992f286b77b109eec44263e4fa2b100c9a66eaa6f6186e735f347d.webp","ver":"1766487600"},{"id":1760510513001,"name":"2233元素协奏·森脉","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/0ad3ad3cf5a2cebb9bc9b0c0963c31dbee70cca4cc6bbfb56b3270940d1e9517.webp","ver":"1760587202"},{"id":1755143360001,"name":"2233十五岁生日","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/b3a4ad44937540c261789db53437a5423e85cb8c478ed447526bd07cb5be9cb2.webp","ver":"1755230402"},{"id":1747817775001,"name":"2233·元素协奏加载动画","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/93234b00e8e68fb2dada5bfe2548d09092834df617300209b4593f0ef0d07c51.webp","ver":"1747911600"},{"id":1716450459001,"name":"幻境序曲白昼加载","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/5dcc21236ed8ddbe69d04fc6be2bf4588fee48e043201ee18fedeac9816d7c3f.webp","ver":"1716530400"},{"id":6061,"name":"星尘","loading_url":"https://i0.hdslb.com/bfs/garb/item/929509a17cdec2ac1e3ef18df8a0d1efe05c770e.webp","ver":"1628582281"},{"id":1772382092001,"name":"近月少女的礼仪加载动画","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/1d8d9864a2621cb694427e961362424500717638ce603f242f05391f29cf6b21.webp","ver":"1772704861"},{"id":1717061982001,"name":"星空列车与白的旅行加载动画","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/0a8f1ed19711173b691bf890df112fc69e48af71b6929acf76d36027ecb41d32.webp","ver":"1718359260"},{"id":1770191326001,"name":"2026拜年纪加载动画","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/8e028683a62747ef4895406bb20da33b7c44b49c67abcd9f45fcd45ce58d63ad.webp","ver":"1770357660"},{"id":1735885495001,"name":"拜年纪加载动画","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/fa8d11b3f9e179bdff0a8e9453e5d08e73455605e52c634695e5f8f2c988e492.webp","ver":"1737180060"},{"id":1756284564001,"name":"诡秘之主","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/84663d36d43d0db12ff2268253abf244d0689f558f85f2acec58df0a7d1b9de7.webp","ver":"1757044802"},{"id":1775205528001,"name":"愚者旧梦","loading_url":"https://i0.hdslb.com/bfs/baselabs/op/b101a5009d933949124d11bb3c783fdef372cef1572cbc18a860c68118e92461.webp","ver":"1775707201"}
				]
			},
			"Private":{
			}
		}
	},
	"Default": {
		"Settings":{"Switch":"true"}
	}
};

/***************** Processing *****************/
(async () => {
	const { Settings, Caches, Configs } = setENV("BiliBili", "Modified", DataBase);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings?.Switch) {
		case true:
		default:
			let url = URL.parse($request?.url);
			const METHOD = $request?.method, HOST = url?.host, PATH = url?.path, PATHs = PATH.split("/");
			// 解析格式
			const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
			$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, `HOST: ${HOST}`, `PATH: ${PATH}`, `FORMAT: ${FORMAT}`, "");
			// 创建空数据
			let body = { "code": 0, "message": "0", "data": {} };
			// 格式判断
			switch (FORMAT) {
				case undefined: // 视为无body
					break;
				case "application/x-www-form-urlencoded":
				case "text/plain":
				case "text/html":
				default:
					break;
				case "text/xml":
				case "text/plist":
				case "application/xml":
				case "application/plist":
				case "application/x-plist":
					break;
				case "text/json":
				case "application/json":
					body = JSON.parse($response.body);
					let data = body.data;
					// 解析链接
					switch (HOST) {
						case "www.bilibili.com":
							break;
						case "app.bilibili.com":
						case "app.biliapi.net":
							switch (PATH) {
								case "x/v2/splash/show": // 开屏页
								case "x/v2/splash/list": // 开屏页
								case "x/v2/splash/brand/list": // 开屏页
								case "x/v2/splash/event/list2": // 开屏页
									break;
								case "x/v2/feed/index": // 推荐页
									break;
								case "x/v2/feed/index/story": // 推荐story页
									break;
								case "x/v2/search/square": // 搜索页
									break;
								case "x/v2/account/myinfo": // 信息页
									if (Settings?.Private?.coin) {
										data.coins = Settings.Private.coin;
									}
									if (Settings?.Private.bcoin) {
										data.bcoin = Settings.Private.bcoin;
									}
									if (Settings?.Private.level) {
										data.level = Settings.Private.level;
									}
									if (Settings?.Private.vip) {
										data.vip = {
											type: 2,
											status: 1,
											due_date: 4102329600000,
											vip_pay_type: 0,
											theme_type: 0,
											label: {
												path: "",
												text: "年度大会员",
												label_theme: "hundred_annual_vip",
												text_color: "#FFFFFF",
												bg_style: 1,
												bg_color: "#FB7299",
												border_color: "",
												use_img_label: true,
												img_label_uri_hans: "",
												img_label_uri_hant: "",
												img_label_uri_hans_static: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
												img_label_uri_hant_static: "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png"
												},
											avatar_subscript: 1,
											nickname_color: "#FB7299",
											role: 3,
											avatar_subscript_url: "",
											tv_vip_status: 1,
											tv_vip_pay_type: 0
										}
									}
									body.data = data;
									break;
								case "x/v2/account/mine": // 我的页
									if (Settings?.Private?.coin) {
										data.coin = Settings.Private.coin;
									}
									if (Settings?.Private?.bcoin) {
										data.bcoin = Settings.Private.bcoin;
									}
									if (Settings?.Private?.follower) {
										data.follower = Settings.Private.follower;
									}
									if (Settings?.Private?.level) {
										data.level = Settings.Private.level;
									}
									if (Settings?.Private?.vip) {
										data.senior_gate.identity = 2;
										data.senior_gate.member_text = "硬核会员";
										data.vip_type = 2;
										data.achievement = {
											senior_gate_flash:
													{icon: "https://i0.hdslb.com/bfs/activity-plat/static/20220818/367d27000e27de458c114d7ca4ded948/6TQojRgCjO.webp"},
											top_level_flash:
													{icon: "https://i0.hdslb.com/bfs/activity-plat/static/20220818/367d27000e27de458c114d7ca4ded948/t5iD0zNIbM.webp"}
										};
										delete data.vip_section_v2;
										delete data.vip_section;
										data.vip = {
											status: 1,
											avatar_subscript: 1,
											nickname_color: "#FB7299",
											due_date: 4102329600000,
											role: 3,
											vip_pay_type: 0,
											avatar_subscript_url: "",
											label: {
												bg_color: "#FB7299",
												bg_style: 1,
												text: "年度大会员",
												border_color: "",
												path: "",
												image: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
												label_theme: "hundred_annual_vip",
												text_color: "#FFFFFF"
											},
											type: 2,
											themeType: 0,
											theme_type: 0
										};
									}
									body.data = data;
									break;
								case "x/v2/space": // 空间页
									if ($request.headers['x-bili-mid'] === data.card.mid) { //判断为用户本人，其他人不做修改
										if (Settings?.Private?.follower) {
											data.card.fans = Settings.Private.follower;
										}
										if (Settings?.Private?.level) {
											data.card.level_info.current_level = Settings.Private.level;
										}
										if (Settings?.Private?.vip) {
											data.card.level_info.senior_inquiry.inquiry_text = "硬核会员";
											data.card.vip = {
												vipStatusWarn: "",
												vipType: 2,
												dueRemark: "",
												vipDueDate: 4102329600000,
												accessStatus: 0,
												vipStatus: 1,
												themeType: 0,
												label: {
													bg_color: "#FB7299",
													bg_style: 1,
													text: "年度大会员",
													border_color: "",
													path: "",
													image: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
													label_theme: "annual_vip",
													text_color: "#FFFFFF"
												}
											};
										}
										if (Settings?.Private?.like) {
											data.card.likes.like_num = Settings.Private.like;
										}
									}
									body.data = data;
									break;
								case "x/resource/show/skin": // 皮肤页
									data.user_equip = Configs.Skin.user_equip.find(e => {
										if (Settings.Skin.user_equip.toString() === e.id.toString()) {
											$.log("切换皮肤为: "+ e.name);
											return e;
										}
									});
									data.load_equip = Configs.Skin.load_equip.find(e => {
										if (Settings.Skin.load_equip.toString() === e.id.toString()) {
											$.log("切换加载动画为: "+ e.name);
											return e;
										}
									});
									body.data = data;
									break;
							};
							break;
						case "api.bilibili.com":
						case "api.biliapi.net":
							switch (PATH) {
								case "pgc/player/api/playurl": // 番剧-播放地址-api
								case "pgc/player/web/playurl": // 番剧-播放地址-web
								case "pgc/player/web/playurl/html5":  // 番剧-播放地址-web-HTML5
									break;
								case "pgc/view/v2/app/season": // 番剧页面-内容-app
									break;
								case "pgc/view/web/season": // 番剧-内容-web
								case "pgc/view/pc/season": // 番剧-内容-pc
									break;
								case "pgc/page/bangumi": // 观影页
								case "pgc/page/cinema/tab": // 观影页
									break;
								case "x/vip/web/vip_center/combine": // 会员页
									if (Settings?.Private?.vip) {
										data.user.vip.theme_type = 0;
										data.user.vip.label = {
											img_label_uri_hans_static: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
											use_img_label: true,
											img_label_uri_hant_static: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
											bg_color: "#FB7299",
											bg_style: 1,
											text: "年度大会员",
											border_color: "",
											img_label_uri_hans: "",
											img_label_uri_hant: "",
											label_theme: "hundred_annual_vip",
											text_color: "#FFFFFF"
										}
										data.user.vip.vip_pay_type = 0,
										data.user.vip.vip_due_date = 4102329600000,
										data.user.vip.avatar_subscript = 1,
										data.user.vip.is_new_user = false,
										data.user.vip.tip_material = null,
										data.user.vip.vip_type = 2,
										data.user.vip.avatar_subscript_url = "https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
										data.user.vip.vip_status = 1,
										data.user.vip.nickname_color = "#FB7299"
										data.user.account_exception_text = "",
										data.user.vip_keep_time = 946656000,
										data.user.notice = {
											tv_text: "",
											surplus_seconds: 0,
											tv_surplus_seconds: 0,
											type: 0,
											can_close: false,
											text: ""
										},
										data.user.background_image_small = "",
										data.user.is_auto_renew = false,
										data.user.panel_sub_title = "",
										data.user.tv = {
											vip_pay_type: 0,
											status: 1,
											type: 1,
											due_date: 4102329600000
										},
										data.user.background_image_big = "",
										data.user.vip_overdue_explain = "年度大会员有效期 2099/12/31",
										data.user.tv_overdue_explain = "超级大会员有效期 2099/12/31",
										data.user.renew = {
											link: "",
											text: ""
										}
									}
									body.data = data;
									break;
								case "x/vip/price/panel/lexi": // 会员页
									if (Settings?.Private?.vip) {
										data.basic.user_info = {
											vip_status: 1,
											vip_type: 2,
											vip_overdue_time: 4102329600000,
											tv_vip_overdue_time: 4102329600000,
											tv_vip_status: 1
										}
									}
									body.data = data;
									break;
								case "x/vip/top_panel_info": // 续费页
									if (Settings?.Private?.vip) {
										data.ever_vip = false;
										data.vip_overdue_time = 0;
										data.vip_type = 2;
										data.tv = "超级大会员：有效期至2099-12-31";
										data.vip_status = 1;
										data.vip = "大会员：有效期至2099-12-31";
										data.tv_vip_status = 1;
									}
									body.data = data;
									break;
								case "x/player/wbi/playurl": // UGC-用户生产内容-播放地址
									break;
								case "x/space/acc/info": // 用户空间-账号信息-pc
								case "x/space/wbi/acc/info": // 用户空间-账号信息-wbi
									switch (url.params?.vmid || url.params?.mid) {
										case "11783021": // 哔哩哔哩番剧出差
										case "1988098633": // b站_戲劇咖
										case "2042149112": // b站_綜藝咖
											break;
										default:
											break;
									};
									break;
							
							};
							break;
						case "api.live.bilibili.com":
							switch (PATH) {
								case "xlive/app-room/v1/index/getInfoByRoom": // 直播
									break;
							};
							break;
					};
					$response.body = JSON.stringify(body);
					break;
				case "application/x-protobuf":
				case "application/grpc":
				case "application/grpc+proto":
				case "applecation/octet-stream":
					let rawBody = $.isQuanX() ? new Uint8Array($response.bodyBytes) : $response.body;
					//$.log(`🚧 ${$.name}`, `isBuffer? ${ArrayBuffer.isView(rawBody)}: ${JSON.stringify(rawBody)}`, "");
					/******************  initialization start  *******************/
					/******************  initialization finish  ******************/
					switch (FORMAT) {
						case "application/x-protobuf":
							break;
						case "application/grpc":
						case "application/grpc+proto":
							/******************  initialization finish  ******************/
							// 先拆分B站gRPC校验头和protobuf数据体
							let header = rawBody.slice(0, 5);
							body = rawBody.slice(5);
							// 处理response压缩protobuf数据体
							switch (header?.[0]) {
								case 0: // unGzip
									break;
								case 1: // Gzip
									body = pako.ungzip(body);
									header[0] = 0; // unGzip
									break;
							};
							// 解析链接并处理protobuf数据
							switch (HOST) {
								case "grpc.biliapi.net": // HTTP/2
								case "app.bilibili.com": // HTTP/1.1
									/******************  initialization finish  ******************/
									switch (PATHs?.[0]) {
										case "bilibili.app.playurl.v1.PlayURL": // 普通视频
											switch (PATHs?.[1]) {
												case "PlayView": // 播放地址
													break;
												case "PlayConf": // 播放配置
													break;
											};
											break;
										case "bilibili.app.dynamic.v2.Dynamic": // 动态
											switch (PATHs?.[1]) {
												case "DynAll": // 视频动态
													break;
											}
											break;
										case "bilibili.app.view.v1.View": // 视频
											switch (PATHs?.[1]) {
												case "View": // 视频播放页
													break;
											}
											break;
										case "bilibili.pgc.gateway.player.v2.PlayURL": // 番剧

											switch (PATHs?.[1]) {
												case "PlayView": { // 播放地址
													break;
												};
												case "PlayConf": // 播放配置
													break;
											};
											break;
										case "bilibili.app.nativeact.v1.NativeAct": // 活动-节目、动画、韩综（港澳台）
											switch (PATHs?.[1]) {
												case "Index": // 首页
													break;
											};
											break;
										case "bilibili.app.interface.v1.Search": // 搜索框
											switch (PATHs?.[1]) {
												case "Suggest3": // 搜索建议
													break;
											};
											break;
										case "bilibili.polymer.app.search.v1.Search": // 搜索结果
											/******************  initialization start  *******************/
											/******************  initialization finish  *******************/
											switch (PATHs?.[1]) {
												case "SearchAll": { // 全部结果（综合）
													/******************  initialization start  *******************/
													/******************  initialization finish  *******************/
													break;
												};
												case "SearchByType": { // 分类结果（番剧、用户、影视、专栏）
													break;
												};
											};
											break;
									};
									break;
							};
							// protobuf部分处理完后，重新计算并添加B站gRPC校验头
							rawBody = newRawBody({ header, body }); // gzip压缩有问题，别用
							break;
					};
					// 写入二进制数据
					if ($.isQuanX()) $response.bodyBytes = rawBody
					else $response.body = rawBody;
					break;
			};
			break;
		case "false":
			break;
	}
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		switch ($response) {
			default: { // 有回复数据，返回回复数据
				const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
				$.log(`🎉 ${$.name}, finally`, `$response`, `FORMAT: ${FORMAT}`, "");
				//$.log(`🚧 ${$.name}, finally`, `$response: ${JSON.stringify($response)}`, "");
				if ($response?.headers?.["Content-Encoding"]) $response.headers["Content-Encoding"] = "identity";
				if ($response?.headers?.["content-encoding"]) $response.headers["content-encoding"] = "identity";
				if ($.isQuanX()) {
					switch (FORMAT) {
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ headers: $response.headers });
							break;
						case "application/x-www-form-urlencoded":
						case "text/plain":
						case "text/html":
						case "text/xml":
						case "text/plist":
						case "application/xml":
						case "application/plist":
						case "application/x-plist":
						case "text/json":
						case "application/json":
						default:
							// 返回普通数据
							$.done({ headers: $response.headers, body: $response.body });
							break;
						case "application/x-protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 返回二进制数据
							//$.log(`${$response.bodyBytes.byteLength}---${$response.bodyBytes.buffer.byteLength}`);
							$.done({ headers: $response.headers, bodyBytes: $response.bodyBytes.buffer.slice($response.bodyBytes.byteOffset, $response.bodyBytes.byteLength + $response.bodyBytes.byteOffset) });
							break;
					};
				} else $.done($response);
				break;
			};
			case undefined: { // 无回复数据
				break;
			};
		};
	})

/***************** Function *****************/
/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {Array} platforms - Platform Names
 * @param {Object} database - Default DataBase
 * @return {Object} { Settings, Caches, Configs }
 */
function setENV(name, platforms, database) {
	$.log(`☑️ ${$.name}, Set Environment Variables`, "");
	let { Settings, Caches, Configs } = getENV(name, platforms, database);
	/***************** Settings *****************/
	$.log(`✅ ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings内容: ${JSON.stringify(Settings)}`, "");
	/***************** Caches *****************/
	//$.log(`✅ ${$.name}, Set Environment Variables`, `Caches: ${typeof Caches}`, `Caches内容: ${JSON.stringify(Caches)}`, "");
	/***************** Configs *****************/
	return { Settings, Caches, Configs };
};
/**
 * Create New Raw Body
 * @author app2smile
 * @param {ArrayBuffer} header - unGzip Header
 * @param {ArrayBuffer} body - unGzip Body
 * @param {String} type - encoding type
 * @return {ArrayBuffer} new raw Body with Checksum Header
 */
function newRawBody({ header, body }, encoding = undefined) {
	//$.log(`⚠ ${$.name}, Create New Raw Body`, "");
	// Header: 1位：是否校验数据 （0或者1） + 4位:校验值（数据长度）
	const flag = (encoding == "gzip") ? 1 : (encoding == "identity") ? 0 : (encoding == undefined) ? 0 : header?.[0] ?? 0; // encoding flag
	const checksum = Checksum(body.length); // 校验值为未压缩情况下的数据长度, 不是压缩后的长度
	if (encoding == "gzip") body = pako.gzip(body); // gzip压缩（有问题，别压）
	let rawBody = new Uint8Array(header.length + body.length);
	rawBody.set([flag], 0) // 0位：Encoding类型，当为1的时候, app会校验1-4位的校验值是否正确
	rawBody.set(checksum, 1) // 1-4位： 校验值(4位)
	rawBody.set(body, 5); // 5-end位：protobuf数据
	//$.log(`🎉 ${$.name}, Create New Raw Body`, "");
	return rawBody;

	// 计算校验和 (B站为数据本体字节数)
	function Checksum(num) {
		let arr = new ArrayBuffer(4); // an Int32 takes 4 bytes
		let view = new DataView(arr);
		// 首位填充计算过的新数据长度
		view.setUint32(0, num, false); // byteOffset = 0; litteEndian = false
		return new Uint8Array(arr);
	};
};

/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t);break;case"Node.js":this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}

/**
 * Get Environment Variables
 * @link https://github.com/VirgilClyne/GetSomeFries/blob/main/function/getENV/getENV.min.js
 * @author VirgilClyne
 * @param {String} key - Persistent Store Key
 * @param {Array} names - Platform Names
 * @param {Object} database - Default Database
 * @return {Object} { Settings, Caches, Configs }
 */
function getENV(key,names,database){let BoxJs=$.getjson(key,database),Argument={};if("undefined"!=typeof $argument&&Boolean($argument)){let arg=Object.fromEntries($argument.split("&").map((item=>item.split("="))));for(let item in arg)setPath(Argument,item,arg[item])}const Store={Settings:database?.Default?.Settings||{},Configs:database?.Default?.Configs||{},Caches:{}};Array.isArray(names)||(names=[names]);for(let name of names)Store.Settings={...Store.Settings,...database?.[name]?.Settings,...BoxJs?.[name]?.Settings,...Argument},Store.Configs={...Store.Configs,...database?.[name]?.Configs},BoxJs?.[name]?.Caches&&"string"==typeof BoxJs?.[name]?.Caches&&(BoxJs[name].Caches=JSON.parse(BoxJs?.[name]?.Caches)),Store.Caches={...Store.Caches,...BoxJs?.[name]?.Caches};return function traverseObject(o,c){for(var t in o){var n=o[t];o[t]="object"==typeof n&&null!==n?traverseObject(n,c):c(t,n)}return o}(Store.Settings,((key,value)=>("true"===value||"false"===value?value=JSON.parse(value):"string"==typeof value&&(value?.includes(",")?value=value.split(","):value&&!isNaN(value)&&(value=parseInt(value,10))),value))),Store;function setPath(object,path,value){path.split(".").reduce(((o,p,i)=>o[p]=path.split(".").length===++i?value:o[p]||{}),object)}}

// https://github.com/VirgilClyne/GetSomeFries/blob/main/function/URL/URLs.embedded.min.js
function URLs(t){return new class{constructor(t=[]){this.name="URL v1.2.2",this.opts=t,this.json={scheme:"",host:"",path:"",type:"",query:{}}}parse(t){let s=t.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;return s?.path?s.paths=s?.path?.split("/"):s.path="",s?.paths&&(s.type=s?.paths?.[s?.paths?.length-1]?.split(".")?.[1]),s?.query&&(s.query=Object.fromEntries(s.query.split("&").map((t=>t.split("="))))),s}stringify(t=this.json){let s="";return t?.scheme&&t?.host&&(s+=t.scheme+"://"+t.host),t?.path&&(s+=t?.host?"/"+t.path:t.path),t?.query&&(s+="?"+Object.entries(t.query).map((t=>t.join("="))).join("&")),s}}(t)}
