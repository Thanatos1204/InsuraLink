// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsuraLink {
   // Mappings
   mapping(string => string) public UserToHash;
   mapping(string => string) public BrokerToUser;

   // Getter functions
   function getUserHash(string memory user) public view returns (string memory) {
       return UserToHash[user];
   }

   function getBrokerUser(string memory broker) public view returns (string memory) {
       return BrokerToUser[broker];
   }

   // Setter functions
   function setUserHash(string memory user, string memory hash) public {
       UserToHash[user] = hash;
   }

   function setBrokerUser(string memory broker, string memory user) public {
       BrokerToUser[broker] = user;
   }
}