import type { Block } from "@/lib/content/types";
import { Verify } from "./primitives";

/** Renders a typed content block array as semantic, crawlable HTML. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.t) {
          case "p":
            return <p key={i}>{block.text}</p>;

          case "h3":
            return <h3 key={i}>{block.text}</h3>;

          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );

          case "table":
            return (
              <figure key={i} className="my-8 not-prose">
                <div className="overflow-x-auto border border-[var(--hairline)]">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-[0.9rem]">
                    {block.caption ? (
                      <caption className="border-b border-[var(--hairline)] bg-ink-50 px-4 py-3 text-left text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-ink-600">
                        {block.caption}
                      </caption>
                    ) : null}
                    <thead>
                      <tr className="border-b border-[var(--hairline)] bg-ink-50/60">
                        {block.head.map((h) => (
                          <th
                            key={h}
                            scope="col"
                            className="px-4 py-3 align-bottom font-sans text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-ink-700"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r} className="border-b border-[var(--hairline)] last:border-0 align-top">
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={`px-4 py-3.5 ${c === 0 ? "font-medium text-ink-900" : "text-ink-600"}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </figure>
            );

          case "note":
            return (
              <aside
                key={i}
                className="my-8 border-l-2 border-gold-500 bg-ink-50 px-6 py-5 not-prose"
              >
                <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-gold-800">
                  {block.title}
                </p>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-ink-700">{block.text}</p>
              </aside>
            );

          case "verify":
            return (
              <p key={i} className="text-[0.92rem]">
                <Verify>{block.text}</Verify>
              </p>
            );
        }
      })}
    </>
  );
}
