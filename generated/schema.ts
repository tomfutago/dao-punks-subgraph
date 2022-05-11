// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Project extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("totalMinted", Value.fromBigInt(BigInt.zero()));
    this.set("totalSales", Value.fromBigInt(BigInt.zero()));
    this.set("totalTransfers", Value.fromBigInt(BigInt.zero()));
    this.set("totalSalesWei", Value.fromBigInt(BigInt.zero()));
    this.set("avgSaleWei", Value.fromBigInt(BigInt.zero()));
    this.set("buyers", Value.fromBytesArray(new Array(0)));
    this.set("sellers", Value.fromBytesArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Project entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Project must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Project", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Project | null {
    return changetype<Project | null>(store.get("Project", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get totalMinted(): BigInt {
    let value = this.get("totalMinted");
    return value!.toBigInt();
  }

  set totalMinted(value: BigInt) {
    this.set("totalMinted", Value.fromBigInt(value));
  }

  get totalSales(): BigInt {
    let value = this.get("totalSales");
    return value!.toBigInt();
  }

  set totalSales(value: BigInt) {
    this.set("totalSales", Value.fromBigInt(value));
  }

  get totalTransfers(): BigInt {
    let value = this.get("totalTransfers");
    return value!.toBigInt();
  }

  set totalTransfers(value: BigInt) {
    this.set("totalTransfers", Value.fromBigInt(value));
  }

  get totalSalesWei(): BigInt {
    let value = this.get("totalSalesWei");
    return value!.toBigInt();
  }

  set totalSalesWei(value: BigInt) {
    this.set("totalSalesWei", Value.fromBigInt(value));
  }

  get avgSaleWei(): BigInt {
    let value = this.get("avgSaleWei");
    return value!.toBigInt();
  }

  set avgSaleWei(value: BigInt) {
    this.set("avgSaleWei", Value.fromBigInt(value));
  }

  get nfts(): Array<Bytes> {
    let value = this.get("nfts");
    return value!.toBytesArray();
  }

  set nfts(value: Array<Bytes>) {
    this.set("nfts", Value.fromBytesArray(value));
  }

  get transfers(): Array<Bytes> {
    let value = this.get("transfers");
    return value!.toBytesArray();
  }

  set transfers(value: Array<Bytes>) {
    this.set("transfers", Value.fromBytesArray(value));
  }

  get buyers(): Array<Bytes> {
    let value = this.get("buyers");
    return value!.toBytesArray();
  }

  set buyers(value: Array<Bytes>) {
    this.set("buyers", Value.fromBytesArray(value));
  }

  get sellers(): Array<Bytes> {
    let value = this.get("sellers");
    return value!.toBytesArray();
  }

  set sellers(value: Array<Bytes>) {
    this.set("sellers", Value.fromBytesArray(value));
  }
}

export class Account extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));

    this.set("totalBought", Value.fromBigInt(BigInt.zero()));
    this.set("totalBoughtWei", Value.fromBigInt(BigInt.zero()));
    this.set("totalSold", Value.fromBigInt(BigInt.zero()));
    this.set("totalSoldWei", Value.fromBigInt(BigInt.zero()));
    this.set("avgBoughtWei", Value.fromBigInt(BigInt.zero()));
    this.set("avgSoldWei", Value.fromBigInt(BigInt.zero()));
    this.set("totalSent", Value.fromBigInt(BigInt.zero()));
    this.set("totalReceived", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Account must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Account | null {
    return changetype<Account | null>(store.get("Account", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get totalBought(): BigInt {
    let value = this.get("totalBought");
    return value!.toBigInt();
  }

  set totalBought(value: BigInt) {
    this.set("totalBought", Value.fromBigInt(value));
  }

  get totalBoughtWei(): BigInt {
    let value = this.get("totalBoughtWei");
    return value!.toBigInt();
  }

  set totalBoughtWei(value: BigInt) {
    this.set("totalBoughtWei", Value.fromBigInt(value));
  }

  get totalSold(): BigInt {
    let value = this.get("totalSold");
    return value!.toBigInt();
  }

  set totalSold(value: BigInt) {
    this.set("totalSold", Value.fromBigInt(value));
  }

  get totalSoldWei(): BigInt {
    let value = this.get("totalSoldWei");
    return value!.toBigInt();
  }

  set totalSoldWei(value: BigInt) {
    this.set("totalSoldWei", Value.fromBigInt(value));
  }

  get avgBoughtWei(): BigInt {
    let value = this.get("avgBoughtWei");
    return value!.toBigInt();
  }

  set avgBoughtWei(value: BigInt) {
    this.set("avgBoughtWei", Value.fromBigInt(value));
  }

  get avgSoldWei(): BigInt {
    let value = this.get("avgSoldWei");
    return value!.toBigInt();
  }

  set avgSoldWei(value: BigInt) {
    this.set("avgSoldWei", Value.fromBigInt(value));
  }

  get totalSent(): BigInt {
    let value = this.get("totalSent");
    return value!.toBigInt();
  }

  set totalSent(value: BigInt) {
    this.set("totalSent", Value.fromBigInt(value));
  }

  get totalReceived(): BigInt {
    let value = this.get("totalReceived");
    return value!.toBigInt();
  }

  set totalReceived(value: BigInt) {
    this.set("totalReceived", Value.fromBigInt(value));
  }

  get nft(): Array<Bytes> | null {
    let value = this.get("nft");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set nft(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("nft");
    } else {
      this.set("nft", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get sent(): Array<Bytes> {
    let value = this.get("sent");
    return value!.toBytesArray();
  }

  set sent(value: Array<Bytes>) {
    this.set("sent", Value.fromBytesArray(value));
  }

  get received(): Array<Bytes> {
    let value = this.get("received");
    return value!.toBytesArray();
  }

  set received(value: Array<Bytes>) {
    this.set("received", Value.fromBytesArray(value));
  }
}

export class DAOpunk extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));

    this.set("project", Value.fromBytes(Bytes.empty()));
    this.set("currentOwner", Value.fromBytes(Bytes.empty()));
    this.set("totalSales", Value.fromBigInt(BigInt.zero()));
    this.set("totalSalesWei", Value.fromBigInt(BigInt.zero()));
    this.set("avgSaleWei", Value.fromBigInt(BigInt.zero()));
    this.set("totalTransfers", Value.fromBigInt(BigInt.zero()));
    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("hash", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("tokenURI", Value.fromString(""));
    this.set("image", Value.fromString(""));
    this.set("name", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DAOpunk entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type DAOpunk must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DAOpunk", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): DAOpunk | null {
    return changetype<DAOpunk | null>(store.get("DAOpunk", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get project(): Bytes {
    let value = this.get("project");
    return value!.toBytes();
  }

  set project(value: Bytes) {
    this.set("project", Value.fromBytes(value));
  }

  get currentOwner(): Bytes {
    let value = this.get("currentOwner");
    return value!.toBytes();
  }

  set currentOwner(value: Bytes) {
    this.set("currentOwner", Value.fromBytes(value));
  }

  get totalSales(): BigInt {
    let value = this.get("totalSales");
    return value!.toBigInt();
  }

  set totalSales(value: BigInt) {
    this.set("totalSales", Value.fromBigInt(value));
  }

  get totalSalesWei(): BigInt {
    let value = this.get("totalSalesWei");
    return value!.toBigInt();
  }

  set totalSalesWei(value: BigInt) {
    this.set("totalSalesWei", Value.fromBigInt(value));
  }

  get avgSaleWei(): BigInt {
    let value = this.get("avgSaleWei");
    return value!.toBigInt();
  }

  set avgSaleWei(value: BigInt) {
    this.set("avgSaleWei", Value.fromBigInt(value));
  }

  get totalTransfers(): BigInt {
    let value = this.get("totalTransfers");
    return value!.toBigInt();
  }

  set totalTransfers(value: BigInt) {
    this.set("totalTransfers", Value.fromBigInt(value));
  }

  get transfers(): Array<Bytes> {
    let value = this.get("transfers");
    return value!.toBytesArray();
  }

  set transfers(value: Array<Bytes>) {
    this.set("transfers", Value.fromBytesArray(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value!.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get archetype(): string | null {
    let value = this.get("archetype");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set archetype(value: string | null) {
    if (!value) {
      this.unset("archetype");
    } else {
      this.set("archetype", Value.fromString(<string>value));
    }
  }

  get background(): string | null {
    let value = this.get("background");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set background(value: string | null) {
    if (!value) {
      this.unset("background");
    } else {
      this.set("background", Value.fromString(<string>value));
    }
  }

  get graphic(): string | null {
    let value = this.get("graphic");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set graphic(value: string | null) {
    if (!value) {
      this.unset("graphic");
    } else {
      this.set("graphic", Value.fromString(<string>value));
    }
  }

  get color(): string | null {
    let value = this.get("color");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set color(value: string | null) {
    if (!value) {
      this.unset("color");
    } else {
      this.set("color", Value.fromString(<string>value));
    }
  }

  get clothes(): string | null {
    let value = this.get("clothes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set clothes(value: string | null) {
    if (!value) {
      this.unset("clothes");
    } else {
      this.set("clothes", Value.fromString(<string>value));
    }
  }

  get body(): string | null {
    let value = this.get("body");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set body(value: string | null) {
    if (!value) {
      this.unset("body");
    } else {
      this.set("body", Value.fromString(<string>value));
    }
  }

  get head(): string | null {
    let value = this.get("head");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set head(value: string | null) {
    if (!value) {
      this.unset("head");
    } else {
      this.set("head", Value.fromString(<string>value));
    }
  }

  get bonus(): string | null {
    let value = this.get("bonus");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bonus(value: string | null) {
    if (!value) {
      this.unset("bonus");
    } else {
      this.set("bonus", Value.fromString(<string>value));
    }
  }
}

export class TransferEvent extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));

    this.set("idx", Value.fromBigInt(BigInt.zero()));
    this.set("project", Value.fromBytes(Bytes.empty()));
    this.set("nft", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("hash", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("isMint", Value.fromBoolean(false));
    this.set("isSale", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransferEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type TransferEvent must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransferEvent", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): TransferEvent | null {
    return changetype<TransferEvent | null>(
      store.get("TransferEvent", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get idx(): BigInt {
    let value = this.get("idx");
    return value!.toBigInt();
  }

  set idx(value: BigInt) {
    this.set("idx", Value.fromBigInt(value));
  }

  get project(): Bytes {
    let value = this.get("project");
    return value!.toBytes();
  }

  set project(value: Bytes) {
    this.set("project", Value.fromBytes(value));
  }

  get nft(): Bytes {
    let value = this.get("nft");
    return value!.toBytes();
  }

  set nft(value: Bytes) {
    this.set("nft", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value!.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get isMint(): boolean {
    let value = this.get("isMint");
    return value!.toBoolean();
  }

  set isMint(value: boolean) {
    this.set("isMint", Value.fromBoolean(value));
  }

  get isSale(): boolean {
    let value = this.get("isSale");
    return value!.toBoolean();
  }

  set isSale(value: boolean) {
    this.set("isSale", Value.fromBoolean(value));
  }
}
