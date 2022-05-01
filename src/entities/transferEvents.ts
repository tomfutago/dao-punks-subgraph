import { Project, Account, DAOpunk, TransferEvent } from "../../generated/schema";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ZERO, ONE, ZERO_ADDRESS } from "../utils/constants";

export function create(
  nft: DAOpunk,
  project: Project,
  from: Account,
  to: Account,
  amount: BigInt,
  block: BigInt,
  hash: Bytes,
  timestamp: BigInt
): void {
  /* Record the new transfer event */
  let transferId = nft.id
    .concat("/")
    .concat(nft.totalTransfers.toString());

  let transfer = new TransferEvent(transferId);

  transfer.idx = nft.totalTransfers;
  transfer.project = project.id;
  transfer.nft = nft.id;
  transfer.from = from.id;
  transfer.to = to.id;
  transfer.amount = amount;
  transfer.block = block;
  transfer.hash = hash;
  transfer.timestamp = timestamp;
  transfer.isMint = false;
  transfer.isSale = false;

  // mint
  if (from.id == ZERO_ADDRESS) {
    transfer.isMint = true;
    project.totalMinted = project.totalMinted.plus(ONE);
  }

  // sale
  if (from.id != ZERO_ADDRESS && amount.gt(ZERO)) {
    transfer.isSale = true;
    
    // increment the sales counts
    project.totalSales = project.totalSales.plus(ONE);
    nft.totalSales = nft.totalSales.plus(ONE);
    from.totalSold = from.totalSold.plus(ONE);
    to.totalBought = to.totalBought.plus(ONE);

    // increment the sales amounts
    project.totalSalesWei = project.totalSalesWei.plus(transfer.amount);
    nft.totalSalesWei = nft.totalSalesWei.plus(transfer.amount);
    from.totalSoldWei = from.totalSoldWei.plus(transfer.amount);
    to.totalBoughtWei = to.totalBoughtWei.plus(transfer.amount);

    // calculate average sale prices
    project.avgSaleWei = project.totalSalesWei.div(project.totalSales);
    nft.avgSaleWei = nft.totalSalesWei.div(nft.totalSales);
    from.avgSoldWei = from.totalSoldWei.div(from.totalSold);
    to.avgBoughtWei = to.totalBoughtWei.div(to.totalBought);
  }

  // increment the transfer counts
  project.totalTransfers = project.totalTransfers.plus(ONE);
  nft.totalTransfers = nft.totalTransfers.plus(ONE);
  from.totalSent = from.totalSent.plus(ONE);
  to.totalReceived = to.totalReceived.plus(ONE);

  // graph mutation
  project.save();
  nft.save();
  from.save();
  to.save();
  transfer.save();
}
