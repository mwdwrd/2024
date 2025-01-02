export async function getProjectList() {
  const index = await import('@/data/index.json');
  const projects = await Promise.all(
    index.projects.map(async (slug) => {
      const data = await import(`@/data/projects/${slug}.json`);
      return data.default;
    })
  );
  return projects;
}

export async function getProject(slug: string) {
  const data = await import(`@/data/projects/${slug}.json`);
  return data.default;
} 