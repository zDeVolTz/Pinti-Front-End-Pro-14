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
        // cоздаем DeepCopy и присваем переменной изменный новый массив;
        const newArr = JSON.parse(JSON.stringify(arr)).map(element => {
        return {
                //переносим ключи и значения из старого массива  
                ...element,
                //Присваем ключу balance новое значение приведеное к числу
                balance : +element.balance.replace(/[$,]/g, '')
            }
        });

        return newArr;
    }

    // функция суммирования балансов пользователей  
    function usersBalanceSum (arr) {

        //вызываем функцию с новым массивом где Balance приведено к числу; 
        const newArr = usersBalanceToNumber (arr);

        // c помощью метода map получаем массив со значениями поля balance далее передаем массив в reduce которые производит суммирование
        // обратно преобразовываеем полученое число в исходный формат из объекта
        let sum = newArr.map((element) => element.balance).reduce((acc,currentValue) => acc + currentValue, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        const result = `cума балансів користувачів: ${sum}`;

        return result;
    }

    // функция создания массива с номерами баланса больше value
    function getPhoneNumber (arr,value) {

        //вызываем функцию с новым массивом где Balance приведено к числу; 
        const newArr = usersBalanceToNumber(arr);
        // фильтруем массив по значению из value получаем новый отфильтрованный массив 
        // затем с помощью map возращаем массив в котором содержится значения только ключа phone   
        const result = newArr.filter(item =>(item.balance > value)).map(item => item.phone);
        
        return result;
    }

 console.log(getPhoneNumber(users,2000));
 console.log(usersBalanceSum(users));