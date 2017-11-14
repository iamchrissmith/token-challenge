pragma solidity ^0.4.8;

import './Ownable.sol';

contract Whitelist is Ownable {
  /*----------- Globals -----------*/

  mapping(address => bool) public whitelist;

  /*----------- Events -----------*/

  event LogAddAddress(address sender, address nowOkay);
  event LogRemoveAddress(address sender, address deleted);

  /*----------- Constructor -----------*/
  
  function Whitelist() {}

  /*----------- Owner Methods -----------*/

  // function addAddress(address _okay)
  //   public
  //   onlyOwner
  //   returns(bool success)
  // {
  //   return true;
  // }

  // function removeAddress(address _delete)
  //   public
  //   onlyOwner
  //   returns(bool success)
  // {
  //   return true;
  // }

  /*----------- Constants -----------*/

  function isWhitelisted(address _check)
    public
    constant
    returns(bool isIndeed)
  {
    return whitelist[_check];
    // return false;
  }
  
}