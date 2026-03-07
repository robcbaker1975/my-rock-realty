import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the contact email sender
vi.mock("./contact", () => ({
  sendContactEmail: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("accepts a valid contact form submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "555-123-4567",
      type: "buying",
      interests: ["Buyer programs", "Relocating"],
      message: "I'm looking to buy a home in Colorado.",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts a minimal submission with only required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Jane Smith",
      email: "jane@example.com",
      interests: [],
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects submission without a name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        interests: [],
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "not-an-email",
        interests: [],
      })
    ).rejects.toThrow();
  });
});
