## Description
Simple webpage to monitor the status of the TenX PAY ICO. Allows you to check if you received PAY tokens. Requires running your own geth or Parity node.

## Installation
* Clone repository
* Run `npm install`
* Create a `config.json` (see Configuration)
* Run `browserify index.js -o build/bundle.js`

## Configuration
Create a `config.json`:
```json
{
  "node_url": "NODE_URL_HERE",
  "our_addr": "OUR_ETH_ADDR_HERE"
}
```

## Usage

Open build/index.html


## Preview:

![Preview](http://i.imgur.com/GjkoTky.png)