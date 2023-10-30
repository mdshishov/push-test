# Правила и регламент

- [Экзамен: правила, рекомендации и порядок проведения](https://hexly.notion.site/d9289c18871c44508bc7c7f05a51d94f)

## 1 задача

Напишите и экспортируйте функцию `getSquare()`, которая возвращает квадрат числа.

**Параметры**

- *num*: число, для которого вычисляется квадрат.

**Пример использования**

```javascript
getSquare(3) // 9
getSquare(-3) // 9
```

## 2 задача

Напишите и экспортируйте функцию `isEven()`, которая возвращает булево значение, в зависимости от четности числа.

**Параметры**

- *num*: число, подвергаемое проверке на четность.

**Пример использования**

```javascript
isEven(2) // true
isEven(1111) // false
isEven(-1) // false
```

## 3 задача

Напишите и экспортируйте функцию `castNumber()`, которая возвращает числовой эквивалент элемента, если это возможно.

**Условия**

- Если невозможно выполнить преобразование в число, функция вернет строку 'given value is not convertible'.

**Параметры**

- *value*: элемент, который по возможности преобразуется в число.

**Пример использования**

```javascript
castNumber('1') // 1
castNumber(2) // 2
castNumber('') // 0
castNumber(false) // 0
castNumber('Hexlet') // given value is not convertible
```

## 4 задача

Напишите и экспортируйте функцию `checkType()`, которая возвращает тип данных аргумента.

**Параметры**

- *value*: аргумент, который конвертируется в строку.

**Пример использования**

```javascript
checkType('Hexlet') // string
checkType(0) // number
checkType(NaN) // number
checkType() // undefined
checkType(true) // boolean
checkType(() => {}) // function
checkType(122343n) // bigint
```

## 5 задача

Напишите и экспортируйте функцию `countVowels()`, которая возвращает количество гласных букв в строке.

**Условия**

- Гласные буквы считаются во всех регистрах, как строчные, так и заглавные.

**Параметры**

- *text*: строка, в которой подсчитываются гласные буквы.

**Пример использования**

```javascript
countVowels('HeXlet') // 2
countVowels('HeexlEEt') // 4
countVowels('') // 0
countVowels('AAAAeejfjfjfijijotigdigfdjkKJHfdskjfhODSFu') // 13
```
