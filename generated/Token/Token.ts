// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Token extends ethereum.SmartContract {
  static bind(address: Address): Token {
    return new Token("Token", address);
  }

  MIN_BANK(): BigInt {
    let result = super.call("MIN_BANK", "MIN_BANK():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_BANK(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MIN_BANK", "MIN_BANK():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  amountPurchased(_address: Address): BigInt {
    let result = super.call(
      "amountPurchased",
      "amountPurchased(address):(uint256)",
      [ethereum.Value.fromAddress(_address)]
    );

    return result[0].toBigInt();
  }

  try_amountPurchased(_address: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "amountPurchased",
      "amountPurchased(address):(uint256)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bankBalance(_address: Address): BigInt {
    let result = super.call("bankBalance", "bankBalance(address):(uint256)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBigInt();
  }

  try_bankBalance(_address: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bankBalance",
      "bankBalance(address):(uint256)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contractURI(): string {
    let result = super.call("contractURI", "contractURI():(string)", []);

    return result[0].toString();
  }

  try_contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("contractURI", "contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  contract_base_uri(): string {
    let result = super.call(
      "contract_base_uri",
      "contract_base_uri():(string)",
      []
    );

    return result[0].toString();
  }

  try_contract_base_uri(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "contract_base_uri",
      "contract_base_uri():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  contract_ipfs_json(): string {
    let result = super.call(
      "contract_ipfs_json",
      "contract_ipfs_json():(string)",
      []
    );

    return result[0].toString();
  }

  try_contract_ipfs_json(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "contract_ipfs_json",
      "contract_ipfs_json():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBalance(): BigInt {
    let result = super.call("getBalance", "getBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getBalance", "getBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(_owner: Address, _operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    _owner: Address,
    _operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isWhitelisted(_toCheck: Address): boolean {
    let result = super.call("isWhitelisted", "isWhitelisted(address):(bool)", [
      ethereum.Value.fromAddress(_toCheck)
    ]);

    return result[0].toBoolean();
  }

  try_isWhitelisted(_toCheck: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isWhitelisted",
      "isWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(_toCheck)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokensOfOwner(_owner: Address): Array<BigInt> {
    let result = super.call(
      "tokensOfOwner",
      "tokensOfOwner(address):(uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );

    return result[0].toBigIntArray();
  }

  try_tokensOfOwner(_owner: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "tokensOfOwner",
      "tokensOfOwner(address):(uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _openseaProxyAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _ticker(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _contract_ipfs(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _bankAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddWhitelistCall extends ethereum.Call {
  get inputs(): AddWhitelistCall__Inputs {
    return new AddWhitelistCall__Inputs(this);
  }

  get outputs(): AddWhitelistCall__Outputs {
    return new AddWhitelistCall__Outputs(this);
  }
}

export class AddWhitelistCall__Inputs {
  _call: AddWhitelistCall;

  constructor(call: AddWhitelistCall) {
    this._call = call;
  }

  get _toAdd(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddWhitelistCall__Outputs {
  _call: AddWhitelistCall;

  constructor(call: AddWhitelistCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class FixBankAddressCall extends ethereum.Call {
  get inputs(): FixBankAddressCall__Inputs {
    return new FixBankAddressCall__Inputs(this);
  }

  get outputs(): FixBankAddressCall__Outputs {
    return new FixBankAddressCall__Outputs(this);
  }
}

export class FixBankAddressCall__Inputs {
  _call: FixBankAddressCall;

  constructor(call: FixBankAddressCall) {
    this._call = call;
  }

  get _bankAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class FixBankAddressCall__Outputs {
  _call: FixBankAddressCall;

  constructor(call: FixBankAddressCall) {
    this._call = call;
  }
}

export class FixBaseURICall extends ethereum.Call {
  get inputs(): FixBaseURICall__Inputs {
    return new FixBaseURICall__Inputs(this);
  }

  get outputs(): FixBaseURICall__Outputs {
    return new FixBaseURICall__Outputs(this);
  }
}

export class FixBaseURICall__Inputs {
  _call: FixBaseURICall;

  constructor(call: FixBaseURICall) {
    this._call = call;
  }

  get newURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class FixBaseURICall__Outputs {
  _call: FixBaseURICall;

  constructor(call: FixBaseURICall) {
    this._call = call;
  }
}

export class FixContractDescriptionCall extends ethereum.Call {
  get inputs(): FixContractDescriptionCall__Inputs {
    return new FixContractDescriptionCall__Inputs(this);
  }

  get outputs(): FixContractDescriptionCall__Outputs {
    return new FixContractDescriptionCall__Outputs(this);
  }
}

export class FixContractDescriptionCall__Inputs {
  _call: FixContractDescriptionCall;

  constructor(call: FixContractDescriptionCall) {
    this._call = call;
  }

  get newDescription(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class FixContractDescriptionCall__Outputs {
  _call: FixContractDescriptionCall;

  constructor(call: FixContractDescriptionCall) {
    this._call = call;
  }
}

export class FixMinBankCall extends ethereum.Call {
  get inputs(): FixMinBankCall__Inputs {
    return new FixMinBankCall__Inputs(this);
  }

  get outputs(): FixMinBankCall__Outputs {
    return new FixMinBankCall__Outputs(this);
  }
}

export class FixMinBankCall__Inputs {
  _call: FixMinBankCall;

  constructor(call: FixMinBankCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class FixMinBankCall__Outputs {
  _call: FixMinBankCall;

  constructor(call: FixMinBankCall) {
    this._call = call;
  }
}

export class FixPriceCall extends ethereum.Call {
  get inputs(): FixPriceCall__Inputs {
    return new FixPriceCall__Inputs(this);
  }

  get outputs(): FixPriceCall__Outputs {
    return new FixPriceCall__Outputs(this);
  }
}

export class FixPriceCall__Inputs {
  _call: FixPriceCall;

  constructor(call: FixPriceCall) {
    this._call = call;
  }

  get price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class FixPriceCall__Outputs {
  _call: FixPriceCall;

  constructor(call: FixPriceCall) {
    this._call = call;
  }
}

export class FixWhitelistCall extends ethereum.Call {
  get inputs(): FixWhitelistCall__Inputs {
    return new FixWhitelistCall__Inputs(this);
  }

  get outputs(): FixWhitelistCall__Outputs {
    return new FixWhitelistCall__Outputs(this);
  }
}

export class FixWhitelistCall__Inputs {
  _call: FixWhitelistCall;

  constructor(call: FixWhitelistCall) {
    this._call = call;
  }

  get state(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class FixWhitelistCall__Outputs {
  _call: FixWhitelistCall;

  constructor(call: FixWhitelistCall) {
    this._call = call;
  }
}

export class LockCollectionCall extends ethereum.Call {
  get inputs(): LockCollectionCall__Inputs {
    return new LockCollectionCall__Inputs(this);
  }

  get outputs(): LockCollectionCall__Outputs {
    return new LockCollectionCall__Outputs(this);
  }
}

export class LockCollectionCall__Inputs {
  _call: LockCollectionCall;

  constructor(call: LockCollectionCall) {
    this._call = call;
  }
}

export class LockCollectionCall__Outputs {
  _call: LockCollectionCall;

  constructor(call: LockCollectionCall) {
    this._call = call;
  }
}

export class MintNFTCall extends ethereum.Call {
  get inputs(): MintNFTCall__Inputs {
    return new MintNFTCall__Inputs(this);
  }

  get outputs(): MintNFTCall__Outputs {
    return new MintNFTCall__Outputs(this);
  }
}

export class MintNFTCall__Inputs {
  _call: MintNFTCall;

  constructor(call: MintNFTCall) {
    this._call = call;
  }
}

export class MintNFTCall__Outputs {
  _call: MintNFTCall;

  constructor(call: MintNFTCall) {
    this._call = call;
  }
}

export class OwnerMintCall extends ethereum.Call {
  get inputs(): OwnerMintCall__Inputs {
    return new OwnerMintCall__Inputs(this);
  }

  get outputs(): OwnerMintCall__Outputs {
    return new OwnerMintCall__Outputs(this);
  }
}

export class OwnerMintCall__Inputs {
  _call: OwnerMintCall;

  constructor(call: OwnerMintCall) {
    this._call = call;
  }
}

export class OwnerMintCall__Outputs {
  _call: OwnerMintCall;

  constructor(call: OwnerMintCall) {
    this._call = call;
  }
}

export class RemoveWhitelistCall extends ethereum.Call {
  get inputs(): RemoveWhitelistCall__Inputs {
    return new RemoveWhitelistCall__Inputs(this);
  }

  get outputs(): RemoveWhitelistCall__Outputs {
    return new RemoveWhitelistCall__Outputs(this);
  }
}

export class RemoveWhitelistCall__Inputs {
  _call: RemoveWhitelistCall;

  constructor(call: RemoveWhitelistCall) {
    this._call = call;
  }

  get _toRemove(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveWhitelistCall__Outputs {
  _call: RemoveWhitelistCall;

  constructor(call: RemoveWhitelistCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawEtherCall extends ethereum.Call {
  get inputs(): WithdrawEtherCall__Inputs {
    return new WithdrawEtherCall__Inputs(this);
  }

  get outputs(): WithdrawEtherCall__Outputs {
    return new WithdrawEtherCall__Outputs(this);
  }
}

export class WithdrawEtherCall__Inputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }
}

export class WithdrawEtherCall__Outputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }
}
