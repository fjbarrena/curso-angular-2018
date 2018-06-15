# Curso Angular 2018

En este curso se desarrolla una aplicación completa desde cero, ampliando las funcionalidades en cada clase a través de ejercicios que "demuestren" con el ejemplo los conceptos que trabajamos ese día.

Para que la aplicación se ejecute correctamente, necesita de un backend que le provea de datos. Este backend lo levantamos con json-server (https://github.com/typicode/json-server), una utilidad que levanta servidores de mocks en base a un json.

Ese json está en la raíz de repositorio, se trata de leagueoflegends.json

Para levantar el servidor, solo tenéis que instalar json-server con npm

## Instalación de json-server

```bash
$ npm install -g json-server
```

## Bootstraping
```bash
$ json-server --watch leagueoflegends.json
```


