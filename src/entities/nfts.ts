import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { DAOpunk } from "../../generated/schema";
import { ipfs, json, JSONValue } from '@graphprotocol/graph-ts';
import { ZERO, IPFS_HASH } from "../utils/constants";

/***** NFT functions *****/
export function get(
  id: Bytes,
  contractAddress: Address,
  tokenID: BigInt,
  block: BigInt,
  hash: Bytes,
  timestamp: BigInt,
  walletAddress: Address
): DAOpunk {
  let daopunk = DAOpunk.load(id);
  if (!daopunk) {
    daopunk = new DAOpunk(id);
    daopunk.project = contractAddress;
    daopunk.tokenID = tokenID;
    daopunk.block = block;
    daopunk.hash = hash;
    daopunk.timestamp = timestamp;
    
    daopunk.totalSales = ZERO;
    daopunk.totalSalesWei = ZERO;
    daopunk.avgSaleWei = ZERO;
    daopunk.totalTransfers = ZERO;
  
    daopunk.tokenURI = IPFS_HASH + "/" + tokenID.toString() + ".json";
    let metadata = ipfs.cat(daopunk.tokenURI);
    if (metadata) {
      const value = json.fromBytes(metadata).toObject();
      if (value) {
        const name = value.get("name");
        if (name) {
          daopunk.name = name.toString();
        }
  
        const image = value.get("image");
        if (image) {
          daopunk.image = image.toString();
        }
      }
  
      let attributes: JSONValue[];
      let bonsaiAttributes = value.get("attributes");
      if (bonsaiAttributes) {
        attributes = bonsaiAttributes.toArray();
  
        for (let i=0; i<attributes.length; i++) {
          let item = attributes[i].toObject();
          let trait: string;
          let traitName = item.get("trait_type");
          if (traitName) {
            trait = traitName.toString();
            let value: string;
            let traitValue = item.get("value");
            if (traitValue) {
              value = traitValue.toString();
              if (trait == "Archetype") {
                daopunk.archetype = value;
              }
              if (trait == "Background") {
                daopunk.background = value;
              }
              if (trait == "Graphic") {
                daopunk.graphic = value;
              }
              if (trait == "Color") {
                daopunk.color = value;
              }
              if (trait == "Clothes") {
                daopunk.clothes = value;
              }
              if (trait == "BODY") {
                daopunk.body = value;
              }
              if (trait == "Head") {
                daopunk.head = value;
              }
              if (trait == "Bonus") {
                daopunk.bonus = value;
              }
            }
          }
        }
      }
    }
  }
  daopunk.currentOwner = walletAddress;
  daopunk.save();

  return daopunk as DAOpunk;
}
