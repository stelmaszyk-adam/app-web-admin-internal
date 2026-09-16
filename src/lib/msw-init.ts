export const isMockingEnabled =
  typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_MOCKING === "true";

export async function initMocks(): Promise<void> {
  if (!isMockingEnabled) {
    return;
  }
  const { worker } = await import("../mocks/browser");
  await worker.start({ onUnhandledRequest: "warn" });
  console.log("[MSW] Mocking enabled");
}
