//Параметры калькулятора
var params = [
//Вид котла
	[0, "Котел настенный газовый двухконтурный", 5000, 52000, 1, 0, "", ""], //0
	[0, "Котел настенный газовый одноконтурный", 10000, 48000, 0, 0, "", ""], //1
	[0, "Котел настенный электрический", 8000, 40000, 0, 0, "", ""], //2
	[0, "Котел напольный", 20000, 84000, 0, 0, "#img25", "#img25"], //3
	[0, "Резервный котел настенный", 10000, 56000, 0, 0, "", ""], //4
	[0, "Резервный котел напольный", 20000, 92000, 0, 0, "#img251", "#img251"], //5
	[0, "Бойлер косвенного нагрева", 5000, 46000, 0, 0, "", ""], //6
	[0, "Автоматика погодозависимая", 20000, 90000, 0, 0, "#img3", "#img4"], //7
	[0, "Автоматика релейная", 20000, 32000, 0, 0, "#img5", "#img6"], //8
//Вид обвязки котельной
	[0, "Только радиаторная сеть", 5000, 9000, 0, 0, "", ""], //9
	[0, "Радиаторная сеть +бойлер косвенного нагрева", 15000, 36000, 0, 0, "", ""], //10
	[0, "Радиаторная сеть+ бойлер+ теплые полы", 25000, 51000, 0, 0, "", ""], //11
	[0, "Котельная с гидравлическим разделением и числом контуров более четырех", 50000, 136000, 0, 0, "", ""], //12
	[0, "Обвязка котельной металлом", 0.75, 0.3, 0, 0, "", ""], //13
//Дымоход		
	[0, "Дымоход коаксиальный в деревянной стене, каркасной стене", 5000, 6000, 0, 0, "#img18", "#img18"], //14
	[0, "Дымоход коаксиальный в кирпичной стене", 12000, 6000, 0, 0, "#img181", "#img181"], //15
	[0, "Дымоход коаксиальный в бетонной стене до 500мм", 20000, 6000, 0, 0, "#img182", "#img182"], //16
	[0, "Дымоход модульный нержавейка «эконом»", 30000, 40000, 0, 0, "#img19", "#img19"], //17
	[0, "Дымоход модульный  нержавейка двухслойный «бизнес»", 30000, 80000, 0, 0, "#img191", "#img191"], //18
	[0, "Дымоход модульный нержавейка двухслойный «премиум»", 30000, 120000, 0, 0, "#img192", "#img192"], //19
	[0, "Подключение котла к дымоходу уже существующему в доме", 12000, 12000, 0, 0, "", ""], //20
// Вентиляция
	[0, "Принудительная вентиляция двух санузлов и кухни", 30000, 32000, 0, 0, "#img16", "#img17"], //21
	[0, "Вентиляция котельной", 10000, 14000, 0, 0, "#img15", "#img15"], //22
	[0, "Приточно-вытяжная вентиляция", 0, 0, 0, 0, "#img161", "#img171"], //23
//Электромонтажные работы
	[0, "Осветительная и силовая сеть внутренняя", 700, 500, 0, 0, "#img1", "#img1"], //24
	[0, "Монтаж узла подключения генератора", 12000, 21000, 0, 0, "", ""], //25
	[0, "Наружная осветительная сеть", 0, 0, 0, 0, "#img2", "#img2"], //26
//Теплые полы
	[0, "Теплые полы", [800, 10000], 1840, 0, 0, "#img8", "#img8"], //27
	[0, "Теплые полы", 0, 0, 0, 0, "", ""], //28
	[0, "Обогрев дорожек и открытых площадок", 1500, 2640, 0, 0, "", ""], //29
	[0, "Теплообменник с обвязкой", 20000, 56000, 0, 0, "", ""], //30
//Радиаторная сеть
	[0, "Радиаторная сеть", 5000, 13000, 0, 0, "#img9", "#img10"], //31
	[0, "Монтаж встроенных конвекторов", 6000, 40000, 0, 0, "", ""], //32
	[0, "Монтаж радиаторной сети медью", 0.75, 0.3, 0, 0, "", ""], //33
//Монтаж системы водоснабжения
	[0, "Монтаж системы водоснабжения", 3500, 3800, 0, 0, "#img12", "#img12"], //34
	[0, "Монтаж полотенцесушителя на систему рециркуляции", 3000, 3400, 0, 0, "", ""], //35
	[0, "Рециркуляция системы гвс два-три санузла и кухня", 20000, 32000, 0, 0, "#img13", "#img14"], //36
	[0, "Монтаж водонагревателя электрического", 5000, 4200, 0, 0, "", ""], //37
	[0, "Обвязка скважины до 50 метров", 20000, 62000, 0, 0, "#img26", "#img26"], //38
	[0, "Обвязка скважины свыше 70 метров", 30000, 90000, 0, 0, "#img261", "#img261"], //39
	[0, "Обвязка колодца", 20000, 62000, 0, 0, "#img262", "#img262"], //40
	[0, "Монтаж кессона стального под ключ", 0, 80000, 0, 0, "", ""], //41
//Канализация
	[0, "Станция очистки стоков Топас 5 под ключ", 0, 150000, 0, 0, "#img7", "#img7"], //42
	[0, "Станция очистки стоков Тверь 1 под ключ", 0, 170000, 0, 0, "#img71", "#img71"], //43
	[0, "Монтаж продуха под станцию очистки стоков", 10000, 3000, 0, 0, "", ""], //44
	[0, "Монтаж системы канализации внутренней", 3000, 1200, 0, 0, "", ""] //45
];

var svetIn = 0;  //Флаг света в доме
var docDefinition = {};
var pdfCostO = 0, pdfCostR = 0;
jQuery(document).ready(function () {

//Создаем радиобаттон с возможностью снять выбор со всех пунктов
jQuery(".rb1 input").on("change", function () {
	if (jQuery(this).prop("checked")) {
		jQuery(this).parent().parent().find(".rb1 input").prop("checked", false);
		jQuery(this).prop("checked", true);	
		var inpArr = jQuery(this).parent().parent().find(".rb1 input");
		var pIndex;	
		for (i=0; i<inpArr.length; i++) {
			pIndex = parseInt(jQuery(this).parent().parent().find(".rb1 input").eq(i).attr("id").replace("p",""));
			params[pIndex][0] = 0;
		}
		pIndex = parseInt(jQuery(this).attr("id").replace("p",""));
		params[pIndex][0] = 1;
	} else {
		jQuery(this).prop("checked", false);
		pIndex = parseInt(jQuery(this).attr("id").replace("p",""));
		params[pIndex][0] = 0;
	}
});

//При клике на чекбокс параметра
jQuery("#calcParams input[type=checkbox]").on("change", function () {
	var pIndex = parseInt(jQuery(this).attr("id").replace("p",""));
	if (pIndex == 13) { //Обвязка котельной металлом
		if (jQuery("#p13").attr("checked")) {
			var n = 0;
			for (m=9; m<=12; m++) {
				if (jQuery("#p"+m).attr("checked")) {
					params[13][0] = 1;
					params[13][4] = params[m][2] * params[13][2];
					params[13][5] = params[m][3] * params[13][3];	
					n=1;
				}
			}
			if (n == 0) {
				params[13][0] = 0;
				params[13][4] = 0;
				params[13][5] = 0;	
			}
		} else {
			params[13][0] = 0;
			params[13][4] = 0;
			params[13][5] = 0;	
		}
	
	} else if (pIndex == 33) {	//Монтаж радиаторной сети медью
		if (jQuery("#p31").val() > 0) {
			if (jQuery("#p33").attr("checked")) {
				params[33][0] = 1;
				params[33][4] = params[33][2] * params[31][2] * jQuery("#p31").val();
				params[33][5] = params[33][3] * params[31][3] * jQuery("#p31").val();			
			} else {
				params[33][0] = 0;
				params[33][4] = 0;
				params[33][5] = 0;
			}
		} 	else {
				params[33][0] = 0;
				params[33][4] = 0;
				params[33][5] = 0;	
		}
	} else {
		if (jQuery(this).prop("checked")) {
				params[pIndex][0] = 1;	
				params[pIndex][4] = params[pIndex][2];
				params[pIndex][5] = params[pIndex][3];		
			} else {
				params[pIndex][0] = 0;
				params[pIndex][4] = 0;
				params[pIndex][5] = 0;
		}	
	}
	calcStart();
}); 

//При вводе значений в инпуты
jQuery("#calcParams input[type=text]").on("keyup", function () {
	var pIndex = parseInt(jQuery(this).attr("id").replace("p",""));
	if (pIndex == 27 || pIndex == 28) { //Если теплые полы
		if (jQuery("#p27").val() > 0 && jQuery("#p28").val() > 0) {
			params[27][0] = 1;
			params[27][5] = params[27][3] *  jQuery("#p27").val();
			if (jQuery("#p27").val() >= 40) {
				params[27][4] = params[27][2][0] * jQuery("#p27").val();
			} else {
				params[27][4] = params[27][2][1] * jQuery("#p28").val();
			}
			
		} else {
			params[27][0] = 0;
			params[27][4] = 0;
			params[27][5] = 0;
		}
	} else if (pIndex == 31) { //Радиаторная сеть
		if (jQuery("#p31").val() > 0) {
			params[31][0] = 1;
			params[31][4] = params[31][2] * jQuery("#p31").val();
			params[31][5] = params[31][3] * jQuery("#p31").val();				
			if (jQuery("#p33").attr("checked")) {
				params[33][0] = 1;
				params[33][4] = params[33][2] * params[31][2] * jQuery("#p31").val();
				params[33][5] = params[33][3] * params[31][3] * jQuery("#p31").val();			
			} else {
				params[33][0] = 0;
				params[33][4] = 0;
				params[33][5] = 0;	
			}
		} else {
			params[33][0] = 0;
			params[31][0] = 0;
			params[33][4] = 0;
			params[31][4] = 0;
			params[33][5] = 0;	
			params[31][5] = 0;	
		}
	} else {
		if (jQuery(this).val() > 0) {
				params[pIndex][0] = 1;	
				params[pIndex][4] = params[pIndex][2] * jQuery(this).val();
				params[pIndex][5] = params[pIndex][3] * jQuery(this).val();		
			} else {
				params[pIndex][0] = 0;
				params[pIndex][4] = 0;
				params[pIndex][5] = 0;
		}	
	}
	
	//Если обогрев дорожек и открытых площадок
	if (pIndex == 29) {
		if (jQuery("#p29").val() > 0) {
			jQuery("#p30").attr("checked", true);
			params[30][0] = 1;	
			params[30][4] = params[30][2];
			params[30][5] = params[30][3];	
		} else {
			jQuery("#p30").attr("checked", false);
			params[30][0] = 0;	
			params[30][4] = 0;
			params[30][5] = 0;	
		}
	}
	if (jQuery("#p24").val() > 0) {
		svetIn = 1;
	} else {
		svetIn = 0;
	}
	if (pIndex == 24) {
	svetChange();
	}
	calcStart();
}); 


//Приточно-вытяжная вентиляция - Оценивается по объему задания
jQuery("#p23").on("change", function () {
	if (jQuery(this).attr("checked")) {
		jQuery("#noCost1").show("slide", {direction:"right"}, 500);
	} else {
		jQuery("#noCost1").fadeOut(500);
	}
});

//Наружная осветительная сеть - Оценивается по объему задания
jQuery("#p26").on("change", function () {
	if (jQuery(this).attr("checked")) {
		jQuery("#noCost2").show("slide", {direction:"right"}, 500);
	} else {
		jQuery("#noCost2").fadeOut(500);
	}
});

//Огранчиваем ввод символов для цифровых полей ввода
jQuery(".digital").on("keydown", digital);

//Распределяем порядок отображения картинок
	var zIndex = 1000;
	jQuery.each(jQuery("#calcMain img"), function () {
		jQuery(this).css("z-index", zIndex);
		zIndex++;
	});

//Активируем закладки
	jQuery("#calcTabs").tabs({
		active: 0
	});
	
jQuery("#clientPhone").mask("+7 (999) 999-99-99");	
//Отправляем заявку
jQuery("#zakazBtn").on("click", function () {
	jQuery("#popUp").css("left",(jQuery("#shadowBox").width() - jQuery("#popUp").width() - 40)/2);
	jQuery("#popUp").css("top",(jQuery("#shadowBox").height() - jQuery("#popUp").height())/3); 
	jQuery("#sMsg, #fMsg, #closeBtn").hide();
	jQuery("#clientName, #clientEmail, #clientPhone, #clientAdds, #mailBtn").show();
	jQuery("#shadowBox, #popUp").fadeIn(400);
});




jQuery("#zakazSend").on("click", function () {
	var inpError = 0;
	if (jQuery("#clientName").val() == "") {
		jQuery("#clientName").addClass("inpError");
		inpError++;
	}
	if (jQuery("").val() == "") {
		jQuery("#clientEmail").addClass("inpError");
		inpError++;
	}
	if (jQuery("#clientPhone").val() == "") {
		jQuery("#clientPhone").addClass("inpError");
		inpError++;
	}
	
	if (inpError == 0) {
		var msg = "<p><b>Имя клиента:</b> "+jQuery("#clientName").val()+"</p>";
		if(jQuery("#clientEmail").val() !== ""){msg += "<p><b>Email клиента:</b> "+jQuery("#clientEmail").val()+"</p>";}
		
		msg += "<p><b>Телефон клиента:</b> "+jQuery("#clientPhone").val()+"</p>";
		
		msg += "<hr>";
		msg += msgAdd ("Котельная", "calcTab0");
		msg += msgAdd ("Дымоход", "calcTab1");
		msg += msgAdd ("Вентиляция", "calcTab2");
		msg += msgAdd ("Электромонтаж", "calcTab3");
		msg += msgAdd ("Теплые полы", "calcTab4");
		msg += msgAdd ("Радиаторная сеть", "calcTab5");
		msg += msgAdd ("Водоснабжение", "calcTab6");
		msg += msgAdd ("Канализация", "calcTab7");
		msg += "<hr>";
		msg += "<p>Стоимость оборудования: " + jQuery("#costO").text(); + "</p>"
		msg += "<p>Стоимость работы: " + jQuery("#costR").text(); + "</p>"
		msg += "<p>Итого: " + jQuery("#costTotal").text(); + "</p>"
		jQuery.ajax({
			type: "POST",
			url: "send.php",
			data: {
				message: msg
			},
			success: function(data) {
				/*jQuery("#clientName, #clientEmail, #clientPhone, #clientAdds, #remark, #mailBtn").hide();
				jQuery("#sMsg, #closeBtn").show();*/
				if(data){
					swal("Ваша заявка принята","","success");
				}else{
swal("Ошибка при отправке письма",'',"error");
				}
			},
			error: function() {
				jQuery("#clientName, #clientEmail, #clientPhone, #clientAdds, #remark, #mailBtn").hide();
				jQuery("#fMsg, #closeBtn").show();				
				swal("ERROR");
			}
		});	
	}
	if(inpError > 0){
		swal("Заполните все обязательные поля","","error");
	}
});

jQuery("#clientName, #clientEmail, #clientPhone, #clientAdds").on("focus", function () {
	jQuery(this).removeClass("inpError");
});

jQuery("#closeBtnIco, #shadowBox, #closeBtn").on("click", function () {
	jQuery("#shadowBox, #popUp").fadeOut(400);
});

//Очищаем выбранные опции
jQuery("#clearBtn").on("click", function () {
	jQuery("#calc input[type=checkbox]").attr("checked", false);
	jQuery("#calc input[type=text]").val("");
	jQuery.each(params, function (i, val) {
		params[i][0] = 0;
	});
	calcStart();
});

//Преобразуем спецификацию в pdf
	jQuery("#downloadBtn").on("click", function () {
	pdfCostO = 0, pdfCostR = 0;
	docDefinition = {
		content: [
			{text: 'Коммерческое предложение', alignment: 'left'},
			{text: '+7 (926) 173-56-14 Андрей ', alignment: 'left'},
			{text: ' '},
			{
			  table: {
				headerRows: 1,
				body: [
				  [{ text: 'Наименование работ', alignment: 'center', bold: true }, { text: 'Стоимость работ', alignment: 'center', bold: true }, { text: 'Стоимость оборудования', alignment: 'center', bold: true }]
				]
			  }
			}
		  ]
		};
	pdfCostO = 0, pdfCostR = 0;

		trAdd ("Котельная", "calcTab0");
		trAdd ("Дымоход", "calcTab1");
		trAdd ("Вентиляция", "calcTab2");
		trAdd ("Электромонтаж", "calcTab3");
		trAdd ("Теплые полы", "calcTab4");
		trAdd ("Радиаторная сеть", "calcTab5");
		trAdd ("Водоснабжение", "calcTab6");
		trAdd ("Канализация", "calcTab7");
	
	var tBody = docDefinition.content[3].table.body;
	tBody[tBody.length] = [{},{},{}];
	tBody[tBody.length - 1][0].text = "Итого";
	tBody[tBody.length - 1][0].bold = true;
	tBody[tBody.length - 1][0].rowSpan = 2;
	tBody[tBody.length - 1][1].text = dSpace(pdfCostO) + " руб.";
	tBody[tBody.length - 1][2].text = dSpace(pdfCostR) + " руб.";	
	tBody[tBody.length - 1][0].alignment = "right";
	tBody[tBody.length - 1][1].alignment = "center";
	tBody[tBody.length - 1][2].alignment = "center";
	tBody[tBody.length] = [{},{},{}];
	tBody[tBody.length - 1][1].text = dSpace(pdfCostO + pdfCostR) + " руб.";
	tBody[tBody.length - 1][1].colSpan = 2;
	tBody[tBody.length - 1][1].alignment = "center";
	pdfMake.createPdf(docDefinition).open();	
	});

});



//Основная функция
function calcStart () {
	var costR = 0, costO = 0;
	var spec="";
	
	for (i=0; i<params.length; i++) {
		if (params[i][0] == 1) {
			//Делаем прибавку к стоимостям
			costR += params[i][4];
			costO += params[i][5];
			//Записываем строку спецификации
			spec += "<p class='specLine'>"+params[i][1]+"</p>";
			//Отображаем визуализацию
			if (params[i][6] != "") {
				jQuery(curImg(params[i])).fadeIn(500);
			}
		} else {
			if (params[i][6] != "") {
				jQuery(curImg(params[i])).fadeOut(500);
			}
		}
		//Котлы
		
		if (params[0][0] == 1 && params[4][0] != 1 && params[6][0] != 1) {jQuery("#img21").fadeIn(500);} else {jQuery("#img21").fadeOut(500)}
		if (((params[1][0] == 1 || params[2][0] == 1) && params[4][0] != 1 && params[6][0] != 1) || (params[4][0] == 1 && params[0][0] != 1 && params[1][0] != 1 && params[2][0] != 1 && params[6][0] != 1)) {jQuery("#img20").fadeIn(500); } else {jQuery("#img20").fadeOut(500);}
		if (((params[0][0] == 1 || params[1][0] == 1 || params[2][0] == 1) && params[4][0] != 1 && params[6][0] == 1) || (params[4][0] == 1 && params[0][0] != 1 && params[1][0] != 1 && params[2][0] != 1 && params[6][0] == 1)) {jQuery("#img22").fadeIn(500);} else {jQuery("#img22").fadeOut(500)}
		if ((params[0][0] == 1 || params[1][0] == 1 || params[2][0] == 1) && params[4][0] == 1 && params[6][0] == 1) {jQuery("#img24").fadeIn(500);} else {jQuery("#img24").fadeOut(500)}
		if ((params[0][0] == 1 || params[1][0] == 1 || params[2][0] == 1) && params[4][0] == 1 && params[6][0] != 1) {jQuery("#img23").fadeIn(500);} else {jQuery("#img23").fadeOut(500)}
		if (params[0][0] != 1 && params[1][0] != 1 && params[2][0] != 1 && params[4][0] != 1 && params[6][0] == 1) {jQuery("#img27").fadeIn(500);} else {jQuery("#img27").fadeOut(500)}
		
	}
	//Отображаем суммы
	if (costO > 0) {jQuery("#costO").text(dSpace(costO) + " руб.");} else {jQuery("#costO").text("");}
	if (costR > 0) {jQuery("#costR").text(dSpace(costR) + " руб.");} else {jQuery("#costR").text("");}
	if ((costO+costR) > 0) {jQuery("#costTotal").text(dSpace(costO+costR) + " руб.");} else {jQuery("#costTotal").text("");}
	//Отображаем спецификацию
	if (spec != "") {
		jQuery("#spec").html(spec);
	} else {
		jQuery("#spec").html("<p id='specEmpty'>Пока ничего не выбрано</p>");
	}
}



//Функция возвращает картинку в зависимости от состояния света
function curImg (paramArr) {

	if (svetIn == 0) {
		return paramArr[6];
	} else {
		return paramArr[7];
	}
}

function curImgArr (paramArr) {

	if (svetIn == 0) {
		return [paramArr[6],paramArr[7]] ;
	} else {
		return [paramArr[7],paramArr[6]];
	}
}


//При смене света меняем изображения
function svetChange() {
	for (i=0; i<params.length; i++) {
		if (params[i][0] == 1 && params[i][6] != params[i][7]) {
			jQuery(curImgArr(params[i])[1]).fadeOut(500);
			jQuery(curImgArr(params[i])[0]).fadeIn(500);
		}
	}
}

//Функция запрета ввода букв
function digital(e) {
   if ((e.keyCode < 48 || (e.keyCode > 57 && e.keyCode < 96) || e.keyCode > 105) && e.keyCode != 8 && e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 39 && e.keyCode != 46) e.preventDefault();
}
//Разделение разрядов числа, то есть из 1000000 сделать 1 000 000
function dSpace (val) {
	return val.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u00A0');
}

//Формируем сообщение
function msgAdd (tabName, tabId) {
	var mess = "";
	var tempMsg = "";
	jQuery.each(jQuery("#"+tabId+" input:checked"), function () {
		var i = parseInt(jQuery(this).attr("id").replace("p","")); 
		tempMsg += "<li>" + jQuery(this).parent().find("label").text() + " / " + dSpace(params[i][4]) + " + " + dSpace(params[i][5]) + " руб.</li>";
	});
	jQuery.each(jQuery("#"+tabId+" input[type=text]"), function () {
		if (parseInt(jQuery(this).val()) > 0) {
			var i = parseInt(jQuery(this).attr("id").replace("p","")); 
			tempMsg += "<li>" + jQuery(this).parent().find("label").text() + " / " + jQuery(this).val() + " " + jQuery(this).parent().find("input+span").text() + " / " + dSpace(params[i][4]) + " + " + dSpace(params[i][5]) + " руб.</li>";
		}
	});
	if (tempMsg != "") {mess = "<p><b>"+tabName+":</b></p><ul>" + tempMsg + "</ul>"}
	return mess;
}

////Формируем строки pdf таблицы
function trAdd (tabName, tabId) {
	var tBody = docDefinition.content[3].table.body;
	var headed = 0;
	jQuery.each(jQuery("#"+tabId+" input:checked"), function () {
	var i = parseInt(jQuery(this).attr("id").replace("p","")); 
		if (params[i][0] == 1)	{
			if (headed == 0) {
				tBody[tBody.length] = [{},{},{}];	
				tBody[tBody.length - 1][0].text = tabName;
				tBody[tBody.length - 1][0].bold = true;			
				tBody[tBody.length - 1][0].colSpan = 3;			
				tBody[tBody.length - 1][0].alignment = "center";			
				headed = 1;
			}
			pdfCostO += params[i][4]; 
			pdfCostR += params[i][5];
			tBody[tBody.length] = [{},{},{}];
			tBody[tBody.length - 1][0].text = params[i][1];
			if (params[i][4] == 0 && params[i][5] == 0) {
				tBody[tBody.length - 1][1].text = "Оценивается по объему задания";
				tBody[tBody.length - 1][1].colSpan = 2;
			} else {
				tBody[tBody.length - 1][1].text = dSpace(params[i][4]) + " руб.";
				tBody[tBody.length - 1][2].text = dSpace(params[i][5]) + " руб.";	
			}
			tBody[tBody.length - 1][0].alignment = "center";
			tBody[tBody.length - 1][1].alignment = "center";
			tBody[tBody.length - 1][2].alignment = "center";
		}
	});
	
	jQuery.each(jQuery("#"+tabId+" input[type=text]"), function () {
		var i = parseInt(jQuery(this).attr("id").replace("p",""));
		if (parseInt(jQuery(this).val()) > 0) {
			if (headed == 0) {
				tBody[tBody.length] = [{},{},{}];	
				tBody[tBody.length - 1][0].text = tabName;
				tBody[tBody.length - 1][0].bold = true;			
				tBody[tBody.length - 1][0].colSpan = 3;			
				tBody[tBody.length - 1][0].alignment = "center";			
				headed = 1;
			}
			if (params[i][0] == 1)	{
				pdfCostO += params[i][4];
				pdfCostR += params[i][5];
				tBody[tBody.length] = [{},{},{}];
				tBody[tBody.length - 1][0].text = params[i][1] + " (" +jQuery(this).val()+ " "+jQuery(this).parent().find("input+span").text()+")";
				if (params[i][4] == 0 && params[i][5] == 0) {
					tBody[tBody.length - 1][1].text = "Оценивается по объему задания";
					tBody[tBody.length - 1][1].colSpan = 2;
				} else {
					tBody[tBody.length - 1][1].text = dSpace(params[i][4]) + " руб.";
					tBody[tBody.length - 1][2].text = dSpace(params[i][5]) + " руб.";	
				}
				tBody[tBody.length - 1][0].alignment = "center";
				tBody[tBody.length - 1][1].alignment = "center";
				tBody[tBody.length - 1][2].alignment = "center";
			}
		}
	});




}