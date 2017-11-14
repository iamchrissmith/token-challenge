pragma solidity ^0.4.8;

import './Ownable.sol';

contract Whitelist is Ownable {

  function Whitelist() {}

  function addAddress(address _okay)
    public
    onlyOwner
    returns(bool success)
  {}

  function removeAddress(address _delete)
    public
    onlyOwner
    returns(bool success)
  {}

  function isWhitelisted(address _check)
    public
    constant
    returns(bool isIndeed)
  {}
  
}