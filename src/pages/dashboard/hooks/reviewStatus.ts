export enum AUDITSTATE {
  通过 = "PASS",
  拒绝 = "REJECT",
  待审核 = "IN_AUDIT"
}
/* 审核状态 */
export const reviewStatus = (item: any) => {
  return {
    show: item.auditState != AUDITSTATE.待审核,
    pass: item.auditState === AUDITSTATE.通过,
  }
}
