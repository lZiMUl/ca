class Languages {
  constructor (Language) {
    switch (Language) {
      case 'zh-CN':
        this ['Options'] = new Object ({
          "Tips": "成年倒计时",
          "Time": "正在加载中，请稍等",
          "Error": "请输入正确的年月日",
          "Year": "年",
          "Month": "月",
          "Date": "日",
          "Hour": "时",
          "Minute": "分",
          "Second": "秒",
          "Millisecond": "毫"
        });
      break;
      
      case 'en-US':
        this ['Options'] = new Object ({
          "Tips": "Countdown to adulthood",
          "Time": "Loading, please wait",
          "Error": "Please enter the correct year, month and day",
          "Year": "Year",
          "Month": "Month",
          "Date": "Date",
          "Hour": "Hour",
          "Minute": "Minute",
          "Second": "Second",
          "Millisecond": "Millisecond"
        });
      break;
      
      case 'ru-RU':
        this['Options'] = new Object({
          "Tips": "Обратный отсчет до взрослой жизни",
          "Time": "Загрузка, пожалуйста подождите...",
          "Error": "Пожалуйста, введите правильный год, месяц и день",
          "Year": "год",
          "Month": "месяц",
          "Date": "день",
          "Hour": "час",
          "Minute": "минута",
          "Second": "второй",
          "Millisecond": "миллисекунда"
        });
      break;
      
      default:
      this['Options'] = new Object({
          "Tips": null,
          "Time": null,
          "Error": null,
          "Year": null,
          "Month": null,
          "Date": null,
          "Hour": null,
          "Minute": null,
          "Second": null,
          "Millisecond": null
        });
    };
  };
};

class Ca {
  constructor (Year, Month, Dateo) {
    const Time = new Date;
    const Years = Math ['abs'] (Time ['getFullYear'] () - 18 - Year),
    Months = Math ['abs'] (Time ['getMonth'] () + 1 - Month),
    Dates =Math ['abs'] (Time ['getDate'] () + 1 - Dateo),
    Hours = Math ['abs'] (Time ['getHours'] () - 23),
    Minutes = Math ['abs'] (Time ['getMinutes'] () - 59),
    Seconds = Math ['abs'] (Time ['getSeconds'] () - 59),
    Milliseconds = Math ['abs'] (Time ['getMilliseconds'] () - 1000);

    if (Time['getFullYear'] () - 18 - Year > 0 || Time ['getDate'] () + 1 - Dateo > 0 || Year === 0 && Month === 0 && Dates === 0 && Hours === 0 && Minutes === 0 && Seconds === 0 && Milliseconds === 0)
    return new Object ({
      "Code": 201,
      "Message": "Adult",
      "Data": null
    });
    else
    return new Object ({
      "Code": 200,
      "Message": "Расчет успешен",
      "Data": {
        "Year": Years,
        "Month": Months,
        "Date": Dates,
        "Hour": Hours,
        "Minute": Minutes,
        "Second": Seconds,
        "Millisecond": Milliseconds
      }
    });
  };
};

function getQueryVariable(Key) {
  const Query = window ['location'] ['search'] ['substring'] (1) ['split'] ('&');
  for (let Value = 0; Value < Query ['length']; Value ++) {
    let Data = Query [Value] ['split'] ('=');
    if (Data [0] === Key)
    return Data [1];
  };
  return null;
};

window ['addEventListener'] ('load', Window => {
  const Tips = document ['getElementById'] ('Tips'),
  Time = document ['getElementById'] ('Time'),
  Year = getQueryVariable ('Year'),
  Month = getQueryVariable ('Month'),
  Dates = getQueryVariable ('Date');

  const Language = new Languages (getQueryVariable ('Language') || navigator ['language']);
  Tips ['innerHTML'] = Language ['Options'] ['Tips'];
  Time ['innerHTML'] = Language ['Options'] ['Time'];
      if (Year === null || Month === null || Dates === null)
      alert (Language ['Options'] ['Error']);
      else
      const Update = setInterval(Window => {
        const Cfa = new Ca (Year, Month, Dates);
        if (Cfa ['Code'] === 201) {
          alert (Cfa ['Message'])
          clearInterval (Update);
        } else
        document['getElementById']('Time')['innerHTML'] = new String(`${Language ['Options'] ['Year']}:  ${
            Cfa ['Data'] ['Year']
          } | ${Language ['Options'] ['Month']}:  ${
            Cfa ['Data'] ['Month']
          } | ${Language ['Options'] ['Date']}:  ${
            Cfa ['Data'] ['Date']
          } | ${Language ['Options'] ['Hour']}:  ${
            Cfa ['Data'] ['Hour']
          } | ${Language ['Options'] ['Minute']}:  ${
            Cfa ['Data'] ['Minute']
          } | ${Language ['Options'] ['Second']}:  ${
            Cfa ['Data'] ['Second']
          } | ${Language ['Options'] ['Millisecond']}:  ${
            Cfa ['Data'] ['Millisecond']
          }`);
      });
});
