/**
 * Emits a schema.org document. Structured data here must always describe
 * content that is visible on the same page — never ratings, offers or
 * credentials that do not appear in the markup.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is generated server-side from typed helpers, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
