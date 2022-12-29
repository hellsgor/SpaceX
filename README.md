# SpaceX
pet-project

---

1. [Клонирование репозитория](#a-namerepo-clone-клонирование-репозитория-a)
2. [Версионность](#a-nameversions-версионность-a)
3. [Работа с npm](#a-namenpmcommands-работа-с-npm-a)
4. [Файловая структура](#a-namefile-structure-файловая-структура-a)
5. [Alias'ы](#a-namealias-aliasы-a)
6. [Советы и правила](#a-nametips-and-rules-советы-и-правила-a)

---

## <a name='repo-clone'>Клонирование репозитория</a>

    git@github.com:hellsgor/SpaceX.git

## <a name='versions'>Версионность</a>

- node js - v.18.7.0
- npm - 8.15.0

## <a name='npmcommands'>Работа с npm</a>

- `npm i` - установка пакетов;
- `npm start` - запуск dev-сервера;
- `npm run dev` - сборка билда dev;
- `npm run build` - сборка билда prod;
- `npm run deploy` - сборка билда prod и публикация в gitHub Pages.


## <a name='file-structure'>Файловая структура</a>

- src/
  - assets/
    - favicon/ - фавиконки;
    - fonts/ - шрифты;
    - icons/ - иконки;
    - images/ - изображения;
    - json/ - для json-файлов;
    - pug/
      - mixins - для pug-миксинов 
    - styles/ - основные файлы стилей;
  - components/ - компоненты;
    - common/ - компоненты обязательные для всех страниц;
  - layouts/ - шаблоны страниц;
  - libs/ - библиотеки;
  - pages/ - страницы;
    - _partials/ - части страниц, которые не являются компонентами ввиду отсутствия необходимости в их переиспользовании;
    - main/ - файлы главной страницы;
    - ui-kit/ - файлы страницы uiKit;
  - ui-kit/ - микро-компоненты (кнопки, чек-боксы, инпуты и пр.);
  - utils/ - части js-кода используемые в проекте вынесены в отдельную папку, например, отправка или валидация полей формы и пр.

## <a name='alias'>Alias'ы</a>

- Img - './src/assets/image/';
- Icons - './src/assets/icons/';
- Fonts - './src/assets/fonts/';
- Components - './src/components/';
- Layouts - './src/layouts/';
- UIKit - './src/ui-kit/';
- Styles - './src/assets/styles/';
- Libs - './src/libs/' (на момент публикации не используется);
- NodeModules - './node_modules/';
- Partials - './src/pages/\_partials/';
- Utils - './src/utils/';
- Mixins (pug) - './src/assets/pug/mixins/';
- JSON - './src/assets/json'.

## <a name='tips-and-rules'>Советы и правила</a>

- файлы null следует удалить если в папке-родителе появятся файлы проекта. Файлы "null" требуются исключительно для сохранения файловой структуры в git;
- каждой новой странице после копирования кода pug:
  - в pug изменить:
    - значение переменной `header` если это необходимо (хедер нужен /не нужен);
    - значение переменной `footer` если это необходимо (футер нужен /не нужен);
    - значение переменной `pageClassName` (назначить правильный класс тегу <main> для управления страницей);

## <a name='pages'>Список страниц</a>

main page - http://localhost:3000
