require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stomach rice magic concert grace cricket slot giggle'; 
let testAccounts = [
"0x0a2fc2ca38d5294ec11f1cfdd79de902f9314dca0c29fef3bdcf5e85f03a99df",
"0x97270cb4dcfe5472fe18d5577472a690d8e82871b7d3f3770cf94733090c83f4",
"0x5939a740ee9fb0f6e85ad451bfe83dbec63bc5afd505c537ebb3edef5678048c",
"0xf5cd4eda1c46d385dfc57ff7b927f5fb89ec6cdcc6ebe9b2c18c931ee57b63c6",
"0x7a3670d14b7f9ef2181c2aa7ddeb64459934402606c548ca1c223ecc4676063d",
"0xc8aba450648d70c2997253d14773e786cbf4a28f0ef66809bac069811d38c3fd",
"0xaad48bdf6c6623a594f5480f8016de54e7cd0d17a17cee6ad88768f0fbdedea7",
"0x920ae922e7983ce1e9ea499fad9d19c40803937025ae0b8f4d0aee41a2d62f6a",
"0xc27062023f3b064d898c34c0f7823180458c4155dcfac317d52d08b3f94f7429",
"0xa98d856e6af1feaeec2029a5be05cd4b76b348151b86c8f3bd70caf7418576ca"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

