import { http, HttpResponse } from "msw";
import { venueClaims } from "../fixtures/venue-claims";
import { parseJsonBody } from "../utils";

const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

const claims = structuredClone(venueClaims);

function notFound() {
  return HttpResponse.json(
    {
      statusCode: 404,
      error: "NOT_FOUND",
      message: "Claim not found.",
      correlationId: "mock-corr-404",
      details: null,
    },
    { status: 404 }
  );
}

export const claimHandlers = [
  http.patch(`${base}/api/v1/admin/claims/:id/approve`, ({ params }) => {
    const claim = claims.find((c) => c.id === params.id);
    if (!claim) {
      return notFound();
    }
    claim.status = "approved";
    return HttpResponse.json({ data: claim });
  }),

  http.patch(`${base}/api/v1/admin/claims/:id/reject`, async ({ params, request }) => {
    const claim = claims.find((c) => c.id === params.id);
    if (!claim) {
      return notFound();
    }
    const body = await parseJsonBody<{ reason?: string }>(request);
    claim.status = "rejected";
    return HttpResponse.json({ data: { ...claim, rejectionReason: body?.reason ?? null } });
  }),
];
