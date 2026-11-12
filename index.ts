import samplePdf from "./Illusive_Ninja.pdf";

export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(samplePdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=\"Illusive_Ninja.pdf\""
      }
    });
  }
};
