import { IMQClient } from '@imqueue/rpc';

IMQClient.create('Hello', { write: false }).then(async (hello: any) => {
    try {
        const client = new hello.HelloClient();

        await client.start();

        console.log(await client.hello('Sync'));
        console.log(await client.asyncHello('Async'));

        await client.destroy();
    }

    catch (err) {
        console.error(err);
    }
});
