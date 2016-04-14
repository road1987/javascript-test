/**
 * @description 基于jquery ， sap crm 地址数据集
 * @author hongchun.li
 * @return {[type]} [description]
 */
(function(){
	var provinceStr='010,北京|020,上海|030,天津|04Z,内蒙古|050,山西省|060,河北省|070,辽宁省|080,吉林省|090,黑龙江省|100,江苏省|110,安徽省|120,山东省|130,浙江省|140,江西省|150,福建省|160,湖南省|170,湖北省|180,河南省|190,广东省|200,海南省|21Z,广西省|220,贵州省|230,四川省|240,云南省|250,陕西省|260,甘肃省|27Z,宁夏|280,青海省|290,新疆乌鲁木齐|30Z,西藏自治区|310,台湾省|320,重庆';
	var cityStr = '010,010,北京|020,020,上海|030,030,天津|04Z,040,内蒙呼和浩特|04Z,041,内蒙呼和浩特土默特左旗|04Z,042,内蒙包头|04Z,043,内蒙包头土默特右旗|04Z,044,内蒙乌海|04Z,045,内蒙赤峰|04Z,046,内蒙赤峰阿鲁科尔沁旗|04Z,047,内蒙赤峰巴林左旗|04Z,048,内蒙赤峰巴林右旗|04Z,049,内蒙赤峰克什克腾旗|04Z,04A,内蒙赤峰翁牛特旗|04Z,04B,内蒙赤峰喀喇沁旗|04Z,04C,内蒙赤峰敖汉旗|04Z,04D,内蒙呼伦贝尔盟|04Z,04E,内蒙呼伦贝尔盟海拉尔|04Z,04F,内蒙呼伦贝尔盟满州里|04Z,04G,内蒙呼伦贝尔盟扎兰屯|04Z,04H,内蒙呼伦贝尔盟牙克石|04Z,04I,内蒙呼伦贝尔盟阿荣旗|050,051,山西太原|050,052,山西太原古交|050,053,山西大同|050,054,山西阳泉|050,055,山西长治|050,056,山西晋城|050,057,山西晋城高平|050,058,山西朔州|050,059,山西忻州|050,05A,山西忻州原平|050,05B,山西吕梁孝义|050,05C,山西晋中榆次|050,05D,山西晋中介休|050,05E,山西临汾|050,05F,山西临汾侯马|050,05G,山西临汾霍州|050,05H,山西运城|050,05I,山西晋中|050,05J,山西吕梁|060,061,河北石家庄|060,062,河北石家庄辛集|060,063,河北石家庄藁城|060,064,河北石家庄晋州|060,065,河北石家庄新乐|060,066,河北唐山|060,067,河北唐山遵化|060,068,河北秦皇岛|060,069,河北邯郸|060,06A,河北邯郸武安|060,06B,河北邢台|060,06C,河北邢台南宫|060,06D,河北邢台沙河|060,06E,河北保定|060,06F,河北张家口|060,06G,河北承德|060,06H,河北沧州|060,06I,河北沧州泊头|060,06J,河北沧州任丘|060,06K,河北沧州黄骅|060,06L,河北沧州河间|060,06M,河北廊坊|060,06N,河北廊坊霸州|060,06O,河北廊坊三河|060,06P,河北保定定州|060,06Q,河北保定涿州|060,06R,河北保定安国|060,06S,河北保定高碑店|060,06T,河北衡水|060,06U,河北衡水冀州|070,071,辽宁沈阳|070,072,辽宁沈阳新民|070,073,辽宁大连|070,074,辽宁大连瓦房店|070,075,辽宁大连普兰店|070,076,辽宁大连庄河|070,077,辽宁鞍山|070,078,辽宁鞍山 辖|070,079,辽宁鞍山海城|070,07A,辽宁抚顺|070,07B,辽宁本溪|070,07C,辽宁丹东|070,07D,辽宁丹东东港|070,07E,辽宁锦州|070,07F,辽宁锦州凌海|070,07G,辽宁营口|070,07H,辽宁营口盖州|070,07I,辽宁营口大石桥|070,07J,辽宁阜新|070,07K,辽宁辽阳|070,07L,辽宁盘锦|070,07M,辽宁铁岭|070,07N,辽宁铁岭铁法|070,07O,辽宁铁岭开原|070,07P,辽宁朝阳|070,07Q,辽宁朝阳北票|070,07R,辽宁朝阳凌源|070,07S,辽宁锦西|070,07T,辽宁锦西兴城|080,081,吉林长春|080,082,吉林长春九台|080,083,吉林长春榆树|080,084,吉林|080,085,吉林 辖|080,086,吉林蛟河|080,087,吉林桦甸|080,088,吉林舒兰|080,089,吉林四平|080,08A,吉林四平公主岭|080,08B,吉林辽源|080,08C,吉林通化|080,08D,吉林通化梅河口|080,08E,吉林通化集安|080,08F,吉林浑江|080,08G,吉林浑江临江|080,08H,吉林松原|080,08I,吉林白城|080,08J,吉林白城洮南|080,08K,吉林白城大安|080,08L,吉林延边朝鲜族自治州|080,08M,吉林延边延吉|080,08N,吉林延边图们|080,08O,吉林延边敦化|080,08P,吉林延边珲春|080,08Q,吉林延边龙井|080,08R,吉林延边和龙|090,091,黑龙江哈尔滨|090,092,黑龙江哈尔滨阿城|090,093,黑龙江齐齐哈尔|090,094,黑龙江齐齐哈尔讷河|090,095,黑龙江鸡西|090,096,黑龙江鹤岗|090,097,黑龙江双鸭山|090,098,黑龙江大庆|090,099,黑龙江伊春|090,09A,黑龙江伊春铁力|090,09B,黑龙江佳木斯|090,09C,黑龙江佳木斯同江|090,09D,黑龙江佳木斯富锦|090,09E,黑龙江七台河|090,09F,黑龙江牡丹江|090,09G,黑龙江牡丹江绥芬河|090,09H,黑龙江牡丹江密山|090,09I,黑龙江牡丹江海林|090,09J,黑龙江牡丹江宁安|090,09K,黑龙江黑河|090,09L,黑龙江黑河北安|090,09M,黑龙江黑河五大连池|090,09N,黑龙江松花江双城|090,09O,黑龙江松花江尚志|090,09P,黑龙江松花江五常|090,09Q,黑龙江绥化绥化|090,09R,黑龙江绥化安达|090,09S,黑龙江绥化肇东|090,09T,黑龙江绥化海伦|100,101,江苏南京|100,102,江苏无锡|100,103,江苏无锡江阴|100,104,江苏无锡宜兴|100,105,江苏徐州|100,106,江苏徐州新沂|100,107,江苏徐州邳州|100,108,江苏常州|100,109,江苏常州溧阳|100,10A,江苏常州金坛|100,10B,江苏苏州|100,10C,江苏苏州常熟|100,10D,江苏苏州张家港|100,10E,江苏苏州昆山|100,10F,江苏苏州吴江|100,10G,江苏苏州太仓|100,10H,江苏南通|100,10I,江苏南通启东|100,10J,江苏南通如皋|100,10K,江苏南通通州|100,10L,江苏连云港|100,10M,江苏淮阴|100,10N,江苏淮阴宿迁|100,10O,江苏淮阴淮安|100,10P,江苏盐城|100,10Q,江苏盐城东台|100,10R,江苏扬州|100,10S,江苏扬州仪征|100,10T,江苏扬州泰州|100,10U,江苏扬州兴化|100,10V,江苏扬州高邮|100,10W,江苏扬州泰兴|100,10X,江苏扬州靖江|100,10Y,江苏镇江|100,10Z,江苏镇江丹阳|110,111,安徽合肥|110,112,安徽芜湖|110,113,安徽蚌埠|110,114,安徽淮南|110,115,安徽马鞍山|110,116,安徽淮北|110,117,安徽铜陵|110,118,安徽安庆|110,119,安徽黄山|110,11A,安徽滁州|110,11B,安徽滁州天长|110,11C,安徽阜阳|110,11D,安徽阜阳亳州|110,11E,安徽阜阳界首|110,11F,安徽六安|110,11G,安徽宣城宣州|110,11H,安徽巢湖|110,11I,安徽池州贵池|120,121,山东济南|120,122,山东济南章丘|120,123,山东青岛|120,124,山东淄博|120,125,山东枣庄|120,126,山东枣庄滕州|120,127,山东东营|120,128,山东烟台|120,129,山东潍坊|120,12A,山东济宁|120,12B,山东泰安|120,12C,山东威海|120,12D,山东日照|120,12E,山东莱芜|120,12F,山东滨州|120,12G,山东德州|120,12H,山东聊城|120,12I,山东临沂|120,12J,山东菏泽|130,131,浙江杭州|130,132,浙江杭州萧山|130,133,浙江杭州建德|130,134,浙江宁波|130,135,浙江宁波余姚|130,136,浙江宁波慈溪|130,137,浙江宁波奉化|130,138,浙江温州|130,139,浙江温州瑞安|130,13A,浙江温州乐清|130,13B,浙江嘉兴|130,13C,浙江嘉兴海宁|130,13D,浙江嘉兴平湖|130,13E,浙江嘉兴桐乡|130,13F,浙江湖州|130,13G,浙江绍兴|130,13H,浙江绍兴诸暨|130,13I,浙江绍兴上虞|130,13J,浙江金华|130,13K,浙江金华兰溪|130,13L,浙江金华义乌|130,13M,浙江金华东阳|130,13N,浙江金华永康|130,13O,浙江衢州|130,13P,浙江衢州江山|130,13Q,浙江舟山|130,13R,浙江丽水|130,13S,浙江丽水龙泉|130,13T,浙江台州椒江|130,13U,浙江台州临海|130,13V,浙江台州黄岩|140,141,江西南昌|140,142,江西景德镇|140,143,江西景德镇乐平|140,144,江西萍乡|140,145,江西九江|140,146,江西九江瑞昌|140,147,江西新余|140,148,江西鹰潭|140,149,江西赣州|140,14A,江西宜春|140,14B,江西上饶|140,14C,江西上饶德兴|140,14D,江西吉安|140,14E,江西吉安井冈山|140,14F,江西抚州临川|150,151,福建福州|150,152,福建福州福清|150,153,福建厦门|150,154,福建莆田|150,155,福建三明|150,156,福建三明永安|150,157,福建泉州|150,158,福建泉州石狮|150,159,福建泉州晋江|150,15A,福建泉州南安|150,15B,福建漳州|150,15C,福建漳州龙海|150,15D,福建南平|150,15E,福建南平邵武|150,15F,福建南平武夷山|150,15G,福建南平建瓯|150,15H,福建宁德|150,15I,福建宁德福安|150,15J,福建龙岩|160,161,湖南长沙|160,162,湖南长沙浏阳|160,163,湖南株洲|160,164,湖南株洲醴陵|160,165,湖南湘潭|160,166,湖南湘潭湘乡|160,167,湖南湘潭韶山|160,168,湖南衡阳|160,169,湖南衡阳耒阳|160,16A,湖南邵阳|160,16B,湖南岳阳|160,16C,湖南岳阳汨罗|160,16D,湖南岳阳临湘|160,16E,湖南常德|160,16F,湖南常德津|160,16G,湖南大庸|160,16H,湖南益阳|160,16I,湖南益阳沅江|160,16J,湖南娄底|160,16K,湖南娄底冷水江|160,16L,湖南娄底涟源|160,16M,湖南郴州|160,16N,湖南郴州资兴|160,16O,湖南零陵永州|160,16P,湖南零陵冷水滩|160,16Q,湖南怀化|160,16R,湖南怀化洪江|160,16S,湖南湘西土家族苗族自治州|160,16T,湖南湘西吉首|170,171,湖北武汉|170,172,湖北黄石|170,173,湖北十堰|170,174,湖北沙|170,175,湖北宜昌|170,176,湖北宜昌枝城|170,177,湖北宜昌当阳|170,178,湖北襄樊|170,179,湖北襄樊随州|170,17A,湖北襄樊老河口|170,17B,湖北襄樊枣阳|170,17C,湖北鄂州|170,17D,湖北荆门|170,17E,湖北孝感|170,17F,湖北孝感应城|170,17G,湖北孝感安陆|170,17H,湖北孝感广水|170,17I,湖北黄冈麻城|170,17J,湖北黄冈武穴|170,17K,湖北黄冈黄州|170,17L,湖北咸宁|170,17M,湖北咸宁蒲圻|170,17N,湖北荆州仙桃|170,17O,湖北荆州石首|170,17P,湖北荆州洪湖|170,17Q,湖北荆州天门|170,17R,湖北荆州潜江|170,17S,湖北荆州钟祥|170,17T,湖北郧阳丹江口|170,17U,湖北恩施土家族苗族自治州|170,17V,湖北恩施|170,17W,湖北恩施利川|170,17X,湖北省直辖行政单位|180,181,河南郑州|180,182,河南郑州巩义|180,183,河南开封|180,184,河南洛阳|180,185,河南洛阳偃师|180,186,河南平顶山|180,187,河南平顶山舞钢|180,188,河南平顶山汝州|180,189,河南安阳|180,18A,河南鹤壁|180,18B,河南新乡|180,18C,河南新乡卫辉|180,18D,河南焦作|180,18E,河南焦作济源|180,18F,河南焦作沁阳|180,18G,河南濮阳|180,18H,河南许昌|180,18I,河南许昌禹州|180,18J,河南许昌长葛|180,18K,河南漯河|180,18L,河南三门峡|180,18M,河南三门峡义马|180,18N,河南三门峡灵宝|180,18O,河南商丘|180,18P,河南周口|180,18Q,河南周口项城|180,18R,河南驻马店驻马店|180,18S,河南南阳|180,18T,河南南阳邓州|180,18U,河南信阳|190,191,广东广州|190,192,广东广州番禺|190,193,广东广州花都|190,194,广东广州增城|190,195,广东韶关|190,196,广东深圳|190,197,广东珠海|190,198,广东汕头|190,199,广东汕头潮阳|190,19A,广东佛山|190,19B,广东江门|190,19C,广东湛江|190,19D,广东湛江廉江|190,19E,广东茂名|190,19F,广东茂名高州|190,19G,广东肇庆|190,19H,广东惠州|190,19I,广东梅州|190,19J,广东汕尾|190,19K,广东河源|190,19L,广东阳江|190,19M,广东清远|190,19N,广东东莞|190,19O,广东中山|190,19P,广东潮州|190,19Q,广东揭阳|190,19R,广东揭阳普宁|200,201,海南通什|200,202,海南琼海|200,203,海南儋州|200,204,西沙群岛|200,205,南沙群岛|200,206,中沙群岛的岛礁及其海域|200,207,海南海口|200,208,海南三亚|200,209,海南东方|200,20A,海南万宁|200,20B,海南文昌|21Z,210,广西南宁|21Z,211,广西柳州|21Z,212,广西桂林|21Z,213,广西梧州|21Z,214,广西北海|21Z,215,广西防城港|21Z,216,广西南宁凭祥|21Z,217,广西柳州合山|21Z,218,广西玉林|21Z,219,广西贵港|21Z,21A,广西百色|21Z,21B,广西河池|21Z,21C,广西河池宜州|21Z,21D,广西钦州|21Z,21E,广西来宾|21Z,21F,广西崇左|21Z,21G,广西贺州|220,221,贵州贵阳|220,222,贵州六盘水|220,223,贵州遵义|220,224,贵州铜仁|220,225,贵州黔西南自治州|220,226,贵州黔西兴义|220,227,贵州毕节|220,228,贵州安顺|220,229,贵州黔东南苗族侗族自治州|220,22A,贵州黔东凯里|220,22B,贵州黔南布依族苗族自治州|220,22C,贵州黔南都匀|230,231,四川成都|230,232,四川成都都江堰|230,233,四川成都彭州|230,234,四川重庆|230,235,四川自贡|230,236,四川攀枝花|230,237,四川泸州|230,238,四川德阳|230,239,四川绵阳|230,23A,四川广元|230,23B,四川遂宁|230,23C,四川内江|230,23D,四川乐山|230,23E,四川南充|230,23F,四川涪陵|230,23G,四川宜宾|230,23H,四川达川|230,23I,四川雅安|230,23J,四川阿坝藏族羌族自治州|230,23K,四川甘孜藏族自治州|230,23L,四川凉山彝族自治州|230,23M,四川凉山西昌|230,23N,四川广安华蓥|230,23O,四川巴中|230,23P,四川资阳|230,23Q,四川眉山|240,241,云南昆明|240,242,云南东川|240,243,云南昭通|240,244,云南曲靖|240,245,云南楚雄|240,246,云南玉溪|240,247,云南红河哈尼族彝族自治州|240,248,云南红河个旧|240,249,云南红河开远|240,24A,云南文山壮族苗族自治州|240,24B,云南普洱|240,24C,云南西双版纳傣族自治州|240,24D,云南西双版纳景洪|240,24E,云南大理|240,24F,云南保山|240,24G,云南德宏傣族景颇族自治州|240,24H,云南德宏畹町|240,24I,云南德宏瑞丽|240,24J,云南怒江傈僳族自治州|240,24K,云南迪庆藏族自治州|240,24L,云南丽江|240,24M,云南临沧|240,24N,云南宣威|250,251,陕西西安|250,252,陕西铜川|250,253,陕西宝鸡|250,254,陕西咸阳|250,255,陕西渭南|250,256,陕西渭南韩城|250,257,陕西渭南华阴|250,258,陕西汉中|250,259,陕西安康|250,25A,陕西商洛商州|250,25B,陕西延安|250,25C,陕西榆林|260,261,甘肃兰州|260,262,甘肃嘉峪关|260,263,甘肃金昌|260,264,甘肃白银|260,265,甘肃天水|260,266,甘肃酒泉玉门|260,267,甘肃酒泉|260,268,甘肃酒泉敦煌|260,269,甘肃张掖|260,26A,甘肃武威|260,26B,甘肃平凉|260,26C,甘肃庆阳西峰|260,26D,甘肃临夏回族自治州|260,26E,甘肃临夏|260,26F,甘肃甘南藏族自治州|27Z,271,宁夏石嘴山|27Z,272,宁夏银南吴忠|27Z,273,宁夏银南青铜峡|27Z,270,宁夏银川|280,281,青海西宁|280,282,青海海北藏族自治州|280,283,青海黄南藏族自治州|280,284,青海海南藏族自治州|280,285,青海果洛藏族自治州|280,286,青海玉树藏族自治州|280,287,青海海西蒙古族藏族自治州|280,288,青海海西格尔木|280,289,青海海西德令哈|290,291,新疆克拉玛依|290,292,新疆吐鲁番吐鲁番|290,293,新疆哈密|290,294,新疆昌吉回族自治州|290,295,新疆昌吉|290,296,新疆昌吉阜康|290,297,新疆博尔塔拉蒙古自治州|290,298,新疆博尔塔拉博乐|290,299,新疆巴音郭楞蒙古自治州|290,29A,新疆巴音郭楞库尔勒|290,29B,新疆阿克苏阿克苏|290,29C,克孜勒苏柯尔克孜自治州|290,29D,新疆阿图什|290,29E,新疆喀什|290,29F,新疆和田|290,29G,新疆伊犁哈萨克自治州|290,29H,新疆伊犁奎屯|290,29I,新疆伊犁伊宁|290,29J,新疆塔城|290,29K,新疆阿勒泰阿勒泰|290,29L,新疆省直辖行政单位|290,29M,新疆石河子|30Z,300,西藏拉萨|30Z,301,西藏日喀则日喀则|310,310,台湾省|320,320,重庆';
  	var areaStr = '020,101,上海区|030,101,天津区|051,105,小店区|051,106,迎泽区|051,107,杏花岭区|051,108,尖草坪区|051,109,万柏林区|051,110,晋源区|051,121,清徐县|051,122,阳曲县|051,123,娄烦县|053,201,城区|053,202,矿区|053,203,南郊区|053,211,新荣区|053,212,阳高县(龙泉镇)|053,221,天镇县(玉泉镇)|053,222,广灵县(壶泉镇)|053,223,灵丘县(武灵镇)|053,224,浑源县(永安镇)|053,225,左云县(云兴镇)|053,226,大同县(西坪镇)|054,302,城区|054,303,矿区|054,311,郊区|054,321,平定县(冠山镇)|054,322,盂县(秀水镇)|055,401,城区|055,402,郊区|055,411,潞城市|055,421,长治县(韩店镇)|055,423,襄垣县(古韩镇)|055,424,屯留县(麟绛镇)|055,425,平顺县(青羊镇)|055,426,黎城县(黎侯镇)|055,427,壶关县(龙泉镇)|055,428,长子县(丹朱镇)|055,429,武乡县(丰州镇)|055,430,沁县(定昌镇)|055,431,沁源县(沁河镇)|056,501,城区|056,502,高平市|056,521,泽州县(南村镇)|056,522,沁水县(龙港镇)|056,524,阳城县(凤城镇)|056,525,陵川县(崇文镇)|058,602,朔城区|058,603,平鲁区|058,621,山阴县(岱岳乡)|058,622,应县(金城镇)|058,623,右玉县(新城镇)|058,624,怀仁县(云中镇)|059,201,忻府区|059,202,原平市|059,222,定襄县(晋昌镇)|059,223,五台县(台城镇)|059,225,代县(上馆镇)|059,226,繁峙县(繁城镇)|059,227,宁武县(凤凰镇)|059,228,静乐县(鹅城镇)|059,229,神池县(龙泉镇)|059,230,五寨县(砚城镇)|059,231,岢岚县(岚漪镇)|059,232,河曲县(文笔镇)|059,233,保德县(东关镇)|059,234,偏关县(新关镇)|05E,601,尧都区|05E,602,侯马市|05E,603,霍州市|05E,621,曲沃县(乐昌镇)|05E,622,翼城县(唐兴镇)|05E,623,襄汾县(新城镇)|05E,625,洪洞县(大槐树镇)|05E,627,古县(岳阳镇)|05E,628,安泽县(府城镇)|05E,629,浮山县(天坛镇)|05E,630,吉县(吉昌镇)|05E,631,乡宁县(昌宁镇)|05E,632,蒲县(蒲城镇)|05E,633,大宁县(昕水镇)|05E,634,永和县(芝河镇)|05E,635,隰县(龙泉镇)|05E,636,汾西县(永安镇)|05H,701,盐湖区|05H,702,永济市|05H,703,河津市|05H,723,芮城县(古魏镇)|05H,724,临猗县(猗氏镇)|05H,725,万荣县(解店镇)|05H,726,新绛县(龙兴镇)|05H,727,稷山县(稷峰镇)|05H,729,闻喜县(桐城镇)|05H,730,夏县(瑶峰镇)|05H,731,绛县(古绛镇)|05H,732,平陆县(圣人涧镇)|05H,733,垣曲县(新城镇)|05I,401,榆次区|05I,402,介休市|05I,421,榆社县(箕城镇)|05I,422,左权县(辽阳镇)|05I,423,和顺县(义兴镇)|05I,424,昔阳县(乐平镇)|05I,427,寿阳县(朝阳镇)|05I,429,太谷县(明星镇)|05I,430,祁县(昭余镇)|05I,431,平遥县(古陶镇)|05I,433,灵石县(翠峰镇)|05J,301,离石区|05J,302,孝义市|05J,303,汾阳市|05J,322,文水县(凤城镇)|05J,323,中阳县(宁乡镇)|05J,325,兴县(蔚汾镇)|05J,326,临县(临泉镇)|05J,327,方山县(圪洞镇)|05J,328,柳林县(柳林镇)|05J,329,岚县(东村镇)|05J,330,交口县(水头镇)|05J,332,交城县(天宁镇)|05J,333,石楼县(灵泉镇)|200,109,昌江县|200,110,澄迈县|200,111,儋州-停|200,112,定安县|200,113,东方-停|200,114,乐东县|200,115,临高县|200,116,陵水县|200,117,琼海-停|200,118,屯昌县|200,119,万宁-停|200,120,文昌-停|202,401,琼海|203,201,儋州|207,101,秀英区|207,102,龙华区|207,103,琼山区|207,104,美兰区|208,105,海棠区|208,106,吉阳区|208,107,天涯区|208,108,崖州区|209,301,东方|20A,501,万宁|20B,601,文昌|210,101,青秀区|210,102,兴宁区|210,103,江南区|210,104,西乡塘区|210,105,良庆区|210,106,邕宁区|210,111,武鸣县|210,121,横县|210,122,宾阳县|210,123,上林县|210,124,隆安县|210,125,马山县|211,202,城中区|211,203,鱼峰区|211,204,柳南区|211,205,柳北区|211,221,柳江县|211,222,柳城县|211,223,鹿寨县|211,227,融安县|211,228,三江侗族自治县|211,229,融水苗族自治县|212,302,秀峰区|212,303,叠彩区|212,304,象山区|212,305,七星区|212,311,雁山区|212,321,阳朔县|212,322,临桂县|212,323,灵川县|212,324,全州县|212,325,兴安县|212,326,永福县|212,327,灌阳县|212,328,龙胜各族自治县|212,329,资源县|212,330,平乐县|212,331,荔浦县|212,332,恭城瑶族自治县|213,401,万秀区|213,403,蝶山区|213,404,长洲区|213,411,岑溪市|213,421,苍梧县(龙圩镇)|213,422,藤县(藤州镇)|213,423,蒙山县(蒙山镇)|214,502,海城区|214,503,银海区|214,512,铁山港区|214,521,合浦县|215,601,港口区|215,602,防城区|215,603,东兴市|215,621,上思县(思阳镇)|218,901,玉州区|218,902,北流市|218,921,兴业县(石南镇)|218,922,容县(容州镇)|218,923,陆川县(陆城镇)|218,924,博白县(博白镇)|219,802,港北区|219,803,港南区|219,804,覃塘区|219,821,平南县|219,881,桂平市|21A,622,右江区|21A,623,田阳县|21A,624,田东县|21A,625,平果县|21A,626,德保县|21A,627,靖西县|21A,628,那坡县|21A,629,凌云县|21A,630,乐业县|21A,631,西林县|21A,632,田林县|21A,633,隆林各族自治县|21B,201,宜州市|21B,701,金城江区|21B,702,南丹县(城关镇)|21B,723,天峨县(六排镇)|21B,724,凤山县(凤城镇)|21B,725,东兰县(东兰镇)|21B,726,巴马瑶族自治县(巴马镇)|21B,727,都安瑶族自治县(安阳镇)|21B,728,大化瑶族自治县(大化镇)|21B,729,罗城仫佬族自治县(东门镇)|21B,730,环江毛南族自治县(思恩镇)|21D,702,钦南区|21D,703,钦北区|21D,721,灵山县|21D,722,浦北县|21E,201,合山市|21E,224,象州县|21E,225,武宣县|21E,228,兴宾区|21E,230,金秀瑶族自治县|21E,231,忻城县|21F,130,江州区|21F,131,凭祥市|21F,132,扶绥县|21F,133,大新县|21F,134,天等县|21F,135,宁明县|21F,136,龙州县|21G,402,八步区|21G,405,平桂区|21G,424,昭平县|21G,427,钟山县|21G,428,富川瑶族自治县|221,101,乌当区|221,102,南明区|221,103,云岩区|221,111,花溪区|221,112,白云区|221,113,小河区|221,121,清镇市|221,122,开阳县(城关镇)|221,123,修文县(龙场镇)|221,181,息烽县(永靖镇)|222,201,钟山区|222,202,盘县(红果镇)|222,203,六枝特区(平寨镇)|222,221,水城县（滥坝镇）|223,301,红花岗区|223,302,汇川区|223,321,赤水市|223,322,仁怀市|223,323,遵义县(南白镇)|223,324,桐梓县(娄山关镇)|223,325,绥阳县(洋川镇)|223,326,正安县(凤仪镇)|223,327,凤冈县(龙泉镇)|223,328,湄潭县(湄江镇)|223,329,余庆县(白泥镇)|223,330,习水县(东皇镇)|223,381,道真仡佬族苗族自治县(玉溪镇)|223,382,务川仡佬族苗族自治县(都濡镇)|223,383,遵义市|224,201,铜仁市|224,222,江口县(双江镇)|224,223,石阡县(汤山镇)|224,224,思南县(思唐镇)|224,225,德江县(青龙镇)|224,226,玉屏侗族自治县(平溪镇)|224,227,印江土家族苗族自治县(峨岭镇)|224,228,沿河土家族自治县(和平镇)|224,229,松桃苗族自治县(蓼皋镇)|224,230,万山特区(万山镇)|226,322,兴仁县|226,323,普安县|226,324,晴隆县|226,325,贞丰县|226,326,望谟县|226,327,册亨县|226,328,安龙县|226,329,兴义市|227,401,毕节市|227,422,大方县(大方镇)|227,423,黔西县(城关镇)|227,424,金沙县(城关镇)|227,425,织金县(城关镇)|227,426,纳雍县(雍熙镇)|227,427,赫章县(城关镇)|227,428,威宁彝族回族苗族自治县(草海镇)|228,501,西秀区|228,526,平坝县(城关镇)|228,527,普定县(城关镇)|228,528,关岭布依族苗族自治县(关索镇)|228,529,镇宁布依族苗族自治县(城关镇)|228,530,紫云苗族布依族自治县(松山镇)|229,601,凯里市|229,622,黄平县(新州镇)|229,623,施秉县(城关镇)|229,624,三穗县(八弓镇)|229,625,镇远县(阳镇)|229,626,岑巩县(思旸镇)|229,627,天柱县(凤城镇)|229,628,锦屏县(三江镇)|229,629,剑河县(革东镇)|229,630,台江县(台拱镇)|229,631,黎平县(德凤镇)|229,632,榕江县(古州镇)|229,633,从江县(丙妹镇)|229,634,雷山县(丹江镇)|229,635,麻江县(杏山镇)|229,636,丹寨县(龙泉镇)|22B,701,都匀市|22B,702,福泉市|22B,722,荔波县(玉屏镇)|22B,723,贵定县(城关镇)|22B,725,瓮安县(雍阳镇)|22B,726,独山县(城关镇)|22B,727,平塘县(平湖镇)|22B,728,罗甸县(龙坪镇)|22B,729,长顺县(长寨镇)|22B,730,龙里县(龙山镇)|22B,731,惠水县(和平镇)|22B,732,三都水族自治县(三合镇)|231,104,青羊区|231,105,锦江区|231,106,金牛区|231,107,武侯区|231,108,成华区|231,109,高新区|231,110,天府新区|231,112,龙泉驿区|231,113,青白江区|231,121,新都区|231,122,温江区|231,123,都江堰市|231,124,彭州市|231,125,邛崃市|231,129,崇州市|231,131,金堂县(赵镇)|231,132,双流县|231,133,郫县(郫筒镇)|231,134,大邑县(晋原镇)|231,135,蒲江县(鹤山镇)|231,136,新津县(五津镇)|235,302,自流井区|235,303,大安区|235,304,贡井区|235,305,自贡高新区|235,311,沿滩区|235,321,荣县(旭阳镇)|235,322,富顺县(富世镇)|236,402,东区|236,403,西区|236,411,仁和区|236,421,米易县|236,422,盐边县|237,501,江阳区|237,502,纳溪区|237,503,龙马潭区|237,504,泸县(福集镇)|237,521,合江县(合江镇)|237,522,叙永县(叙永镇)|237,524,古蔺县(古蔺镇)|238,601,旌阳区|238,603,什邡市|238,623,广汉市|238,626,绵竹市|238,681,罗江县(罗江镇)|238,682,中江县(凯江镇)|239,701,涪城区|239,703,游仙区|239,704,江油市|239,722,三台县(潼川镇)|239,723,盐亭县(云溪镇)|239,724,安县(花荄镇)|239,725,梓潼县(文昌镇)|239,726,北川羌族自治县(曲山镇)|239,727,平武县(龙安镇)|23A,802,市中区|23A,811,元坝区|23A,812,朝天区|23A,821,旺苍县(东河镇)|23A,822,青川县(乔庄镇)|23A,823,剑阁县(下寺镇)|23A,824,苍溪县(陵江镇)|23B,901,船山区|23B,902,安居区|23B,921,蓬溪县(赤城镇)|23B,922,射洪县(太和镇)|23B,923,大英县(蓬莱镇)|23C,001,内江市|23C,002,市中区|23C,011,东兴区|23C,024,威远县(严陵镇)|23C,025,资中县(重龙镇)|23C,028,隆昌县(金鹅镇)|23D,101,市中区|23D,102,沙湾区|23D,111,五通桥区|23D,112,金口河区|23D,113,峨眉山市|23D,123,犍为县(玉津镇)|23D,124,井研县(研城镇)|23D,126,夹江县(漹城镇)|23D,129,沐川县(沐溪镇)|23D,132,峨边彝族自治县(沙坪镇)|23D,133,马边彝族自治县(民建镇)|23E,302,顺庆区|23E,303,嘉陵区|23E,304,阆中市|23E,305,高坪区|23E,321,南部县(南隆镇)|23E,322,营山县(朗池镇)|23E,323,蓬安县(周口镇)|23E,324,仪陇县(新政镇)|23E,325,西充县(晋城镇)|23G,501,翠屏区|23G,502,宜宾县(柏溪镇)|23G,521,南溪县(南溪镇)|23G,522,江安县(江安镇)|23G,523,长宁县(长宁镇)|23G,524,高县(庆符镇)|23G,525,筠连县(筠连镇)|23G,526,珙县(巡场镇)|23G,527,兴文县(中城镇)|23G,528,屏山县(屏山镇)|23H,001,通川区|23H,002,万源市|23H,021,达县(南外镇)|23H,022,宣汉县(东乡镇)|23H,023,开江县(新宁镇)|23H,029,大竹县(竹阳镇)|23H,030,渠县(渠江镇)|23I,101,雨城区|23I,122,名山县(蒙阳镇)|23I,123,荥经县(严道镇)|23I,124,汉源县(富林镇)|23I,125,石棉县(新棉镇)|23I,126,天全县(城厢镇)|23I,127,芦山县(芦阳镇)|23I,128,宝兴县(穆坪镇)|23J,221,马尔康县(马尔康镇)|23J,222,汶川县(威州镇)|23J,223,理县(杂谷脑镇)|23J,224,茂县(凤仪镇)|23J,225,松潘县(进安镇)|23J,226,九寨沟县(永乐镇)|23J,227,金川县(金川镇)|23J,228,小金县(美兴镇)|23J,229,黑水县(芦花镇)|23J,230,壤塘县(壤柯镇)|23J,231,阿坝县(阿坝镇)|23J,232,若尔盖县(达扎寺镇)|23J,233,红原县(邛溪镇)|23K,321,康定县(炉城镇)|23K,322,泸定县(泸桥镇)|23K,323,丹巴县(章谷镇)|23K,324,九龙县(呷尔镇)|23K,325,雅江县(河口镇)|23K,326,道孚县(鲜水镇)|23K,327,炉霍县(新都镇)|23K,328,甘孜县(甘孜镇)|23K,329,新龙县(茹龙镇)|23K,330,德格县(更庆镇)|23K,331,白玉县(建设镇）|23K,332,石渠县(尼呷镇)|23K,333,色达县(色柯镇)|23K,334,理塘县(高城镇)|23K,335,巴塘县(夏邛镇)|23K,336,乡城县(桑披镇)|23K,337,稻城县(金珠镇)|23K,338,得荣县(松麦镇)|23L,401,西昌市|23L,422,木里藏族自治县|23L,423,盐源县|23L,424,德昌县|23L,425,会理县|23L,426,会东县|23L,427,宁南县|23L,428,普格县|23L,429,布拖县|23L,430,金阳县|23L,431,昭觉县|23L,432,喜德县|23L,433,冕宁县|23L,434,越西县|23L,435,甘洛县|23L,436,美姑县|23L,437,雷波县|23N,601,广安区|23N,602,华蓥市|23N,621,岳池县(九龙镇)|23N,622,武胜县(沿口镇)|23N,623,邻水县(鼎屏镇)|23O,701,巴州区|23O,721,通江县(诺江镇)|23O,722,南江县(南江镇)|23O,723,平昌县(江口镇)|23P,901,雁江区|23P,902,简阳市|23P,921,乐至县(天池镇)|23P,922,安岳县(岳阳镇)|23Q,821,东坡区|23Q,822,仁寿县(文林镇)|23Q,823,彭山县(凤鸣镇)|23Q,824,洪雅县(洪川镇)|23Q,825,丹棱县(丹棱镇)|23Q,826,青神县(城厢镇)|241,102,五华区|241,103,盘龙区|241,104,官渡区|241,105,西山区|241,106,东川区|241,107,呈贡县|241,108,晋宁县|241,109,富民县|241,110,宜良县|241,111,石林彝族自治县|241,112,嵩明县|241,113,禄劝彝族苗族自治县|241,114,寻甸回族彝族自治县|241,115,安宁市|243,102,昭阳区|243,122,鲁甸县|243,123,巧家县|243,124,盐津县|243,125,大关县|243,126,永善县|243,127,绥江县|243,128,镇雄县|243,129,彝良县|243,130,威信县|243,131,水富县|244,302,麒麟区|244,321,马龙县|244,322,陆良县|244,323,师宗县|244,324,罗平县|244,325,富源县|244,326,会泽县|244,328,沾益县|244,381,宣威市|245,301,楚雄市|245,322,双柏县|245,323,牟定县|245,324,南华县|245,325,姚安县|245,326,大姚县|245,327,永仁县|245,328,元谋县|245,329,武定县|245,330,禄丰县|246,402,红塔区|246,421,江川县|246,422,澄江县|246,423,通海县|246,424,华宁县|246,425,易门县|246,426,峨山彝族自治县|246,427,新平彝族傣族自治县|246,428,元江哈尼族彝族傣族自治县|247,501,个旧市|247,502,开远市|247,522,蒙自县|247,523,屏边苗族自治县|247,524,建水县|247,525,石屏县|247,526,弥勒县|247,527,泸西县|247,528,元阳县|247,529,红河县|247,530,金平苗族瑶族傣族自治县|247,531,绿春县|247,532,河口瑶族自治县|24A,621,文山县|24A,622,砚山县|24A,623,西畴县|24A,624,麻栗坡县|24A,625,马关县|24A,626,丘北县|24A,627,广南县|24A,628,富宁县|24B,701,普洱市|24B,702,思茅区|24B,723,墨江哈尼族自治县|24B,724,景东彝族自治县|24B,725,景谷傣族彝族自治县|24B,726,镇沅彝族哈尼族拉祜族自治县|24B,727,江城哈尼族彝族自治县|24B,728,孟连傣族拉祜族佤族自治县|24B,729,澜沧拉祜族自治县|24B,730,西盟佤族自治县|24B,731,宁洱县|24C,801,景洪市|24C,822,勐海县|24C,823,勐腊县|24E,901,大理市|24E,922,漾濞彝族自治县|24E,923,祥云县|24E,924,宾川县|24E,925,弥渡县|24E,926,南涧彝族自治县|24E,927,巍山彝族回族自治县|24E,928,永平县|24E,929,云龙县|24E,930,洱源县|24E,931,剑川县|24E,932,鹤庆县|24F,001,保山市|24F,022,施甸县|24F,023,腾冲县|24F,024,龙陵县|24F,025,昌宁县|24G,101,畹町市|24G,102,瑞丽市|24G,103,潞西市|24G,122,梁河县|24G,123,盈江县|24G,124,陇川县|24I,101,畹町市|24I,102,瑞丽市|24I,103,潞西市|24I,122,梁河县|24I,123,盈江县|24I,124,陇川县|24J,321,泸水县|24J,323,福贡县|24J,324,贡山独龙族怒族自治县|24J,325,兰坪白族普米族自治县|24K,421,香格里拉县|24K,422,德钦县|24K,423,维西傈僳族自治县|24L,221,丽江纳西族自治县|24L,222,永胜县|24L,223,华坪县|24L,224,宁蒗彝族自治县|24M,521,临沧县|24M,522,凤庆县|24M,523,云县|24M,524,永德县|24M,525,镇康县|24M,526,双江拉祜族佤族布朗族傣族自治县|24M,527,耿马傣族佤族自治县|24M,528,沧源佤族自治县|320,101,万州区|320,102,涪陵区|320,103,渝中区|320,104,大渡口区|320,105,江北区|320,106,沙坪坝区|320,107,九龙坡区|320,108,南岸区|320,109,北碚区|320,110,万盛区|320,111,双桥区|320,112,渝北区|320,113,巴南区|320,221,长寿县|320,222,綦江县|320,223,潼南县|320,224,铜梁县|320,225,大足县|320,226,荣昌县|320,227,璧山县|320,228,梁平县|320,229,城口县|320,230,丰都县|320,231,垫江县|320,232,武隆县|320,233,忠县|320,234,开县|320,235,云阳县|320,236,奉节县|320,237,巫山县|320,238,巫溪县|320,239,黔江土家族苗族自治县|320,240,石柱土家族自治县|320,241,秀山土家族苗族自治县|320,242,酉阳土家族苗族自治县|320,243,彭水苗族土家族自治县|320,381,江津市|320,382,合川市|320,383,永川市|320,384,南川市';

    function provinceTran( provinceStr ){
          var provinceArrayStr = provinceStr.split('|');
          var provinceJson = [];
          for(var i = 0 , ilen = provinceArrayStr.length ; i < ilen ; i++){
            var province = $.trim( provinceArrayStr[i] );
            var provinceCode = province.split(",")[0];
            var provinceName = province.split(",")[1];
            var data = {
              id : provinceCode,
              name : provinceName
            }
            provinceJson.push(data);
          }
          return provinceJson;
      }

      function cityTran( cityStr ){
          var cityArrayStr = cityStr.split('|');
          var cityJson = [];
          for(var i = 0 , ilen = cityArrayStr.length ; i < ilen ; i++){
            var city = $.trim( cityArrayStr[i] );
            var cityParent = city.split(",")[0];
            var cityCode = city.split(",")[1];
            var cityName = city.split(",")[2];
            var data = {
              id : cityCode,
              name : cityName,
              parentId : cityParent
            }
            cityJson.push( data );
          }
          return cityJson;
      }

      function areaTran( areaStr ){
          var areaArrayStr = areaStr.split('|');
          var areaJson = [];
          for(var i = 0 , ilen = areaArrayStr.length ; i < ilen ; i++){
            var area = $.trim( areaArrayStr[i] );
            var areaParent = area.split(",")[0];
            var areaCode = area.split(",")[1];
            var areaName = area.split(",")[2];
            var data = {
              id : areaCode,
              name : areaName,
              parentId : areaParent
            }
            areaJson.push( data );
          }
          return areaJson;
      }

      function dataBuild(province , city , area){

        for(var i = 0 , ilen = province.length ; i < ilen ; i++){
            var provinceItem = province[i];
            var provinceCode = province[i].id;
                
            provinceItem.city = [];

            for(var j = 0 , jlen = city.length ; j < jlen ; j++){
                 var cityItem = city[j];
                 if( cityItem.parentId == provinceCode ){
                    provinceItem.city.push( cityItem );
                 }
            }

            for(var m = 0 , mlen = provinceItem.city.length ; m < mlen ; m++){
                var cityItem = provinceItem.city[m];
                    cityItem.area = [];
                for( var n = 0 , nlen = area.length ; n < nlen ; n ++ ){
                    var areaItem = area[n];
                    if( cityItem.id == areaItem.parentId ){
                        cityItem.area.push( areaItem )
                    }
                }
            }
        }
        return province;
      }

  	window.AddressSelectorCrm = function( container ){
  		var container = $(container)[0];
  		this._provinceElem = $( container ).find('.js_province')[0];
  		this._cityElem = $( container ).find('.js_city')[0];
  		this._areaElem = $( container ).find('.js_area')[0];
  		this.init();
  	}

	AddressSelectorCrm.prototype = {
		init : function(){
			var me = this;
			me._initData();
			me._eventBind();
		},

		setValue : function(provinceID, cityID, areaID){
			$(this._provinceElem).val(provinceID).change();
			$(this._cityElem).val(cityID).change();
			$(this._areaElem).val(areaID);
			return true;
		},

		getBuiltData : function(){
			var resultData = dataBuild( provinceTran( provinceStr ) , cityTran( cityStr ) , areaTran( areaStr )) ;
			return resultData;
		},

		changeProvince : function(){
			var provinceValue = $( this._provinceElem ).val();
			var cityInitValue = $(this._cityElem).attr('data-value');
			var data = this.getBuiltData();
			$(this._cityElem).find('option').remove();

			for(var i = 0 ; i < data.length ; i ++){
				var province = data[i];
				if(provinceValue ==  province.id){
					var cityArray = province.city;
					for(var j = 0 ; j < cityArray.length ; j ++){
						var city = cityArray[j];
						var cityOption = new Option(city.name , city.id);
						if(cityInitValue == city.id){
							cityOption.selected = true;
						}
						this._cityElem.add( cityOption );
					}
				}
			}
			this.changeCity();
		},

		changeCity : function(){
			var provinceValue = $( this._provinceElem ).val();
			var cityValue = $(this._cityElem).val();
			var areaInitValue = $(this._areaElem).attr('data-value');
			var data = this.getBuiltData();

			$(this._areaElem).find('option').remove();

			for(var i = 0 ; i < data.length ; i ++){
				var province = data[i];
				if(provinceValue ==  province.id){
					var cityArray = province.city;
					for(var j = 0 ; j < cityArray.length ; j ++){
						var city = cityArray[j];
						if(cityValue == city.id){
							var areaArray = city.area;
							for(var m = 0 ; m < areaArray.length ; m ++){
								var area = areaArray[m];
								var areaOption = new Option(area.name , area.id);
								if(areaInitValue == area.id){
									areaOption.selected = true;
								}
								this._areaElem.add( areaOption );
							}
							
						}
					}
				}
			}
			console.log( cityValue );
		},

		_initData : function(){
			var data = this.getBuiltData();
			var provinceInitValue = $(this._provinceElem).attr('data-value');
			

			for(var i = 0 ; i < data.length ; i ++){
				var province = data[i];
				var provinceOption = new Option(province.name , province.id);

				if(provinceInitValue ==  province.id){
					provinceOption.selected = true;
				}
				this._provinceElem.add(  provinceOption );
			}
			this.changeProvince();
		},

		_eventBind : function(){
			var me = this;
			$(me._provinceElem).change( function(){ 
				me.changeProvince( );
			});

			$(me._cityElem).change(function(){ 
				me.changeCity(  );
			});
		}
	}
	  // 测试转换后数据
      // $(document).ready(function() {
      //     document.write("<br/><br/>province data<br/><br/>");
      //     document.write( JSON.stringify( provinceTran( provinceStr ) ) );
      //     document.write("<br/><br/>city data<br/><br/>");
      //     document.write( JSON.stringify( cityTran( cityStr ) ) );
      //     document.write("<br/><br/>area data <br/><br/>");
      //     document.write( JSON.stringify( areaTran( areaStr ) ) );
      //     document.write("<br/><br/>result data <br/><br/>");
      //     var resultData = dataBuild( provinceTran( provinceStr ) , cityTran( cityStr ) , areaTran( areaStr )) ;
      //     document.write( JSON.stringify( resultData ) );
      // });
})();