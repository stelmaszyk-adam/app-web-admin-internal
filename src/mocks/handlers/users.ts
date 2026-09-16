import { http, HttpResponse } from "msw";
import { users } from "../fixtures/users";
import { paginate, parseJsonBody, validationError } from "../utils";

const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

const userList = structuredClone(users);

function notFound() {
  return HttpResponse.json(
    {
      statusCode: 404,
      error: "NOT_FOUND",
      message: "User not found.",
      correlationId: "mock-corr-404",
      details: null,
    },
    { status: 404 }
  );
}

export const userHandlers = [
  http.get(`${base}/api/v1/admin/users`, ({ request }) => {
    const url = new URL(request.url);
    const role = url.searchParams.get("role");
    const status = url.searchParams.get("status");
    const search = url.searchParams.get("search")?.toLowerCase();

    const filtered = userList.filter(
      (u) =>
        (!role || u.role === role) &&
        (!status || u.status === status) &&
        (!search || u.email.toLowerCase().includes(search))
    );

    return HttpResponse.json(
      paginate(filtered, url.searchParams.get("cursor"), url.searchParams.get("limit"))
    );
  }),

  http.get(`${base}/api/v1/admin/users/:id`, ({ params }) => {
    const user = userList.find((u) => u.id === params.id);
    if (!user) {
      return notFound();
    }
    return HttpResponse.json({ data: user });
  }),

  http.patch(`${base}/api/v1/admin/users/:id/ban`, async ({ params, request }) => {
    const user = userList.find((u) => u.id === params.id);
    if (!user) {
      return notFound();
    }
    const body = await parseJsonBody<{ reason?: string }>(request);
    if (!body?.reason) {
      return validationError("reason is required.");
    }
    user.status = "banned";
    user.banReason = body.reason;
    return HttpResponse.json({ data: user });
  }),

  http.patch(`${base}/api/v1/admin/users/:id/unban`, ({ params }) => {
    const user = userList.find((u) => u.id === params.id);
    if (!user) {
      return notFound();
    }
    user.status = "active";
    user.banReason = null;
    return HttpResponse.json({ data: user });
  }),

  http.patch(`${base}/api/v1/admin/users/:id/downgrade-trust`, ({ params }) => {
    const user = userList.find((u) => u.id === params.id);
    if (!user) {
      return notFound();
    }
    user.reputationScore = 0;
    return HttpResponse.json({ data: user });
  }),
];
