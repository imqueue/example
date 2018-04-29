
import { IMQService, expose } from 'imq-rpc';

class Hello extends IMQService {

    /**
     * Says hello using given name
     *
     * @param {string} [name] - name to use withing hello message
     * @returns {string} - hello string
     */
    @expose()
    public hello(name?: string): string {
        return `Hello, ${name}!`;
    }

    /**
     * Async says hello using given name
     *
     * @param {string} [name] - name to use withing hello message
     * @returns {string} - hello string
     */
    @expose()
    public async asyncHello(name?: string): Promise<string> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return `Hello, ${name}!`;
    }
}

const service = new Hello();
service.start().then(() => console.log('Started'));

