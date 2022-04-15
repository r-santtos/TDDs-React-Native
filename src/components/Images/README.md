# Configurando JEST em React Native
### Módulos e Bibliotecas
- jest
```bash
  yarn add jest -D
```
- jest-expo
```bash
  yarn add jest-expo -D
```
- @testing-library/jest-native
```bash
  yarn add @testing-library/jest-native -D
```
- @types/jest
```bash
  yarn add @types/jest -D
```
- @testing-library/react-native
```bash
  yarn add @testing-library/react-native -D
```
******
### Configurando o arquivo "package.json"

```bash

  "scripts": {
    "test": "jest"
  },

  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ]
  }
```
******
### Testando o App.tsx
- Primeiro vamos criar uma pasta "\__tests__" na raíz do projeto
- Depois vamos criar um arquivo chamado "App-test.tsx"
```bash
  import React from "react";
  import { render } from "@testing-library/react-native";
  import App from "../App";

  describe("App", () => {
    it("renders without crashing", () => {
      const { container } = render(<App />);
      expect(container).toBeTruthy();
    });
  });
```
- E por fim, vamos rodar nosso arquivo para testar se está tudo funcionando, se tudo estiver ok, o teste será concluído com sucesso.
- Comando no terminal
```bash
  yarn test
```
- Este é o resultado após o comando no terminal
```bash
  PASS  __tests__/App-test.tsx
    App
      ✓ renders without crashing (122 ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        0.997 s, estimated 1 s
  Ran all test suites.
  Done in 2.22s.
```
***
***
# Após a configuração vamos criar um componente React Native Image com Typescript e aplicar TDD.

### Dentro da nossa pasta "\__tests__" vamos criar nosso arquivo "Image-test.tsx" e escrever as seguintes linhas de código.
```bash
import React from "react";
import { render } from "@testing-library/react-native";
import Image from "../src/components/Images";

describe("Components Images", () => {
  it("Should render RN Image", () => {
    const { getByTestId } = render(<Image />);
    const image = getByTestId("logo");

    expect(image.props.testID).toBe("logo");
  });
});
```
***
- ### Compreendendo o que "describe" faz:
Ele é responsável por agrupar determinados grupos de testes de um mesmo componente, é comparável ao encapsulamento de código da programação orientada a objetos ou ao Factory method pattern.
```bash
describe(" Descreva o bloco de código ", () => {});
```
- ### getByTestId
Esta função é responsável por encontrar nosso componente a ser testado pelo seu ID e finalmente lançar a resposta dentro da variável "Imagem"
```bash
const { getByTestId } = render(<Image />);
const image = getByTestId("logo");
```
- ### expect / props.testID / toBe
Esta é a resposta esperada ao realizar o teste, encontrar um componente com ID igual a (logo).
```bash
expect(image.props.testID).toBe("logo");
```
***
### Vamos agora realizar o comando para iniciar o teste. Abra o terminal dentro da pasta do seu projeto e execute o seguinte comando.
```bash
yarn test
```
a resposta será um fracasso, pois seu teste não passará porque ainda não criamos nosso componente.
```bash
Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        7.579 s
```
***
***
### Bem, agora que escrevemos nosso teste, é hora de criar nosso componente.

Por uma questão didática vamos criar novo componente dentro do nosso arquivo "App.tsx".
- Primeiro realizamos a importação
```bash
import { Image } from 'react-native';
```
- Segundo dentro de "return()" criamos nosso componente
```bash
<Image
  testID='logo'
  style={styles.boxImage}
  source={{
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  }}
  resizeMode='contain'
  accessibilityLabel='logo'
/>
```
- O identificador que o teste irá procurar
```bash
testID='logo'
```
Não vou explicar as outras tags, porque se você não consegue entender do que se trata, é sinal de que você está tentando dar um passo maior que a sua perna, TDD ainda é cedo para você.
- Execute o teste novamente
```bash
yarn test
```
agora a resposta deve ser bem sucedida.
```bash
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.963 s, estimated 2 s
```
### Agora é só usar seu conhecimento até aqui e testar outras partes do seu componente que sejam relevantes.
```bash
  expect(image.props.accessibilityLabel).toBe("logo");

  expect(image.props.style.width).toBe(200);
  expect(image.props.style.height).toBe(200);

  expect(image.props.resizeMode).toBe("contain");
  expect(image.props.source.uri).toBe("https://reactnative.dev/img/tiny_logo.png");
```
***
***
# Código completo do componente
```bash
import React from 'react';
import { StyleSheet, Image } from 'react-native';

const ComponentImage = () => {
  return (
    <Image
      testID='logo'
      style={styles.boxImage}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
      resizeMode='contain'
      accessibilityLabel='logo'
    />
  );
}

const styles = StyleSheet.create({
  boxImage: {
    width: 200,
    height: 200,
  }
});

export default ComponentImage;
```
***
***
# Código completo do test
```bash
import React from "react";
import { render } from "@testing-library/react-native";
import Image from "../src/components/Images";

describe("Components Images", () => {
  it("Should render RN Image", () => {
    const { getByTestId } = render(<Image />);
    const image = getByTestId("logo");

    expect(image.props.testID).toBe("logo");
    expect(image.props.accessibilityLabel).toBe("logo");
    expect(image.props.style.width).toBe(200);
    expect(image.props.style.height).toBe(200);
    expect(image.props.resizeMode).toBe("contain");
    expect(image.props.source.uri).toBe("https://reactnative.dev/img/tiny_logo.png");
  });
});
```