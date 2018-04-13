const app = require('./config/config');

app.listen(process.env.PORT,()=>{
    console.log(`➡➡➡ The server is online: http://localhost:${process.env.PORT}/ ☻`);
});