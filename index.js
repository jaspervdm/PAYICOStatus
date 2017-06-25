var $ = require('jquery');
var Web3 = require('web3');
var web3 = new Web3();
var abi = require("./tenxabi.js")
var config = require("./config.json");

var saleContract, rateContract, tokenContract;

var saleStart, hardcap, vault, vaultBalance, altDeposits;

var saleAddr = '0xd43D09Ec1bC5e57C8F3D0c64020d403b04c7f783';
var tokenAddr = '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280';
var rateAddr = '0x31E89d5186fA7AA857bF81E3bAD5E183a006900C';

var formatThousandsNoRounding = function(n, dp){
  var e = '', s = e+n, l = s.length, b = n < 0 ? 1 : 0,
      i = s.lastIndexOf('.'), j = i == -1 ? l : i,
      r = e, d = s.substr(j+1, dp);
  while ( (j-=3) > b ) { r = ',' + s.substr(j, 3) + r; }
  return s.substr(0, j + 3) + r + 
    (dp ? '.' + d + ( d.length < dp ? 
        ('00000').substr(0, dp - d.length):e):e);
};

function updateRaised() {
  if (saleStart && hardcap && vaultBalance && altDeposits) {
    var now = Math.floor(Date.now()/1000);
    if (now >= saleStart) {
      if (web3.toBigNumber(vaultBalance).plus(web3.toBigNumber(altDeposits)).lte(web3.toBigNumber(hardcap)) && now < saleStart + 28*24*60*60) {
        $('#status').html('<span class="started">STARTED</span>');
      }
      else {
        $('#status').html('<span class="post">ENDED</span>');
      }
    }
    else {
      $('#status').html('<span class="pre">Not started</span>');
    }
  }
  else {
    $('#status').html('?');
  }

  if (vaultBalance && altDeposits) {
    var raised = web3.toBigNumber(vaultBalance).plus(web3.toBigNumber(altDeposits));
    $('#raised').html(''+ formatThousandsNoRounding(web3.fromWei(raised, 'ether'), 3)+' ETH');
    if (hardcap) {
      $('#raised_perc').html('['+raised.dividedBy(web3.toBigNumber(hardcap)).times(100).toNumber().toFixed(2)+'%]');
    }
  }
}

function update() {
  // Get latest block
  web3.eth.getBlock('latest', function (error, block) {
    if (!error) {
      var now = Math.floor(Date.now()/1000);

      $('#block_number').html(block.number);
      var age = now-block.timestamp;

      var d = Math.floor(age/86400);
      var h = Math.floor((age%86400)/3600);
      var m = Math.floor((age%3600)/60);
      var s = age%60;

      var ageReadable = '';
      if (d > 0) {
        ageReadable += d+'d ';
      }
      if (h > 0) {
        ageReadable += h+'h ';
      }
      if (m > 0) {
        ageReadable += m+'m ';
      }
      if (s > 0) {
        ageReadable += s+'s ';
      }

      $('#age').html(ageReadable);
    }
    else {
      console.log('Error: '+error);
    }
  });

  return;

  // Update sale start time
  saleContract.start(function (error, result) {
    if (!error) {
      saleStart = result;
      var start = new Date(result*1000);
      $('#start').html(String('00'+start.getDate()).slice(-2)+'-'+String('00'+start.getMonth()).slice(-2)+'-'+start.getFullYear()+' '+String('00'+start.getHours()).slice(-2)+':'+String('00'+start.getMinutes()).slice(-2)+':'+String('00'+start.getSeconds()).slice(-2));
    }
    else {
      console.log('Error: '+error);
    }
  });

  // Update vault balance
  saleContract.multisigVault(function (error, result) {
    if (!error) {
      vault = result;
      web3.eth.getBalance(vault, function (error, result) {
        if (!error) {
          vaultBalance = result;
          $('#raised_eth').html(''+formatThousandsNoRounding(web3.fromWei(result, 'ether'), 3)+' ETH');
          updateRaised();
        }
        else {
          console.log('Error: '+error);
        }
      });
    }
    else {
      console.log('Error: '+error);
    }
  });

  // Update alt deposits
  saleContract.altDeposits(function (error, result) {
    if (!error) {
      altDeposits = result;
      $('#raised_alt').html(''+formatThousandsNoRounding(web3.fromWei(result, 'ether'), 3)+' ETH');
      updateRaised();
    }
    else {
      console.log('Error: '+error);
    }
  });

  // Update hardcap
  web3.eth.getStorageAt(saleAddr, 5, function (error, result) {
    if (!error) {
      hardcap = result;
      $('#hardcap').html(formatThousandsNoRounding(web3.fromWei(result, 'ether'), 3)+' ETH');
      updateRaised();
    }
    else {
      console.log('Error: '+error);
    }
  });

  // Update minting state
  tokenContract.mintingFinished(function (error, result) {
    if (!error) {
      $('#minting_finished').html(result ? 'Yes' : 'No');
    }
    else {
      console.log('Error: '+error);
    }
  });

  tokenContract.totalSupply(function (error, result) {
    if (!error) {

      $('#supply').html(formatThousandsNoRounding(web3.toBigNumber(result).dividedBy(web3.toBigNumber(10).toPower(18)), 3)+' PAY');
    }
    else {
      console.log('Error: '+error);
    }
  });

  tokenContract.tradingStarted(function (error, result) {
    if (!error) {
      $('#trading').html(result ? 'Yes' : 'No');
    }
    else {
      console.log('Error: '+error);
    }
  });

  tokenContract.balanceOf(config.our_addr, function (error, result) {
    if (!error) {
      $('#our_tokens').html(''+formatThousandsNoRounding(web3.toBigNumber(result).dividedBy(web3.toBigNumber(10).toPower(18)), 3)+' PAY');
    }
    else {
      console.log('Error: '+error);
    }
  });
}

$(window).on('load', function () {
  web3.setProvider(new web3.providers.HttpProvider(config.node_url));

  /*saleContract = web3.eth.contract(abi.sale).at(saleAddr);
  rateContract = web3.eth.contract(abi.rate).at(rateAddr);
  tokenContract = web3.eth.contract(abi.token).at(tokenAddr);*/

  update();
  setInterval(function() { update(); }, 5000);
});