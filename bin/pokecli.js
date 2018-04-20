#! /usr/bin/env node

const https = require("https");
const axios = require('axios');

var arguments = process.argv.splice(2, process.argv.length - 1).join(' ');

axios.get(`http://pokeapi.co/api/v2/pokemon/${arguments}`)
    .then(res =>{
        let infos = res.data;
        let pokeInfos = {};
        pokeInfos['nome'] = infos.name;
        pokeInfos['abilidades'] = [];
        infos.abilities.forEach(element => {
            pokeInfos.abilidades.push(element.ability.name);
        });
        
        console.log(pokeInfos);
    })