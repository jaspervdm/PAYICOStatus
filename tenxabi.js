var sale = [
  {"constant":false,"inputs":[{"name":"_multisigVault","type":"address"}],"name":"setMultisigVault","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[{"name":"authorizerIndex","type":"uint256"}],"name":"getAuthorizer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"exchangeRate","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"altDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"tokens","type":"uint256"}],"name":"authorizedCreateTokens","outputs":[],"payable":false,"type":"function"},
  {"constant":false,"inputs":[],"name":"finishMinting","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"_exchangeRate","type":"address"}],"name":"setExchangeRate","outputs":[],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"retrieveTokens","outputs":[],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"totalAltDeposits","type":"uint256"}],"name":"setAltDeposit","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"start","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"recipient","type":"address"}],"name":"createTokens","outputs":[],"payable":true,"type":"function"},
  {"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"addAuthorized","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"multisigVault","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"_hardcap","type":"uint256"}],"name":"setHardCap","outputs":[],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"_start","type":"uint256"}],"name":"setStart","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isAuthorized","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
  {"payable":true,"type":"fallback"},
  {"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"ether_amount","type":"uint256"},{"indexed":false,"name":"pay_amount","type":"uint256"},{"indexed":false,"name":"exchangerate","type":"uint256"}],"name":"TokenSold","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"pay_amount","type":"uint256"}],"name":"AuthorizedCreate","type":"event"},
  {"anonymous":false,"inputs":[],"name":"MainSaleClosed","type":"event"}
];

var token = [
  {"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},
  {"constant":false,"inputs":[],"name":"startTrading","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"tradingStarted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},
  {"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},
  {"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}
];

var rate = [
  {"constant":false,"inputs":[{"name":"_symbol","type":"string"},{"name":"_rate","type":"uint256"}],"name":"updateRate","outputs":[],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"data","type":"uint256[]"}],"name":"updateRates","outputs":[],"payable":false,"type":"function"},
  {"constant":true,"inputs":[{"name":"_symbol","type":"string"}],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},
  {"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"rates","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},
  {"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},
  {"anonymous":false,"inputs":[{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"symbol","type":"bytes32"},{"indexed":false,"name":"rate","type":"uint256"}],"name":"RateUpdated","type":"event"}
];