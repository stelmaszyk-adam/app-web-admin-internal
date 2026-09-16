import { http, HttpResponse } from "msw";
import { auditLogEntries } from "../fixtures/audit-log";
import { paginate } from "../utils";

const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export const auditLogHandlers = [
  http.get(`${base}/api/v1/admin/audit-log`, ({ request }) => {
    const url = new URL(request.url);
    const adminUserId = url.searchParams.get("admin_user_id");
    const action = url.searchParams.get("action");
    const targetType = url.searchParams.get("target_type");
    const targetId = url.searchParams.get("target_id");

    const filtered = auditLogEntries.filter(
      (entry) =>
        (!adminUserId || entry.adminUserId === adminUserId) &&
        (!action || entry.action === action) &&
        (!targetType || entry.targetType === targetType) &&
        (!targetId || entry.targetId === targetId)
    );

    return HttpResponse.json(
      paginate(filtered, url.searchParams.get("cursor"), url.searchParams.get("limit"), 50)
    );
  }),
];
