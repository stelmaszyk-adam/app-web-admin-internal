import { http, HttpResponse } from "msw";
import { moderationEvents } from "../fixtures/events";
import { paginate, parseJsonBody } from "../utils";

const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

const queue = structuredClone(moderationEvents);

function notFound() {
  return HttpResponse.json(
    {
      statusCode: 404,
      error: "NOT_FOUND",
      message: "Event not found.",
      correlationId: "mock-corr-404",
      details: null,
    },
    { status: 404 }
  );
}

export const moderationHandlers = [
  http.get(`${base}/api/v1/admin/moderation/events`, ({ request }) => {
    const url = new URL(request.url);
    const source = url.searchParams.get("source");
    const filtered = source ? queue.filter((e) => e.source === source) : queue;

    return HttpResponse.json(
      paginate(filtered, url.searchParams.get("cursor"), url.searchParams.get("limit"))
    );
  }),

  http.patch(`${base}/api/v1/admin/moderation/events/:id/approve`, ({ params }) => {
    const event = queue.find((e) => e.id === params.id);
    if (!event) {
      return notFound();
    }
    event.status = "approved";
    return HttpResponse.json({ data: event });
  }),

  http.patch(`${base}/api/v1/admin/moderation/events/:id/reject`, async ({ params, request }) => {
    const event = queue.find((e) => e.id === params.id);
    if (!event) {
      return notFound();
    }
    const body = await parseJsonBody<{ reason?: string }>(request);
    event.status = "rejected";
    return HttpResponse.json({ data: { ...event, rejectionReason: body?.reason ?? null } });
  }),

  http.patch(
    `${base}/api/v1/admin/moderation/events/:id/request-info`,
    async ({ params, request }) => {
      const event = queue.find((e) => e.id === params.id);
      if (!event) {
        return notFound();
      }
      const body = await parseJsonBody<{ message?: string }>(request);
      event.status = "info_requested";
      return HttpResponse.json({ data: { ...event, infoRequestMessage: body?.message ?? null } });
    }
  ),
];
