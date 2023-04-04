# Rick And Morty Memorama 👾🧪
 
El juego de Memorama de Rick and Morty esta constuido con React puro con Vite, sin frameworks o librerias de React como Next JS, Gatsby, Remix. etc.
Puedes encontrar el luego en el siguiente enlace: https://riack-morty-memorama.vercel.app/

## Este proyecto esta contruido con 📦:
- Typescript 🛠️
- Apollo 🚀
- Jest 🧪
- Sass 💅

Los personajes que se muestran son obtenidos mediante la API publica [Rick and Morty](https://rickandmortyapi.com/). Utilizando la API de GraphQL.

## Instalacion
```bash
git clone git@github.com:israel-dv/riack-morty-memorama.git
cd riack-morty-memorama
yarn add
yarn gql-compile //Esto solamente si quieres ver como se typea la query implementada con Apollo GQL
yarn dev
```

## Notas 📝
### export index.ts
Todos los componentes y paginas tienen un archivo index.ts, el cual su funcion es solamente importar el componente correspondiente. Es decir:
```
components/
|  Header/
|  |  styles.css
|  |  Header.tsx
|  |  index.ts
```
La idea de esta implementacion, es mejorar la velocidad a la hora de editar en nuestro IDE, Editor de Texto, para mi casom usando VSCode, te muestro como es cuando busco un archivo con este patron![Screenshot 2023-04-04 at 0 24 41](https://user-images.githubusercontent.com/18078522/229705784-b5e32b56-0a28-45f4-9ee4-0d386d32f19e.png)
La idea es evitar usar **export default** para identificar el archivo que debo editar de manera mas flexible y ademas, al importarlo no debo hacer lo siguiente
```typescript
import Header from 'components/Header/Header'
```


### Import Order
Una buena practica para los imports, es ordenarlos por orden del tipo de dependencia/libreria, como puede ser
```typescript
//1st - 3rd Parties Libraries
import React from 'react'

//2nd -  Our Libraries
import { OurButton } from '@corp/ui'

//3rd - import from de project
import { Container } from 'components/container'
```
Pero para este proyecto no contamos con una libreria propia, por lo que se decidio dividir el orden de los import por tipos, es decir

```typescript
//1st - 3rd Parties Libraries
import React from 'react'

//2nd -  Our Libraries
import { OurButton } from 'component/OurButtton'

import { client } from 'api/client'

//3rd - import from de project
import { Container } from 'components/container'
```
### Custom Hook 🪝
El proyecto contiene un custom Hook que su unica funcion es llamar al API de Rick and Morty. Esta diseñado para solamente llamar el hook con el parametro de ids que queremos soilictar y con la opcion de poder agregar funciones de UseQueryFunctionOptions, ie: **onError**. Con esto mantenemos mejor limpieza en nuestra llamada al API y en nuestra Home page.
```typescript
export const useGetCharacters = (ids: string[], options?: QueryOptions) => {
  return useQuery(GET_CHARACTERS, {
    variables: {
      ids,
    },
    onError: trhow new Error(error),
    ...options,
  })
}
```
y podemos usarlo de la siguiente manera. 
```typescript
const { data: characters, loading } = useGetCharacters(randomIDS)
```

### Funciones 🧩
Se implementaron dos funciones de manera independiente que pueden ser usadas en otros casos.
- RandomIDS -> una funcion que nos retorna un array de numeros para poder obtener nuestros personajes del API de Rick and Morty
- Suffle -> Una funcion mas generica que podriamos utilizar en muchos casos, ampliando los valores que decidieramos tener. 
```typescript
export function suffle<T>(input: T[]): T[] {
  const suffleArray = [...input]

  for (let position = 0; position < input.length - 1; position++) {
    const randomPosition = Math.floor(Math.random() * (position + 1))
    const cardAux = suffleArray[position]

    suffleArray[position] = suffleArray[randomPosition]
    suffleArray[randomPosition] = cardAux
  }

  return suffleArray
}

}

```

### Typography 🅱
El componente typograhy fue diseñado pensando en Design System mas amplio, para demostrar como se pueden manejar las tipografias en sistemas mas complejos. En este caso era necesario, sin embargo ilustra como puedes implementar fuentes en sistemas con diferentes tipos de fuentes. ie:

```typescript
<Typography.Heading1 text="Un texto"/> // H1 (N pixels)
<Typography.Heading2 text="Un texto"/> // H2 (N pixels)
<Typography.Text1 text="Un texto"/> // span (N pixels)
<Typography.Text2 text="Un texto"/> // span (N pixels)
```
### Constantes ⚙️
Existe un archivo de constantes el cual tiene los mensajes / titulos que se muestran en la APP. Al ser pocos, se opto por incluirlos en un solo archivo, sin embargo, en sistemas mas amplios esto puede cambiar

```typescript
<div>Este es un mensaje</div> ❌
```
```typescript
const MESSAGE = 'Este es un mensaje'
<div>{MESSAGE}</div> ✅
```

### GraphQL codegen
Esta libreria de Apollo, nos permite tner Typeadas nuestras Queries, Mutations y Subscriptions. Esto se genera conforme vas implementando sus funciones y para poder generar los typos debes ejecutar el comando:
```bash
yarn gql-compile
```

## // TODOS 👀
- Implementacion de localstorage para mantener el juego activo si se recarga la pagina
  - Implementacion de custom hook
  - Test
- Mejorar arquitectura con Sass
