export async function requireApprovedRiskDecision(riskClient, context) {
  const decision = await riskClient.assess(context);
  if (decision.decision !== 'APPROVE') throw new Error(`PAYMENT_INTENT_${decision.decision}`);
  return decision;
}
