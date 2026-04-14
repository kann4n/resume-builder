import { Link } from "react-router-dom";

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Balanced layout for product, design, and engineering roles.",
    accent: "bg-primary",
    soft: "bg-primary-light",
    tone: "text-primary",
    preview: "border-primary",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional structure for corporate, finance, and admin roles.",
    accent: "bg-gray-800",
    soft: "bg-gray-100",
    tone: "text-gray-800",
    preview: "border-gray-800",
  },
  {
    id: "compact",
    name: "Compact",
    description: "Dense one-page format for experienced candidates.",
    accent: "bg-emerald-600",
    soft: "bg-emerald-50",
    tone: "text-emerald-700",
    preview: "border-emerald-600",
  },
  {
    id: "sidebar",
    name: "Sidebar",
    description: "Two-column format with skills and contact details up front.",
    accent: "bg-rose-600",
    soft: "bg-rose-50",
    tone: "text-rose-700",
    preview: "border-rose-600",
  },
];

const Templates = () => {
  return (
    <div className="min-h-screen bg-surface-alt pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Templates
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-text-main">
              Choose a resume layout
            </h1>
            <p className="mt-3 max-w-2xl text-text-muted">
              Pick a starting point, then customize the content in the builder.
            </p>
          </div>
          <Link
            to="/builder"
            className="w-fit rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-text-main transition-colors hover:border-primary hover:text-primary"
          >
            Open Builder
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <article
              key={template.id}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-gray-50 p-4">
                <div className={`min-h-[330px] rounded-lg border-t-4 ${template.preview} bg-white p-5 shadow-sm`}>
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div>
                      <div className={`mb-2 h-3 w-24 rounded ${template.accent}`} />
                      <div className="h-2 w-20 rounded bg-gray-200" />
                    </div>
                    {template.id === "sidebar" && <div className="h-10 w-10 rounded-full bg-gray-200" />}
                  </div>

                  <div className={template.id === "sidebar" ? "grid grid-cols-[0.75fr_1.25fr] gap-3" : "space-y-4"}>
                    {template.id === "sidebar" && (
                      <div className="space-y-2">
                        <div className={`h-20 rounded ${template.soft}`} />
                        <div className="h-2 rounded bg-gray-200" />
                        <div className="h-2 w-4/5 rounded bg-gray-200" />
                        <div className="h-2 w-3/5 rounded bg-gray-200" />
                      </div>
                    )}

                    <div className="space-y-4">
                      {[0, 1, 2].map((item) => (
                        <div key={item} className="space-y-2">
                          <div className={`h-2 w-16 rounded ${template.accent}`} />
                          <div className="h-2 rounded bg-gray-200" />
                          <div className="h-2 w-5/6 rounded bg-gray-200" />
                          {template.id !== "compact" && <div className="h-2 w-2/3 rounded bg-gray-100" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-lg font-bold text-text-main">{template.name}</h2>
                <p className="mt-2 min-h-12 text-sm leading-6 text-text-muted">{template.description}</p>
                <Link
                  to={`/builder?template=${template.id}`}
                  className={`mt-5 inline-flex rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform group-hover:-translate-y-0.5 ${template.accent}`}
                >
                  Use Template
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
