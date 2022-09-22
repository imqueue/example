import { hello as space } from './Hello';

const client = new space.HelloClient();

client.start().then(async () => {
    while (true) {
        const syncResp = await client.hello('Sync');
        console.log(syncResp);

        const asyncResp = await client.asyncHello('Async');
        console.log(asyncResp);

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
});

