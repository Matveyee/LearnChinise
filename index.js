import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import querystring from 'querystring';
import { MongoClient } from 'mongodb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const client = new MongoClient('mongodb+srv://matveykarlovw:hgem.9999999@cluster0.sfz0dsq.mongodb.net/?retryWrites=true&w=majority');


try{
    client.connect();
    console.log('База данных поключена');
}catch (e) {
    console.log(e);
}

const users = client.db().collection('users');
let parsedData;


let adresses = {
    '/' : path.join(__dirname,'HTML','index.html'),
    '/profile_icon.png' : path.join(__dirname, 'images', 'profile_icon.png'),
}

const server = http.createServer( (req,res) => {


    function readUrl( url, info = 0) {
        if ( ( url != '/favicon.ico' )) {
            if ( !Object.keys(adresses).includes(url)) {

            fs.readFile(  path.join(__dirname, 'HTML', url.split('/')[1]+'.html'),'utf8', (err,data) => {
                if (err) {throw err};
                if ( info !== 0 ) {

                        for(let el of Object.keys(placeHolders)) {
                            data = data.replace(el,placeHolders[el])

                        }

                }
                res.writeHead(200, {"Content-type" : "text/html"});
                res.end(data)
            })  

            } else {
                fs.readFile(path.join(adresses[url]), (err,data) => {
                    if (err) {throw err};
                    if ( info !== 0 ) {

                        for(let el of Object.keys(placeHolders)) {
                            data = data.replace(el,placeHolders[el])

                        }

                }
                    res.writeHead(200, {"Content-type" : "text/html"});
                    res.end(data)
                })   
            }
            
        }
    }

    console.log(req.url);
    console.log(req.method)
    
    if (req.method === 'POST') {
        let data = '';
        var placeHolders;
        
        
        req.on('data', chunk => {
        data += chunk.toString();
        });
        
        req.on('end', () => {
            parsedData = querystring.parse(data);
             placeHolders = {
                '{username}' : parsedData.username

            }
            if (req.url == '/regout') {
                users.insertOne(parsedData);
                readUrl('/logout', placeHolders)
            }
            if (req.url == '/logout') {
                readUrl('/logout', placeHolders)
            }
            console.log(parsedData);
            });
        
        
        
        
    }else if (req.method === 'GET') {
        if (req.url == '/regout') {
            readUrl('/logout')
       }else {
            readUrl(req.url)
       }
    }


})

server.listen(3000, () => {
    console.log('Сервер запущен');
});