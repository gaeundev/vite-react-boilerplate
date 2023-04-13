export const REQ_STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
  NOT_FOUND: "NOT_FOUND",
} as const;

export type REQ_STATUS = (typeof REQ_STATUS)[keyof typeof REQ_STATUS];
