import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv'; //To switch btw to DB

Enzyme.configure({
    adapter: new Adapter()
});

//for using two database , to switch DB we need this
DotEnv.config({ path: '.env.test' });