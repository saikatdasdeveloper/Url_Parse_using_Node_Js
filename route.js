require('dotenv').config();

const port = process.env.PORT;

const reqHandler= (req,res) => {
    const [path, query] = req.url.split('?')
    const params = new URLSearchParams(query);

    const name = params.get('name') || 'Guest';
    const id = params.get('id') || 'Error: 404, Not Found'
    res.setHeader('Content-Type', 'text/plain')
    if(path === '/employee') {
        res.statusCode = 200;
        res.end(`Hello ${name}, Your Employee Id is: ${id}`)
    }
    if(path === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write(`<h1 style= "text-align:center">Welcome to NodeJs Server</h1>`)
        res.write(`<p style="color:red">Created By Saikat Das</p>`)
        res.write(`<div style="display:flex; ">
            <div style="width:200px; background-color:grey; height:100px; color: white; border-radius: 3px; 
            text-align: center;
            ">
              <p style="padding:40px">PORT: ${port} </p>
            </div>
            <div style="width:200px; background-color:grey; height:100px; color: white; border-radius: 3px;
            text-align: center; margin-left:20px
            ">
              <p style="padding:40px">URL: /employee?name=Saikat&&id=32 </p>
            </div>
              <div style="width:200px; background-color:grey; height:100px; color: white; border-radius: 3px;
            text-align: center; margin-left:20px
            ">
              <p style="padding:40px">URL: /employee </p>
            </div>
          </div>`);

        res.end()  
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.end("<h1>Error 404</h1>")
    }
}

module.exports.reqHandler = reqHandler;