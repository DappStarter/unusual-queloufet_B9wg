require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth shift protect hockey knife flower slice'; 
let testAccounts = [
"0x7cb8dc681c08d09886e3f0d0fbe64d0daed397bfc2f1852b7cf5e1beb9f426c3",
"0x93a783eaec4a6d86f96477504062d03ca45e9c73a3ef5c32074af96d2842561c",
"0xd9c22b82fab9a63e0b55ed625fdb8efd2b134e8d043feeb830278bff67fdc825",
"0xc86d2cdfbf8bef1a3fde451cb5d5b034bf6d5461f836dfe566b7e31279828635",
"0x39ec76fa496d6dac13677ad4cb4e685b07030805c5ae4914825118990b6da09c",
"0x173b1c89439f2daf58106568e2cd2310ecc08547af3f45f6a9b85d6789f89450",
"0x65ce7ef0a908af9dcd837798880d4902c8e9c1ca0533b9b36fed5a7b421fe9c0",
"0x2ab9a8a0f68175dadd2141a89885e4a7cfe712479b967cf5b1e76b6853265783",
"0x9e22684a15fa697cc7af154e7c105b990c8a0393333ae89091d81530f4da35c4",
"0xbe089bea7cdcec78c429ccadb922bb70d4943ccd038cef6d663a512c77a06920"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

