
import { hello as space } from './Hello';

const hello = new space.HelloClient();
hello.start().then(async () => {
    const syncResp = await hello.hello('Sync');
    console.log(syncResp);

    const asyncResp = await hello.asyncHello('Async');
    console.log(asyncResp);
	await hello.destroy();
});

