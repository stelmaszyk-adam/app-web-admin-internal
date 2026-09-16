import { moderationHandlers } from "./moderation";
import { userHandlers } from "./users";
import { auditLogHandlers } from "./audit-log";
import { claimHandlers } from "./claims";

export const handlers = [
  ...moderationHandlers,
  ...userHandlers,
  ...auditLogHandlers,
  ...claimHandlers,
];
