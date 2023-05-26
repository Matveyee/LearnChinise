import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import querystring from 'querystring';
import { MongoClient } from 'mongodb';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const client = new MongoClient('mongodb+srv://vercel-admin-user:verceladmin@cluster0.sfz0dsq.mongodb.net/?retryWrites=true&w=majority');

//connecting database
try{
    client.connect();
    console.log('База данных поключена');
}catch (e) {
    console.log(e);
}

const users = client.db().collection('users');
const sets = client.db().collection('sets');

//exclusions of adresses
let adresses = {
    '/' : path.join(__dirname,'HTML','index.html'),
    '/profile_icon.png' : path.join(__dirname, 'images', 'profile_icon.png'),
    '/main.css' : path.join(__dirname, 'CSS', 'main.css'),
}

const server = http.createServer( (req,res) => {

    //function that reads urls
    function readUrl( url, info = 0) {
        if ( ( url != '/favicon.ico' )) {
            if ( !Object.keys(adresses).includes(url)) {

                fs.readFile(  path.join(__dirname, 'HTML', url.split('/')[1]+'.html'),'utf8', (err,data) => {
                    if (err) {throw err};
                    if ( info !== 0 ) {

                            for(let el of Object.keys(info)) {
                                data = data.replace(el,info[el])

                            }

                    }
                    res.writeHead(200, {"Content-type" : "text/html"});
                    res.end(data)
            })  

            } else {
                fs.readFile(path.join(adresses[url]), (err,data) => {
                    if (err) {throw err};
                    if ( info !== 0 ) {

                        for(let el of Object.keys(info)) {
                            data = data.replace(el,info[el])

                        }

                }   let basename;
                    if (url == '/') {
                        basename = 'html'
                    }else {
                        basename = url.split('.')[1];
                    }
                    
                    res.writeHead(200, {"Content-type" : `text/${basename}`});
                    res.end(data)
                })   
            }
            
        }
    }

    
    let place;
    let placeHolders = {};
    let parsedData;

    //proessing request's methods
    if (req.method === 'POST') {
        // parsing data
        let data = '';
        let user;
        
        req.on('data', chunk => {
        data += chunk.toString();
        });
        
        req.on('end', () => {
            parsedData = querystring.parse(data);
            console.log(parsedData)
            //work with forms and db
            if (req.url == '/regout') {
                users.insertOne(parsedData);

                async function retUser() {
                user =  await users.findOne( {username: parsedData.username, password: parsedData.password} );

                return user;
                }

                retUser().then( result => {
                    placeHolders['username'] = result.username;

                readUrl('/logout', placeHolders);
                })
  
            }else if (req.url == '/logout') {
                //..
            }else if ( req.url == '/newSet' ) {
                console.log('here')
                
                async function makeArray() {
                    await sets.insertOne( { Words : parsedData.words, Name: parsedData.setName });
                    let arr = await sets.find().toArray();
                    return arr;
                    
                }
                makeArray().then( (arr) => {
                    for ( let el of arr ) {
                        place = place + `<div class="set" >
                        <p align="center" >${el.Name}</p>
                        <p align="center" >${el.Words}</p>
                    </div>
                    <br>`
                    }
                    placeHolders['{sets}'] = place
                    readUrl('/sets', placeHolders);
                } );
                
            }
            });
    }else if (req.method === 'GET') {
        if (req.url == '/regout') {
            readUrl('/logout')
       }else if ( req.url == '/sets' ) {
            async function makeArray2() {
                let arr = await sets.find().toArray();
                return arr;
                    
            }
                makeArray2().then( (arr) => {
                    for ( let el of arr ) {
                        place = place + `<div class="set" >
                        <p align="center" > <a href='/${el.Name}_set' >${el.Name}</a></p>
                        <p align="center" >${el.Words}</p>
                    </div>
                    <br>`
                    }
                    placeHolders['{sets}'] = place
                    readUrl('/sets', placeHolders);
                } );
       }else if (req.url.split('_')[1] == 'set') {
            async function findSet(name) {
                let thisSet = await sets.findOne( {Name : name} );
                return thisSet;
            }

            findSet(req.url.split('_')[0].split('/')[1]).then( set => {
                placeHolders['{setName}'] = set.Name;
                placeHolders['{setName2}'] = set.Name;
                placeHolders['{words}'] = set.Words;
                readUrl('/set', placeHolders);
            })
       }else {
        readUrl(req.url)
       }

    }
    console.log( [req.url, req.method, parsedData].join(',') )


})

server.listen(3000, () => {
    console.log('Сервер запущен');
});
