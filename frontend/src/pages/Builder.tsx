import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  summary: string;
};

type Education = {
  id: number;
  degree: string;
  school: string;
  period: string;
};

type ResumeData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: string;
  experience: Experience[];
  education: Education[];
};

const defaultResume: ResumeData = {
  name: "Kannan Nair",
  title: "Full Stack Web Developer",
  email: "kannan@example.com",
  phone: "+91 9999999999",
  location: "Kochi, Kerala",
  summary:
    "Product-minded developer with experience building fast, accessible web apps and scalable APIs for growing teams.",
  skills: "React, TypeScript, Node.js, Express, MongoDB, Tailwind CSS, REST APIs",
  experience: [
    {
      id: 1,
      role: "Senior Developer",
      company: "Brightline Labs",
      period: "2021 - Present",
      summary:
        "Led delivery of customer-facing dashboards, improved frontend performance, and mentored a team of five engineers.",
    },
    {
      id: 2,
      role: "Frontend Engineer",
      company: "PixelWorks",
      period: "2018 - 2021",
      summary:
        "Built reusable React components and collaborated with designers to ship responsive product experiences.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech Computer Science",
      school: "University of Technology",
      period: "2014 - 2018",
    },
  ],
};

const storageKey = "kesume-resume-draft";

const templateStyles = {
  modern: {
    name: "Modern",
    border: "border-primary",
    text: "text-primary",
    chip: "bg-primary-light text-primary",
    layout: "standard",
  },
  classic: {
    name: "Classic",
    border: "border-gray-800",
    text: "text-gray-800",
    chip: "bg-gray-100 text-gray-800",
    layout: "standard",
  },
  compact: {
    name: "Compact",
    border: "border-emerald-600",
    text: "text-emerald-700",
    chip: "bg-emerald-50 text-emerald-700",
    layout: "compact",
  },
  sidebar: {
    name: "Sidebar",
    border: "border-rose-600",
    text: "text-rose-700",
    chip: "bg-rose-50 text-rose-700",
    layout: "sidebar",
  },
} as const;

type TemplateId = keyof typeof templateStyles;

const Builder = () => {
  const [searchParams] = useSearchParams();
  const selectedTemplate = searchParams.get("template") as TemplateId | null;
  const template =
    selectedTemplate && selectedTemplate in templateStyles
      ? templateStyles[selectedTemplate]
      : templateStyles.modern;

  const [resume, setResume] = useState<ResumeData>(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return defaultResume;

    try {
      return JSON.parse(saved) as ResumeData;
    } catch {
      window.localStorage.removeItem(storageKey);
      return defaultResume;
    }
  });
  const [savedAt, setSavedAt] = useState("");

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(resume));
  }, [resume]);

  const skills = useMemo(
    () =>
      resume.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    [resume.skills],
  );

  const updateField = (field: keyof ResumeData, value: string) => {
    setResume((current) => ({ ...current, [field]: value }));
  };

  const updateExperience = (id: number, field: keyof Experience, value: string) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const updateEducation = (id: number, field: keyof Education, value: string) => {
    setResume((current) => ({
      ...current,
      education: current.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addExperience = () => {
    setResume((current) => ({
      ...current,
      experience: [
        ...current.experience,
        {
          id: Date.now(),
          role: "Role title",
          company: "Company",
          period: "Year - Year",
          summary: "Describe your impact with clear outcomes.",
        },
      ],
    }));
  };

  const addEducation = () => {
    setResume((current) => ({
      ...current,
      education: [
        ...current.education,
        {
          id: Date.now(),
          degree: "Degree or certification",
          school: "School or issuer",
          period: "Year - Year",
        },
      ],
    }));
  };

  const removeExperience = (id: number) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.filter((item) => item.id !== id),
    }));
  };

  const removeEducation = (id: number) => {
    setResume((current) => ({
      ...current,
      education: current.education.filter((item) => item.id !== id),
    }));
  };

  const saveDraft = () => {
    window.localStorage.setItem(storageKey, JSON.stringify(resume));
    setSavedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  };

  const resetDraft = () => {
    setResume(defaultResume);
    setSavedAt("");
  };

  return (
    <div className="min-h-screen bg-surface-alt pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Resume Builder
            </p>
            <h1 className="text-4xl font-bold text-text-main tracking-tight">
              Build, preview, and export your resume
            </h1>
            <p className="text-text-muted max-w-2xl mt-3">
              Your draft is saved in this browser. Use print to save it as a PDF.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={saveDraft}
              className="rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-text-main hover:border-primary hover:text-primary transition-colors"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-hover transition-colors"
            >
              Export PDF
            </button>
          </div>
        </div>

        {savedAt && (
          <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            Draft saved at {savedAt}
          </p>
        )}

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)]">
          <form className="space-y-6 print:hidden">
            <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-text-main mb-5">Profile</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" value={resume.name} onChange={(value) => updateField("name", value)} />
                <Field label="Role title" value={resume.title} onChange={(value) => updateField("title", value)} />
                <Field label="Email" value={resume.email} onChange={(value) => updateField("email", value)} />
                <Field label="Phone" value={resume.phone} onChange={(value) => updateField("phone", value)} />
                <Field label="Location" value={resume.location} onChange={(value) => updateField("location", value)} />
                <Field label="Skills" value={resume.skills} onChange={(value) => updateField("skills", value)} />
              </div>
              <TextArea
                label="Professional summary"
                value={resume.summary}
                onChange={(value) => updateField("summary", value)}
              />
            </section>

            <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-xl font-semibold text-text-main">Experience</h2>
                <button
                  type="button"
                  onClick={addExperience}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-primary hover:border-primary transition-colors"
                >
                  Add Role
                </button>
              </div>
              <div className="space-y-5">
                {resume.experience.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-100 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Role" value={item.role} onChange={(value) => updateExperience(item.id, "role", value)} />
                      <Field label="Company" value={item.company} onChange={(value) => updateExperience(item.id, "company", value)} />
                      <Field label="Period" value={item.period} onChange={(value) => updateExperience(item.id, "period", value)} />
                    </div>
                    <TextArea
                      label="Impact"
                      value={item.summary}
                      onChange={(value) => updateExperience(item.id, "summary", value)}
                    />
                    {resume.experience.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeExperience(item.id)}
                        className="text-sm font-semibold text-red-600 hover:text-red-700"
                      >
                        Remove role
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-xl font-semibold text-text-main">Education</h2>
                <button
                  type="button"
                  onClick={addEducation}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-primary hover:border-primary transition-colors"
                >
                  Add Education
                </button>
              </div>
              <div className="space-y-5">
                {resume.education.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-100 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Degree" value={item.degree} onChange={(value) => updateEducation(item.id, "degree", value)} />
                      <Field label="School" value={item.school} onChange={(value) => updateEducation(item.id, "school", value)} />
                      <Field label="Period" value={item.period} onChange={(value) => updateEducation(item.id, "period", value)} />
                    </div>
                    {resume.education.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeEducation(item.id)}
                        className="text-sm font-semibold text-red-600 hover:text-red-700"
                      >
                        Remove education
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <button
              type="button"
              onClick={resetDraft}
              className="rounded-lg border border-gray-200 px-5 py-3 font-semibold text-text-muted hover:border-red-200 hover:text-red-600 transition-colors"
            >
              Reset Sample Content
            </button>
          </form>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="mb-3 flex items-center justify-between print:hidden">
              <h2 className="text-xl font-semibold text-text-main">Live Preview</h2>
              <span className="text-sm text-text-muted">{template.name} template</span>
            </div>
            <article className={`resume-preview min-h-[920px] rounded-lg border border-gray-200 bg-white p-8 shadow-xl print:shadow-none print:border-0 ${template.layout === "compact" ? "text-[0.95rem]" : ""}`}>
              <header className={`border-b-4 ${template.border} pb-6`}>
                <h2 className="text-4xl font-bold leading-tight text-text-main">{resume.name}</h2>
                <p className={`text-xl font-semibold ${template.text} mt-1`}>{resume.title}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted">
                  <span>{resume.email}</span>
                  <span>{resume.phone}</span>
                  <span>{resume.location}</span>
                </div>
              </header>

              {template.layout === "sidebar" ? (
                <div className="mt-7 grid gap-7 md:grid-cols-[0.78fr_1.22fr]">
                  <div className="rounded-lg bg-gray-50 p-5">
                    <ResumeSection title="Skills">
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span key={skill} className={`rounded-md px-3 py-1 text-sm font-semibold ${template.chip}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </ResumeSection>
                    <ResumeSection title="Education">
                      <div className="space-y-4">
                        {resume.education.map((item) => (
                          <div key={item.id}>
                            <h3 className="font-bold text-text-main">{item.degree}</h3>
                            <p className="text-sm text-text-muted">{item.school}</p>
                            <p className={`text-sm font-semibold ${template.text}`}>{item.period}</p>
                          </div>
                        ))}
                      </div>
                    </ResumeSection>
                  </div>
                  <div>
                    <ResumeSection title="Summary">
                      <p className="text-sm leading-7 text-gray-700">{resume.summary}</p>
                    </ResumeSection>
                    <ExperienceList resume={resume} tone={template.text} />
                  </div>
                </div>
              ) : (
                <>
                  <ResumeSection title="Summary">
                    <p className="text-sm leading-7 text-gray-700">{resume.summary}</p>
                  </ResumeSection>
                  <ExperienceList resume={resume} tone={template.text} />
                  <ResumeSection title="Skills">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className={`rounded-md px-3 py-1 text-sm font-semibold ${template.chip}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </ResumeSection>
                  <ResumeSection title="Education">
                    <div className="space-y-4">
                      {resume.education.map((item) => (
                        <div key={item.id} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                          <div>
                            <h3 className="font-bold text-text-main">{item.degree}</h3>
                            <p className="text-sm text-text-muted">{item.school}</p>
                          </div>
                          <p className={`text-sm font-semibold ${template.text}`}>{item.period}</p>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                </>
              )}
            </article>
          </aside>
        </div>
      </div>
    </div>
  );
};

const Field = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-text-main">{label}</span>
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-text-main outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
    />
  </label>
);

const TextArea = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) => (
  <label className="mt-4 block">
    <span className="mb-2 block text-sm font-semibold text-text-main">{label}</span>
    <textarea
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={4}
      className="w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 text-text-main outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
    />
  </label>
);

const ResumeSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-7">
    <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-text-main">{title}</h2>
    {children}
  </section>
);

const ExperienceList = ({ resume, tone }: { resume: ResumeData; tone: string }) => (
  <ResumeSection title="Experience">
    <div className="space-y-5">
      {resume.experience.map((item) => (
        <div key={item.id}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-bold text-text-main">
              {item.role} <span className="font-medium text-text-muted">/ {item.company}</span>
            </h3>
            <p className={`text-sm font-semibold ${tone}`}>{item.period}</p>
          </div>
          <p className="mt-2 text-sm leading-7 text-gray-700">{item.summary}</p>
        </div>
      ))}
    </div>
  </ResumeSection>
);

export default Builder;
