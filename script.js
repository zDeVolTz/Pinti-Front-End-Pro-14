let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    },
]

// Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів

// функция создания нового массива с приведением баланса к числу 
function usersBalanceToNumber (arr) {
    // cоздаем глубокую копию DeepCopy
    const newArr = JSON.parse(JSON.stringify(arr));
    for (let i = 0 ; i < newArr.length ; i++){
        //проверверяем что елемент явлется обьектом + существует нужный ключ + не является уже числом
        if (typeof newArr[i] === 'object' && newArr[i].hasOwnProperty('balance') && typeof newArr[i].balance !== 'number'){
            //если строка то выполняем преобразование, если не строка присваем значению 0;
            if(typeof newArr[i].balance === 'string'){
                //преобразовываеем строку из обьекта в число заменяя лишние символы
                newArr[i].balance = +newArr[i].balance.replace('$', '').replace(',', '');
            } else {
                newArr[i].balance = 0;
            }
        }

    }
    return newArr;
}

//фунция суммирования балансов пользователей  
function usersBalanceSum (arr) {
    let sum = 0;
    let result = "";
    //вызываем функцию с новым массивом где Balance приведено к числу; 
    const newArr = usersBalanceToNumber (arr);
    //проходим циклом по всем єлементам массива
    for (let i = 0 ; i < newArr.length ; i++){
        //проверверяем что елемент явлется обьектом
        if (typeof newArr[i] === 'object'){
            //добовляем к сумме значение
            sum += +newArr[i].balance;
        }
    }
    //обратно преобразовываеем полученое число в формат из объекта
    sum = sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    result = `cума балансів користувачів: ${sum}`;
    return result;
}

// функция создания массива с номерами баланса больше value
function getPhoneNumber (arr,value) {
    let result = [];
    //вызываем функцию с новым массивом где Balance приведено к числу; 
    const newArr = usersBalanceToNumber (arr);
    //Проходим циклом по каждому елементу и сравниваем значение с трубемым лимитом
    newArr.forEach(element => {
        if (element.balance > value){
            result.push(element.phone);
        }
    });
    return result;
}

console.log(getPhoneNumber(users,2000));
console.log(usersBalanceSum(users));