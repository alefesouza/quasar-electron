# quasar-electron

Esse é um simples aplicativo utilizando a API do Meetup para exibir eventos, desenvolvido em Vue.js 2.x e Quasar 0.15.x.

Desenvolvi ele com o intuito de dar palestras sobre aplicativos híbridos utilizando Quasar e Electron, atingindo 6 plataformas diferentes apenas com linguagens web, seguindo as interfaces mobile nativas.

## Pré-requisitos

Aqui nesse repositório há o aplicativo final, porém pretendo fazer um live code explicando passo a passo cada parte, como o tempo de uma palestra é normalmente 40 minutos - 1 hora, é necessário você fazer algumas coisas antes para pular o tempo de instalação dos pacotes necessários, que é algo que pode demorar mais ou menos 2 horas.

Os requisitos que eu utilizei são:

* Node.js 8.9.3+.

Comandos que você precisa executar antes da palestra, os @versão são opcionais, são apenas as versões que eu utilizei quando desenvolvi o app:

* Instalar o Vue CLI e o Quasar CLI globalmente atráves do NPM:

```
    npm install -g vue-cli@2.9.3
    npm install -g quasar-cli@0.15.14
```

* Iniciar um projeto simples do Quasar:

```
    quasar init quasar-electron
    cd ./quasar-electron
```

* Adicionar o modo Electron nativo do Quasar CLI:

```
    quasar mode -a electron
```

Com isso você já consegue rodar o webapp no navegador, lançando um PWA, e no Electron, caso você queira rodar como um aplicativo no celular, você precisará instalar o Cordova e o SDK do mesmo e rodar os comandos em seguida:

### Cordova

Instale globalmente através do NPM.

```
    npm install -g cordova@8.0.0
```

### Android

* Android SDK, é necessário para compilar aplicativos Android, o mais fácil é você baixar o [Android Studio](https://developer.android.com/studio/index.html) pois ele já deixa tudo configurado, mas você pode pesquisar algum tutorial caso queira baixar apenas o SDK e configurar no seu PATH.

* Adicionar o projeto Android:

```
    quasar dev -m cordova -T android -t mat
```

* Rodar ou emular o projeto Android:

```
    cd ./src-cordova
    cordova run android
```

ou

```
    cd ./src-cordova
    cordova emulate android
```

Para compilar o .apk, você também precisará do JDK, baixe [aqui](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

### iOS

* Xcode, caso você tenha um Mac e queira compilar pra iOS, só baixá-lo atráves da App Store.

* Adicionar o projeto iOS:

```
    quasar dev -m cordova -T ios -t ios
```

Caso peça para você instalar o pacote @ionic/cli-plugin-cordova, digite Y e enter.

* Rodar ou emular o projeto iOS:

```
    cd ./src-cordova
    cordova run ios
```

ou

```
    cd ./src-cordova
    cordova emulate ios
```

Minha palestra começará depois de ter feito tuuuuudo isso. Também recomendo você baixar o ~~melhor editor~~ [Visual Studio Code](https://code.visualstudio.com) ficando mais fácil de me acompanhar.

Essa palestra foi fortemente inspirada em outra minha, [aplicativos híbridos com Ionic 3 e Electron](https://github.com/alefesouza/ionic3-electron).
