#!/bin/bash

echo '==============================================='
echo '         Testando versão do node e npm         '
echo '==============================================='
echo ''

node -v
npm -v

echo ''
echo '==============================================='
echo '       Instalação dos pacotes do projeto       '
echo '==============================================='
echo ''

npm i --no-optional
npm run start:all
