const express = require('express')
const app = express();
const port = process.env.PORT || 3100;
const TelegramBot = require('node-telegram-bot-api');
const token = '1494999143:AAGekWMRiig2KcGN7pbIRyshMvUbVza88RI';
const chatID = '-360303241,'
let num = 0;
let now = new Date();

const bot = new TelegramBot(token, {polling: true});





const joke = ['Колобок повесился','купил мужик шапку для танцев, а она ему как раз-два-три, раз-два-три...','"А вообще, главное не победа, а участие!" - задумчиво проговорил Гитлер, вынимая из сейфа браунинг.','При Путине возросли все показатели. Даже президентский срок вырос с 4 до 36 лет.','Большая пресс-конференция Владимира Путина пройдет 17 декабря. Ответы президента на вопросы можно уже сейчас посмотреть на сайте анекдотов.','В детский дом закупили сок «Моя семья».','Свитер, который колется, начал по ночам выносить из дома ценные вещи.','Купила феминистка обруч, а он ей как раз.'] 
const reqvestBot = ['Сам бот','От бота слышу','Я не бот','Я человек'] 
const requireGreeting = ['Привет мои дорогие','Приветсвие','Здрасте'] 
const requireCool = ['Не искренне'] 
const requireAnimal = ['joke1','joke2','joke3','joke4','joke5','joke6','joke7','joke8'] 
const requireForecast = ['joke1','joke2','joke3','joke4','joke5','joke6','joke7','joke8'] 
const putIn = ['Разве Путин может быть не прав?','Я очень уважаю Владимира Владимировича. Мне кажется, это тот лидер, который нужен сегодня России. Владимир Владимирович — очень глубокий, взвешенный челове','сть Путин — есть Россия, нет Путина — нет России.','Путин едет по стране На серебряном коне. Путин всем людя́м поможет,Дай ему здоровье, Боже. ','чем Путину друзья, когда 85 % россиян поддерживают его?']

function randomInteger(min,max){
  let rand = min - 0.5 + Math.random() * (max-min + 1);
  let res =  Math.round(rand)
  if(num == res){
    res = res + 1;
    if(res > max){
      res = res - 2;
    }
  }
  num = res;
  return res;
}

bot.on('message', (msg) => {
  console.log(now.getHours())
  console.log(msg)
  console.log(msg.from.first_name)
  
  if(msg.from.first_name != "Bes"){
    console.log('bes is')
  }
  let mess = msg.text.split(' ')
  mess.forEach((elem)=>{
    console.log(elem)
    if(elem == 'Шутеечка' || elem == 'шутеечка' || elem == 'шутеечку' || elem == 'шутеечку'  || elem == 'шутка'  || elem == 'анекдот'  || elem == 'Шутеечку'){
      bot.sendPhoto(chatID,`./img/${randomInteger(1, 16)}.jpg`,{caption: joke[randomInteger(0,joke.length-1)]})
    }
    if(elem == 'Привет' || elem == 'привет' || elem == 'Приветсвие'){
      bot.sendMessage(chatID, requireGreeting[randomInteger(0,requireGreeting.length-1)]);
    }
    if(elem == 'Бот' || elem == 'бот'){
      bot.sendMessage(chatID, reqvestBot[randomInteger(0,requireGreeting.length-1)]);
    }
    if(elem == 'Люда' || elem == 'Людмурик' || elem == 'Людка'){
      bot.sendMessage(chatID, 'Да');
    }
    if(elem == 'молодец' ){
      bot.sendMessage(chatID, 'Да ,он хороший человек');
    }
    if(elem == 'Круто' || elem == 'круто' || elem == 'крут' || elem == 'поздравляю' || elem == 'неплохо' || elem == 'Неплохо' || elem == 'Крут'){
      bot.sendMessage(chatID, 'Неискренне!');
    }
    if(elem == 'Макс' || elem == 'макс' || elem == 'Максим' || elem == 'максим' ){
      bot.sendMessage(chatID, 'Татушки — оладушки,Максима съели бякушки')
    }
    if(elem == 'Тест' || elem == 'тест' || elem == 'Test' || elem == 'test'){
      bot.sendMessage(chatID, 
      `Все ок, 
      chatId: ${msg.chat.id} 
      from: ${msg.from.id} 
      name: ${msg.from.first_name} 
      mesId:${msg.message_id} `)
    }
    if(elem == 'Время' || elem == 'время' || elem == 'дата' || elem == 'Дата'){
      bot.sendMessage(chatID, `Все ок, ${now}`)
    }
    if(elem == 'Путин' || elem == 'путин' ){
      bot.sendMessage(chatID, putIn[randomInteger(0,requireGreeting.length-1)]);
    }
  })
  
});





function intervalMess(){
  console.log(now.getHours())
  // console.log(randomInteger(1, 16))
  if(now.getHours() == 23){
      bot.sendPhoto(chatID,`./img/${randomInteger(1, 16)}.jpg`,{caption: joke[randomInteger(0,joke.length-1)]})
  }
}



setInterval(intervalMess, 1000 * 60 * 5 );





