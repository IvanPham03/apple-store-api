import { createClient } from "redis";

const client = createClient(
    {
        port: 6379,
        host: '127.0.0.1'
    }
)

client.on('error', err=>{
    console.log('Redis client error', err)
})

client.on('connect', err =>{
    console.log('redis connected')
})

await client.connect();

    

export default client
