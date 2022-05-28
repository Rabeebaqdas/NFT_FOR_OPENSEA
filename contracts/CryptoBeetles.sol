//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0 <=0.9.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
contract CryptoBeetles is ERC721URIStorage  {

using Counters for Counters.Counter;
Counters.Counter private _tokenIds;

constructor(string memory _name, string memory _symbol) ERC721(_name,_symbol) {}

function mint(string memory _tokenURI) public returns(uint256){

    uint256 newItemId = _tokenIds.current();
    _mint(msg.sender,newItemId);
    _setTokenURI(newItemId, _tokenURI);

     _tokenIds.increment();
    return newItemId;
}

}
